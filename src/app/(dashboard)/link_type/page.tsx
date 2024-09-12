import { Box } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
import { linkType } from '@/types'
import { getLinkType } from '@/lib/getLinkType'

const page = async () => {
  const linkType: linkType[] = await getLinkType()
  return (
    <Box className="flex flex-col gap-[40px]">
      <CustomDataGridTable
        userRows={linkType}
        columns={columns}
        pageName='link types'
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page