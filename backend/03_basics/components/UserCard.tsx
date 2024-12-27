import React from "react";
import axios from "axios";

interface IUser {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
    houseNumber: number;
  };
}

export default async function UserCard (){
  const response = await axios.get<IUser>(
    "http://localhost:3000/api/v1/user/details"
  );

  await new Promise((res) => setTimeout(res, 5000)); // this keep the thread stuck here for 5 sec

  const userInfo: IUser = response.data;

  return (
    <div>
      <div className="border border-gray-300 shadow-md rounded-md px-5 py-8">
        <h1 className="mb-2">Name: {userInfo.name}</h1>
        <p className="mb-1">Email: {userInfo.email}</p>
      </div>
    </div>
  );
};
