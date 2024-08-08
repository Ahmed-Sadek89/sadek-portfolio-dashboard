"use client"
import { useState } from 'react';
import { Box, Button, IconButton, InputBase, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialRegisterValues, registerValidationSchema } from '../registerSchema';
import { forgetPasswordLink, formContentStyle, inputContainerStyle, inputLabelStyle, inputStyle, passwordBoxContainer, passwordInputContainer, passwordLabelsStyle, submitBtn } from '../style';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const router = useRouter()
    return (
        <Formik
            initialValues={initialRegisterValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values) => {
                console.log({ values })
                router.push('/')
            }}
        >
            {({ errors, touched }) => (
                <Form style={{ ...formContentStyle, flexDirection: "column" }}>
                    <Box sx={inputContainerStyle}>
                        <InputLabel sx={inputLabelStyle}>
                            username
                        </InputLabel>
                        <Field name="username">
                            {({ field }: { field: any }) => (
                                <InputBase
                                    {...field}
                                    placeholder="Enter your username"
                                    type="text"
                                    sx={{ ...inputStyle, border: touched.username && errors.username ? '1px solid #f44336' : "1px solid" }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="username" component="div" className='inputError' />
                    </Box>

                    <Box sx={inputContainerStyle}>
                        <InputLabel sx={inputLabelStyle}>
                            Email
                        </InputLabel>
                        <Field name="email">
                            {({ field }: { field: any }) => (
                                <InputBase
                                    {...field}
                                    placeholder="Enter your email"
                                    type="text"
                                    sx={{ ...inputStyle, border: touched.email && errors.email ? '1px solid #f44336' : "1px solid" }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="email" component="div" className='inputError' />
                    </Box>

                    <Box sx={inputContainerStyle}>
                        <Box sx={passwordLabelsStyle}>
                            <InputLabel sx={inputLabelStyle}>
                                Password
                            </InputLabel>
                            <Link href="/forget-password" style={forgetPasswordLink}>
                                Forget Password?
                            </Link>
                        </Box>
                        <Box sx={{ ...passwordBoxContainer, border: touched.password && errors.password ? '1px solid #f44336' : "1px solid" }} >
                            <Field name="password">
                                {({ field }: { field: any }) => (
                                    <InputBase
                                        {...field}
                                        placeholder="************"
                                        type={showPassword ? 'text' : 'password'}
                                        sx={passwordInputContainer}
                                    />
                                )}
                            </Field>
                            <IconButton onClick={handleTogglePasswordVisibility} sx={{ color: 'text.secondary' }} >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </Box>
                        <ErrorMessage name="password" component="div" className='inputError' />
                    </Box>

                    {/* <FormControlLabel control={<Checkbox defaultChecked color='info' />} label="Remember Me" /> */}

                    <Button type="submit" sx={submitBtn} > Sign up </Button>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm