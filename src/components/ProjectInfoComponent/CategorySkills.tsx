import { Typography } from '@mui/material'
import React from 'react'

const CategorySkills = ({ categorySkills }: { categorySkills: string[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full md:w-2/3">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Category skills
            </Typography>
            <div className=' flex items-start gap-x-3 gap-y-2 flex-wrap'>
                {
                    categorySkills.map((key, index) => (
                        <Typography key={index} variant='body1' className='p-2 font-bold rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                            {key}
                        </Typography>
                    ))
                }
            </div>
        </div>
    )
}

export default CategorySkills
