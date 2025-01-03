import { NextRequest, NextResponse } from "next/server";

export function logger(req:NextRequest){
    console.log(`[LOG]: ${req.method} / ${req.url} / ${Date.now()}`)
    return NextResponse.next();
}