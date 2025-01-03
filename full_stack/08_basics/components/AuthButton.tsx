"use client";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthUser() {
  return (
    <SessionProvider>
      <AuthButton />
    </SessionProvider>
  );
}

function AuthButton() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated";
  }

  return (
    <div>
      <button className="bg-white text-black p-2 rounded-md font-medium hover:scale-95 transition transform duration-50" onClick={() => signOut()}>
        LogOut
      </button>
    </div>
  );
}
