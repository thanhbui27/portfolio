import { NextResponse, type NextRequest } from "next/server";
import { FOCUS_COOKIE, resolveFocus } from "@/lib/project-focus";

/**
 * When a visitor lands on a focus route (e.g. `/unity`, `/fullstack`) we persist
 * that focus in a cookie so the rest of the site can highlight related content
 * while they browse. The cookie is refreshed on every focus-route visit.
 */
export function proxy(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/").filter(Boolean)[0] ?? "";
  const focus = resolveFocus(segment);

  if (!focus) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.cookies.set(FOCUS_COOKIE, focus.id, {
    path: "/",
    maxAge: 60 * 60, // 1 hour
    sameSite: "lax",
  });
  return response;
}

export const config = {
  // Skip Next internals and static assets; run on real page navigations only.
  matcher: ["/((?!_next/|api/|favicon.ico|.*\\..*).*)"],
};
