import { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_ID as string,
            clientSecret: process.env.DISCORD_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username:",
                    type:"text",
                    placeholder: "input your username"
                },
                password: {
                    label: "Password:",
                    type:"password",
                },
            },
            async authorize(credentials) {
                const bodyData = {
                    username: credentials?.username,
                    password: credentials?.password,
                }
                const response = await fetch(`${process.env.NEXT_API_URL}auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bodyData)
                })
                const data = await response.json();
                return data;
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return {  ...token, ...user };
        },
        async session({ session, token, user }: any) {
            session.user = token.data;
            return session;
        }
    }
}