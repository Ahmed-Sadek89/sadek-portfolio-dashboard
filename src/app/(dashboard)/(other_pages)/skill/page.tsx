import { Box } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
import { getSkillsByAwnerId } from '@/lib/getSkillsByAwnerId'

const page = async () => {
  const skillsByAwnerId = await getSkillsByAwnerId();
  return (
    <Box className="flex flex-col gap-[40px]">
      <CustomDataGridTable
        userRows={skillsByAwnerId}
        columns={columns}
        pageName='Skills'
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page