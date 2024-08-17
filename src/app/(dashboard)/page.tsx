"use server"
import { Box, Grid } from '@mui/material'
import EditOverlay from './_components/EditOverlay';
import RemoveOverlay from './_components/RemoveOverlay';
import HomeCards from './_components/HomeCards';
import CustomDataGridTable from '@/components/CustomDataGridTable/CustomDataGridTable';
import { X } from '../../global/AnyTSX';
import { columns, userRows } from './_components/tableRowsAndColumns';
import { getAwnerById } from '@/lib/getAwnerById';
import { getPropsFromAwnerCounts } from '@/helpers/getPropsFromAwnerCounts';

const Home = async () => {
  const awnerById: awner = await getAwnerById();
  const propsFromAwnerCount = getPropsFromAwnerCounts(awnerById)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <HomeCards propsFromAwnerCount={propsFromAwnerCount} />
      <Grid container spacing={2}>
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
      <CustomDataGridTable
        userRows={userRows}
        columns={columns}
        pageName='home'
        EditOverlay={EditOverlay}
        AddOverlay={X}
        RemoveOverlay={RemoveOverlay}
      />

    </Box>
  )
}

export default Home