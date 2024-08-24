"use server"
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const logout = async () => {
    try {
        const session = await getSession();
        const res = await fetch(`${process.env.BACKEND_LINK}/activity`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                awner_id: session.user.id
            }),
        })

        if (!res.ok) {  // if there is a problem ((remove the session)) and ((redirect to '/login'))
            session.destroy()
            redirect("/login");
        }

        session.destroy();
        redirect("/login");

    } catch (error: any) {
        console.log({ error: error.message })
    }
};