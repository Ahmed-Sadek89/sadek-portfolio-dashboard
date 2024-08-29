"use client"
import { memo } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { editOverlayContainer, formStyle, textFiledStyle } from '@/global/OverlayStyles';
import { useFormState } from 'react-dom';
import { postPhone } from '@/actions/phone/phone-add';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import AddOverlayBtns from '@/components/AddOverlayBtns/AddOverlayBtns';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(postPhone, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Add a new phone
            </Typography>

            <form style={{ ...formStyle, flexDirection: "column" }} action={formAction}>
                <Box>
                    <TextField
                        label="Phone number"
                        name="phone_number"
                        variant="outlined"
                        type='number'
                        sx={textFiledStyle}
                    />
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <AddOverlayBtns modelName='phone' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
