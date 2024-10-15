import axios from "axios";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const currentPath = request.nextUrl.pathname;
  const token = request.cookies.get("token_urbancart")?.value;

  // Check if token exists
  // if (token) {
  //   try {
  //     const res = await axios.get(
  //       `${request.nextUrl.origin}/api/isauthenticated`,
  //       {
  //         headers: { Authorization: token },

  //         timeout: 10000, // 10 seconds
  //       }
  //     );

  //     console.log(res.data.success);
  //     console.log(currentPath);

  //     // Redirect if user is authenticated and trying to access login/register
  //     if (currentPath === "/login" || currentPath === "/register") {
  //       if (res.data?.success) {
  //         console.log("User already authenticated, redirecting to home.");
  //         return NextResponse.redirect(new URL("/", request.url));
  //       }
  //     } else {
  //       // Redirect to login if not authenticated and trying to access protected route
  //       if (!res.data.success) {
  //         console.log("User not authenticated, redirecting to login.");
  //         return NextResponse.redirect(new URL("/login", request.url));
  //       }
  //     }
  //   } catch (error) {
  //     alert("Error in middleware:", error.message);
  //     // Optionally redirect to a fallback page if the API call fails
  //     return NextResponse.redirect(new URL("/error", request.url));
  //   }
  // } else {
  //   // If no token, redirect to login if trying to access protected routes
  //   if (currentPath !== "/login" && currentPath !== "/register") {
  //     console.log("No token, redirecting to login.");
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  // }
  console.log(currentPath, "orihginjrf :-", request.nextUrl.origin, token);
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
