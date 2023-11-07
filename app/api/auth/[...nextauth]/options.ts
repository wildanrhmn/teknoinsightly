import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const baseurl = process.env.NEXT_API_URL;

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
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
                const response = await fetch(`${baseurl}auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bodyData),
                });
                const data = await response.json();
                return data;
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, trigger, session }: any) {
            if(trigger === 'update'){    
                const response = await fetch(`${baseurl}auth/refresh`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token.data.accessToken}`,
                    },
                    body: JSON.stringify({ refreshToken: token.data.refreshToken }),
                })
                const newToken = await response.json()
                return {  ...newToken, ...user }
            }
            return {  ...token, ...user };
        },
        async session({ session, token, user }: any) {
            session.user = token.data;
            return session;
        }
    },
    pages: {
        signIn: "/signin",
    }
}