import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


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
                console.log(credentials)
                return true;
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