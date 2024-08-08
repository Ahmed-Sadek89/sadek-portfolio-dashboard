import { Backdrop, Box, Button, Fade, Modal, useTheme } from '@mui/material'
import React from 'react'
import { editLink, EditOvelayStyle } from './style';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type props = {
    param: {
        id: number;
        username: string;
        img: string;
        status: string;
        email: string;
        age: number;
    },
    EditOverlay: ({ param, handleClose }: any) => JSX.Element | JSX.Element
    RemoveOverlay: ({ param, handleClose }: any) => JSX.Element
}

const TableButtonControl = ({ param, EditOverlay, RemoveOverlay }: props) => {
    const theme = useTheme()
    const pathname = usePathname();
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true)
    const handleCloseEdit = () => setOpenEdit(false);

    const [openRemove, setOpenRemove] = React.useState(false);
    const handleOpenRemove = () => setOpenRemove(true);
    const handleCloseRemove = () => setOpenRemove(false);

    return (
        <Box>
            {
                pathname === '/hotels' ?
                    <Link
                        style={{ color: theme.palette.info.main, textTransform: "uppercase", ...editLink }}
                        href={`/hotels/edit/${param.id}`}
                        // state={param}
                    >Edit</Link>
                    :
                    <>
                        <Button color='info' onClick={handleOpenEdit} sx={{ ":hover": { bgcolor: "transparent" } }} >
                            Edit
                        </Button>
                        <Modal
                            open={openEdit}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                },
                            }}
                        >
                            <Fade in={openEdit}>
                                <Box sx={EditOvelayStyle}>
                                    <EditOverlay param={param} handleClose={handleCloseEdit} />
                                </Box>
                            </Fade>
                        </Modal>
                    </>
            }
            <Button
                color='error'
                sx={{ ":hover": { bgcolor: "transparent" } }}
                onClick={handleOpenRemove}
            >
                delete
            </Button>
            <Modal
                open={openRemove}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openRemove}>
                    <Box sx={EditOvelayStyle}>
                        <RemoveOverlay param={param} handleClose={handleCloseRemove} />
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default TableButtonControl