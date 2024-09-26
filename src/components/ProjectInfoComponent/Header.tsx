import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type props = {
    attachment: string,
    title: string
}
const Header = ({ attachment, title }: props) => {
    return (
        <div className='relative w-full h-[60vh]'>
            <Image src={attachment || ''} alt='title' width={1000} height={2000} className='object-fill w-full h-full' />
            <Typography className='absolute bottom-2 left-5 capitalize font-bold ' sx={{ color: "text.secondary", fontSize: { xs: "20px", sm: "40px" } }}>
                {title}
            </Typography>
        </div>
    )
}

export default Header
