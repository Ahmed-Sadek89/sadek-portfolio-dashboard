"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const editSkill = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const id = formData.get("id") as string
    const category_id = formData.get("category_id") as string
    const title = formData.get("title") as string
    formData.append("awner_id", session.user.id?.toString() as any)
    formData.delete("id");
    
    if (title.trim().length === 0) {
        return { status: "title and icon are required" };
    }

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/skill/${id}`, {
            method: "PUT",
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
        return { status: "Link type is required" };
    }
};
