import React from 'react'
import ProfileSettingInput from './ProfileSettingInput'
import { Box, Typography } from '@mui/material'
import { InitialValues } from './profileSettingsSchema'

type props = {
    values: InitialValues,
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
}
const PersonalInformationSettings = ({ values, handleChange }: props) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
        }}>
            <Typography sx={{ fontWeight: "bold" }}>Personal Information</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "0px 10px"
            }}>
                <ProfileSettingInput
                    label='full name'
                    fieldName='fullName'
                    fieldType='text'
                    fieldValue={values.fullName}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='email'
                    fieldName='email'
                    fieldType='email'
                    fieldValue={values.email}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='username'
                    fieldName='username'
                    fieldType='text'
                    fieldValue={values.username}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='password'
                    fieldName='password'
                    fieldType='password'
                    fieldValue={values.password}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='Re-Password'
                    fieldName='rePassword'
                    fieldType='password'
                    fieldValue={values.rePassword}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='about me'
                    fieldName='aboutMe'
                    fieldType='text'
                    fieldValue={values.aboutMe}
                    handleChange={handleChange}
                />
            </Box>
        </Box>
    )
}

export default PersonalInformationSettings