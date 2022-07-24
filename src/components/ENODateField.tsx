import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker, { DatePickerProps } from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { ENOFieldOverrides, ENOFieldProps } from "./EnoFieldUtils";
import ENOTooltip from "./ENOTooltip";

export interface ENODateFieldProps<T extends FieldValues>
    extends Omit<ENOFieldProps<T>, "register">,
    Omit<DatePickerProps, ENOFieldOverrides | "value" | "onChange"> {
    control: Control<T, object>;
    format: string;
}

export default function ENODateField<T extends FieldValues>({
    name,
    label,
    control,
    options,
    error,
    tooltipText,
    format,
    ...rest
}: ENODateFieldProps<T>) {
    return (
        <ENOTooltip text={tooltipText}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {" "}
                        <DatePicker
                            label={label}
                            {...field}
                            renderInput={(props) => <TextField label={label} {...props} />}
                        />{" "}
                    </LocalizationProvider>
                )}
            />
        </ENOTooltip>
    );
}
