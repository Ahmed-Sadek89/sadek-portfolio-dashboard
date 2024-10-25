"use client"
import React from 'react'
import { Backdrop as backdrop, Box, Button, Fade, Modal } from '@mui/material'
import RemoveOverlayContent from '../RemoveOverlayContent/RemoveOverlayContent';
import HandleCloseModal from '@/hooks/handle-close-modal';
import { useFormState } from 'react-dom';
import { removeProject } from '@/actions/project/project-remove';

const DeleteProject = ({ projectId }: { projectId: number }) => {
    const [open, setOpen] = React.useState(false);

    const [state, formAction] = useFormState<any, FormData>(removeProject, undefined);
    HandleCloseModal(state, () => setOpen(false))
    return (
        <>
            <Button color='error' sx={{ bgcolor: "error", textTransform: "capitalize" }} variant='contained' onClick={() => setOpen(true)}>
                Delete
            </Button>
            <Modal
                open={open}
                closeAfterTransition
                slots={{ backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        className="absolute top-[50%] left-[50%] w-full sm:w-[500px] rounded-[10px]"
                        boxShadow={24}
                        padding={3}
                        sx={{
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'primary.main',
                            color: "text.primary",
                        }}>
                        <form className='flex flex-col gap-3 text-center' action={formAction}>
                            <RemoveOverlayContent id={projectId} modelName='Project' handleClose={() => setOpen(false)} />
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default DeleteProject
