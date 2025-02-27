import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                // console.log("This is Manual Login: ", credentials);

                const { email, password } = credentials;

                // Check if email and password are provided
                if (!email || !password) {
                    throw new Error("Email and password are required");
                }


                try {
                    const db = await dbConnect();
                    const currentUser = await db.collection('users').findOne({ email });

                    // Check if user exists
                    if (!currentUser) {
                        return null;
                    }

                    // Compare the passwords (bcrypt.compare is async)
                    const matchedPassword = await bcrypt.compare(password, currentUser?.password);
                    if (!matchedPassword) {
                        throw new Error("Incorrect password");
                    }

                    // Return user details upon successful login
                    return currentUser;
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null; // You might want to handle errors differently here
                }
            }
        })
    ],
    pages: {
        signIn: '/signin'
    },
    callbacks: {

    }
};

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }