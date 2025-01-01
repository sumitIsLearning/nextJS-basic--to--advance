import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({ 
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials, req) => {
                const username = credentials?.username;
                const password = credentials?.password;

                // hit the db to check if this username exists and password matches

                const user = {
                    id:"1",
                    name:"sumit",
                    email:"sumit@gmail.com"
                } 

                if (user) {
                    return user
                } else {
                    return null
                }
            }

            
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export {
    handler as GET,
    handler as POST
}