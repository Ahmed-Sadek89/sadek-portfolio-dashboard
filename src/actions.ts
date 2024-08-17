"use server";

import { sessionOptions, SessionData } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    return session;
};

export const login = async (
    prevState: {
        error: undefined | string
    },
    formData: FormData
) => {
    const session = await getSession();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // CHECK USER IN THE DB
    const res = await fetch(`${process.env.BACKEND_LINK}/awner/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })

    const user = await res.json();
    if (user.status !== 200) {
        return { error: user.result };
    }

    session.userId = user.result.id
    session.Authorization = user.result.Authorization

    await session.save();
    redirect("/");
};

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/login");
};