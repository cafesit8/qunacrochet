import './chooseus.css'

export default function ChooseUs() {
  return (
    <section className="w-full h-auto flex flex-col gap-10 justify-center items-center bg-white text-custom-black pt-24 px-4">
        <h3 className="text-center font-playfair text-4xl">MOTIVOS PARA ELEGIRNOS</h3>
      <div className="content max-w-[1000px]">
        <article className='[grid-area:personalizacion] p-5 bg-area-bg relative'>
          <h4 className='md:text-5xl text-3xl font-playfair'>Personalización</h4>
          <p className='md:text-base text-sm z-20 relative'>En Quna.Crochet te brindamos diversas opciones para personalizar tu regalo y hacerlo único y especial, como bordados de iniciales, nombres o símbolos.</p>
        </article>
        <article className='[grid-area:materiales] p-5 bg-area-bg'>
          <h4 className='md:text-5xl text-3xl font-playfair'>Calidad</h4>
          <p className='md:text-base text-sm'>Dependiendo del diseño a crear, utilizamos hilos de la más alta calidad, como los de algodón, que son ecológicos y ofrecen un acabado hermoso.</p>
        </article>
        <article className='[grid-area:flores] p-5 bg-area-bg'>
          <h4 className='md:text-5xl text-3xl font-playfair'>No se Marchitan</h4>
          <p className='md:text-base text-sm'>Con nuestros ramos y macetas tejidas, puedes expresar todo tu cariño a través de flores que durarán para siempre.</p>
        </article>
        <article className='[grid-area:mano] p-5 bg-area-bg '>
          <h4 className='md:text-5xl text-3xl font-playfair'>Hecho a Mano</h4>
          <p className='md:text-base text-sm'>Cada pieza es elaborada con esmero y habilidad artesanal, poniendo atención en cada detalle para lograr creaciones únicas y hermosas que reflejan dedicación y cuidado.</p>
        </article>
        <article className='[grid-area:valor] p-5 bg-area-bg'>
          <h4 className='md:text-5xl text-3xl font-playfair'>Valor de Tejido</h4>
          <p className='md:text-base text-sm'>Al elegir un detalle artesanal, apoyas y valoras el trabajo de nuestras artesanas. Además, una de ellas es la talentosa diseñadora detrás de los modelos exclusivos que ofrecemos.</p>
        </article>
      </div>
    </section>
  )
}
