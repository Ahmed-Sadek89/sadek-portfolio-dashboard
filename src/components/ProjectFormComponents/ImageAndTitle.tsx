import React from 'react'
import ProjectFormUploadImageInput from '../ui/project-form-upload-image-input'
import FormFocusInput from '../ui/form-focus-input'

const ImageAndTitle = () => {
    return (
        <div className='relative w-full'>
            <ProjectFormUploadImageInput name="attachment" />
            <FormFocusInput
                containerStyle='absolute bottom-4 left-5 w-1/2 hidden sm:block'
                placeholder='Click to add Title'
                name="title"
            />
        </div>
    )
}

export default ImageAndTitle
