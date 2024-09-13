"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const removeLink = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const id = formData.get("id") as string
    const link_type_id = formData.get("link_type_id") as string

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/link/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                awner_id: session.user.id
            }),
        })

        let result = await response.json();

        if (result.status !== 200) {
            return { status: result.message };
        }
        revalidatePath(`/link_type/${link_type_id}`);
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { status: "Link type is required" };
    }
};
