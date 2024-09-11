"use server";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const editLinkType = async (
    prevState: {
        status: undefined | string,
    },
    formData: FormData,
) => {

    const session = await getSession();
    const id = formData.get("id") as string
    const link_type = formData.get("link_type") as string

    if (link_type.trim().length === 0) {
        return { status: "Link type is required" };
    }

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/link_type/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${session.Authorization}`
            },
            body: JSON.stringify({
                link_type,
                awner_id: session.user.id
            }),
        })

        let result = await response.json();

        if (result.status !== 200) {
            return { status: result.message };
        }
        revalidatePath("/link_type");
        return { status: "success" }

    } catch (error: any) {
        console.log({ error: error.message })
        return { error: error.message };
    }
};
