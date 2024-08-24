"use client";
import { postPlan } from '@/actions/plan/plan-add';
import FormInput from '@/components/ui/form-input';
import React, { useRef } from 'react';

const AddPlan = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAction = async () => {
        if (inputRef.current && inputRef.current.value.length !== 0) {
            const inputValue = inputRef.current.value;
            await postPlan(inputValue)

            inputRef.current.value = "";
        }
    };

    const handleBlur = () => {
        if (formRef.current) {
            formRef.current.requestSubmit()
        }
    };

    return (
        <form ref={formRef} action={handleAction}>
            <FormInput
                ref={inputRef}
                onBlur={handleBlur}
                name='plan'
                placeholder="Add your plans here..."
            />
        </form>
    );
};

export default AddPlan;
