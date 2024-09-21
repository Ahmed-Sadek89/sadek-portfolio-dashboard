"use client"
import React, { useState } from 'react';
import { Box } from '@mui/material'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { profileImageContainer, profileImageIcon, profileLable, profileMainImage } from '../style';
import Image from 'next/image';


const ProfileImage = () => {
    const [file, setFile] = useState<File | null>(null)
    const getUpload = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<null>) => {
        setFile(e.target.files && e.target.files[0])
    }
    return (
        <Box sx={profileImageContainer}>
            <Box sx={profileImageIcon}>
                <label htmlFor="upload" style={profileLable}>
                    <DriveFolderUploadIcon />
                </label>
                <input
                    accept="image/*" type='file' id="upload" style={{ "display": "none" }}
                    onChange={(e) => getUpload(e)} multiple
                />

            </Box>
            
            <Image
                referrerPolicy='no-referrer'
                src={
                    file !== null ?
                        URL.createObjectURL(file) :
                        "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/14.png"
                }
                alt="uploaded"
                width={35}
                height={35}
                style={{ objectFit: "cover", ...profileMainImage }}
            />
        </Box>
    )
}

export default ProfileImage