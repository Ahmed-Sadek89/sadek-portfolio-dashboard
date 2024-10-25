import React from 'react'
import ButtonModal from '../ui/button-modal';

type props = {
    param: any,
    EditOverlay: ({ param, handleClose }: any) => JSX.Element | JSX.Element
    RemoveOverlay: ({ param, handleClose }: any) => JSX.Element
}

const TableButtonControl = ({ param, EditOverlay, RemoveOverlay }: props) => {
    return (
        <>
            <ButtonModal
                btnColor='info'
                btnVariant='text'
                btnText='edit'
                param={param}
                ContentOverlay={EditOverlay}
            />
            <ButtonModal
                btnColor='error'
                btnVariant='text'
                btnText='delete'
                param={param}
                ContentOverlay={RemoveOverlay}
            />
        </>
    )
}

export default TableButtonControl