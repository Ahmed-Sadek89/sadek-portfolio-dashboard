import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" }, 
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`http://127.0.0.1:4000/auth/login/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        const data = await res.json();
        console.log("Ответ от API:", data);

        if (res.ok) {
          return {
            id: data.user.id,
            username: data.user.username,
            email: data.user.email,
            accessToken: data.access, 
            refreshToken: data.refresh,
          } as any;
        }

        if (!res.ok) {
          console.error("API request error:", data);
          return null; 
        }
      },
    }),
  ],
});