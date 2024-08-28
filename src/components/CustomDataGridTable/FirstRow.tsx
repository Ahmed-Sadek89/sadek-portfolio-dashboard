import React from 'react'
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material'
import { BoxFirstRowContainer, btnCreateNew, EditOvelayStyle } from './style'

type props = {
    pageName: string,
    AddOverlay: ({ handleClose }: { handleClose: () => void }) => JSX.Element | JSX.Element
}
const FirstRow = ({ pageName, AddOverlay }: props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            {
                pageName !== 'home' &&
                <Box sx={BoxFirstRowContainer}>
                    <Typography variant='h4' sx={{ textTransform: "uppercase" }}>
                        {pageName}
                    </Typography>

                    <Button sx={btnCreateNew} onClick={handleOpen}>Create a new</Button>
                    <Modal
                        open={open}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={EditOvelayStyle}>
                                <AddOverlay handleClose={handleClose} />
                            </Box>
                        </Fade>
                    </Modal>

                </Box >
            }
        </>
    )
}

export default FirstRow