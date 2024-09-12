"use client"
import { Box, TextField, Typography } from '@mui/material';
  
import { useFormState } from 'react-dom';
import HandleCloseModal from '@/hooks/handle-close-modal';
import TextError from '@/components/ui/text-error';
import EditOverlayBtns from '@/components/EditOverlayBtns/EditOverlayBtns';
import { editLinkType } from '@/actions/linkType/linkType-edit';
import { textFiledStyle } from '@/global/OverlayStyles';


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
                <Box>
                    <TextField
                        label="Link type"
                        variant="outlined"
                        sx={textFiledStyle}
                        name="link_type"
                        defaultValue={param.link_type}
                    />
                </Box>

                <TextError>{state ? state.status : ""}</TextError>
                <EditOverlayBtns handleClose={handleClose} />
            </form>
        </Box >
    );
};

export default EditOverlay;
