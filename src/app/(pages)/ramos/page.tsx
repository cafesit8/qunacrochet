import { ramos } from './data/ramos'
import SectionImages from '@/app/components/pages/section/SectionImages';

export default function RamosPage () {
  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Ramos</h1>
        <p className="text-center md:text-base text-sm mt-2">Puede elegir que el ramo lleve una combinación de papel seda, papel Kraft, papel celofán con diseño y  lazo o que lleve papel coreano y lazo.
          El ramo va dentro de una caja decorada con con papel seda, listo para regalar 🎁</p>
        <p className="text-center md:text-base text-sm mt-2"><strong>Solicitamos 50% para agendar el ramo.</strong> Cuando esté listo se le enviarán las fotos de su pedido terminado para que pueda pagar el otro 50% más el costo de envío. <strong>Enviamos a través de Shalom (para provincias y dentro de Lima) y tiene la opción de Indrive (solo en Lima)  📦</strong></p>
        {ramos.map(ramo => (
          <SectionImages key={ramo.subtitle} {...ramo} />
        ))}
      </div>
    </div>
  )
}
