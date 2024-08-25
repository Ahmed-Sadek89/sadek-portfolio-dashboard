"use client"
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { btnsGroupStyle, btnStyle, datePickerStyle, editOverlayContainer, formStyle, textFiledStyle } from '../../../../global/OverlayStyles';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type props = {
    handleClose: () => void;
};

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number().min(0, 'Age must be a positive number').required('Age is required'),
    status: Yup.string().required('Status is required'),
    date: Yup.date().nullable().required('Date is required'),
});

const AddOverlay = ({ handleClose }: props) => {

    const initialValues = {
        username: "",
        email: "",
        age: "",
        status: "",
        date: null,
    };

    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Add a new row for Offers
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form Values', values);
                    handleClose();
                }}
            >
                {({ values, setFieldValue, handleChange }) => (
                    <Form style={{ ...formStyle, flexDirection: "column" }}>
                        <Box>
                            <TextField
                                label="User"
                                name="username"
                                variant="outlined"
                                sx={textFiledStyle}
                                value={values.username}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                InputProps={{
                                    className: 'no-spin-buttons', // Apply the CSS class
                                }}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="age" component="div" className='inputError' />
                        </Box>

                        <Box>
                            <TextField
                                select
                                label="Status"
                                sx={textFiledStyle}
                                name="status"
                                onChange={handleChange}
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
                                    value={values.date}
                                    label="Date"
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
                                type='submit'
                                variant='contained'
                                sx={{ bgcolor: "success.main", ":hover": { bgcolor: "#00d25b" }, ...btnStyle }}
                            >
                                <PlaylistAddIcon />
                                <Typography variant='body1'>
                                    Add a new Row
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

export default AddOverlay;
