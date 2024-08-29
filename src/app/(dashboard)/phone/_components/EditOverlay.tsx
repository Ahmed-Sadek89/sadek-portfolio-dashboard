"use client"
import { Box, TextField, Typography } from '@mui/material';
import { editOverlayContainer, formStyle, textFiledStyle } from '@/global/OverlayStyles';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import { editPhone } from '@/actions/phone/phone-edit';
import EditOverlayBtns from '@/components/EditOverlayBtns/EditOverlayBtns';


type props = {
    param: {
        id: number;
        phone_number: string;
    };
    handleClose: () => void;
};


const EditOverlay = ({ param, handleClose }: props) => {

    const [state, formAction] = useFormState<any, FormData>(editPhone, undefined)
    HandleCloseModal(state, handleClose)

    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Edit the phone number #{param.id}
            </Typography>

            <form style={{ ...formStyle, flexDirection: "column" }} action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <Box>
                    <TextField
                        label="Phone number"
                        variant="outlined"
                        sx={textFiledStyle}
                        name="phone_number"
                        defaultValue={param.phone_number}
                        type='number'
                    />
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <EditOverlayBtns handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
