import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StyleInjector } from "./StyleInjector";

export const metadata: Metadata = {
  title: "NODRA — Nettisivut yrityksille",
  description:
    "NODRA suunnittelee ja toteuttaa selkeät, modernit ja mobiiliystävälliset nettisivut yrityksille.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
