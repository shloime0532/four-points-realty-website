import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://four-points-realty-website.vercel.app"),
  title: "Four Points Realty | Your Lakewood Real Estate Experts",
  description:
    "Four Points Realty is a premier real estate brokerage in Lakewood, NJ. Specializing in residential sales, luxury properties, investment opportunities, and rentals. 5-star rated with 15+ years of experience.",
  keywords: [
    "Four Points Realty",
    "Lakewood NJ real estate",
    "homes for sale Lakewood",
    "real estate agent Lakewood NJ",
    "buy home Lakewood",
    "sell home Lakewood",
    "luxury real estate NJ",
    "investment properties NJ",
  ],
  openGraph: {
    title: "Four Points Realty | Your Lakewood Real Estate Experts",
    description:
      "Premier real estate brokerage in Lakewood, NJ. Residential sales, luxury properties, investments, and rentals.",
    images: ["/og-image.png"],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
