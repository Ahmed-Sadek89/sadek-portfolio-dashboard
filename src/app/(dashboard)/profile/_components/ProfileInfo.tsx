import React from 'react';
import { Box } from '@mui/material'
import { boxContainer } from '../style'
import ProfileImage from './ProfileImage';
import ProfileUsername from './ProfileUsername';
import ProfileBio from './ProfileBio';
import ProfileStats from './ProfileStats';
import ProfileSocials from './ProfileSocials';
import ProfileContacts from './ProfileContacts';

const ProfileInfo = () => {

    return (
        <Box sx={boxContainer} boxShadow={7}>
            <ProfileImage />
            <ProfileUsername />
            <ProfileBio />
            <ProfileStats />
            <ProfileSocials />
            <ProfileContacts />
        </Box>
    )
}

export default ProfileInfo