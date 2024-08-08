"use client"
import { Box, Button, MenuItem, TextField, Typography, useTheme } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { btnsGroupStyle, btnStyle, datePickerStyle, formStyle, textFiledStyle } from '../../../../global/OverlayStyles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';




const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number().min(0, 'Age must be a positive number').required('Age is required'),
    status: Yup.string().required('Status is required'),
    date: Yup.date().nullable().required('Date is required'),
});

const AddForm = () => {
    const theme = useTheme()


    const initialValues = {
        username: "",
        email: "",
        age: "",
        status: "",
        date: null,
    };
    const router = useRouter()
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log({ values })
                router.push("/hotels")
            }}
        >
            {({ values, handleChange, setFieldValue }) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Box sx={{ ...formStyle, flexDirection: {xs: "column", sm: "row"}, alignItems: "start" }}>
                        <Box sx={{width: {xs:"100%", sm:"auto"}}}>
                            <TextField
                                label="User"
                                variant="outlined"
                                sx={textFiledStyle}
                                name="username"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="username" component="div" className='inputError' />
                        </Box>

                        <Box sx={{width: {xs:"100%", sm:"auto"}}}>
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                sx={textFiledStyle}
                                name="email"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="email" component="div" className='inputError' />
                        </Box>

                        <Box sx={{width: {xs:"100%", sm:"auto"}}}>
                            <TextField
                                label="Age"
                                type="number"
                                variant="outlined"
                                sx={textFiledStyle}
                                name="age"
                                onChange={handleChange}
                                InputProps={{
                                    className: 'no-spin-buttons', // Apply the CSS class
                                }}
                            />
                            <ErrorMessage name="age" component="div" className='inputError' />
                        </Box>

                        <Box sx={{width: {xs:"100%", sm:"auto"}}}>
                            <TextField
                                select
                                label="Status"
                                sx={textFiledStyle}
                                name="status"
                                onChange={handleChange}
                            >
                                <MenuItem sx={{ color: "#000" }} value={''} disabled selected>Select Status</MenuItem>
                                <MenuItem sx={{ color: "#000" }} value={'pending'}>Pending</MenuItem>
                                <MenuItem sx={{ color: "#000" }} value={'active'}>Active</MenuItem>
                                <MenuItem sx={{ color: "#000" }} value={'passive'}>Passive</MenuItem>
                            </TextField>
                            <ErrorMessage name="status" component="div" className='inputError' />
                        </Box>

                        <Box sx={{width: {xs:"100%", sm:"auto"}}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Date"
                                    value={values.date}
                                    onChange={(newValue) => setFieldValue('date', newValue)}
                                    renderInput={(params) => <TextField name='date' {...params} sx={textFiledStyle} />}
                                    PopperProps={{
                                        sx: datePickerStyle,
                                    }}
                                />
                            </LocalizationProvider>
                            <ErrorMessage name="date" component="div" className='inputError' />
                        </Box>
                    </Box>

                    <Box sx={btnsGroupStyle}>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ bgcolor: "success.main", ":hover": { bgcolor: "#00d25b" }, ...btnStyle }}
                        >
                            <PlaylistAddIcon />
                            <Typography variant='body1'>
                                Add a new Row
                            </Typography>
                        </Button>
                        <Link
                            href="/hotels"
                            style={{ background: theme.palette.error.main, ...btnStyle, padding: "6px 16px", borderRadius: "5px" }}
                        >
                            <CancelIcon />
                            <Typography variant="body1">
                                Cancel
                            </Typography>
                        </Link>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default AddForm;
