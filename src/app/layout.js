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

export const viewport = {
  themeColor: "#E6B800",
};

export const metadata = {
  title: "Banaahaa Arsitektur - Studio Desain Arsitektur & Interior",
  description: "Banaahaa Arsitektur adalah studio desain arsitektur dan interior profesional. Kami merancang ruang yang lahir dari dialog antara fungsi, emosi, dan karakter manusia.",
  keywords: ["arsitektur", "desain interior", "arsitek", "banaahaa", "konsultan arsitektur", "3D visualisasi", "desain rumah"],
  authors: [{ name: "Banaahaa Arsitektur" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Banaahaa Arsitektur",
  },
  icons: {
    icon: "/images/logo.png",
    apple: [
      { url: "/ios/180.png", sizes: "180x180", type: "image/png" },
      { url: "/ios/167.png", sizes: "167x167", type: "image/png" },
      { url: "/ios/152.png", sizes: "152x152", type: "image/png" },
      { url: "/ios/120.png", sizes: "120x120", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Banaahaa Arsitektur - Studio Desain Arsitektur & Interior",
    description: "Mengubah ruang menjadi cerita yang hidup. Studio arsitektur profesional dengan pendekatan desain yang personal.",
    url: "https://banaahaa.vercel.app",
    siteName: "Banaahaa Arsitektur",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Banaahaa Arsitektur",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
