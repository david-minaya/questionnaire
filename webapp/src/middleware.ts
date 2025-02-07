import { NextRequest, NextResponse } from 'next/server'
import { User } from '@/types/user';
import { isAuth } from './actions/isAuth';
import { cookies } from 'next/headers';
 
export default async function middleware(req: NextRequest) {

  const auth = await isAuth();
  const path = req.nextUrl.pathname
  const cookieStore = await cookies();
  const userCookie = req.cookies.get('user');
  const user = userCookie ? JSON.parse(userCookie.value) as User : undefined;

  if (!auth && userCookie) {
    cookieStore.delete('session');
    cookieStore.delete('user');
    return NextResponse.redirect(new URL('/unauth', req.nextUrl))
  }

  if (path === '/') {

    if (user?.role === 'user') {
      return NextResponse.redirect(new URL('/user', req.nextUrl))
    } else if (user?.role === 'admin') {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    } else {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

  } else if (path.startsWith('/admin') && user?.role !== 'admin') {
    
    return NextResponse.redirect(new URL('/', req.nextUrl))
  
  } else if (path.startsWith('/user') && user?.role !== 'user') {
  
    return NextResponse.redirect(new URL('/', req.nextUrl))
  } 

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/user/:path*', '/admin'],
}
