import { Typography } from '@mui/material'
import React from 'react'
import FormFocusInput from '../ui/form-focus-input'

const Title = () => {
    return (
        <div className="flex sm:hidden flex-col gap-y-1">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Title:
            </Typography>
            <FormFocusInput
                containerStyle=''
                placeholder='Click to add Title'
                name="title"
            />
        </div>
    )
}

export default Title
