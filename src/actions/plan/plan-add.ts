"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postPlan = async (
    plan: string
) => {
    const session = await getSession();

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/plan`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                plan,
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
