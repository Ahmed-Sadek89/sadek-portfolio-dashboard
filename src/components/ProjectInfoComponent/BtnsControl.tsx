"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import DeleteProject from '../ProjectCard/DeleteProject'

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
            <DeleteProject projectId={Number(id)} />
        </div>
    )
}

export default BtnsControl
