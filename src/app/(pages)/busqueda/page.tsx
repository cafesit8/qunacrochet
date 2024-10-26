'use client'
import { fe } from "@/app/(pages)/festividades/fe/data/fe";
import { graduaciones } from "@/app/(pages)/festividades/graduacion/data/graduaciones";
import { navidad } from "@/app/(pages)/festividades/navidad/data/navidad";
import { macetas_extragrandes } from '@/app/(pages)/macetas/extragrande/data/macetas_extragrandes'
import { macetas_grande } from '@/app/(pages)/macetas/grande/data/macetas_grande'
import { maceta_pequena } from '@/app/(pages)/macetas/pequena/data/maceta-pequena'
import { characters } from "@/app/(pages)/personajes-famosos/data/characters";
import { personalizados } from "@/app/(pages)/personalizados/data/personalizados";
import { ramos } from "@/app/(pages)/ramos/data/ramos";
import { ramos_premiun } from "@/app/(pages)/ramos-premiun/data/ramos-premiun";
import { useStore } from "@/app/global/state";
import SectionImages from "@/app/components/pages/section/SectionImages";

export default function SearchPage () {
  const searchProduct = useStore((state) => state.searchProducts)
  const data = [...ramos, ...ramos_premiun, ...navidad, ...graduaciones, ...fe, ...macetas_extragrandes, ...macetas_grande, ...maceta_pequena, ...characters, ...personalizados]

  const filteredData = data.filter((item) => {
    return item.subtitle.toLowerCase().includes(searchProduct.toLowerCase())
  })

  return (
    <div className="w-full h-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] h-full grid place-content-center m-auto px-4">
        {filteredData.length ? filteredData.map(item => (
          <SectionImages key={item.id} {...item} />
        )) : (
          <div>
            <p className="text-center md:text-base text-sm mt-2">No se encontraron resultados para la busqueda: {searchProduct}</p>
          </div>
        )}
      </div>
    </div>
  )
}
