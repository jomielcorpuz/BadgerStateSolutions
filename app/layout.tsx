import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Cormorant } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Font configs
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

// Cormorant Italic for typing animation
const cormorantItalic = Cormorant({
  variable: "--font-orpheus",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Badger State Solutions",
  description:
    "Badger State Solutions is a business management and consulting firm dedicated to helping organizations streamline operations, improve performance, and achieve sustainable growth.",
  icons: {
    icon: "/icons/logo1.png",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${cormorantItalic.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
