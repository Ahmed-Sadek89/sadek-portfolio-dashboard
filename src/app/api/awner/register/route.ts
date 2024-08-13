import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    let user
    try {
        const formData = await req.formData()


        user = await fetch(`${process.env.BACKEND_LINK}/awner/register`, {
            method: "POST",
            body: formData
        })
        user = await user.json()
        return NextResponse.json(user, { status: user.status })
    } catch (error: any) {
        return NextResponse.json(user, { status: user.status })

    }
}