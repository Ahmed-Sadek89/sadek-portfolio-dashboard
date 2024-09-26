import { Typography } from '@mui/material'
import React from 'react'

const Description = ({ description }: { description: string }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Description:
            </Typography>
            <Typography variant='body1' sx={{ color: "text.secondary" }}>
                {description}
            </Typography>
        </div>
    )
}

export default Description
