"use client"
import { Box, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import OverlayBtns from '@/components/OverlayBtns/OverlayBtns';
import BaseFormTextFieldInput from '@/components/ui/base-form-textfield-input';
import FormUpliadImageInput from '@/components/ui/form-upload-image-input';
import GetFileObject from '@/hooks/get-file-object';
import { editSkill } from '@/actions/skill/skill-edit';

type props = {
    param: {
        id: number,
        category_id: number,
        title: string,
        icon: string
    };
    handleClose: () => void;
};


const EditOverlay = ({ param, handleClose }: props) => {
    const [state, formAction] = useFormState<any, FormData>(editSkill, undefined)
    HandleCloseModal(state, handleClose)
    const fileFromEdit = GetFileObject(param.icon);
    return (
        <Box className="flex flex-col gap-[10px]">
            <Typography variant="h6" component="h2">
                Edit the skill number #{param.id}
            </Typography>

            <form className='flex flex-col w-full gap-[20px]' action={formAction}>
                <input type="hidden" name="id" value={param.id} />
                <input type="hidden" name="category_id" value={param.category_id} />
                <input type="hidden" name="existedIcon" value={param.icon} />
                <BaseFormTextFieldInput label="Title" name="title" type='text' defaultValue={param.title} />
                <FormUpliadImageInput name="icon" defaultValue={fileFromEdit} imageUrl={param.icon}/>

                <TextError>{state ? state.status : ""}</TextError>
                <OverlayBtns action='Edit' handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
