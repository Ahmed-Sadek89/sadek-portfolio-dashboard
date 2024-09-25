"use client"
import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';

type props = {
    name: string,
    defaultValue?: File | null,
    imageUrl?: string
}

const ProjectFormUploadImageInput = ({ name, defaultValue, imageUrl }: props) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    useEffect(() => {
        if (defaultValue) {
            setSelectedFile(defaultValue);
        }
    }, [defaultValue]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);
    };

    return (
        <div className='relative overflow-hidden'>
            {
                selectedFile ?
                    <Image
                        src={imageUrl || URL.createObjectURL(selectedFile)}
                        alt={selectedFile.name}
                        width={1000} height={2000}
                        className='object-fill w-full h-[60vh]'
                    />
                    : <Image src="/no_image.jpg" alt='title' width={1000} height={1000} className='object-fill w-full h-[60vh]' />
            }
            <div>
                <input
                    accept="image/*"
                    multiple={true}
                    style={{ display: 'none' }}
                    id="image-upload"
                    type="file"
                    onChange={handleFileChange}
                    required
                    name={name}
                />
                <label htmlFor="image-upload" className='absolute bottom-2 right-5'>
                    <Button variant="contained" component="span" className='flex items-center gap-2'>
                        <CloudUploadIcon />
                        {selectedFile ? (
                            <Typography variant="body1">
                                {selectedFile.name}
                            </Typography>
                        ) : (
                            <Typography variant="body1" className='capitalize'>
                                Upload {name}
                            </Typography>
                        )}
                    </Button>
                </label>
            </div>
        </div>
    );
}

export default ProjectFormUploadImageInput;
