"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const removePlan = async (
    formData: FormData
) => {
    const session = await getSession();
    const id = formData.get("id") as string
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/plan/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            }
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
