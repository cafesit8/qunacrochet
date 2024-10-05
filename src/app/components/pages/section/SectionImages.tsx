'use client'
import type { Product, Image } from "@/app/(pages)/interface/Product";
import Card from "../../card/Card";
import { useEffect } from "react";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { FaShoppingCart } from "react-icons/fa";
import 'photoswipe/style.css';
import { useStore } from "@/app/global/state";
import { toast } from 'sonner'

export default function SectionImages (product: Product) {
  const productsList = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);

  function addProductFn() {
    const productFound = productsList.find((item) => item.id === product.id)
    if (productFound) {
      toast.info('Ya existe en el carrito')
      return
    }
    addProduct(product)
    toast.success('Añadido al carrito')
  }

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
    <section className="pt-16">
      <h3 className="md:text-4xl text-2xl font-medium font-playfair" style={{ lineHeight: '1' }}>{product.subtitle}</h3>
      <p className='md:text-base text-sm my-2 text-balance'>{product.description}</p>
      {product.list && (
        <ul>
          {product.list.map((item: string, i: number) => (
            <li key={i} className="md:text-base text-sm my-2 text-balance list-disc ml-4">{item}</li>
          ))}
        </ul>
      )}
      <div className="flex">
        <span className="bg-green-100 text-green-800 md:text-base text-sm font-semibold font-roboto-condensed me-2 px-2.5 py-1 rounded-full">
          S/ {product.price}
        </span>
        <button onClick={addProductFn} className="bg-[#ceedff] font-roboto-condensed flex items-center gap-1 py-1 px-4 rounded-md md:text-base text-sm hover:bg-[#a7e1ff] duration-200">
          <span>Agregar al carrito</span>
          <FaShoppingCart />
        </button>
      </div>
      <div id='content-images' className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-4 mt-5">
        {product.image.map((flor: Image, i: number) => (
          <Card
            key={i}
            {...flor}
          />
        ))}
      </div>
    </section>
  )
}
