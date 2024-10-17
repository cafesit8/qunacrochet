import SectionImages from "@/app/components/pages/section/SectionImages";
import { characters } from "./data/characters";

export default function page() {
  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Personajes Famosos</h1>
        <p className="text-center md:text-base text-sm mt-2">Los modelos tienen diferentes tamaños y precios, por favor, consulta la cotización.
        Lo común es que los personajes se elaboren de 18 a 20 centímetros de alto, pero puedes pedirlos más grandes o más pequeños. Todos están elaborados con hilos de algodón  ✨</p>
        <p className="text-center md:text-base text-sm mt-2"><strong>Solicitamos 50% para agendar el ramo.</strong> Cuando esté listo se le enviarán las fotos de su pedido terminado para que pueda pagar el otro 50% más el costo de envío. <strong>Enviamos a través de Shalom (para provincias y dentro de Lima) y tiene la opción de Indrive (solo en Lima)  📦</strong></p>
        {characters.map(ramo => (
          <SectionImages key={ramo.subtitle} {...ramo} />
        ))}
      </div>
    </div>
  )
}
