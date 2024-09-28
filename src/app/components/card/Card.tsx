import type { Image } from '@/app/(pages)/interface/Product'

export default function Card (img: Image) {
  return (
    <a 
      href={img.src}
      data-pswp-width={600}
      data-pswp-height={600}
      className='flex flex-col gap-2 relative group'
    >
      <picture className="block w-full aspect-square">
        <img loading="lazy" width={600} height={600} className="w-full h-full object-cover aspect-ratio-1" src={img.src} alt={img.alt} title={img.alt} />
      </picture>
    </a>
  )
}
