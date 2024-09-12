"use client"
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import AddOverlayBtns from '@/components/AddOverlayBtns/AddOverlayBtns';
import { postJobTitle } from '@/actions/jobTitle/jobTitle-add';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(postJobTitle, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Add a new phone
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <BaseFormTextFieldInput label="Job title" name="title" type='string' />

                <TextError>{state ? state.status : ""}</TextError>
                <AddOverlayBtns modelName='job title' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
