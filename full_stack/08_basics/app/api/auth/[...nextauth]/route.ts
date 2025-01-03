import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({

      name: "Email",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "password" }
      },
      async authorize(credentials, req) {
        try {
          const username = credentials?.username;
          const password = credentials?.password;
      
          if (username === "test" && password === "pass") {
            return { id: "1", name: username, email: `${username}@example.com` };
          }
      
          throw new Error("Invalid credentials");
        } catch (error:any) {
          console.error("Authorization error:", error.message);
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

export {
  handler as GET,
  handler as POST
}