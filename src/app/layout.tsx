import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: "Glossy Street | Car Detailing Studio",
    template: "%s | Glossy Street",
  },
  description:
    "Glossy Street is a premium car detailing studio for ceramic coatings, paint correction, PPF, wraps, deep cleaning, and car care services in India.",
  keywords: [
    "Glossy Street",
    "car detailing India",
    "ceramic coating India",
    "paint protection film",
    "PPF India",
    "paint correction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-background text-foreground antialiased" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <ScrollToTop />
        <Nav />
        <main>{children}</main>
        <Footer />
         <Analytics />
      </body>
    </html>
  );
}
