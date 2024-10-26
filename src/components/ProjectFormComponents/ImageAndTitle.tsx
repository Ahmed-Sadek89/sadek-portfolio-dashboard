import React from 'react'
import ProjectFormUploadImageInput from '../ui/project-form-upload-image-input'
import FormFocusInput from '../ui/form-focus-input'

type props = {
    name: string,
    defaultTitle?: string,
    defaultImage?: string
}
const ImageAndTitle = ({ name, defaultImage, defaultTitle }: props) => {
    return (
        <div className='relative w-full'>
            <ProjectFormUploadImageInput name="attachment" imageUrl={defaultImage} />
            <FormFocusInput
                containerStyle='absolute bottom-4 left-5 w-1/2 hidden sm:block'
                placeholder={'Click to add Title'}
                name={name}
                defaultTitle={defaultTitle}
            />
        </div>
    )
}

export default ImageAndTitle
