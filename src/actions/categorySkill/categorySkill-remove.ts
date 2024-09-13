"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const removeCategorySkill = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {
    const session = await getSession();
    const id = formData.get("id") as string;

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/category_skill/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                awner_id: session.user.id
            }),
        })

        if (!response.ok) {  // if there is a problem ((remove the session)) and ((redirect to '/login'))
            session.destroy()
            redirect("/login");
        }
        revalidatePath("/category_skill");

    } catch (error: any) {
        console.log({ error: error.message })
    }
};
