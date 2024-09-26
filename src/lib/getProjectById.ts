"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";
import { project } from "@/types";

export const getProjectById = async (id: string): Promise<project | undefined> => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/project/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
        });

        if (!response.ok) {  // if there is a problem ((remove the session)) and ((redirect to '/login'))
            session.destroy()
            redirect("/login");
        }

        const { project } = await response.json();
        return project;
    } catch (error: any) {
        console.error("Failed to fetch project data:", error.message);
    }
};
