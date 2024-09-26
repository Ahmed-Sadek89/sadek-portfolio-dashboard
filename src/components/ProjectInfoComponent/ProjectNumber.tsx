import { Typography } from '@mui/material'
import React from 'react'

const ProjectNumber = ({ id }: { id: number }) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <Typography sx={{ color: "text.primary", fontSize: { xs: "20px", sm: "40px" } }}>
                Project number: ${id}
            </Typography>
        </div>
    )
}

export default ProjectNumber
