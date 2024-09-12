"use client"
import { Box, InputLabel } from '@mui/material'
import ButtonSubmit from '@/components/ui/button-submit';
import { useFormState } from 'react-dom';
import { register } from '@/actions/owner/owner-register';
import TextError from '@/components/ui/text-error';
import HandleLoginRedirect from '@/hooks/handle-login-redirect';
import BaseFormInput from '@/components/ui/base-form-input';
import BasePasswordInput from '@/components/ui/base-password-input';


const RegisterForm = () => {
    
    const [state, formAction] = useFormState<any, FormData>(register, undefined);
    HandleLoginRedirect(state)
    return (

        <form className='flex flex-col items-start justify-start gap-4 w-full' action={formAction}>
            <BaseFormInput label='Username' placeholder="Enter your username" type='text' name='username' />
            
            <BaseFormInput label='Email' placeholder="Enter your email" type='email' name='email' />
            

            <Box className="w-full flex flex-col gap-1">


                <InputLabel className='text-[8125rem]' sx={{ color: "text-secondary" }}>
                    Password
                </InputLabel>


                <BasePasswordInput />
            </Box>

            <TextError>{(state && state.status !== "success") ? state.status : ""}</TextError>
            <ButtonSubmit btnStyle={{ width: '100%', color: '#fff', bgcolor: 'rgb(47 128 237)', padding: '6px 12px', ':hover': { bgcolor: 'rgb(47 128 237)' }}}>
                Sign up
            </ButtonSubmit>
        </form>
    )
}

export default RegisterForm