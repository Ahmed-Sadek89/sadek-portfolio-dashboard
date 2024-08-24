"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const editPlan = async (
    formData: FormData
) => {
    const session = await getSession();
    const id = formData.get("id") as string
    const is_completed = formData.get("is_completed") as unknown as boolean

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/plan/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                is_completed: is_completed ? false : true,
                awner_id: session.user.id
            }),
        })

        if (!response.ok) {  // if there is a problem ((remove the session)) and ((redirect to '/login'))
            session.destroy()
            redirect("/login");
        }
        revalidatePath("/");
    } catch (error: any) {
        console.log({ error: error.message })
    }
};
