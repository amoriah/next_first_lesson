import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
