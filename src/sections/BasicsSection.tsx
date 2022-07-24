import { Alert, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister, Control } from "react-hook-form";
import ENODateField from "../components/ENODateField";
import ENOTextField from "../components/ENOTextField";
import { ReceptionInvoice } from "../models/InvoiceReception";
import { useForm } from "react-hook-form";

export interface BasicsSectionProps {
    register: UseFormRegister<ReceptionInvoice>;
    errors: FieldErrors<ReceptionInvoice>;
    control: Control<ReceptionInvoice>
}

export default function BasicsSection({ register, errors, control }: BasicsSectionProps) {
    return (
        <>
            <Typography variant="h2">Invoice form</Typography>
            <Grid container spacing={2}>
                <Grid item md={3}>
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
                <Grid item md={3}>
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
                <Grid item md={3}>
                    <ENODateField<ReceptionInvoice>
                        label="Issued Date"
                        control={control}
                        name={"invoiceDate"}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.invoiceDate}
                        format="MM/dd/yyyy"
                        renderInput={(params: any) => (
                            <TextField {...register("invoiceDate")} {...params} />
                        )}
                    />
                </Grid>
                <Grid item md={3}>
                    <ENODateField<ReceptionInvoice>
                        label="Due Date"
                        control={control}
                        name={"dueDate"}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.invoiceDate}
                        format="MM/dd/yyyy"
                        renderInput={(params: any) => (
                            <TextField {...register("dueDate")} {...params} />
                        )}
                    />
                </Grid>
            </Grid>

            <Typography variant="h2">Payment Information</Typography>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <ENOTextField<ReceptionInvoice>
                                label="Bank"
                                register={register}
                                name={"bank"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.bank}
                            />
                        </Grid>
                        <Grid item md={2}>
                            <ENOTextField<ReceptionInvoice>
                                label="Ledger"
                                register={register}
                                name={"ledger"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.ledger}
                            />
                        </Grid>
                        <Grid item md={5}>
                            <ENOTextField<ReceptionInvoice>
                                label="Account"
                                register={register}
                                name={"account"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.account}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <ENOTextField<ReceptionInvoice>
                                label="Kennitala"
                                register={register}
                                name={"kennitala"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.kennitala}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <ENOTextField<ReceptionInvoice>
                        label="Comments"
                        register={register}
                        name={"comments"}
                        multiline
                        rows={4}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.comments}
                    />
                </Grid>
            </Grid>
        </>
    );
}
