import { NextRequest,NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/' || path === '/about'|| path ==='/login' || path === '/administrator' || path === '/contact' || path === '/doctor' || path === '/gallery' || path === '/services' || path === '/specialist' || path === '/staff' || path === '/signup'

    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/warning',request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
      }


}

export const config = {
    matcher: [
      '/',
      '/about',
      '/login',
      '/administrator',
      '/contact',
      '/doctor',
      '/gallery',
      '/services',
      '/specialist',
      '/staff',
      '/appointment',
      '/signup',
      '/warning',
    ],
  }