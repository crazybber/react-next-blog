import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Default Home",
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
