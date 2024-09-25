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


const Page = () => {
    const [state, formAction] = useFormState<any, FormData>(postProject, undefined);
    // const handleSubmit = (formData: FormData) => {
    //     // all are OK, send them to backend server
    //     const attachment = formData.get("attachment")
    //     const title = formData.get("title")
    //     const description = formData.get("description")
    //     const created_at = formData.get("created_at")
    //     const ended_at = formData.get("ended_at")
    //     const status = formData.get("status")
    //     const category_project_id = formData.get("category_project_id")
    //     const category_skills_id = formData.get("category_skills_id")
    //     const skills_id = formData.get("skills_id")
    //     const live_url = formData.get("live_url")
    //     const repo_url = formData.get("repo_url")
    //     console.log({ attachment, title, description, created_at, ended_at, status, category_project_id, category_skills_id, skills_id, live_url, repo_url })
    // }
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
