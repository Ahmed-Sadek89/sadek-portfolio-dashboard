import { Box, Button, Grid } from '@mui/material'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type props = {
  params: {
    id: string
  }
}

const page = async ({ params }: props) => {
  // const skillsCategoryId = await getSkillsCategoryId(Number(params.id));
  return (
    <Box className="flex flex-col gap-[10px]">
      <Link href="/category_project">
        <Button title='Back' sx={{ bgcolor: "info.main", color: "text.primary", ":hover": { bgcolor: "info.main" } }}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <Grid container spacing={2} >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <Box boxShadow={7} className="px-[1.5625rem] py-[1.75rem] rounded-[10px] flex flex-col gap-2" sx={{ backgroundColor: "primary.main", color: "text.primary" }}>
                project ${index}
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default page