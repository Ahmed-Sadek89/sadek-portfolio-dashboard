import { Typography } from '@mui/material'
import React from 'react'

const CategoryProject = ({ category_project_name }: { category_project_name: string }) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full md:w-2/3">
                <Typography variant='h6' sx={{ color: "text.primary" }}>
                    Category Project:
                </Typography>
                <Typography variant='body1' className='p-2 font-bold rounded w-fit sm:w-full transition duration-300 italic' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                    {category_project_name}
                </Typography>
            </div>
        </div>
    )
}

export default CategoryProject
