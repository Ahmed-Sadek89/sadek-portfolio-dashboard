"use client"
import { Box } from '@mui/material'
import CategoryProjectMenu from '@/components/CategoryProjectMenu/CategoryProjectMenu';
import ProjectSkillsData from '@/components/ProjectSkillsData/ProjectSkillsData';
import ImageAndTitle from '@/components/ProjectFormComponents/ImageAndTitle';
import Status from '@/components/ProjectFormComponents/Status';
import DateComponent from '@/components/ProjectFormComponents/DateComponent';
import Description from '@/components/ProjectFormComponents/Description';
import ProjectLinksComponent from '@/components/ProjectFormComponents/ProjectLinksComponent';
import Title from '@/components/ProjectFormComponents/Title';
import { btnStyle } from '@/global/OverlayStyles';
import ButtonSubmit from '@/components/ui/button-submit';
import { useFormState } from 'react-dom';
import { postProject } from '@/actions/project/project-create';
import HandleNavigate from '@/hooks/handle-navigate';


const Page = () => {
    const [state, formAction] = useFormState<any, FormData>(postProject, undefined);
    HandleNavigate(state, "/project")
    return (
        <Box component={'form'} className='flex flex-col gap-3' action={formAction} encType="multipart/form-data">
            <ImageAndTitle name={'title_desktop'} />
            <div className='flex items-start w-full justify-between flex-col sm:flex-row p-[26px] gap-y-10'>
                <div className='flex flex-col gap-y-10 w-full sm:w-2/3'>
                    <Title name={'title_mobile'} />
                    <Description />
                    <div className='flex flex-col gap-y-10'>
                        <Status />
                        <div className='flex flex-col gap-y-5'>
                            <DateComponent label="Started at:" name="created_at" />
                            <DateComponent label="ended at:" name="ended_at" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        <CategoryProjectMenu />
                        <ProjectSkillsData />
                    </div>
                </div>
                <div className="flex flex-col gap-y-9 w-full sm:w-1/3 ">
                    <ProjectLinksComponent />
                    <ButtonSubmit
                        btnStyle={{ bgcolor: "success.main", ":hover": { bgcolor: "#00d25b" }, ...btnStyle, width: "auto" }}
                    >
                        Add a new Project
                    </ButtonSubmit>
                </div>
            </div>
        </Box>
    )
}

export default Page
