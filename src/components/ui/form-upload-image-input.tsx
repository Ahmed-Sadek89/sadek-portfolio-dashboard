"use client"
import React from 'react';
import { Box, Button, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const FormUpliadImageInput = ({ name }: { name: string }) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);
    };
    return (
        <Box>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                type="file"
                onChange={handleFileChange}
                name={name}
            />
            <label htmlFor="image-upload">
                <Button variant="contained" component="span" className='flex items-center gap-2'>
                    <CloudUploadIcon />
                    {selectedFile ? (
                        <Typography variant="body1">
                            {selectedFile.name}
                        </Typography>
                    ) :
                        <Typography variant="body1" className='capitalize'>
                            Upload {name}
                        </Typography>
                    }
                </Button>
            </label>
        </Box>
    )
}

export default FormUpliadImageInput
