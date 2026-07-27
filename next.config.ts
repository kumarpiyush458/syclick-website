import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("🔥 Proxy running:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};