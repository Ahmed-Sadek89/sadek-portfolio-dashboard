"use client"
import { memo, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { btnsGroupStyle, btnStyle, editOverlayContainer, formStyle, textFiledStyle } from '@/global/OverlayStyles';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import ButtonSubmit from '@/components/ui/button-submit';
import { useFormState } from 'react-dom';
import { postPhone } from '@/actions/phone/phone-add';
import TextError from '@/components/ui/text-error';
import HandleCloseModal from '@/hooks/handle-close-modal';

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
                        label="phone"
                        name="phone_number"
                        variant="outlined"
                        type='number'
                        sx={textFiledStyle}
                    />
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <Box sx={btnsGroupStyle}>
                    <ButtonSubmit
                        btnStyle={{ bgcolor: "success.main", ":hover": { bgcolor: "#00d25b" }, ...btnStyle }}
                    >
                        <PlaylistAddIcon />
                        <Typography variant='body1'>
                            Add a new phone
                        </Typography>
                    </ButtonSubmit>
                    <Button
                        type="button"
                        variant="contained"
                        sx={{ bgcolor: "error.main", ":hover": { bgcolor: "#b02a37" }, ...btnStyle }}
                        onClick={handleClose}
                    >
                        <CancelIcon />
                        <Typography variant="body1">
                            Cancel
                        </Typography>
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default memo(AddOverlay);
