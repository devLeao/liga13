import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

// src/app/layout.tsx

export const metadata = {
  title: 'Liga 13 - A Elite do Futsal',
  description: 'Organização e Tradição no Futsal da Zona Norte de BH',
  icons: {
    icon: '/icon.png', // Alterado para bater com o nome do arquivo na pasta
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* ADICIONADO: 'flex flex-col min-h-screen' 
         Isso remove qualquer espaço misterioso entre o menu e o conteúdo 
      */}
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