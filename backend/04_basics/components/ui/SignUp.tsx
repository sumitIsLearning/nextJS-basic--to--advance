"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUpCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignIn() {
    const response = await axios.post("http://localhost:3000/api/v1/signin", {
      username,
      password,
    });

    if(response.status === 200) {
      router.push("/signin");
    }

  }

  return (
    <div className="border border-gray-300 px-6 py-10 shadow-md rounded-md flex flex-col justify-center items-center gap-5">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-transparent p-3 border border-gray-100 rounded-md"
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-transparent p-3 border border-gray-100 rounded-md"
        type="password"
        placeholder="password"
      />
      <button
        onClick={handleSignIn}
        className="border border-gray-300 shadow-sm px-8 py-3 m-2 w-full rounded"
      >
        SignUp
      </button>
    </div>
  );
}
