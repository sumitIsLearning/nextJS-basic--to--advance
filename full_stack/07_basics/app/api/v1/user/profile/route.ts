import { NextRequest, NextResponse } from "next/server";


export function GET(req:NextRequest) {
    
    return NextResponse.json({
        avatarUrl:"https://google.com/search?q=cat.jpg"
    })
}