import type { Metadata } from "next";
import Header from "./components/header/Header";
import Footer from "./sections/footer/Footer";
import { Toaster } from "sonner";
import Head from "next/head";
import { RiWhatsappFill } from "react-icons/ri";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quna.Crochet",
  description: "Descubre las hermosas flores tejidas a mano de quna.crochet, creadas con amor y dedicación por expertos artesanos. Personaliza tus espacios con diseños únicos que combinan arte y crochet. Perfectas para regalos, decoraciones y más. Hecho a mano en Lima-Perú, enviamos a todo el mundo.",
  authors: {
    name: "Quna.Crochet",
    url: "https://qunacrochet.com",
  },
  referrer: "origin-when-cross-origin",
  keywords: ['quna', 'qunacrochet', 'crochet', 'tejer', 'tejido', 'regalo', 'maceta', 'macetas', 'tejidos', 'Quna', 'artesanía', 'hecho a mano', 'decoración artesanal', 'flores de crochet', 'flores', 'regalos personalizados', 'artesanos peruanos', 'manualidades', 'productos únicos', 'arte textil', 'accesorios decorativos', 'crochet decorativo', 'flores artificiales', 'detalles únicos', 'crochet Lima', 'personalización crochet']
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://qunacrochet.com" />
      </Head>
      <body>
        <div className="relative h-dvh grid grid-rows-[auto_1fr_auto] grid-cols-1">
          <Header />
          <main>
            {children}
          </main>
          <a className="fixed bottom-4 right-4 rounded-full bg-[#28d367] p-3 z-20" target='_blank' href="https://wa.me/51983214218?text=Hola%2C%20Quna.Crochet%20%E2%9C%A8%0AHe%20visto%20su%20p%C3%A1gina%20y%20deseo%20consultar%20sobre%20un%20producto."><RiWhatsappFill className='md:text-4xl text-xl hover:scale-125 duration-150' /></a>
          <Footer />
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
