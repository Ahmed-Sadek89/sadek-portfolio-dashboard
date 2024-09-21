import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { boxContainer, profileNumberIcon, profileNumberInformationContainer, profileNumberText } from '../style'
import LayersIcon from '@mui/icons-material/Layers';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const ProfileNumbersInformation = () => {
  const profileNumbers = [
    {
      backgroundColor: "custom.customInfo",
      color: "custom.customInfoText",
      Icon: LayersIcon,
      title: "Orders",
      number: "1,8126"
    },
    {
      backgroundColor: "custom.customError",
      color: "custom.customErrorText",
      Icon: AttachMoneyIcon,
      title: "Revenue",
      number: "13,8221"
    },
    {
      backgroundColor: "custom.customSuccess",
      color: "custom.customSuccessText",
      Icon: RocketLaunchIcon,
      title: "Product sold",
      number: "126"
    },
  ]
  return (
    <Grid container spacing={2}>
      {
        profileNumbers.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box boxShadow={7} sx={boxContainer}>
              <Box sx={profileNumberInformationContainer}>
                <Box sx={{ ...profileNumberIcon, backgroundColor: item.backgroundColor, color: item.color }}>
                  <item.Icon />
                </Box>
                <Box sx={profileNumberText}>
                  <Typography variant="h6" sx={{ color: "text.primary" }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>{item.number}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ProfileNumbersInformation