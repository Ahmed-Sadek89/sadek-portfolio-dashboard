"use client"
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import FormBaseInput from './form-base-input';

type props = {
    name: string,
    containerStyle: string,
    placeholder?: string,
}
const FormFocusInput = ({ containerStyle, placeholder, name }: props) => {
    const [value, setValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);


    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    console.log(value.trim().length)
    return (
        <div className={containerStyle}>
            {(isFocused ) ? (

                <FormBaseInput
                    className="bg-white border-2 border-blue-700 text-black flex items-center justify-between rounded gap-2 px-2 py-2 w-full"
                    placeholder={placeholder as string}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={name}
                    isFocused={isFocused}
                    type="text"
                />
            ) : (
                <>
                    <input type="hidden" value={value} name={name} />
                    <Typography onClick={handleFocus} className='capitalize font-bold cursor-pointer' sx={{ color: "text.secondary" }}>
                        {value ? value.substring(0, 40) : placeholder}
                    </Typography>
                </>
            )}
        </div>
    );
};

export default FormFocusInput;
