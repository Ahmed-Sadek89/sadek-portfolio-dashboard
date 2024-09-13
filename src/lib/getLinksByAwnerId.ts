"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";

export const getLinksByAwnerId = async () => {
    const session = await getSession();
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/link/all/${session.user.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            "cache": "no-store"
        });

        if (!response.ok) {  // if there is a problem ((remove the session)) and ((redirect to '/login'))
            session.destroy()
            redirect("/login");
        }

        const { links } = await response.json();
        return links;
    } catch (error: any) {
        console.error(`Failed to fetch links by awner id number ${session.user.id} data:`, error.message);
    }
};
