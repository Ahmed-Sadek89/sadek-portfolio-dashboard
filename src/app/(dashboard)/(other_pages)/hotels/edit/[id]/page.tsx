"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import EditForm from './EditForm'
import { useParams } from 'next/navigation'
import { userRows } from '../../_components/tableRowsAndColumns'

const EditHotel = () => {
  const param = useParams();
  const state = userRows.find(index => index.id.toString() === param.id)
  return (
    <Box boxShadow={5} sx={{ bgcolor: "primary.main", padding: "16px", borderRadius: "5px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography sx={{ fontSize: { xs: "20px", sm: "30px" } }}>
        Edit for hotel number #{param.id}
      </Typography>
      <EditForm param={state} />
    </Box>
  )
}

export default EditHotel