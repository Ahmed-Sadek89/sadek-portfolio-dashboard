import { Box } from '@mui/material'
import { columns, userRows } from './_components/tableRowsAndColumns'
import EditOverlay from './_components/EditOverlay'
import AddOverlay from './_components/AddOverlay'
import RemoveOverlay from './_components/RemoveOverlay'
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable'
const Users = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <CustomDataGridTable
                userRows={userRows}
                columns={columns}
                pageName='users'
                EditOverlay={EditOverlay}
                AddOverlay={AddOverlay}
                RemoveOverlay={RemoveOverlay}
            />
        </Box>
    )
}

export default Users