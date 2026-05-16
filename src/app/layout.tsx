import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canesnutritioncalculator.us"),
  title: "Cane's Nutrition Calculator | Calories, Macros & Allergens",
  description:
    "Check calories, protein, carbs, sodium, nutrition facts, and allergen menu details for your favorite Raising Cane's meals.",
  icons: {
    icon: "/site-logo.png",
    apple: "/site-logo.png",
  },
  openGraph: {
    title: "Cane's Nutrition Calculator",
    description: "Build your meal and check the exact calories, macros, and allergen details for Raising Cane's.",
    url: "/",
    siteName: "Cane's Nutrition",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cane's Nutrition Calculator",
    description: "Build your meal and check the exact calories, macros, and allergen details for Raising Cane's.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
