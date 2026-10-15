import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Liga 13 | A elite do futsal da Zona Norte de BH",
    template: "%s | Liga 13",
  },
  description: "Organização e tradição no futsal e society da Zona Norte de Belo Horizonte.",
  icons: { icon: "/favicon.ico?v=2", shortcut: "/favicon.ico", apple: "/favicon.ico" },
  openGraph: { siteName: "Liga 13", locale: "pt_BR", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-liga-black font-sans text-white antialiased">{children}</body>
    </html>
  );
}
