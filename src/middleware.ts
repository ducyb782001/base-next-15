import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("token")?.value || "";
  const { pathname, origin } = req.nextUrl;
  if (!accessToken) {
    console.log(
      "🚀 ~ don't have middleware ~ pathname:",
      pathname,
      "origin: ",
      origin
    );

    // If the token is invalid and user already on the sign-in page,
    // redirect to /sign-in
    if (pathname !== "/login") {
      const loginUrl = new NextURL("/login", origin);
      return NextResponse.redirect(loginUrl);
    }
  } else {
    console.log("🚀 ~ middleware ~ pathname:", pathname, "origin: ", origin);

    // If token is valid and trying to access sign-in, redirect to dashboard
    if (pathname === "/login") {
      const dashboardUrl = new NextURL("/dashboard", origin);
      return NextResponse.redirect(dashboardUrl);
    }

    // Perform authorization checks
    const isAuthorized = authorizeUser(accessToken, pathname);

    if (!isAuthorized) {
      // Handle unauthorized access (e.g., redirect to access denied page)
      const errorUrl = new NextURL("/403", origin);
      return NextResponse.redirect(errorUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", // Protect dashboard route and sub-routes
    "/sign-in",
    "/",
    "/about/:path",
    // Add more routes to protect
  ],
};

function authorizeUser(userInfo: any, requestedPath: string): boolean {
  //   // Define roles required for specific paths
  //   const roleRequiredForPath: { [key: string]: string[] } = {
  //     "/dashboard": ["ADMIN"],
  //     // Add more paths and roles as needed
  //   };

  //   const rolesRequired = roleRequiredForPath[requestedPath];

  //   if (rolesRequired) {
  //     // Check if user has any of the required roles
  //     return rolesRequired.some((role) => userInfo.authorities.includes(role));
  //   }

  // Default to true if no specific roles are required for the path
  return true;
}

function getUserInfoFromToken(token: string) {
  const tokenData = jwt.decode(token) as { sub: string; authorities: string[] };

  return {
    email: tokenData?.sub,
    authorities: tokenData?.authorities,
  };
}
