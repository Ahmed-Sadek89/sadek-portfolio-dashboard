"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const editCategorySkill = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const id = formData.get("id") as string
    const category_name = formData.get("category_name") as string

    if (category_name.trim().length === 0) {
        return { status: "Link type is required" };
    }

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/category_skill/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                category_name,
                awner_id: session.user.id
            }),
        })

        let result = await response.json();

        if (result.status !== 200) {
            return { status: result.message };
        }
        revalidatePath("/category_skill");
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { error: error.message };
    }
};
