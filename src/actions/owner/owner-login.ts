"use server";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

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
    try {
        const res = await fetch(`${process.env.BACKEND_LINK}/awner/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
        })

        const user = await res.json();
        if (user.status !== 200) {
            return { error: user.result };
        }

        const { Authorization, ...others } = user.result
        session.user = others
        session.Authorization = user.result.Authorization

        await session.save();
        // console.log({ session })
        redirect("/");
    } catch (error: any) {
        console.log(error.message)
    }
};
