import { TextField } from '@mui/material'
import React from 'react'

type props = {
    children: React.ReactNode,
    width: string,
    label: string
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
const FormTextField = ({ children, width, label, value, onChange }: props) => {
    return (
        <TextField
            select
            label={label}
            sx={{
                width,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#2c2e33', // default border color
                        color: "text.primary"
                    },
                    '&:hover fieldset': {
                        borderColor: 'text.primary', // border color when hovered
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'text.primary', // border color when focused
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'text.primary', // default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'text.primary', // label color when focused
                    fontWeight: "bold",
                },
            }}
            name={label}
            onChange={onChange}
        >
            {children}
        </TextField>
    )
}

export default FormTextField
