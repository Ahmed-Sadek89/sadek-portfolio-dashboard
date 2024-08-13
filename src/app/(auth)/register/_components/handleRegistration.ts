import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";

type props = {
    values: { email: string, username: string, password: string },
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    router: AppRouterInstance
}
export const handleRegistration = async ({ values, setLoading, setError, router }: props) => {
    const formData = new FormData();
    formData.append("name", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    setLoading(true)
    setError("")
    try {
        let user: any = await fetch('/api/awner/register', {
            method: "POST",
            body: formData
        })
        user = await user.json()
        setLoading(false)
        if (user.status !== 200) {
            setError(user.message)
        } else {
            setError("")
            router.push('/login')
        }
    } catch (error: any) {
        setLoading(false)
        setError(error.message)
    }
}