"use client"
import { Box, Button, MenuItem, TextField, Typography, useTheme } from '@mui/material';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { btnsGroupStyle, btnStyle, datePickerStyle, formStyle, textFiledStyle } from '../../../../../../global/OverlayStyles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


type props = {
    param: {
        id: number;
        username: string;
        img: string;
        status: string;
        email: string;
        age: number;
    } | undefined;
};

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number().min(0, 'Age must be a positive number').required('Age is required'),
    status: Yup.string().required('Status is required'),
    date: Yup.date().nullable().required('Date is required'),
});

const EditForm = ({ param }: props) => {
    const value: Dayjs | null = null
    const theme = useTheme()


    const initialValues = {
        username: param?.username,
        email: param?.email,
        age: param?.age,
        status: param?.status,
        date: value,
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
            {({ values, handleChange, handleBlur, setFieldValue }) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Box sx={{ ...formStyle, flexDirection: { xs: "column", sm: "row" }, alignItems: "start" }}>
                        <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
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

                        <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
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

                        <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
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

                        <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
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

                        <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
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
                            type="submit"
                            variant="contained"
                            sx={{ bgcolor: "info.main", ":hover": { bgcolor: "#0dcaf0" }, ...btnStyle }}
                        >
                            <AddCardOutlinedIcon />
                            <Typography variant="body1">
                                Edit the Row
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

export default EditForm;
