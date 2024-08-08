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
const SocialMediaSettings = ({ values, handleChange }: props) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
        }}>
            <Typography sx={{ fontWeight: "bold" }}>Social Media</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "0px 10px"
            }}>
                <ProfileSettingInput
                    label='facebook'
                    fieldName='facebookAcc'
                    fieldType='text'
                    fieldValue={values.facebookAcc}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='linkedIn'
                    fieldName='linkedInAcc'
                    fieldType='text'
                    fieldValue={values.linkedInAcc}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='gitHub'
                    fieldName='gitHubAcc'
                    fieldType='text'
                    fieldValue={values.gitHubAcc}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='X'
                    fieldName='xAcc'
                    fieldType='text'
                    fieldValue={values.xAcc}
                    handleChange={handleChange}
                />
                <ProfileSettingInput
                    label='portfolio'
                    fieldName='portfolioAcc'
                    fieldType='text'
                    fieldValue={values.portfolioAcc}
                    handleChange={handleChange}
                />

            </Box>
        </Box>
    )
}

export default SocialMediaSettings