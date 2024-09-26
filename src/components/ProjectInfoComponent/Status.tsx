import { Typography } from '@mui/material'
import React from 'react'

const Status = ({ status }: { status: string }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full md:w-2/3">
                <Typography variant='h6' sx={{ color: "text.primary" }}>
                    Status:
                </Typography>
                <Typography variant='body1' className='p-2 rounded w-fit sm:w-full' sx={{ color: "text.primary", bgcolor: status === "1" ? "success.main" : "warning.main" }}>
                    {status === "1" ? "Completed" : "Not completed"}
                </Typography>
            </div>
        </div>
    )
}

export default Status
