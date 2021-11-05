import { Alert, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ENOTextField from "../components/ENOTextField";
import { ReceptionInvoice } from "../models/InvoiceReception";

export interface BasicsSectionProps {
    register: UseFormRegister<ReceptionInvoice>;
    errors: FieldErrors<ReceptionInvoice>;
}

export default function BasicsSection({ register, errors }: BasicsSectionProps) {
    return (
        <>
            <Grid item xs={6} md={4}>
                <ENOTextField<ReceptionInvoice>
                    label="Invoice Number"
                    register={register}
                    name={"invoiceNumber"}
                    options={{
                        required: "This field is required",
                    }}
                    error={errors.invoiceNumber}
                    tooltipText="The unique identifier of the invoice"
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <FormControl fullWidth className="mb-3" style={{ width: "100%" }}>
                    <InputLabel id="nameidlabel" variant="outlined"></InputLabel>
                    <Select
                        labelId="nameidlabel"
                        {...register("buyerId", {
                            required: true,
                        })}
                        defaultValue="-"
                        name="nameid"
                        id="nameid"
                        variant="outlined"
                    >
                        <MenuItem value={"-"} disabled>
                            Name (ID)
                        </MenuItem>
                        <MenuItem value={"10"}>Ten</MenuItem>
                        <MenuItem value={"20"}>Twenty</MenuItem>
                        <MenuItem value={"30"}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                {errors.buyerId && <Alert severity="error">This Field Is Required.</Alert>}
            </Grid>
        </>
    );
}
