import { Box } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
import { link } from '@/types'
import { getLinksByAwnerId } from '@/lib/getLinksByAwnerId'

const page = async () => {
  const linksByAwnerId: link[] = await getLinksByAwnerId();
  return (
    <Box className="flex flex-col gap-[40px]">
      <CustomDataGridTable
        userRows={linksByAwnerId}
        columns={columns}
        pageName='Links'
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page