import expressSession from 'express-session';

export function session() {
  return expressSession({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: { 
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      secure: process.env.COOKIE_SECURE === 'true',
    },
  });
}
