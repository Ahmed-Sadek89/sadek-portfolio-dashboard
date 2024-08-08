import { Box } from '@mui/material'
import { userRows, columns } from './_components/tableRowsAndColumns'
import RemoveOverlay from './_components/RemoveOverlay'
import { X } from '../../../global/AnyTSX'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'

const Hotels = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <CustomDataGridTable
        userRows={userRows}
        columns={columns}
        pageName='hotels'
        EditOverlay={X}
        AddOverlay={X}
        RemoveOverlay={RemoveOverlay}
      />
    </Box>
  )
}

export default Hotels