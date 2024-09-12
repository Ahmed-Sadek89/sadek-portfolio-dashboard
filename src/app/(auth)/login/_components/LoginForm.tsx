"use client"
import { Box, InputLabel } from '@mui/material'
import Link from 'next/link';
import { useFormState } from 'react-dom';
import ButtonSubmit from '@/components/ui/button-submit';
import TextError from '@/components/ui/text-error';
import { login } from '@/actions/owner/owner-login';
import BaseFormInput from '@/components/ui/base-form-input';
import BasePasswordInput from '@/components/ui/base-password-input';


const LoginForm = () => {
    const [state, formAction] = useFormState<any, FormData>(login, undefined);
    return (
        <form className='flex flex-col items-start justify-start gap-4 w-full' action={formAction}>
            <BaseFormInput label='Email' placeholder="Enter your email" type='email' name='email' />
            <Box className="w-full flex flex-col gap-1">
                <Box className="flex w-full justify-between items-center">
                    <InputLabel className='text-[8125rem]' sx={{ color: "text-secondary" }}>
                        Password
                    </InputLabel>
                    <Link href="/forget-password" className='text-[#2196f3] text-[0.8125rem]'>
                        Forget Password?
                    </Link>
                </Box>
                <BasePasswordInput />
            </Box>
            <TextError>{state ? state.error : ""}</TextError>
            <ButtonSubmit btnStyle={{ width: '100%', color: '#fff', bgcolor: 'rgb(47 128 237)', padding: '6px 12px', ':hover': { bgcolor: 'rgb(47 128 237)' }}}>
                Sign in
            </ButtonSubmit>
        </form>
    )
}

export default LoginForm