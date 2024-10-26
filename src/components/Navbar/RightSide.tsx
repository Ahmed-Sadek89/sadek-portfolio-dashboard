"use client"
import React from 'react'
import { Box, Button } from "@mui/material";
import Link from 'next/link';
import UserOptionMenu from './UserOptionMenu';
import Badges from './Badges';
import ThemeOption from './ThemeOption';

const RightSide = () => {

    return (
        <Box className="w-full md:w-1/2 flex items-center gap-[10px] justify-end" >
            <Link href={"/project/create"} className='hidden lg:block'>
                <Button
                    color='success'
                    variant='contained'
                    className='font-bold transition duration-300 hover:bg-[#00d25b]'
                >
                    <p className='text-white'>+ Create new projects</p>
                </Button>
            </Link>
            <ThemeOption />
            <Badges />
            <UserOptionMenu />
        </Box >
    )
}

export default RightSide
