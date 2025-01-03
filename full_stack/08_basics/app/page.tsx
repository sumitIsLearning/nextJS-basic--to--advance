import AuthUser from "@/components/AuthButton"

import React from "react"

export default function Home() {
  return <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
    <h1 className="text-xl font-bold font-mono">hi there</h1>
    <AuthUser />
  </div>
}