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

export const metadata = {
  title: "Banaahaa Arsitektur - Studio Desain Arsitektur & Interior",
  description: "Banaahaa Arsitektur adalah studio desain arsitektur dan interior profesional. Kami merancang ruang yang lahir dari dialog antara fungsi, emosi, dan karakter manusia.",
  keywords: ["arsitektur", "desain interior", "arsitek", "banaahaa", "konsultan arsitektur", "3D visualisasi", "desain rumah"],
  authors: [{ name: "Banaahaa Arsitektur" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Banaahaa Arsitektur - Studio Desain Arsitektur & Interior",
    description: "Mengubah ruang menjadi cerita yang hidup. Studio arsitektur profesional dengan pendekatan desain yang personal.",
    url: "https://banaahaadesign.com",
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
