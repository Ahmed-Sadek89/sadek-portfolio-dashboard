import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image';
import { project } from '@/types';

type props = {
    project: project,
}
const ProjectCard = ({ project }: props) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Box boxShadow={7} className="rounded-[10px] flex flex-col gap-2 h-[75vh] sm:h-[50vh] overflow-hidden" sx={{ backgroundColor: "primary.main", color: "text.primary" }}>
                <div className='relative'>
                    <Image src={project.attachment || ""} alt={project.title} width={2000} height={2000} className='object-cover bg-center w-full h-full sm:h-[33vh]' />
                    <Typography variant='body2' className='absolute top-8 right-[-50px] rotate-45 px-16 py-2' sx={{ color: "text.primary", bgcolor: project.status === "1" ? "success.main" : "warning.main" }}>
                        {project.status === "1" ? "Completed" : "Not completed"}
                    </Typography>
                </div>
                <div className='px-[1.5625rem] pb-6 pt-2 text-center flex flex-col items-center gap-y-4'>
                    <h3>{project.title}</h3>
                    <div className='flex items-center justify-center w-full gap-x-4'>
                        <Link href={`/project/visit/${project.id}`} className='bg-[#4caf50] text-white hover:opacity-90 transition duration-300 rounded px-[16px] py-[6px]'  >
                            Visit
                        </Link>
                        <Link href={`/project/edit/${project.id}`} className='bg-[#2196f3] text-white hover:opacity-90 transition duration-300 rounded px-[16px] py-[6px]'  >
                            Edit
                        </Link>
                        <Button color='error' sx={{ bgcolor: "error", textTransform: "capitalize" }} variant='contained'>
                            Delete
                        </Button>
                    </div>
                </div>
            </Box>
        </Grid>
    )
}

export default ProjectCard
