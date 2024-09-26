import { Typography } from '@mui/material'
import React from 'react'

const Skills = ({ skills }: { skills: string[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full md:w-2/3">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Skills
            </Typography>
            <div className=' flex items-center gap-x-3 gap-y-2 flex-wrap'>
                {
                    skills.map((key, index) => (
                        <Typography key={index} variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                            {key}
                        </Typography>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
