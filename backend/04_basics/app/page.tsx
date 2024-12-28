import React from "react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-extrabold font-sans">This is Home page</h1>
      <div>
        <Link href={"/signin"}>
          <button className="border border-gray-300 shadow-sm px-8 py-4 m-2 rounded">
            signIn
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="border border-gray-300 shadow-sm px-8 py-4 m-2 rounded">
            signUp
          </button>
        </Link>
      </div>
    </div>
  )
}