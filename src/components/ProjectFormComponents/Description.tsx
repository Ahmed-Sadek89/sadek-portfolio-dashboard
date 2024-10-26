import { Typography } from '@mui/material'
import React from 'react'
import FormFocusTextarea from '../ui/form-focus-textarea'

type props = {
    defaultDescription?: string
}
const Description = ({ defaultDescription }: props) => {
    return (
        <div className="flex flex-col gap-y-1">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Description:
            </Typography>
            <FormFocusTextarea
                placeholder='Click to add description'
                name="description"
                defaultDescription={defaultDescription}
            />
        </div>
    )
}

export default Description
