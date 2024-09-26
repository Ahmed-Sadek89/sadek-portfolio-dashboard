import { Box } from '@mui/material'
import { getProjectById } from '@/lib/getProjectById';
import Header from '@/components/ProjectInfoComponent/Header';
import ProjectNumber from '@/components/ProjectInfoComponent/ProjectNumber';
import Description from '@/components/ProjectInfoComponent/Description';
import Status from '@/components/ProjectInfoComponent/Status';
import DateComponent from '@/components/ProjectInfoComponent/DateComponent';
import CategoryProject from '@/components/ProjectInfoComponent/CategoryProject';
import CategorySkills from '@/components/ProjectInfoComponent/CategorySkills';
import Skills from '@/components/ProjectInfoComponent/Skills';
import Links from '@/components/ProjectInfoComponent/Links';
import BtnsControl from '@/components/ProjectInfoComponent/BtnsControl';

type props = {
    params: {
        id: string
    }
}

const page = async ({ params }: props) => {
    // ((((((((((((( DELETE EDIT project )))))))))))))
    const projectById = await getProjectById(params.id.toString())
    return (
        <Box className='flex flex-col gap-y-7'>
            <Header attachment={projectById?.attachment as string} title={projectById?.title as string} />
            <div className='flex items-start w-full justify-between flex-col sm:flex-row p-[26px] gap-y-6'>
                <div className='flex flex-col gap-y-6 w-full md:w-2/3'>
                    <ProjectNumber id={Number(params.id)} />
                    <Description description={projectById?.description as string} />
                    <Status status={projectById?.status as string} />
                    <div className='flex flex-col gap-2'>
                        <DateComponent label="Started at:" dateValue={projectById?.created_at as string} />
                        <DateComponent label="Ended at:" dateValue={projectById?.ended_at as string} />
                    </div>
                    <CategoryProject category_project_name={projectById?.category_project.name as string} />
                    <div className='flex flex-col gap-y-2'>
                        <CategorySkills categorySkills={projectById?.categorySkills as string[]} />
                        <Skills skills={projectById?.skills as string[]} />
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 w-full md:w-1/3 justify-end items-end'>
                    <Links liveUrl={projectById?.live_url as string} repoUrl={projectById?.repo_url as string} />
                    <BtnsControl />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 p-[26px]'>
                Project Notes here ....
            </div>
        </Box >
    )
}

export default page
