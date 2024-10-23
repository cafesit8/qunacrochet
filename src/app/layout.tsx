import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./sections/footer/Footer";
import { Toaster } from "sonner";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Quna.Crochet",
  description: "Descubre las hermosas flores tejidas a mano de quna.crochet, creadas con amor y dedicación por expertos artesanos. Personaliza tus espacios con diseños únicos que combinan arte y crochet. Perfectas para regalos, decoraciones y más. Hecho a mano en [tu ubicación], enviamos a todo el mundo.",
  authors: {
    name: "Quna.Crochet",
    url: "https://qunacrochet.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  keywords: ['quna', 'quenacrochet', 'crochet', 'tejer', 'tejido', 'regalo', 'maceta', 'macetas']
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Quna.Crochet" />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="canonical" href="https://qunacrochet.com" />
      </Head>
      <body>
        <div className="w-full h-full flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
