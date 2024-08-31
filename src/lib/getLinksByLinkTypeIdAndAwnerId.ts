"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";

export const getLinksByLinkTypeIdAndAwnerId = async (link_type_id: number) => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/link/${link_type_id}?awner_id=${session.user.id}`, {
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
        console.error(`Failed to fetch links by linke type number ${link_type_id} data:`, error.message);
    }
};
