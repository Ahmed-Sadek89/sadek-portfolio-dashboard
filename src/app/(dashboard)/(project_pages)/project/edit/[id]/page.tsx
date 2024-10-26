import { getProjectById } from '@/lib/getProjectById';
import EditProject from './_components/EditProject';
import { redirect } from 'next/navigation';

type props = {
    params: {
        id: string
    }
}

const page = async ({ params }: props) => {
    const projectById = await getProjectById(params.id)
    if (!projectById?.id) {
        redirect("/project")
    }
    return (
        <EditProject projectById={projectById}/>
    )
}

export default page
