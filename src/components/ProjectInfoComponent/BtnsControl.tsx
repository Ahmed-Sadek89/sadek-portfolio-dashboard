"use client"
import { Button } from '@mui/material'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const BtnsControl = () => {
    const { id } = useParams()
    return (
        <div className='flex items-center justify-end w-full gap-x-4'>
            <Link href={`/project`} className='bg-gray-600 text-white hover:opacity-90 transition duration-300 rounded px-[16px] py-[6px]'  >
                Back
            </Link>
            <Link href={`/project/edit/${id}`} className='bg-[#2196f3] text-white hover:opacity-90 transition duration-300 rounded px-[16px] py-[6px]'  >
                Edit
            </Link>
            <Button color='error' sx={{ bgcolor: "error", textTransform: "capitalize" }} variant='contained'>
                Delete
            </Button>
        </div>
    )
}

export default BtnsControl
