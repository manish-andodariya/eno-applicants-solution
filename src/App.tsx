import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicsSection from "./sections/BasicsSection";
import { useForm } from "react-hook-form";
import { ReceptionInvoice } from "./models/InvoiceReception";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    formRoot: {
        maxWidth: 1200,
        margin: "auto",
    },
});

function App() {
    const classes = useStyles();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
        watch,
    } = useForm<ReceptionInvoice>({
        mode: "onBlur",
        defaultValues: {
            invoiceNumber: "",
            buyerId: undefined,
            invoiceDate: new Date(),
            dueDate: new Date(),
            bank: undefined,
            ledger: undefined,
            account: undefined,
            kennitala: "",
            comments: "",
        },
    });

    return (
        <div className={classes.formRoot}>
            <BasicsSection register={register} errors={errors} control={control} />
        </div>
    );
}

export default App;
