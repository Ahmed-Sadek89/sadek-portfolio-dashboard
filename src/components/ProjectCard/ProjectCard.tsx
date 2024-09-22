import { Box, Button, Grid } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image';

type props = {
    project: any,
    index: number
}
const ProjectCard = ({ project, index }: props) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Box boxShadow={7} className="rounded-[10px] flex flex-col gap-2 h-[75vh] sm:h-[50vh] overflow-hidden" sx={{ backgroundColor: "primary.main", color: "text.primary" }}>
                <Image src="/logo.jpg" alt='title' width={100} height={200} className='object-fill w-full h-full' />
                <div className='px-[1.5625rem] pb-6 pt-2 text-center flex flex-col items-center gap-y-4'>
                    <h3>project ${index}</h3>
                    <div className='flex items-center justify-center w-full gap-x-4'>
                        <Link href={`/project/visit/${index}`} className='bg-[#4caf50] text-white hover:opacity-90 transition duration-300 rounded px-[16px] py-[6px]'  >
                            Visit
                        </Link>
                        <Link href={`/project/edit/${index}`} className='bg-[#2196f3] text-white hover:opacity-90 transition duration-300 rounded px-[16px] py-[6px]'  >
                            Edit
                        </Link>
                        <Button color='error' sx={{ bgcolor: "error", textTransform: "capitalize" }} variant='contained'>
                            Delete
                        </Button>
                    </div>
                </div>
            </Box>
        </Grid>
    )
}

export default ProjectCard
