"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const editLink = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const id = formData.get("id") as string
    const link_type_id = formData.get("link_type_id") as string
    const title = formData.get("title") as string
    const link = formData.get("link") as string
    formData.append("awner_id", session.user.id?.toString() as any)
    formData.delete("id");

    if (title.trim().length === 0 || link.trim().length === 0) {
        return { status: "title and link and icon are required" };
    }
   
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/link/${id}`, {
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
        revalidatePath(`/link_type/${link_type_id}`);
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { status: "Link type is required" };
    }
};
