import { Grid, Typography } from '@mui/material'
import ProfileInfo from './_components/ProfileInfo'
import ProfileSettings from './_components/ProfileSettings/ProfileSettings'
import ProfileNumbersInformation from './_components/ProfileNumbersInformation'

const Profile = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h4'>Profile</Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
                <ProfileInfo />
            </Grid>
            <Grid item xs={12} lg={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <ProfileNumbersInformation />
                    </Grid>
                    <Grid item xs={12}>
                        <ProfileSettings />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile