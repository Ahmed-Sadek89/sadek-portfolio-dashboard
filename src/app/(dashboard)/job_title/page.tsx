import { Box } from '@mui/material'
import { columns, userRows } from './_components/tableRowsAndColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'

const page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <CustomDataGridTable
        userRows={userRows}
        columns={columns}
        pageName='Job title'
        EditOverlay={EditOverlay}
        AddOverlay={AddOverlay}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default page