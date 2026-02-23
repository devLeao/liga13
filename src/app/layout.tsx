import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

// src/app/layout.tsx

export const metadata: Metadata = {
  title: 'Liga 13 - A Elite do Futsal',
  description: 'Organização e Tradição no Futsal da Zona Norte de BH',
  icons: {
    // O segredo: Apenas /favicon.ico (sem public e sem ponto)
    // O ?v=2 força o navegador do seu cliente a limpar o cache da Vercel
    icon: '/favicon.ico?v=2', 
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased bg-liga-black text-white flex flex-col min-h-screen">
        <Navbar />
        {/* Adicionado flex-1 para ocupar o resto da tela corretamente */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}