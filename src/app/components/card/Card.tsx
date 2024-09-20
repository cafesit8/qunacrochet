import { Tooltip } from "@nextui-org/tooltip";
import { FaCartArrowDown } from "react-icons/fa";
import type { Flor } from '@/app/(pages)/ramos/data/interface'

export default function Card (flor: Flor) {
  return (
    <article className='flex flex-col gap-2 relative group'>
      <Tooltip className="text-black font-roboto-condensed" content="Añadir al carrito" placement="left" delay={100} closeDelay={100}>
        <button className="absolute md:group-hover:opacity-100 opacity-100 md:opacity-0 duration-200 top-3 right-3 p-2" style={{ backgroundColor: '#fff', borderRadius: '50%' }}>
          <FaCartArrowDown />
        </button>
      </Tooltip>
      <picture className="block w-full aspect-square">
        <img className="w-full h-full object-cover aspect-ratio-1" src={flor.src} alt={flor.alt} />
      </picture>
      <span className='font-roboto-condensed text-gray-700'>S/.{flor.price}</span>
    </article>
  )
}
