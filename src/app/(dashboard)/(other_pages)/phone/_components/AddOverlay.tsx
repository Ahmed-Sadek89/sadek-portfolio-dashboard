"use client"
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
 
import { useFormState } from 'react-dom';
import { postPhone } from '@/actions/phone/phone-add';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(postPhone, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Add a new phone
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <BaseFormTextFieldInput label="Phone number" name="phone_number" type='number' />

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns modelName='phone' handleClose={handleClose} action="Add" />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
