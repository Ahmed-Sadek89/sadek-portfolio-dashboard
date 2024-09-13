"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const removeSkill = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const id = formData.get("id") as string
    const category_id = formData.get("category_id") as string

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/skill/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                awner_id: session.user.id
            }),
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
