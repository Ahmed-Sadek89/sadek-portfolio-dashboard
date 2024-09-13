import { Box, Button } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
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
      <Link href="/category_skill">
        <Button title='Back' sx={{ bgcolor: "info.main", color: "text.primary", ":hover": { bgcolor: "info.main" } }}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <CustomDataGridTable
        userRows={skillsCategoryId}
        columns={columns}
        pageName={`Category Project number #${params.id}`}
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page