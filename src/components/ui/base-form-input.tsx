import { Box, InputBase, InputLabel } from '@mui/material'
import React from 'react'

type props = {
    label: string,
    type: string,
    placeholder: string,
    name: string
}
const BaseFormInput = ({
    label,
    type,
    placeholder,
    name
}: props) => {
    return (
        <Box sx={{ borderColor: "text.secondary" }} className="w-full flex flex-col gap-1">
            <InputLabel className='text-[8125rem]' sx={{ color: "text-secondary" }}>
                {label}
            </InputLabel>
            <InputBase
                placeholder={placeholder}
                type={type}
                className='bg-transparent rounded-[10px] py-1 px-2 w-full border'
                sx={{ color: 'text.secondary', borderColor: "text.secondary" }}
                name={name}
            />
        </Box>
    )
}

export default BaseFormInput
