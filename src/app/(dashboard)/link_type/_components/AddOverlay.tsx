"use client"
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import { postLinkType } from '@/actions/linkType/linkType-add';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(postLinkType, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Add a new link type
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <BaseFormTextFieldInput label="Link type" name="link_type" type='text' />

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Add' modelName='link type' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
