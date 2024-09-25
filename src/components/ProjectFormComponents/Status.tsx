import { Typography } from '@mui/material'
import React from 'react'
import FormSelectInput from '../ui/form-select-input'

const Status = () => {
    const data = [
        {
            id: 1,
            status: "completed",
        },
        {
            id: 2,
            status: "not completed",
        }
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-x-3 gap-y-2 w-full flex-wrap sm:w-2/3 justify-between">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Status:
            </Typography>
            <div className="w-full flex items-end justify-end">
                <FormSelectInput label='Choose status' name='status' data={data} keyData="status" />
            </div>
        </div>
    )
}

export default Status
