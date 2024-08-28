import { Backdrop, Box, Button, Fade, Modal } from '@mui/material'
import React from 'react'
import { EditOvelayStyle } from './style';

type props = {
    param: {
        id: number;
    },
    EditOverlay: ({ param, handleClose }: any) => JSX.Element | JSX.Element
    RemoveOverlay: ({ param, handleClose }: any) => JSX.Element
}

const TableButtonControl = ({ param, EditOverlay, RemoveOverlay }: props) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true)
    const handleCloseEdit = () => setOpenEdit(false);

    const [openRemove, setOpenRemove] = React.useState(false);
    const handleOpenRemove = () => setOpenRemove(true);
    const handleCloseRemove = () => setOpenRemove(false);

    return (
        <Box>

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