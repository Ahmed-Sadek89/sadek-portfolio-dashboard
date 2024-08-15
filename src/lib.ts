import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: number,
    Authorization?: string
}


export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "sadek-portfolio-dashboard-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}