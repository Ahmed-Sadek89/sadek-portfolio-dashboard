"use client"
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import { editJobTitle } from '@/actions/jobTitle/jobTitle-edit';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';


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
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Edit the job title number #{param.id}
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <BaseFormTextFieldInput label="Job title" name="title" type='string' defaultValue={param.title} />
                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Edit' handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
