import { Box, Grid } from '@mui/material'
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const page =  () => {
  return (
    <Box className="flex flex-col gap-[40px] p-[24px]">
      <Grid container spacing={2} >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))
        }
      </Grid>
    </Box>
  )
}

export default page