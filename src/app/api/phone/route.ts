"use server"
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async () => {
    let phones
    try {
        const session = await getSession();
        const response = await fetch(`${process.env.BACKEND_LINK}/phone/all/${session.user.id}`, {
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

        phones = await response.json();
        console.log({phones})
        revalidatePath("/phone")
        return  NextResponse.json(phones, { status: phones.status })
    } catch (error: any) {
        console.error("Failed to fetch phones data:", error.message);
        return  NextResponse.json(phones, { status: phones.status })

    }
};
