import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { linkContent, linkIcon, profileSocialContainer, profileSocialTitle, socialIcon, socialName } from '../style';

const ProfileSocials = () => {
    const links = [
        {
            name: "facebook",
            link: "Facebook.com/spruko",
            Icon: FacebookIcon
        },
        {
            name: "linkedIn",
            link: "linkedIn.com/spruko",
            Icon: LinkedInIcon
        },
        {
            name: "X",
            link: "X.com/spruko",
            Icon: XIcon
        },
        {
            name: "gitHub",
            link: "gitHub.com/spruko",
            Icon: GitHubIcon
        },
        {
            name: "portfolio",
            link: "portfolio.com/spruko",
            Icon: LinkIcon
        },
    ]
    return (
        <Box sx={profileSocialContainer}>
            <Typography variant="h6" sx={profileSocialTitle}>Social</Typography>
            {
                links.map((link, index) => (
                    <Box key={index} sx={linkContent}>
                        <Box sx={linkIcon}>
                            <link.Icon />
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={socialName}>{link.name}</Typography>
                            <Typography variant="subtitle2" sx={socialIcon}>{link.link}</Typography>
                        </Box>
                    </Box>
                ))
            }
        </Box >
    )
}

export default ProfileSocials