import { textFiledStyle } from '@/global/OverlayStyles'
import { Box, TextField } from '@mui/material'
import React from 'react'


type props = {
    label: string,
    type: string,
    defaultValue?: string,
    name: string
}
const BaseFormTextFieldInput = ({
    label,
    type,
    defaultValue,
    name
}: props) => {
    return (
        <Box>
            <TextField
                label={label}
                variant="outlined"
                sx={textFiledStyle}
                name={name}
                defaultValue={defaultValue}
                type={type}
            />
        </Box>
    )
}

export default BaseFormTextFieldInput
