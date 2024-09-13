"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";
import { skills } from "@/types";

export const getSkillsByAwnerId = async ():Promise<skills[] | undefined> => {
    const session = await getSession();
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/skill/all/${session.user.id}`, {
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

        const { skills } = await response.json();
        return skills;
    } catch (error: any) {
        console.error(`Failed to fetch skill by awner id number ${session.user.id} data:`, error.message);
    }
};
