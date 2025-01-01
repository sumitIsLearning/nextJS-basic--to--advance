'use client'
import axios from "axios"
import { useEffect, useState } from "react"


export default function Profile() {
    const [userProfile, setUserProfile] = useState("")

    async function handleDataCall() {
        const res = await axios.get("http://localhost:3000/api/v1/user/profile" , {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })

        setUserProfile(res.data.avatarUrl);
        
    }

    useEffect(() => {
        handleDataCall();

    }, [])

    return <div>
        {userProfile}
    </div>
}