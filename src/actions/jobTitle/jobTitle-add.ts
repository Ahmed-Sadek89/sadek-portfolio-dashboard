"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const postJobTitle = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const title = formData.get("title") as string

    if (title.trim().length === 0) {
        return { error: "Job title is required" };
    }

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/job_title`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                title,
                awner_id: session.user.id
            }),
        })

        let result = await response.json();

        if (result.status !== 200) {
            return { status: result.message };
        }
        revalidatePath("/job_title");
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { error: error.message };
    }
};
