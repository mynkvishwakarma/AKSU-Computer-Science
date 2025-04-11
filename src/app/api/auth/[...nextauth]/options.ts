import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const options = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password }: any = credentials;

        let user = await prisma.user.findUnique({
          where: { email },
        });

        // If not found in user table, check in faculty table
        if (!user) {
          user = await prisma.faculty.findUnique({
            where: { email },
          });
        }

        if (user && user.password) {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user; // Successfully authenticated
          }
        }

        return null; // Authentication failed
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/Login", // Custom sign-in page
  },
};
