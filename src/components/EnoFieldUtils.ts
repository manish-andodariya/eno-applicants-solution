import { FieldPath, FieldValues, UseFormRegister, RegisterOptions, ValidationValueMessage } from "react-hook-form";
import { Message, FieldError } from "react-hook-form/dist/types/errors";

export type RegisterOptionsWithOnlyMessages = {
    [Property in keyof RegisterOptions]: Property extends keyof Pick<RegisterOptions, "required">
        ? Message
        : Extract<RegisterOptions[Property], ValidationValueMessage> extends never
        ? RegisterOptions[Property]
        : Extract<RegisterOptions[Property], ValidationValueMessage>;
};

const opts: RegisterOptionsWithOnlyMessages = {
    minLength: { value: 2, message: "str" },
};

export interface ENOFieldProps<T extends FieldValues> {
    name: FieldPath<T>;
    register: UseFormRegister<T>;
    options?: RegisterOptionsWithOnlyMessages;
    error?: FieldError;
    tooltipText?: string;
}

export type ENOFieldOverrides = "name" | "error" | "variant";
