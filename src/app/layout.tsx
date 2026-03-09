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
  title: "Bibas Malla Thakuri | IT Admin Supervisor & Creative Developer",
  description: "Official portfolio of Bibas Malla Thakuri, an IT Admin Supervisor and creative developer with expertise in IT management and web development.",
  keywords: [
    "Bibas Malla Thakuri",
    "IT Admin Supervisor",
    "IT Management",
    "Web Developer",
    "Dohoro Management",
    "Pokhara",
    "Nepal",
    "Creative Developer",
    "Portfolio"
  ],
  authors: [{ name: "Bibas Malla Thakuri" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bibasmallathakuri.com.np/", // Adjust if you have a specific URL
    title: "Bibas Malla Thakuri | IT Admin Supervisor & Creative Developer",
    description: "Official portfolio of Bibas Malla Thakuri, an IT Admin Supervisor and creative developer.",
    siteName: "Bibas Malla Thakuri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibas Malla Thakuri | IT Admin Supervisor & Creative Developer",
    description: "Official portfolio of Bibas Malla Thakuri, an IT Admin Supervisor and creative developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
