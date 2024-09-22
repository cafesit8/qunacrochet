'use client'
import { useEffect } from 'react';
import { ramos } from './data/ramos'
import Card from "@/app/components/card/Card";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function RamosPage () {

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: '#content-images',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="w-full bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Ramos</h1>
        <p className="text-center md:text-base text-sm mt-2">Puede elegir que el ramo lleve una combinación de papel seda, papel Kraft, papel celofán con diseño y  lazo o que lleve papel coreano y lazo.
          El ramo va dentro de una caja decorada con con papel seda, listo para regalar 🎁</p>
        <p className="text-center md:text-base text-sm mt-2"><strong>Solicitamos 50% para agendar el ramo.</strong> Cuando esté listo se le enviarán las fotos de su pedido terminado para que pueda pagar el otro 50% más el costo de envío. <strong>Enviamos a través de Shalom (para provincias y dentro de Lima) y tiene la opción de Indrive (solo en Lima)  📦</strong></p>
        {ramos.map(ramo => (
          <section key={ramo.subtitle} className="pt-16">
            <h3 className="md:text-4xl text-2xl font-medium font-playfair" style={{ lineHeight: '1' }}>{ramo.subtitle}</h3>
            <p className='md:text-base text-sm mt-2'>{ramo.description}</p>
            <span className="bg-green-100 text-green-800 text-base font-semibold font-roboto-condensed me-2 px-2.5 py-0.5 rounded-full">S/ 50</span>
            <div id='content-images' className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-4 mt-5">
              {ramo.image.map((flor, i) => (
                <Card
                  key={i}
                  {...flor}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
