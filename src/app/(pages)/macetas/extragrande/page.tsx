import SectionImages from "@/app/components/pages/section/SectionImages";
import { macetas_extragrandes } from "./data/macetas_extragrandes";

export default function MacetaExtraGrandePage () {
  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Macetas Extra Grande</h1>
        <p className="text-center md:text-base text-sm mt-2">
          Las flores más bellas en macetas eternas, perfectas para decorar todos los espacios de la casa, oficina, entre otros 🤗
          La maceta va dentro de una caja decorada por dentro con papel seda, listas para regalar 🎁
        </p>
        <p className="text-center md:text-base text-sm mt-2"><strong>Solicitamos 50% para agendar el pedido.</strong> Cuando esté listo se le enviarán las fotos de su pedido terminado para que pueda pagar el otro 50% más el costo de envío. <strong>Enviamos a través de Shalom (para provincias y dentro de Lima) y tiene la opción de Indrive (solo en Lima)  📦</strong></p>
        {macetas_extragrandes.map(ramo => (
          <SectionImages key={ramo.subtitle} {...ramo} />
        ))}
      </div>
    </div>
  )
}
