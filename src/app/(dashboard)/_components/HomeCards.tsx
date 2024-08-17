import { Grid } from '@mui/material'
import HomeCard from './HomeCard'

type props = {
    propsFromAwnerCount: PropsFromAwnerCounts
}
const HomeCards = ({ propsFromAwnerCount }: props) => {
    return (
        <Grid container spacing={2} >
            {
                propsFromAwnerCount && propsFromAwnerCount.map((key, index) => (

                    <HomeCard
                        key={index}
                        cardName={key.name}
                        count={key.count as number} 
                        Icon={key.icon}
                        route={key.route}
                    />
                ))
            }
        </Grid>
    )
}

export default HomeCards