import * as Yup from 'yup';

export const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').max(15, 'Password must be at most 15 characters').required('Password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Confirm Password is required'),
    aboutMe: Yup.string().required('About Me is required'),

    facebookAcc: Yup.string(),
    linkedInAcc: Yup.string(),
    gitHubAcc: Yup.string(),
    xAcc: Yup.string(),
    portfolioAcc: Yup.string(),
});

export interface InitialValues {
    fullName: string;
    email: string;
    username: string;
    password: string;
    rePassword: string;
    aboutMe: string;
    facebookAcc: string;
    linkedInAcc: string;
    gitHubAcc: string;
    xAcc: string;
    portfolioAcc: string;
}
export const initialValues: InitialValues = {
    fullName: 'John Doe',
    email: 'john_doe@example.com',
    username: 'John',
    password: '******',
    rePassword: '******',
    aboutMe: 'pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure..',

    facebookAcc: "Facebook.com/spruko",
    linkedInAcc: "linkedIn.com/spruko",
    gitHubAcc: "gitHub.com/spruko",
    xAcc: "x.com/spruko",
    portfolioAcc: "portfolio.com/spruko",
};