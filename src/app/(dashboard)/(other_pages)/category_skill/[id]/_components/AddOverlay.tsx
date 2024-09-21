"use client"
import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import { useParams } from 'next/navigation';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import FormUpliadImageInput from '@/components/ui/form-upload-image-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';
import { postSkill } from '@/actions/skill/skill-add';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const { id } = useParams();
    const [state, formAction] = useFormState<any, FormData>(postSkill, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Add a new skill
            </Typography>
            <form className='flex flex-col w-full gap-[20px]' action={formAction} encType="multipart/form-data">
                <input type="hidden" name="category_id" value={id} />
                <BaseFormTextFieldInput label="Title" name="title" type='text' />
                <FormUpliadImageInput name="icon" />

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Add' modelName='Skill' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
