'use client'; /*Debido a que se utiliza useState*/

import { useState } from "react";

interface FormValues {
    name: string;
    description: string;
}

export const useAddProjetForm = () => {
    const [values, setValues] = useState<FormValues>({
        name: "",
        description: "",
    });

    const [errors, setErrors] = useState<Partial<FormValues>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Partial<FormValues> = {};

        if (!values.name.trim()) {
            newErrors.name = "El nombre es requerido";
        }

        if (!values.description.trim()) {
            newErrors.description = "La descripcion es requerida";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
    };

    const handleSubmit = async (callback: () => void) => {
        setIsSubmitting(true);

        const isValid = validateForm();

        if (isValid) {
            await new Promise((t) => setTimeout(t, 100));

            callback();

            setValues({
                name: "",
                description: "",
            });

            setTouched({});
            setErrors({});
        }

        setIsSubmitting(false);
    };
    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};