import React from 'react'
import {IUser} from '@/app/user/page'

interface IUserInfo {
    userInfo:IUser
}

export default function UserCard({userInfo}:IUserInfo) {
    return (
        <div className="border border-gray-300 px-4 py-8 rounded-md shadow-md">
            <h1 className="mb-2">Name: {userInfo.name}</h1>
            <p className="mb-2">Email: {userInfo.email}</p>
        </div>
    )
}
