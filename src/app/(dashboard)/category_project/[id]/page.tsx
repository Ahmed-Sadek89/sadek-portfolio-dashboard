import { Box, Button } from '@mui/material'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getSkillsCategoryId } from '@/lib/getSkillsByCategoryId'

type props = {
  params: {
    id: string
  }
}

const page = async ({ params }: props) => {
  const skillsCategoryId = await getSkillsCategoryId(Number(params.id));
  return (
    <Box className="flex flex-col gap-[10px]">
      <Link href="/category_project">
        <Button title='Back' sx={{ bgcolor: "info.main", color: "text.primary", ":hover": { bgcolor: "info.main" } }}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <div>
        fetch projects by category project id here
      </div>
    </Box>
  )
}

export default page