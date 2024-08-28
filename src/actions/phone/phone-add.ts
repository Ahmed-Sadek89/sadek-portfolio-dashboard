"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const postPhone = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const phone_number = formData.get("phone_number") as string

    if (phone_number.trim().length === 0) {
        return { error: "phone number is required" };
    }

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/phone`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                phone_number,
                awner_id: session.user.id
            }),
        })

        let result = await response.json();

        if (result.status !== 200) {
            return { status: result.message };
        }
        revalidatePath("/phone");
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { error: error.message };
    }
};
