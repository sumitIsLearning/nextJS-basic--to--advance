import UserCard from "@/components/UserCard";
import axios from "axios";
import React from "react";

export interface IUser {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
    houseNumber: string;
  };
}

export default async function User() {
  const response = await axios.get<IUser>(
    "http://localhost:3000/api/v1/user/details"
  );

  const userInfo: IUser = response.data;

  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
      <UserCard userInfo={userInfo} />
    </div>
  );
}
