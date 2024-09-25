import { SvgIconComponent } from '@mui/icons-material';
import { Box, InputBase } from '@mui/material'
import React, { useEffect, useRef } from 'react'

type props = {
    type?: string,
    className: string,
    placeholder: string,
    name?: string,
    Icon?: SvgIconComponent;
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void,
    iconProps?: any,
    isFocused?: boolean
}
const FormBaseInput = ({ isFocused, type, className, placeholder, name, Icon, value, onChange, onBlur, iconProps }: props) => {
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isFocused && ref.current) {
            ref.current.focus();
        }
    }, [isFocused]);
    return (
        <Box className={className} sx={{ borderWidth: "1px", borderColor: "text.primary" }}>
            <InputBase
                placeholder={placeholder}
                sx={{ width: "100%", color: "text.secondary" }}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                inputRef={ref}
                required
            />
            {Icon && <Icon {...iconProps} />}
        </Box>
    )
}

export default FormBaseInput
