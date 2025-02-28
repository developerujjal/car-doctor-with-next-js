import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // })

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent", // Force the consent screen every time
                    access_type: "online", // No need for offline access
                    response_type: "code", // Use authorization code flow
                },
            },
        }),
    ],
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log('SIGNIN ACC: ', account)
            if (account.provider === "google") {
                try {
                    const db = await dbConnect();
                    const userCollection = await db.collection("users");
                    const userExsit = await userCollection.findOne({ email: user?.email })
                    if (!userExsit) {
                        await userCollection.insertOne(user);
                        return user;
                    } else {
                        return user;
                    }

                } catch (error) {
                    console.log(error)
                }
            } else {
                return user;
            }
        },

        async jwt({ token, user, account, profile, isNewUser }) {
            if (account) {
                console.log("TOKEN:", token)
                console.log("USER:", user)
                console.log("ACCOUNT:", account)
                token.refresh_token = account?.refresh_token;
            }
            return token
        },

        async session({ session, token }) {
            console.log("SESSION session: ", session)
            console.log("SESSION token: ", token)
            return session
        },

        async redirect({ url, baseUrl }) {
            // Redirect to the homepage after login
            return `${baseUrl}/`;
        },
    }
};

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }