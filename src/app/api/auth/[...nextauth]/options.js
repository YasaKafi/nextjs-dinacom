import NextAuth from 'next-auth';
import CredentialsProvider  from 'next-auth/providers/credentials';
import login from "@/app/lib/services/endpoint/auth/login";


export const options = {
    providers: [
        CredentialsProvider({
            name: "Laravel",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "johndoe@example.com" },
                password: {  label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const user = await login({email: credentials.email, password: credentials.password});
                if (user) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.exp = Math.floor(Date.now() / 1000) + 60 * 60;
            }
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    session: {
        jwt: true,
        maxAge: 60,
    },
    jwt: {
        maxAge: 60,
    },
}