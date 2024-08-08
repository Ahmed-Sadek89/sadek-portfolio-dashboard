"use client"
import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputBase, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialLoginValues, loginValidationSchema } from '../loginSchema';
import { forgetPasswordLink, formContentStyle, inputContainerStyle, inputLabelStyle, inputStyle, passwordBoxContainer, passwordInputContainer, passwordLabelsStyle, submitBtn } from '../style';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const router = useRouter()
    return (
        <Formik
            initialValues={initialLoginValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => {
                console.log({ values })
                router.push('/')
            }}
        >
            {({ errors, touched }) => (
                <Form style={{ ...formContentStyle, flexDirection: "column" }}>
                    <Box sx={inputContainerStyle}>
                        <InputLabel sx={inputLabelStyle}>
                            Email or Username
                        </InputLabel>
                        <Field name="emailOrUsername">
                            {({ field }: { field: any }) => (
                                <InputBase
                                    {...field}
                                    placeholder="Enter your email or username"
                                    type="text"
                                    sx={{ ...inputStyle, border: touched.emailOrUsername && errors.emailOrUsername ? '1px solid #f44336' : "1px solid" }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="emailOrUsername" component="div" className='inputError' />
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

                    <FormControlLabel control={<Checkbox defaultChecked color='info' />} label="Remember Me" />

                    <Button type="submit" sx={submitBtn} > Sign in </Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm