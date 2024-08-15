import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import { useFormStatus } from 'react-dom'

type props = {
    btnStyle: any,
    children: React.ReactNode
}
const ButtonSubmit = ({ btnStyle, children }: props) => {
    const status = useFormStatus()
    return (
        <Button type="submit" sx={{...btnStyle, width: "100%"}} disabled={status.pending}>
            {status.pending ? <CircularProgress size={15} thickness={4} /> : children}
        </Button>
    )
}

export default ButtonSubmit
