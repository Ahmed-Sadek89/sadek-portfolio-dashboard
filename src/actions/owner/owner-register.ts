"use server";

export const register = async (
    prevState: {
        status: undefined | string
    },
    formData: FormData
) => {
    const name = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!name) {
        return { status: "Username is required" };
    }
    if (!email) {
        return { status: "Email is required" };
    }
    if (!password) {
        return { status: "Password is required" };
    }
    if (password.length < 6 || password.length > 25) {
        return { status: "Password must be from 6 to 25 characters" };
    }
    console.log({ name, email, password })
    try {
        const res = await fetch(`${process.env.BACKEND_LINK}/awner/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })

        const user = await res.json();
        console.log({ user })
        if (user.status !== 200) {
            return { status: user.message };
        }
        return { status: "success" }

    } catch (error: any) {
        console.log(error.message)
    }
}