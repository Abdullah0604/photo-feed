import { NextResponse } from "next/server";

const { match } = require("@formatjs/intl-localematcher");
const Negotiator = require("negotiator");

const locales = ["en", "bn", "ar"];
const defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).language();

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const newPathname = new URL(
      `/${locale}/${pathname}`,
      "http://localhost:3000"
    );
    return NextResponse.redirect(newPathname, request.url);
  }
}
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
