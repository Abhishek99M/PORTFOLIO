import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Kumar | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Abhishek Kumar — Software Engineer building scalable full-stack applications and AI-powered systems with Next.js, TypeScript, and cloud technologies.",
  keywords: [
    "Abhishek Kumar",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Kumar" }],
  creator: "Abhishek Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abhishek Kumar | Software Engineer & Full-Stack Developer",
    description:
      "Building scalable full-stack applications and AI-powered systems.",
    siteName: "Abhishek Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar | Software Engineer",
    description:
      "Building scalable full-stack applications and AI-powered systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
