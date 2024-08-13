import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    username: Yup.string()
        .min(6, 'username must be at least 6 characters')
        .max(25, 'username must be 25 characters or less')
        .required('username is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(25, 'Password must be 25 characters or less')
        .required('Password is required')
});

interface RegisterFormValues {
    username: string;
    email: string;
    password: string;
}

export const initialRegisterValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
};