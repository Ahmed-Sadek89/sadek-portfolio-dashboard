import React from 'react'
import { Backdrop, Box, Button, Fade, Modal, Typography, useTheme } from '@mui/material'
import { BoxFirstRowContainer, btnCreateNew, EditOvelayStyle, linkCreateNew } from './style'
import Link from 'next/link';

type props = {
    pageName: string,
    AddOverlay: ({ handleClose }: { handleClose: () => void }) => JSX.Element | JSX.Element
}
const FirstRow = ({ pageName, AddOverlay }: props) => {
    const theme = useTheme()
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
                    {
                        pageName !== 'hotels' &&
                        <>
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
                        </>
                    }
                    {
                        pageName === 'hotels' &&
                        <Link
                            href={'/hotels/add'}
                            style={{ background: theme.palette.success.main, textTransform: "uppercase", ...linkCreateNew }}
                        >Create a new</Link>
                    }
                </Box >
            }
        </>
    )
}

export default FirstRow