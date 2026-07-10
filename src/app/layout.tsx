import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from '@vercel/analytics/next';

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Glossy Street",
  url: "https://glossystreet.com",
  logo: "https://glossystreet.com/icon.png",
  image: "https://glossystreet.com/icon.png",
  description:
    "Premium car detailing studio for ceramic coating, PPF, paint correction, wraps, interior detailing, and restoration services in India.",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: ["https://www.instagram.com/glossystreet_patelnagar/"],
  serviceType: [
    "Car detailing",
    "Ceramic coating",
    "Paint protection film",
    "Paint correction",
    "Vinyl wrap",
    "Interior car detailing",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://glossystreet.com"),
  title: {
    default: "Glossy Street",
    template: "%s | Glossy Street",
  },
  description:
    "Glossy Street is a premium car detailing studio for ceramic coatings, paint correction, paint protection film, wraps, deep cleaning, interior restoration, and car care services in India.",
  applicationName: "Glossy Street",
  category: "Automotive",
  keywords: [
    "Glossy Street",
    "car detailing India",
    "car detailing studio",
    "ceramic coating India",
    "paint protection film",
    "PPF India",
    "paint correction",
    "car wash India",
    "graphene coating",
    "vinyl wrap India",
    "interior car detailing",
  ],
  authors: [{ name: "Glossy Street" }],
  creator: "Glossy Street",
  publisher: "Glossy Street",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Glossy Street",
    description:
      "Premium car detailing, ceramic coating, PPF, wraps, paint correction, and restoration services in India.",
    url: "/",
    siteName: "Glossy Street",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Glossy Street logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Glossy Street",
    description: "Premium car detailing, ceramic coating, PPF, wraps, and restoration services in India.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060606",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
