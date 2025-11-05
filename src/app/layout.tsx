import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Tooliton — Modern Java Libraries for Developers",
  description:
    "Tooliton is a curated collection of open-source Java libraries built for modern backend developers who care about clarity, productivity, and clean code.",
  openGraph: {
    title: "Tooliton — Modern Java Libraries for Developers",
    description:
      "Tooliton is a curated collection of open-source Java libraries built for modern backend developers who care about clarity, productivity, and clean code.",
    url: "https://toolition.com",
    siteName: "Tooliton",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tooliton — Modern Java Libraries"
      }
    ],
    type: "website"
  },
  metadataBase: new URL("https://toolition.com"),
  twitter: {
    card: "summary_large_image",
    title: "Tooliton — Modern Java Libraries for Developers",
    description:
      "Tooliton is a curated collection of open-source Java libraries built for modern backend developers who care about clarity, productivity, and clean code.",
    creator: "@tooliton",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background text-white antialiased">
        <div className="fixed inset-0 -z-10 bg-[#05060a]" aria-hidden />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-12 pt-8 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
