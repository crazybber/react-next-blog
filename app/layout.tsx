import { Metadata } from "next";
import React from "react";
import '../styles/global.css';

export const metadata: Metadata = {
  title: "Default Layout",
  description: "Welcome to Default Layout",
  openGraph: {
    title: "Default Layout",
    description: "Default Layout Description",
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
