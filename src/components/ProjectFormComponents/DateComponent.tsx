import { customProjectTextFiledStyle, datePickerStyle } from '@/global/OverlayStyles'
import { Box, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import React, { useState } from 'react'

type props = {
    label: string,
    name: string
}


const DateComponent = ({ label, name }: props) => {
    const [date, setDate] = useState()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-x-3 gap-y-2 w-full flex-wrap sm:w-2/3 justify-between">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                {label}
            </Typography>
            <Box className="flex justify-end items-end w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs} name={name} >
                    <DatePicker
                        label="Date"
                        value={date}
                        onChange={(newValue) => setDate(newValue as any)}
                        maxDate={dayjs()}
                        renderInput={(params) => <TextField required name={name} {...params} sx={customProjectTextFiledStyle} />}
                        PopperProps={{
                            sx: datePickerStyle,
                        }}
                    />
                </LocalizationProvider>
            </Box>
        </div>
    )
}

export default DateComponent
