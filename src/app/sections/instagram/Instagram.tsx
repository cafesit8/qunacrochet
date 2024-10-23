import { ramos_premiun } from '../../(pages)/ramos-premiun/data/ramos-premiun'

export default function Instagram () {
  const images = ramos_premiun.map((ramo) => ramo.image).flat()
  return (
    <section className="w-full bg-white text-custom-black px-4 pb-24">
      <h3 className="text-center text-4xl font-playfair pb-6">EXPLORA NUESTRO INSTAGRAM</h3>
      <div className="max-w-[1000px] m-auto flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center md:gap-4 gap-2">
            <picture className="block md:w-52 w-40">
              <img
                className="w-full h-full object-cover"
                src="/logo.webp"
                width={200}
                height={200}
                alt="imagen de arreglos florales de Qunacrochet"
              />
            </picture>
          </div>
          <a target="_blank" href="https://www.instagram.com/quna.crochet/" className="bg-[#0095f6] self-center text-white py-2 px-5 rounded-md font-roboto-condensed">Seguir</a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {images.slice(0, 9).map((img, i) => (
            <article key={i}>
              <picture>
                <img
                  className="w-full h-auto object-cover"
                  src={img.src}
                  alt={img.alt}
                />
              </picture>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
