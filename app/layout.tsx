import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import NextTopLoader from "nextjs-toploader";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "N-Cappy ",
  description: "Making Money While Doing what you love",
  keywords: [
    "investment options Kenya",
    "best investments in Kenya",
    "safe places to invest money Kenya",
    "investment companies Nairobi",
    "financial advisors Nairobi",
    "unit trust offices Nairobi",
    "investment companies Mombasa",
    "wealth management Kisumu",
    "investment company reviews Kenya",
    "African investment opportunities",
    "ethical investing Kenya",
    "purpose driven investing Kenya",
    "generational wealth building",
    "investment calculator Kenya",
    "investment tutorial Kenya",
    "investment tracker Kenya",
  ],
  openGraph: {
    title: "N-Cappy",
    description: "Making Money While Doing what you love",
    url: "https://n-cappy.vercel.app",
    siteName: "N-Cappy",
    images: [
      {
        url: "https://n-cappy.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "N-Cappy Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body className={poppins.className}>
        <Provider>
          <NextTopLoader />
          <Navigation />
          <main>{children}</main>
          <ScrollToTopButton />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
