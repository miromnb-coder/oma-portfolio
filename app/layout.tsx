import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NODRA — Modernit verkkosivut yrityksille",
  description:
    "NODRA suunnittelee ja rakentaa moderneja, näyttäviä ja toimivia verkkosivuja yrityksille.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
