"use client"
import React, { memo } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { editOverlayContainer, formStyle, textFiledStyle } from '@/global/OverlayStyles';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import AddOverlayBtns from '@/components/AddOverlayBtns/AddOverlayBtns';
import { useParams } from 'next/navigation';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { postLink } from '@/actions/link/link-add';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const { id } = useParams();
    const [state, formAction] = useFormState<any, FormData>(postLink, undefined);
    HandleCloseModal(state, handleClose)
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);
    };

    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Add a new link type
            </Typography>
            <form style={{ ...formStyle, flexDirection: "column" }} action={formAction} encType="multipart/form-data">
                <input type="hidden" name="link_type_id" value={id} />
                <Box>
                    <TextField
                        label="Title"
                        name="title"
                        variant="outlined"
                        sx={textFiledStyle}
                    />
                </Box>
                <Box>
                    <TextField
                        label="Link"
                        variant="outlined"
                        sx={textFiledStyle}
                        name="link"
                    />
                </Box>
                <Box>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        name='icon'
                    />
                    <label htmlFor="file-upload">
                        <Button variant="contained" component="span" className='flex items-center gap-2'>
                            <CloudUploadIcon />
                            {selectedFile ? (
                                <Typography variant="body1">
                                    {selectedFile.name}
                                </Typography>
                            ) :
                                <Typography variant="body1">
                                    Upload Icon
                                </Typography>
                            }
                        </Button>
                    </label>
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <AddOverlayBtns modelName='link type' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
