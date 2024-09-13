"use client"
import { removeSkill } from '@/actions/skill/skill-remove';
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
    const [state, formAction] = useFormState<any, FormData>(removeSkill, undefined);
    HandleCloseModal(state, handleClose)

    return (
        <form className='flex flex-col gap-3 text-center' action={formAction}>
            <RemoveOverlayContent id={param.id} modelName='skills' handleClose={handleSubmit} />
        </form>
    )
}

export default RemoveOverlay