import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lome Health | Live Uninterrupted",
  description:
    "Next-gen health insurance for Ethiopia with flexible plans, transparent pricing, and tech-first care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
