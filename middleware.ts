import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/" || path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";
  const len = process.env.TOKEN_LENGTH!;

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // console.log(isPublicPath && token.length > +len, " " + path);
  if (path === "/tasks" && token.length > +len) {
    return NextResponse.redirect(new URL("/tasks/task", request.url));
  }
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/tasks/task", request.url));
  }
}

export const config = {
  matcher: ["/tasks/:path*", "/login", "/signup", "/"],
};
