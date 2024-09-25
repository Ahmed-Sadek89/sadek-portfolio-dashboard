import { Box } from '@mui/material'
import React from 'react'
import FormBaseInput from '../ui/form-base-input'
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ProjectLinksComponent = () => {
    const iconProps = {
        className: 'text-9xl transition duration-300',
        sx: { color: "text.secondary", ":hover": { color: "text.primary" } }
    }
    const links = [
        {
            placeholder: "Live URL",
            name: "live_url",
            icon: RemoveRedEyeIcon
        },
        {
            placeholder: "Repo URL",
            name: "repo_url",
            icon: GitHubIcon
        }
    ]
    return (
        <Box className="flex flex-col justify-end gap-y-6 sm:gap-y-2 w-full ">
            {
                links.map((link, index) => (
                    <FormBaseInput
                        key={index}
                        type={'url'}
                        className="bg-transparent border border-[#fff] flex rounded items-center justify-between gap-2 px-2 py-2 w-full"
                        placeholder={link.placeholder}
                        name={link.name}
                        Icon={link.icon}
                        iconProps={iconProps}
                    />
                ))
            }
        </Box>
    )
}

export default ProjectLinksComponent
