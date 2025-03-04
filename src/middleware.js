import { NextResponse } from "next/server";

export function middleware(request) {
    let cookie = request.cookies.get('__Secure-next-auth.session-token');
    let pathName = request.nextUrl.pathname;

    // if (pathName.includes('api')) {
    //     return NextResponse.next();
    // };

    if (!cookie) {
        return NextResponse.redirect(new URL(`/signin?redirect=${pathName}`, request.url))
    };

    return NextResponse.next();
}

export const config = {
    matcher: ['/my-bookings/:path*', '/services/:path*']
}