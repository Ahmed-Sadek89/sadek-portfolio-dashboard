import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .min(6, 'Email must be at least 6 characters')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(25, 'Password must be 25 characters or less')
        .required('Password is required')
});
interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

export const initialLoginValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false
};