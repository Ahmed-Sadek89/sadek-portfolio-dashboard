"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const postSkill = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const category_id = formData.get("category_id") as string
    const title = formData.get("title") as string
    const icon = formData.get("icon") as File
    formData.append("awner_id", session.user.id?.toString() as any)

    if (title.trim().length === 0 ||  icon.size === 0) {
        return { status: "title and icon are required" };
    }
    if (icon.type.split('/')[0] !== 'image') {
        return { status: "Required image only!" };
    }
    console.log({category_id, title,  icon})
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/skill`, {
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
        revalidatePath(`/category_skill/${category_id}`);
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { status: "Link is required" };
    }
};
