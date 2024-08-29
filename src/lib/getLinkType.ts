"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";

export const getLinkType = async () => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/link_type/all/${session.user.id}`, {
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

        const { linkType } = await response.json();
        return linkType;
    } catch (error: any) {
        console.error("Failed to fetch linke types data:", error.message);
    }
};
