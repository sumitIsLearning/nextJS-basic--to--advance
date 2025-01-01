// "use client";
// import { SessionProvider, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return (
      <div>
        <Link href={"/api/auth/signin"}>
          <button>SignIn</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>you logged is with {JSON.stringify(session)}</div>
      {/* <SessionProvider>
        <Button />
      </SessionProvider> */}
    </div>
  );
}

/* this is the part where you use client side rendering using useSession */
// function Button() {
//   const router = useRouter();
//   const { data: session, status } = useSession({
//     required: true,
//     onUnauthenticated() {
//       router.push("/api/auth/signin");
//     },
//   });

//   if (status === "loading") {
//     return <div>loading...</div>;
//   }

//   return (
//     <div>
//       <div>user is logged in with {session.user?.email}</div>
//       <button className="border border-gray-300 rounded m-2 p-3" onClick={() => signOut()}>logOut</button>
//     </div>
//   );
// }
