"use server"
import { redirect } from "next/navigation";
import { getSession } from "./session";

export const getAwnerById = async () => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/awner/${session.user.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
                // "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImVtYWlsIjoiYS5zYWRlazg5QHlhaG9vLmNvbSIsImlhdCI6MTcyMzkyOTE0MywiZXhwIjoxNzI0MDE1NTQzfQ.nhRfBVf15wH01qE9TtRc6zrHvFefUCCmMK9Tiv8F01g`,
            },
        });

        if (!response.ok) {  // if there is a problem ((remove the session)) and ((redirect to '/login'))
            session.destroy()
            redirect("/login");
        }

        const { awner } = await response.json();
        return awner;
    } catch (error: any) {
        console.error("Failed to fetch awner data:", error.message);
    }
};
