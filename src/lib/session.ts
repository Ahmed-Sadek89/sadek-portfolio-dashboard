"use server"
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionOptions } from "iron-session";


interface SessionData {
    user: {
        id?: number,
    },
    Authorization?: string
}


const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "sadek-portfolio-dashboard-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    return session;
};