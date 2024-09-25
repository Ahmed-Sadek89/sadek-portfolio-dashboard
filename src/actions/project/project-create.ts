"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const postProject = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    formData.append("awner_id", session.user.id?.toString() as any)
    const created_at = formData.get("created_at") as string
    const ended_at = formData.get("ended_at") as string
    formData.delete('created_at')
    formData.delete('ended_at')
    formData.append("created_at", new Date(created_at).toISOString() as any)
    formData.append("ended_at", new Date(ended_at).toISOString() as any)

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/project`, {
            method: "POST",
            headers: {
                "Authorization": `${session.Authorization}`
            },
            body: formData,
        })

        let result = await response.json();

        if (result.status !== 200) {
            return { status: result.message };
        }
        revalidatePath(`/project`);
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
    }
};
