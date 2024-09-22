"use client"
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';

const Page = () => {
    const { id } = useParams()
    return (
        <Box className='flex flex-col gap-3'>
            <div className='relative w-full h-[60vh]'>
                <Image src="/logo.jpg" alt='title' width={1000} height={2000} className='object-fill w-full h-full' />
                <Typography variant='h2' className='absolute bottom-2 left-5 capitalize font-bold' sx={{ color: "text.primary" }}>title</Typography>
            </div>
            <div className='flex items-start w-full justify-between flex-col sm:flex-row p-[26px]'>
                <div className='flex flex-col gap-y-10 w-2/3'>
                    <div className='flex flex-col gap-y-2'>
                        <Typography variant='h4' className='' sx={{ color: "text.primary" }}>
                            Project number: ${id}
                        </Typography>
                        <div className="flex flex-col gap-y-1">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Description:
                            </Typography>
                            <Typography variant='body1'  sx={{ color: "text.secondary" }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab iste quae pariatur consectetur assumenda
                                dicta iusto! Necessitatibus repellat possimus sed! Necessitatibus, debitis. Officiis quisquam cupiditate
                                tempora eum assumenda dolor debitis.
                            </Typography>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Status:
                            </Typography>
                            <Typography variant='body1' className='p-2 rounded' sx={{ color: "text.primary", bgcolor: "success.main" }}>
                                completed
                            </Typography>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Started at:
                            </Typography>
                            <Typography variant='body1' sx={{ color: "text.secondary" }}>
                                27/11/1999
                            </Typography>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Ended at:
                            </Typography>
                            <Typography variant='body1' className='italic' sx={{ color: "text.secondary" }}>
                                Did not end yet!
                            </Typography>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Category Project:
                            </Typography>
                            <Typography variant='body1' className='p-2 font-bold rounded transition duration-300 italic' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                Landing pages
                            </Typography>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Category skills
                            </Typography>
                            <div className=' flex items-start gap-x-3 gap-y-2 flex-wrap'>
                                <Typography variant='body1' className='p-2 font-bold rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Frontend
                                </Typography>
                                <Typography variant='body1' className='p-2 font-bold rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Backend
                                </Typography>
                                <Typography variant='body1' className='p-2 font-bold rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Database
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-3">
                            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                                Skills
                            </Typography>
                            <div className=' flex items-center gap-x-3 gap-y-2 flex-wrap'>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    React
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    TailwindCss
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Express.js
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    MongoDB
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    Redux
                                </Typography>
                                <Typography variant='body1' className='p-2 rounded transition duration-300' sx={{ color: "text.secondary", bgcolor: "primary.main", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                                    TypeScript
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <Box className="flex items-center justify-end gap-x-3 w-1/3">
                    <Link href="#">
                        <RemoveRedEyeIcon className='text-9xl transition duration-300' sx={{ color: "text.secondary", ":hover": { color: "text.primary" } }} />
                    </Link>
                    <Link href="#">
                        <GitHubIcon className='text-9xl transition duration-300' sx={{ color: "text.secondary", ":hover": { color: "text.primary" } }} />
                    </Link>
                </Box>
            </div>
        </Box>
    )
}

export default Page
