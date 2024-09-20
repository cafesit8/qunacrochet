import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./sections/footer/Footer";

export const metadata: Metadata = {
  title: "Quna.Crochet",
  description: "Descubre las hermosas flores tejidas a mano de quna.crochet, creadas con amor y dedicación por expertos artesanos. Personaliza tus espacios con diseños únicos que combinan arte y crochet. Perfectas para regalos, decoraciones y más. Hecho a mano en [tu ubicación], enviamos a todo el mundo.",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
