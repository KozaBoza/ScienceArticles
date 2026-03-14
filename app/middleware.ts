export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin/:path*"], // Chronimy cały folder /admin i wszystko wewnątrz niego
};