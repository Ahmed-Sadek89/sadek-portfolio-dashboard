"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";

export const getJobTitles = async () => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/job_title/all/${session.user.id}`, {
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

        const { job_titles } = await response.json();
        return job_titles;
    } catch (error: any) {
        console.error("Failed to fetch job titles data:", error.message);
    }
};
