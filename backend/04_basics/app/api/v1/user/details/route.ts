import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name:"Sumit Chakraborty",
        email:"sumit123@gmail.com",
        address:{
            city:"Lumding",
            state:"Assam",
            houseNumber:"1102"
        }
    })    
}