"use client"
import { Box } from '@mui/material'
import { formContainer, userBackgroundBox, userContainer, userContents } from './style'
import SetImageName from './setImageName';
import React from 'react';
import Image from 'next/image';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    const image = SetImageName()
    return (
        <Box sx={userContainer}>
            <Box sx={userContents}>
                <Box sx={userBackgroundBox}>
                    <Image src={image} alt="user" width={400} height={400} className='w-1/2 h-auto z-20' />
                    <Image
                        src={'/login_register_cover.png'}
                        alt='cover'
                        width={100} height={100}
                        className='absolute bottom-0 z-10 w-full h-[35%]'
                    />
                </Box>
                <Box sx={formContainer}>
                    {children}
                </Box>
            </Box >
        </Box>
    )
}

export default UserLayout