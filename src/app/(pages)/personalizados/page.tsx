import SectionImages from "@/app/components/pages/section/SectionImages";
import { personalizados } from "./data/personalizados";

export default function PersonalizadosPage () {
  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Personalizados</h1>
        <p className="text-center md:text-base text-sm mt-2">¡Tejemos a crochet a tu persona favorita! 🤗</p>
        <p className="text-center md:text-base text-sm mt-2"><strong>Solicitamos 50% para agendar el ramo.</strong> Cuando esté listo se le enviarán las fotos de su pedido terminado para que pueda pagar el otro 50% más el costo de envío. <strong>Enviamos a través de Shalom (para provincias y dentro de Lima) y tiene la opción de Indrive (solo en Lima)  📦</strong></p>
        {personalizados.map(item => (
          <SectionImages key={item.subtitle} {...item} />
        ))}
      </div>
    </div>
  )
}
