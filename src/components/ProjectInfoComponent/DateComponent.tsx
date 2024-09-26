import { formatDate } from '@/helpers/formatDate'
import { Typography } from '@mui/material'
import React from 'react'

type props = { label: string, dateValue: string }
const DateComponent = ({ label, dateValue }: props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full md:w-2/3">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                {label}
            </Typography>
            <Typography variant='body1' sx={{ color: "text.secondary" }}>
                {formatDate(dateValue as string)}
            </Typography>
        </div>
    )
}

export default DateComponent
