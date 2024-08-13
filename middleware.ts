import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
    const session = await getToken({
        req,
        secret: process.env.AUTH_SECRET as string,
        salt: ""
    });
    const { pathname } = req.nextUrl;


    const publicPaths = [
        "/login",
        "/register",
        "forget-password",
        "/api/auth",
        "/_next/static",
        "/_next/image",
    ];


    const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

    if (!isPublicPath && !session) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(loginUrl);
    }


    return NextResponse.next();
}

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ["/", "/terms", "/contact", "/dashboard", "/profile"],
};