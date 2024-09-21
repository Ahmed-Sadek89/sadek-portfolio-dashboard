"use client"
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import { editLinkType } from '@/actions/linkType/linkType-edit';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';


type props = {
    param: {
        id: number;
        link_type: string;
    };
    handleClose: () => void;
};


const EditOverlay = ({ param, handleClose }: props) => {

    const [state, formAction] = useFormState<any, FormData>(editLinkType, undefined)
    HandleCloseModal(state, handleClose)

    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Edit the link type number #{param.id}
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <BaseFormTextFieldInput label="Link type" name="link_type" type='string' defaultValue={param.link_type} />
                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Edit' handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
