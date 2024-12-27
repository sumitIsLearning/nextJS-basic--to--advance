
/* here the difference between export and export default is very important to know
if you don't, let te tell you in short
- when you do export default , which we have done when we were handling frontend and defining our components. this mean that you can import it like this
import UserCard from '@/components/UserCard'
and you cannot do this import {UserCard} from '@/components/UserCard'
 - when you do export component , you do vice versa
 eg. import {UserCard} from '@/components/UserCard' (can do) / import UserCard from '@/components/UserCard' (cannot do) */

import { NextResponse } from "next/server";


 export function GET() {
    return NextResponse.json({
        name:"Sumit Chakraborty",
        email:"sumit123@gmail.com",
        address:{
            city:"Lumding",
            state:"Assam",
            houseNumber:30
        }
    })
 }