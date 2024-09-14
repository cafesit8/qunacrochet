export default function Instagram () {
  return (
    <section className="w-full bg-white text-custom-black px-4 pb-24">
      <h3 className="text-center text-4xl font-playfair pb-6">EXPLORA NUESTRO INSTAGRAM</h3>
      <div className="max-w-[1000px] m-auto flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <picture className="block w-20">
              <img
                className="w-full h-full object-cover"
                src="/logo.jpg"
                width={200}
                height={200}
                alt="imagen de arreglos florales de Qunacrochet"
              />
            </picture>
            <a target="_blank" href="https://www.instagram.com/quna.crochet/" className="font-roboto-condensed font-semibold hover:underline">@quna.crochet</a>
          </div>
          <a target="_blank" href="https://www.instagram.com/quna.crochet/" className="bg-[#0095f6] self-center text-white py-2 px-5 rounded-md font-roboto-condensed">Seguir</a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <article key={i}>
              <picture>
                <img
                  className="w-full h-auto object-cover"
                  src={`https://picsum.photos/id/${i + 1}/300/300`}
                  alt="imagen de arreglos florales de Qunacrochet"
                />
              </picture>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
