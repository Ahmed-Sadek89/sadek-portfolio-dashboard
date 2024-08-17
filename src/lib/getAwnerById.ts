"use server"
import { getSession } from "./session"

export const getAwnerById = async () => {
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/awner/${session.user.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { awner } = await response.json();
        return awner
    } catch (error) {
        console.error("Failed to fetch awner data:", error);
    }
}