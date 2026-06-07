import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.tagline,
  openGraph: {
    title: site.title,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.tagline,
  },
  icons: {
    icon: [
      { url: "/images/devIcon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/devIcon.svg",
    apple: "/images/devIcon.svg",
  },
  themeColor: "#0c1018",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${cormorant.variable} antialiased`}>
        <AnimatedBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
