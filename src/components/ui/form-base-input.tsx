import { SvgIconComponent } from '@mui/icons-material';
import { Box, InputBase } from '@mui/material'
import React from 'react'

type props = {
    className: string,
    placeholder: string,
    name?: string,
    Icon?: SvgIconComponent;
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void,
}
const FormBaseInput = ({ className, placeholder, name, Icon, value, onChange, onBlur }: props) => {
    return (
        <Box className={className}>
            <InputBase
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: "100%", color:"text.secondary" }}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {Icon && <Icon />}
        </Box>
    )
}

export default FormBaseInput
