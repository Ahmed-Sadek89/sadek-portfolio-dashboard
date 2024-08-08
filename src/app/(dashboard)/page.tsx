import { Box, Grid } from '@mui/material'
import EditOverlay from './_components/EditOverlay';
import RemoveOverlay from './_components/RemoveOverlay';
import HomeChart from './_components/HomeChart';
import HomeCards from './_components/HomeCards';
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable';
import { X } from '../../global/AnyTSX';
import { columns, userRows } from './_components/tableRowsAndColumns';

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <HomeCards />
      <Grid container spacing={2}>
        <HomeChart />
        <Grid item xs={12} lg={6}>
          <CustomDataGridTable
            userRows={userRows}
            columns={columns}
            pageName='home'
            EditOverlay={EditOverlay}
            AddOverlay={X}
            RemoveOverlay={RemoveOverlay}
          />
        </Grid>
      </Grid>

    </Box>
  )
}

export default Home