import React, { useEffect } from 'react'

const HandleCloseModal = (state: any, handleClose: () => void) => {
    return useEffect(() => {
        (state && state.status === 'success') && handleClose()
    }, [state, handleClose])
}

export default HandleCloseModal
