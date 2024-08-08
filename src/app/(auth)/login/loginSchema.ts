import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    emailOrUsername: Yup.string()
        .min(6, 'Email or username must be at least 6 characters')
        .required('Email or username is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(25, 'Password must be 25 characters or less')
        .required('Password is required')
});
interface LoginFormValues {
    emailOrUsername: string;
    password: string;
    rememberMe: boolean;
}

export const initialLoginValues: LoginFormValues = {
    emailOrUsername: '',
    password: '',
    rememberMe: false
};