import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ZoomMotionGuard } from "@/components/ZoomMotionGuard";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getLogoIconPath } from "@/lib/logo";
import { site } from "@/lib/site";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
    icon: [{ url: getLogoIconPath(), type: "image/svg+xml" }],
    shortcut: getLogoIconPath(),
    apple: getLogoIconPath(),
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1018",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.dataset.theme="light";}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${raleway.variable} ${cormorant.variable} antialiased`}>
        <ThemeProvider>
          <MotionProvider>
            <ZoomMotionGuard />
            <AnimatedBackground />
            <Header />
            <main>{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
