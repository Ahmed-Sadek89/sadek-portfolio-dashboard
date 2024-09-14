"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";
import { categoryProject } from "@/types";

export const getCategoryProject = async (): Promise<categoryProject[] | undefined> => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/category_project/all?awner_id=${session.user.id}`, {
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

        const { category_projects } = await response.json();
        return category_projects;
    } catch (error: any) {
        console.error("Failed to fetch categoru projects data:", error.message);
    }
};
