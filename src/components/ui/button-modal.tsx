"use client"
import React from 'react'
import { Backdrop as backdrop, Box, Button, Fade, Modal } from '@mui/material'


type props = {
    btnColor: "info" | "error" | "success",
    btnVariant: "text" | "contained",
    btnText: string,
    param: any,
    ContentOverlay: ({ param, handleClose }: any) => JSX.Element | JSX.Element
}
const ButtonModal = ({
    btnColor,
    btnVariant,
    btnText,
    param,
    ContentOverlay
}: props) => {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button
                color={btnColor}
                onClick={() => setOpen(true)}
                variant={btnVariant}
            >
                {btnText}
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
                        <ContentOverlay param={param} handleClose={() => setOpen(false)} />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ButtonModal
