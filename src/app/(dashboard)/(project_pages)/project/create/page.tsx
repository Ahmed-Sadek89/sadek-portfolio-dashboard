"use client"
import { Box, Checkbox, FormControl, FormControlLabel, TextField, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';
import ProjectFormUploadImageInput from '@/components/ui/project-form-upload-image-input';
import FormFocusInput from '@/components/ui/form-focus-input';
import FormFocusTextarea from '@/components/ui/form-focus-textarea';
import FormSelectInput from '@/components/ui/form-select-input';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { datePickerStyle, textFiledStyle } from '@/global/OverlayStyles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from 'dayjs';
import CategoryProjectMenu from '@/components/CategoryProjectMenu/CategoryProjectMenu';
import CategorySkillsMenu from '@/components/CategorySkillsMenu/CategorySkillsMenu';

const Page = () => {
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
    const [date, setDate] = useState()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box component={'form'} className='flex flex-col gap-3'>
            <div className='relative w-full'>
                <ProjectFormUploadImageInput name="icon" />
                <FormFocusInput
                    containerStyle='absolute bottom-4 left-5 w-1/2'
                    placeholder='Click to add Title'
                    name="title"
                />
            </div>
            <div className='flex items-start w-full justify-between flex-col sm:flex-row p-[26px]'>
                <div className='flex flex-col gap-y-10 w-2/3'>

                    <div className="flex flex-col gap-y-1">
                        <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                            Description:
                        </Typography>
                        <FormFocusTextarea
                            placeholder='Click to add description'
                            name="description"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center gap-x-3 w-full">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Status:
                            </Typography>
                            {/* <Typography variant='body1' className='p-2 rounded' sx={{ color: "text.primary", bgcolor: "success.main" }}>
                                completed
                            </Typography> */}
                            <div className="w-1/2">
                                <FormControl fullWidth>
                                    <FormSelectInput label='Choose status' name='status' data={data} keyData="status" />
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Started at:
                            </Typography>
                            <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} name="created_at">
                                    <DatePicker
                                        label="Date"
                                        value={date}
                                        onChange={(newValue) => setDate(newValue as any)}
                                        maxDate={dayjs()}
                                        renderInput={(params) => <TextField name='date' {...params} sx={textFiledStyle} />}
                                        PopperProps={{
                                            sx: datePickerStyle,
                                        }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Ended at:
                            </Typography>
                            {/* <Typography variant='body1' className='italic' sx={{ color: "text.secondary" }}>
                                Did not end yet!
                            </Typography> */}
                            <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} name="created_at">
                                    <DatePicker
                                        label="Date"
                                        value={date}
                                        onChange={(newValue) => setDate(newValue as any)}
                                        maxDate={dayjs()}
                                        renderInput={(params) => <TextField name='date' {...params} sx={textFiledStyle} />}
                                        PopperProps={{
                                            sx: datePickerStyle,
                                        }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <CategoryProjectMenu />
                        <CategorySkillsMenu />
                        {/* customize skills  */}
                        <div className="flex items-start gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Skills
                            </Typography>
                            <div className=' flex items-center gap-x-3 gap-y-2 flex-wrap'>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    React
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    TailwindCss
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Express.js
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    MongoDB
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Redux
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    TypeScript
                                </Typography>
                            </div>
                        </div>
                        {/* customize skills  */}
                    </div>
                </div>
                <Box className="flex items-center justify-end gap-x-3 w-1/3">
                    <Link href="#">
                        <RemoveRedEyeIcon className='text-9xl transition duration-300' sx={{ color: "text.secondary", ":hover": { color: "text.primary" } }} />
                    </Link>
                    <Link href="#">
                        <GitHubIcon className='text-9xl transition duration-300' sx={{ color: "text.secondary", ":hover": { color: "text.primary" } }} />
                    </Link>
                </Box>
            </div>
        </Box>
    )
}

export default Page
