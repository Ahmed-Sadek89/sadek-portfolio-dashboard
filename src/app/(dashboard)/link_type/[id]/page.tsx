import { Box } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
import { link } from '@/types'
import { getLinksByLinkTypeIdAndAwnerId } from '@/lib/getLinksByLinkTypeIdAndAwnerId'

type props = {
  params: {
    id: string
  }
}

const page = async ({ params }: props) => {
  const linksByLinkTypeAndAwnerId: link[] = await getLinksByLinkTypeIdAndAwnerId(Number(params.id))
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
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