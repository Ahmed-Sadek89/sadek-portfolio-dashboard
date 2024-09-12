"use client"
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import { editPhone } from '@/actions/phone/phone-edit';
import EditOverlayBtns from '@/components/EditOverlayBtns/EditOverlayBtns';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';

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
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Edit the phone number #{param.id}
            </Typography>
            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <BaseFormTextFieldInput label="Phone number" name="phone_number" type='number' defaultValue={param.phone_number} />
                <TextError>{state ? state.status : ""}</TextError>
                <EditOverlayBtns handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
