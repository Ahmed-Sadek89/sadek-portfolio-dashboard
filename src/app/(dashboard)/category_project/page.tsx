import { Box } from '@mui/material'
import { columns } from './_components/tableColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
import { getCategoryProject } from '@/lib/getCategoryProject'

const page = async () => {
  const category_project = await getCategoryProject()
  return (
    <Box className="flex flex-col gap-[40px]">
      <CustomDataGridTable
        userRows={category_project}
        columns={columns}
        pageName='Category Project'
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page