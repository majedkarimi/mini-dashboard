import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dashboard",
  description: "Bucher app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className="rtl">{children}</body>
    </html>
  );
}
