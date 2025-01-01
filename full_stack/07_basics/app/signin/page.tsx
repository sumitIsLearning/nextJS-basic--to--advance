'use client'
import axios from "axios";
import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username:username,
        password:password
    });

    localStorage.setItem("token" , res.data.token);

  }

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />

      <button onClick={handleSignIn}>SignIn</button>
    </div>
  );
}
