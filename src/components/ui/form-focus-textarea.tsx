"use client"
import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

type props = {
    name: string,
    placeholder?: string,
}
const FormFocusTextarea = ({ placeholder, name }: props) => {
    const ref = useRef<HTMLTextAreaElement | null>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        if (isFocused && ref.current) {
            ref.current.focus();
        }
    }, [isFocused]);
    const [value, setValue] = useState<string>();

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
        <div className='wfull sm:w-2/3'>
            {isFocused ? (

                <textarea
                    className="bg-white border-2 border-blue-700 text-black flex items-center justify-between gap-2 px-2 py-2 w-full outline-none h-[30vh]"
                    placeholder={placeholder as string}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={name}
                    ref={ref}
                    required
                ></textarea>
            ) : (
                <>
                    <input type="hidden" value={value} name={name} />
                    <Typography onClick={handleFocus} sx={{ color: "text.secondary", cursor: "pointer" }}>
                        {value ? value : placeholder}
                    </Typography>
                </>
            )}
        </div>
    );
};

export default FormFocusTextarea;
