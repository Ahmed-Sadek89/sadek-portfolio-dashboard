"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";
import { project } from "@/types";

export const getAllProjects = async (): Promise<project[] | undefined> => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/project/all?awner_id=${session.user.id}`, {
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

        const { projects } = await response.json();
        return projects;
    } catch (error: any) {
        console.error("Failed to fetch all projects data:", error.message);
    }
};
