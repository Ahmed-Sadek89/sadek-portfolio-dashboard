"use server"
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/login");
};