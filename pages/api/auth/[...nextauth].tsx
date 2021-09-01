import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { verifyPassword } from "../../../lib/auth/passwords"
import { _getAccount, _createAccount } from "../account/_operations"
import { hashPassword } from "@lib/auth/passwords"

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  providers: [
    Providers.Credentials({
      name: "Basic",
      credentials: {
        email: { label: "Email Address", type: "email", placeholder: "john.doe@example.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your super secure password",
        },
      },
      async authorize(credentials) {
        let user = await _getAccount({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            email: true,
            password: true,
            name: true,
          },
        })

        if (!user) {
          const { email, password } = credentials

          if (!email || !email.includes("@")) {
            throw new Error("Invalid email")
          }

          if (!password || password.trim().length < 12) {
            throw new Error("Invalid input - password should be at least 12 characters long.")
          }

          user = await _createAccount({
            data: {
              email: credentials.email,
              password: await hashPassword(credentials.password),
            },
          })
        } else {
          const isValid = await verifyPassword(credentials.password, user.password)

          if (!isValid) {
            throw new Error("Incorrect password")
          }
        }

        return {
          id: user.id,
          username: user.email,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // Add username to the token right after signin
      if (user?.username) {
        token.id = user.id
        token.username = user.username
      }
      return token
    },
    async session(session, token) {
      session.user = session.user || {}
      session.user.id = token.id
      session.user.username = token.username
      return session
    },
  },
})
