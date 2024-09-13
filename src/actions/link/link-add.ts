"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const postLink = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const link_type_id = formData.get("link_type_id") as string
    const title = formData.get("title") as string
    const link = formData.get("link") as string
    const icon = formData.get("icon") as File
    formData.append("awner_id", session.user.id?.toString() as any)

    if (title.trim().length === 0 || link.trim().length === 0 || icon.size === 0) {
        return { status: "title and link and icon are required" };
    }
    if (icon.type.split('/')[0] !== 'image') {
        return { status: "Required image only!" };
    }
    console.log({link_type_id, title, link, icon})
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/link`, {
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
        revalidatePath(`/link`);
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { status: "Link is required" };
    }
};
