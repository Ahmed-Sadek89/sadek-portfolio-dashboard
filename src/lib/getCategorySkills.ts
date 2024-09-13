"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";
import { categorySkill } from "@/types";

export const getCategorySkills = async (): Promise<categorySkill[] | undefined> => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/category_skill/all?awner_id=${session.user.id}`, {
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

        const { category_skills } = await response.json();
        return category_skills;
    } catch (error: any) {
        console.error("Failed to fetch linke types data:", error.message);
    }
};
