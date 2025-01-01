import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function POST(req:NextRequest) {
     try{
        const {username , password} = await req.json();

        // check in db if user exists
        const userId = 1;
        const token = await jwt.sign({
            userId,
            timestamp:Date.now()
        }, "someSecrectKeyThatIdontEvenKnow")

        return NextResponse.json({
            token:token
        },{status:200})

     }catch(error:any) {
        console.log(`An Error Occured:${error}`);
        return null;
     }
}