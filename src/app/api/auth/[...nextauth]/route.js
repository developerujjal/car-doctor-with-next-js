import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


// export const authOptions = {
//     session: {
//         strategy: "jwt",
//         maxAge: 30 * 24 * 60 * 60, // 30 days
//     },
//     providers: [

//     ],
//     pages: {
//         signI
//     },
//     callbacks: {

//     }
// }


const handler = NextAuth({
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
                console.log("This is Manual Login: ", credentials)

                const { email, password } = credentials;

                if (!email || !password) {
                    return null // Better to provide meaningfull message
                }

                const db = await dbConnect();
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null //Better to provide meaningfull message
                }

                const matchedPassword = bcrypt.compareSync(password, currentUser?.password);
                if (!matchedPassword) {
                    return null //Better to provide meaningfull message
                }


                return currentUser;
            }
        })
    ],
    pages: {
        signIn: '/signin'
    },
    callbacks: {

    }
})


export { handler as GET, handler as POST }