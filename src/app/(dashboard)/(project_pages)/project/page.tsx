import { Box, Grid } from '@mui/material'
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getAllProjects } from '@/lib/getAllProjects';

const page = async () => {
  const projects = await getAllProjects()
  return (
    <Box className="flex flex-col gap-[40px] p-[24px]">
      <Grid container spacing={2} >
        {
          projects?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </Grid>
    </Box>
  )
}

export default page