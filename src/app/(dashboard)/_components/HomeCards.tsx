import { Grid } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import HotelIcon from '@mui/icons-material/Hotel';
import PaidIcon from '@mui/icons-material/Paid';
import HomeCard from './HomeCard'

const HomeCards = () => {
    return (
        <Grid container spacing={2} >
            <HomeCard cardName='users' count={720} Icon={GroupIcon} />
            <HomeCard cardName='offers' count={620} Icon={LocalOfferIcon} />
            <HomeCard cardName='plans' count={520} Icon={NextPlanIcon} />
            <HomeCard cardName='hotels' count={120} Icon={HotelIcon} />
            <HomeCard cardName='payments' count={320} Icon={PaidIcon} />
        </Grid>
    )
}

export default HomeCards