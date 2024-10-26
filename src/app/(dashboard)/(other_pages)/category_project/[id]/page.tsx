import { Box, Button, Grid } from '@mui/material'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getProjectByCategoryProjectId } from '@/lib/getProjectByCategoryProjectId';

type props = {
  params: {
    id: string
  }
}

const page = async ({ params }: props) => {
  const projectsByCategoryProjectId = await getProjectByCategoryProjectId(params.id);

  return (
    <Box className="flex flex-col gap-[10px]">
      <Link href="/category_project">
        <Button title='Back' sx={{ bgcolor: "info.main", color: "text.primary", ":hover": { bgcolor: "info.main" } }}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <Grid container spacing={2} >
        {
          projectsByCategoryProjectId?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </Grid>
    </Box>
  )
}

export default page