import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyJwt } from "./utils/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isProtected = request.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected) {
    const payload = token ? await verifyJwt(token) : null;
    if (!payload) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  mather: ["/dashboard/:path"],
};
