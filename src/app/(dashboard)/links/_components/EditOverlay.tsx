"use client"
import { Box, TextField, Typography } from '@mui/material';
import { editOverlayContainer, formStyle, textFiledStyle } from '@/global/OverlayStyles';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import EditOverlayBtns from '@/components/EditOverlayBtns/EditOverlayBtns';
import { editJobTitle } from '@/actions/jobTitle/jobTitle-edit';


type props = {
    param: {
        id: number;
        title: string;
    };
    handleClose: () => void;
};


const EditOverlay = ({ param, handleClose }: props) => {

    const [state, formAction] = useFormState<any, FormData>(editJobTitle, undefined)
    HandleCloseModal(state, handleClose)

    return (
        <Box sx={editOverlayContainer}>
            <Typography variant="h6" component="h2">
                Edit the job title number #{param.id}
            </Typography>

            <form style={{ ...formStyle, flexDirection: "column" }} action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <Box>
                    <TextField
                        label="Job title"
                        variant="outlined"
                        sx={textFiledStyle}
                        name="title"
                        defaultValue={param.title}
                    />
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <EditOverlayBtns handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
