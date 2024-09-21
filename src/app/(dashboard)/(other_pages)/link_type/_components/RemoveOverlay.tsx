"use client"
import { removeLinkType } from '@/actions/linkType/linkType-remove';
import RemoveOverlayContent from '@/components/RemoveOverlayContent/RemoveOverlayContent';
import HandleCloseModal from '@/hooks/handle-close-modal';
import { useFormState } from 'react-dom';

type props = {
    param: {
        id: number;
    },
    handleClose: () => void
}

const RemoveOverlay = ({ param, handleClose }: props) => {
    const handleSubmit = () => {
        handleClose()
    }
    const [state, formAction] = useFormState<any, FormData>(removeLinkType, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <form className='flex flex-col gap-3 text-center' action={formAction}>
            <RemoveOverlayContent id={param.id} modelName='link type' handleClose={handleSubmit} />
        </form>
    )
}

export default RemoveOverlay