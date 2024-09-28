import SectionImages from "@/app/components/pages/section/SectionImages";
import { graduaciones } from "./data/graduaciones";

export default function GraduacionPage() {
  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Graduación</h1>
        {graduaciones.map(graduacion => (
          <SectionImages key={graduacion.subtitle} {...graduacion} />
        ))}
      </div>
    </div>
  )
}
