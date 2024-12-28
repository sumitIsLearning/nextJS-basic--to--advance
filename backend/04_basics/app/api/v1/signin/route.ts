import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    console.log(username, password);

    return NextResponse.json({
        message: "You have Successfully signIn"
    })

}