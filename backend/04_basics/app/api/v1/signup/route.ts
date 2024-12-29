import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    if(!username || !password) {
        return NextResponse.json({
            message:"All the fields required"
        },{
            status:400
        })
    }

    console.log(username, password);

    return NextResponse.json({
        message: "You have Successfully signUp"
    })

}