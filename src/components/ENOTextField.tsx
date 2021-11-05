import { makeStyles, OutlinedTextFieldProps, TextField, TextFieldProps, Theme } from "@mui/material";
import React, { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { ENOFieldOverrides, ENOFieldProps } from "./EnoFieldUtils";
import ENOTooltip from "./ENOTooltip";

export interface ENOTextFieldProps<T extends FieldValues>
    extends ENOFieldProps<T>,
        Omit<OutlinedTextFieldProps, ENOFieldOverrides> {
    variant?: TextFieldProps["variant"];
}

export default function ENOTextField<T extends FieldValues>({
    name,
    register,
    options,
    variant = "outlined",
    error,
    helperText,
    tooltipText,
    ...rest
}: ENOTextFieldProps<T>) {
    return (
        <ENOTooltip text={tooltipText}>
            <TextField
                sx={{
                    width: "100%",
                }}
                {...register(name, options)}
                {...rest}
                helperText={error?.message ? error.message : helperText}
                // variant={variant}
                variant={"outlined"}
                error={Boolean(error)}
            />
        </ENOTooltip>
    );
}
