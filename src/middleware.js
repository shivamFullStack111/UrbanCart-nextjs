import axios from "axios";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./app/utils";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const currentPath = request.nextUrl.pathname;
  const token = request.cookies.get("token_urbancart")?.value;

  if (currentPath === "/login" || currentPath === "/register") {
    if (token) {
      return NextResponse.redirect(
        new URL(`${request.nextUrl.origin}/`, request.url)
      );
    }
  } else {
    if (!token) {
      return NextResponse.redirect(
        new URL(`${request.nextUrl.origin}/login`, request.url)
      );
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/cart", "/login", "/register"],
};
