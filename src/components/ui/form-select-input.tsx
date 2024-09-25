"use client"
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import { customProjectTextFiledStyle } from '@/global/OverlayStyles';

type props = {
    label: string,
    name: string,
    data: any[],
    keyData: string,
    defaultValue?: number
}

export default function FormSelectInput({ label, name, data, keyData, defaultValue }: props) {
    return (
        <TextField
            label={label}
            select
            name={name}
            sx={customProjectTextFiledStyle}
            defaultValue={defaultValue}
            required
        >
            {
                data.map((key, index) => (
                    <MenuItem sx={{ color: "#000" }} key={index} value={key.id}>{key[keyData]}</MenuItem>
                ))
            }
        </TextField>
    );
}
