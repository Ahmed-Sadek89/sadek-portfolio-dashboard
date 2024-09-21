"use client"
import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import { useParams } from 'next/navigation';
import { postLink } from '@/actions/link/link-add';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import FormUpliadImageInput from '@/components/ui/form-upload-image-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const { id } = useParams();
    const [state, formAction] = useFormState<any, FormData>(postLink, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Add a new link type
            </Typography>
            <form className='flex flex-col w-full gap-[20px]' action={formAction} encType="multipart/form-data">
                <input type="hidden" name="link_type_id" value={id} />
                <BaseFormTextFieldInput label="Title" name="title" type='text' />
                <BaseFormTextFieldInput label="Link" name="link" type='url' />
                <FormUpliadImageInput name="icon" />

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Add' modelName='link type' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
