"use client"
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import FormUpliadImageInput from '@/components/ui/form-upload-image-input';
import { editLink } from '@/actions/link/link-edit';
import GetFileObject from '@/hooks/get-file-object';

type props = {
    param: {
        id: number,
        link_type_id: number,
        title: string,
        link: string,
        icon: string
    };
    handleClose: () => void;
};


const EditOverlay = ({ param, handleClose }: props) => {
    
    const [state, formAction] = useFormState<any, FormData>(editLink, undefined)
    HandleCloseModal(state, handleClose)
    const fileFromEdit = GetFileObject(param.icon);
    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Edit the link type number #{param.id}
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <input type="hidden" name="link_type_id" value={param.link_type_id} />
                <input type="hidden" name="existedIcon" value={param.icon} />
                <BaseFormTextFieldInput label="Title" name="title" type='text' defaultValue={param.title} />
                <BaseFormTextFieldInput label="Link" name="link" type='url' defaultValue={param.link} />
                <FormUpliadImageInput name="icon" defaultValue={fileFromEdit} imageUrl={param.icon}/>

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Edit' handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
