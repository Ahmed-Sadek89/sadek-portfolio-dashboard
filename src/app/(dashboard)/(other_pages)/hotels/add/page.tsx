import { Box, Typography } from '@mui/material'
import AddForm from './AddForm'

const AddHotel = () => {
  return (
    <Box boxShadow={5} sx={{ bgcolor: "primary.main", padding: "16px", borderRadius: "5px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography sx={{fontSize: {xs: "20px", sm: "30px"}}}>
        Add a new Hotel row
      </Typography>
      <AddForm />
    </Box>
  )
}

export default AddHotel