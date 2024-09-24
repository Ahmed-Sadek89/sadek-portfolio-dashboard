"use client"
import { Typography } from '@mui/material';
import React, { useState } from 'react';

type props = {
    name: string,
    placeholder?: string,
}
const FormFocusTextarea = ({ placeholder, name }: props) => {
    const [value, setValue] = useState<string>();
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            {isFocused ? (

                <textarea
                    className="bg-white border-2 border-blue-700 text-black flex items-center justify-between rounded gap-2 px-2 py-2 w-full outline-none h-[30vh]"
                    placeholder={placeholder as string}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={name}
                ></textarea>
            ) : (
                <Typography variant={value ? "body1" : "h4"} onClick={handleFocus} sx={{ color: "text.secondary" }}>
                    {value ? value : placeholder}
                </Typography>
            )}
        </div>
    );
};

export default FormFocusTextarea;
