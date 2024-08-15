import React from 'react'

const TextError = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className='text-red-600 text-center w-full'>{children}</span>
    )
}

export default TextError
