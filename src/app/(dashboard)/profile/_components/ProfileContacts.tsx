import { Box, Typography } from '@mui/material'
import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { conactContainer, profileSocialContainer, profileSocialTitle, socialName } from '../style';
const ProfileContacts = () => {
    const conatacts = [
        {
            contactName: "Contact",
            conatctValue: "(123) 456-7890",
            Icon: AddIcCallIcon
        },
        {
            contactName: "WhatsApp",
            conatctValue: "+(123) 214-3135",
            Icon: WhatsAppIcon
        },
        {
            contactName: "Email",
            conatctValue: "john.doe@example.com",
            Icon: EmailIcon
        },
        {
            contactName: "Current Address",
            conatctValue: "Alexandria, Egypt",
            Icon: HomeIcon
        }
    ]
    return (
        <Box sx={profileSocialContainer}>
            <Typography variant="h6" sx={profileSocialTitle}>Contacts</Typography>
            {
                conatacts.map((contact, index) => (
                    <Box key={index} sx={conactContainer}>
                        <contact.Icon />
                        <Typography variant="subtitle1" sx={socialName}>{contact.contactName}</Typography>
                        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>{contact.conatctValue}</Typography>
                    </Box>
                ))
            }
        </Box >
    )
}

export default ProfileContacts