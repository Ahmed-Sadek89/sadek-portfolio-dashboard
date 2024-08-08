"use client"
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { btnsGroupStyle, btnStyle, datePickerStyle, editOverlayContainer, formStyle, textFiledStyle } from '../../../../global/OverlayStyles';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

type props = {
    param: {
        id: number;
        username: string;
        img: string;
        status: string;
        email: string;
        age: number;
    };
    handleClose: () => void;
};

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number().min(0, 'Age must be a positive number').required('Age is required'),
    status: Yup.string().required('Status is required'),
    date: Yup.date().nullable().required('Date is required'),
});

const EditOverlay = ({ param, handleClose }: props) => {
    const value: Dayjs | null = null

    const handleSubmit = (values: typeof initialValues, { setSubmitting }: FormikHelpers<typeof initialValues>) => {
        console.log('Form Values', values);
        setSubmitting(false);
        handleClose();
    };

    const initialValues = {
        username: param.username,
        email: param.email,
        age: param.age,
        status: param.status,
        date: value,
    };
    
    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Edit the hotel number #{param.id}
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleBlur, setFieldValue }) => (
                    <Form style={{ ...formStyle, flexDirection: "column" }}>
                        <Box>
                            <TextField
                                label="User"
                                variant="outlined"
                                sx={textFiledStyle}
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="username" component="div" className='inputError' />
                        </Box>

                        <Box>
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                sx={textFiledStyle}
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="email" component="div" className='inputError' />
                        </Box>

                        <Box>
                            <TextField
                                label="Age"
                                type="number"
                                variant="outlined"
                                sx={textFiledStyle}
                                name="age"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                InputProps={{
                                    className: 'no-spin-buttons', // Apply the CSS class
                                }}
                            />
                            <ErrorMessage name="age" component="div" className='inputError' />
                        </Box>

                        <Box>
                            <TextField
                                select
                                label="Status"
                                sx={textFiledStyle}
                                name="status"
                                value={values.status}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <MenuItem sx={{ color: "#000" }} value={'pending'}>Pending</MenuItem>
                                <MenuItem sx={{ color: "#000" }} value={'active'}>Active</MenuItem>
                                <MenuItem sx={{ color: "#000" }} value={'passive'}>Passive</MenuItem>
                            </TextField>
                            <ErrorMessage name="status" component="div" className='inputError' />
                        </Box>

                        <Box>
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

                        <Box sx={btnsGroupStyle}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ bgcolor: "info.main", ":hover": { bgcolor: "#0dcaf0" }, ...btnStyle }}
                            >
                                <AddCardOutlinedIcon />
                                <Typography variant="body1">
                                    Edit the Row
                                </Typography>
                            </Button>
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ bgcolor: "error.main", ":hover": { bgcolor: "#b02a37" }, ...btnStyle }}
                                onClick={handleClose}
                            >
                                <CancelIcon />
                                <Typography variant="body1">
                                    Cancel
                                </Typography>
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default EditOverlay;
