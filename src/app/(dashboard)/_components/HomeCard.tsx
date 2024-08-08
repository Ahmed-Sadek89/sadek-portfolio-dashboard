import { SvgIconComponent } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import { boxContainer, cardNameStyle, iconLinkStyle, linkContainer } from './home-style'
import Link from 'next/link'

type props = {
    cardName: string,
    count: number,
    Icon: SvgIconComponent
}
const HomeCard = ({ cardName, count, Icon }: props) => {
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Box boxShadow={7} sx={boxContainer}>
                <Typography variant='h5' sx={cardNameStyle}>
                    {cardName}
                </Typography>
                <Typography variant='h6' >{count}</Typography>
                <Link href={`/${cardName}`} style={{ ...linkContainer, flexDirection: "row", }}>
                    <Typography variant='body1' style={{ textDecoration: "underline" }}>
                        View all {cardName}
                    </Typography>
                    <Icon sx={iconLinkStyle} />
                </Link>
            </Box>
        </Grid>
    )
}

export default HomeCard