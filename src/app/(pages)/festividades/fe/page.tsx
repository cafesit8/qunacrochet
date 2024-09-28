import SectionImages from "@/app/components/pages/section/SectionImages";
import { fe } from "./data/fe";

export default function FePage () {
  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Fe</h1>
        {fe.map(item => (
          <SectionImages key={item.subtitle} {...item} />
        ))}
      </div>
    </div>
  )
}
