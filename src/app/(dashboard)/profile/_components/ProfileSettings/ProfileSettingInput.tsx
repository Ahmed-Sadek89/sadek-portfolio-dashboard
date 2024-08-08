"use client"
import { Box, InputBase, InputLabel, useTheme } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

type props = {
    label: string,
    fieldName: string,
    fieldType: string,
    fieldValue: string,
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
}
const ProfileSettingInput = ({ label, fieldName, fieldType, fieldValue, handleChange }: props) => {
    const theme = useTheme()
    return (
        <Box>
            <InputLabel sx={{ textTransform: "capitalize" }}>
                {label}
            </InputLabel>
            <Field name={fieldName}>
                {({ field }: { field: any }) => (
                    <InputBase
                        {...field}
                        type={fieldType}
                        value={fieldValue}
                        onChange={handleChange}
                        multiline={fieldName === 'aboutMe' ? true : false}
                        rows={fieldName === 'aboutMe' ? 4 : 1}
                        sx={{
                            width: "100%",
                            mb:"15px",
                            border: `1px solid ${theme.palette.text.secondary}`,
                            backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.text.primary,
                            padding: theme.spacing(1),
                            borderRadius: "5px",
                            ":focus": {
                                backgroundColor: theme.palette.primary.main,
                                borderColor: theme.palette.text.primary,
                            },
                            ":hover": {
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    />
                )}
            </Field>
            <ErrorMessage name={fieldName} component="div" className='inputError' />
        </Box>
    )
}

export default ProfileSettingInput