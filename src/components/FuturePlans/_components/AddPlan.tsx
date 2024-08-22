"use client"
import React, { useRef } from 'react'

const AddPlan = () => {
    const formRef = useRef<React.ElementRef<"form">>(null);
    const inputRef = useRef<React.ElementRef<"input">>(null);

    const handleAction = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current.value;
            console.log("Form action triggered with value:", inputValue);
            inputRef.current.value = "";
        }
    };

    const handleBlur = () => {
        if (formRef.current) {
            handleAction();
        }
    };
    return (
        <form ref={formRef} action={handleAction}>
            <input
                ref={inputRef}
                onBlur={handleBlur}
                placeholder="Add your plans here..."
                className="bg-transparent border border-[#2c2e33] rounded py-1 px-2 w-full focus:border-blue-900 outline-none"
            />
        </form>
    )
}

export default AddPlan
