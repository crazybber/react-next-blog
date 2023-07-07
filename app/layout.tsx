import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
  openGraph: {
    title: "Next.js",
    description: "Next.js",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
