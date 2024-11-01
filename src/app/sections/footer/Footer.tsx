import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill, RiTiktokFill } from "react-icons/ri";

export default function Footer () {
  return (
    <footer className="w-full bg-primary text-white px-4">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <p className="text-sm">&copy; 2024 Qunacrochet. Todos los derechos reservados.</p>
            <p className="text-sm">Esta página no recopila ni almacena ningún tipo de información personal. Para realizar consultas y compras, contáctanos directamente por WhatsApp.</p>
          </div>
          <div className="space-y-4">
            <Link href="/reclamaciones" className="block underline text-sm hover:text-white transition-colors">
              Libro de Reclamaciones Virtual
            </Link>
            <Link href="/politicas" className="block underline text-sm hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/politicas" className="block underline text-sm hover:text-white transition-colors">
              Política de Envío
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Síguenos en nuestras redes sociales:</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100066974342612&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:scale-125 duration-150">
                <MdOutlineFacebook size={30} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/quna.crochet?igsh=djB0enVtbXllZ2E4" target="_blank" rel="noopener noreferrer" className="hover:scale-125 duration-150">
                <RiInstagramFill size={30} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://wa.me/51983214218?text=Hola%2C%20Quna.Crochet%20%E2%9C%A8%0AHe%20visto%20su%20p%C3%A1gina%20y%20deseo%20consultar%20sobre%20un%20producto." target="_blank" rel="noopener noreferrer" className="hover:scale-125 duration-150">
                <RiWhatsappFill size={30} />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="https://www.tiktok.com/@quna.crochet?_t=8qkGthWXHgz&_r=1" target="_blank" rel="noopener noreferrer" className="hover:scale-125 duration-150">
                <RiTiktokFill size={30} />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            <div className="pt-2">
              <p>Ruc: 10067128015</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
