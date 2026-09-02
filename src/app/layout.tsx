import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Digital Engineering & Solutions",
  description: "Enterprise-grade digital products, cloud platforms, and scalable engineering for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-gray-900 bg-white selection:bg-primary selection:text-gray-950">
        {children}
      </body>
    </html>
  );
}
