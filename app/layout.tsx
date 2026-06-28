import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./subpages.css";
import { StyleInjector } from "./StyleInjector";

export const metadata: Metadata = {
  title: "NODRA — Modernit verkkosivut yrityksille",
  description:
    "NODRA suunnittelee ja toteuttaa moderneja, selkeitä ja mobiiliystävällisiä verkkosivuja yrityksille.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>
        <StyleInjector />
        {children}
      </body>
    </html>
  );
}
