"use client"
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, TextField } from '@mui/material';
import { textFiledStyle } from '@/global/OverlayStyles';


type props = {
    label: string,
    name: string,
    data: any[],
    keyData: string,
    defaultValue?: number
}

export default function FormSelectInput({ label, name, data, keyData, defaultValue }: props) {

    return (
        <FormControl>
            <TextField
                label={label}
                select
                name={name}
                sx={textFiledStyle}
                defaultValue={defaultValue}
            >
                {
                    data.map((key, index) => (
                        <MenuItem sx={{ color: "#000" }} key={index} value={key.id}>{key[keyData]}</MenuItem>
                    ))
                }
            </TextField>
        </FormControl>
    );
}
