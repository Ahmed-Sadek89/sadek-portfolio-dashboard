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
import { project } from '@/types';


const EditProject = ({ projectById }: { projectById: project }) => {

    return (
        <Box component={'form'} className='flex flex-col gap-3' encType="multipart/form-data">
            <ImageAndTitle
                name={'title_desktop'}
                defaultTitle={projectById.title}
                defaultImage={projectById.attachment}
            />
            <div className='flex items-start w-full justify-between flex-col sm:flex-row p-[26px] gap-y-10'>
                <div className='flex flex-col gap-y-10 w-full sm:w-2/3'>
                    <Title name={'title_mobile'} defaultTitle={projectById.title} />
                    <Description defaultDescription={projectById.description} />
                    <div className='flex flex-col gap-y-10'>
                        <Status defaultStatus={projectById.status} />
                        <div className='flex flex-col gap-y-5'>
                            <DateComponent label="Started at:" name="created_at" defaultDate={projectById.created_at} />
                            <DateComponent label="ended at:" name="ended_at" defaultDate={projectById.ended_at} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        <CategoryProjectMenu defaultCategoryProject={projectById.category_project.id} />
                        <ProjectSkillsData />
                    </div>
                </div>
                <div className="flex flex-col gap-y-9 w-full sm:w-1/3 ">
                    <ProjectLinksComponent
                        defaultLiveURL={projectById.live_url}
                        defaultRepoURL={projectById.repo_url}
                    />
                    <ButtonSubmit
                        btnStyle={{ bgcolor: "info.main", ":hover": { bgcolor: "#0dcaf0" }, ...btnStyle, width: "auto" }}
                    >
                        Edit Project #{projectById.id}
                    </ButtonSubmit>
                </div>
            </div>
        </Box>
    )
}

export default EditProject
