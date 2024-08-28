"use client"
import { Box, Button, Typography } from '@mui/material'
import { btnsGroupStyle, btnStyle } from '@/global/OverlayStyles';
import ButtonSubmit from '../ui/button-submit';

type props = {
    id: number;
    modelName: string,
    handleClose: () => void
}

const RemoveOverlayContent = ({ id, modelName, handleClose }: props) => {
    return (
        <>
            <Typography variant="h6" component="h2">
                Are you sure that you want delete row number #{id} in {modelName}?
            </Typography>
            <input type="hidden" name="id" value={id} />
            <Box sx={btnsGroupStyle}>
                <ButtonSubmit
                    btnStyle={{ bgcolor: "error.main", ":hover": { bgcolor: "#b02a37" }, ...btnStyle }}
                >
                    <Typography variant='body1'>
                        Yes, delete it
                    </Typography>
                </ButtonSubmit>
                <Button
                    variant='contained'
                    sx={{ bgcolor: "custom.customInfoText", ":hover": { bgcolor: "custom.customInfoText" }, ...btnStyle, color: "text.primary" }}
                    onClick={() => handleClose()}
                >
                    <Typography variant='body1'>
                        No
                    </Typography>
                </Button>
            </Box>
        </>
    )
}

export default RemoveOverlayContent