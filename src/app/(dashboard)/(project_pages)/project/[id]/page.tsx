import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div>image</div>
            <div className='flex items-start w-full justify-between flex-col sm:flex-row'>
                <div className='flex flex-col gap-4'>
                    <div>id & description</div>
                    <div>status & date</div>
                    <div>category & skills</div>
                </div>
                <div>right side</div>
            </div>
        </div>
    )
}

export default page
