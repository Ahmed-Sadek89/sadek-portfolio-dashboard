import { Box, Button } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
import { getLinksByLinkTypeIdAndAwnerId } from '@/lib/getLinksByLinkTypeIdAndAwnerId'
import Link from 'next/link'
import { link } from '@/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type props = {
  params: {
    id: string
  }
}

const page = async ({ params }: props) => {
  const linksByLinkTypeAndAwnerId: link[] = await getLinksByLinkTypeIdAndAwnerId(Number(params.id))
  return (
    <Box className="flex flex-col gap-[10px]">
      <Link href="/link_type">

        <Button title='Back' sx={{ bgcolor: "info.main",color:"text.primary", ":hover": {bgcolor: "info.main"} }}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <CustomDataGridTable
        userRows={linksByLinkTypeAndAwnerId}
        columns={columns}
        pageName={`link type number #${params.id}`}
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page