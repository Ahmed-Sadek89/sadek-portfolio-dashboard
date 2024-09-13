"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";
import { skills } from "@/types";

export const getSkillsCategoryId = async (category_id: number): Promise<skills[] | undefined> => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/skill/${category_id}`, {
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
        console.error(`Failed to fetch skills by category skills number ${category_id} data:`, error.message);
    }
};
