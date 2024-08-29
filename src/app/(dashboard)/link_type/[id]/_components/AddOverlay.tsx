"use client"
import { memo } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { editOverlayContainer, formStyle, textFiledStyle } from '@/global/OverlayStyles';
import { useFormState } from 'react-dom';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';
import AddOverlayBtns from '@/components/AddOverlayBtns/AddOverlayBtns';
import { postLinkType } from '@/actions/linkType/linkType-add';

type props = {
    handleClose: () => void;
};

const AddOverlay = ({ handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(postLinkType, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Add a new link type
            </Typography>

            <form style={{ ...formStyle, flexDirection: "column" }} action={formAction}>
                <Box>
                    <TextField
                        label="Link type"
                        name="link_type"
                        variant="outlined"
                        sx={textFiledStyle}
                    />
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <AddOverlayBtns modelName='link type' handleClose={handleClose} />
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
