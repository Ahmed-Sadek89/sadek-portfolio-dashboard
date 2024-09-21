"use client"
import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import { postLink } from '@/actions/link/link-add';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import FormUpliadImageInput from '@/components/ui/form-upload-image-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';
import FormSelectInput from '@/components/ui/form-select-input';
import { GetAsyncData } from '@/hooks/get-async-data';
import { getLinkType } from '@/lib/getLinkType';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(postLink, undefined);
    HandleCloseModal(state, handleClose)
    const data = GetAsyncData(getLinkType);
    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Add a new link
            </Typography>
            <form className='flex flex-col w-full gap-[20px]' action={formAction} encType="multipart/form-data">
                <BaseFormTextFieldInput label="Title" name="title" type='text' />
                <BaseFormTextFieldInput label="Link" name="link" type='url' />
                <FormSelectInput label='Link Type' name='link_type_id' data={data} keyData="link_type" />
                <FormUpliadImageInput name="icon" />

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Add' modelName='link type' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
