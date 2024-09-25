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
