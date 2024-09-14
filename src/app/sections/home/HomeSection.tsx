'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { sections } from '../data/sections.data'

export default function HomeSection () {
  return (
    <section className='w-full md:h-[75vh] h-[50vh] bg-custom-black'>
      <Swiper style={{ width: '100%', height: '100%' }} navigation={true} autoplay loop modules={[Navigation, Pagination, Autoplay]} pagination={{
        dynamicBullets: true,
      }}>
        {sections.map((section, index) => (
          <SwiperSlide key={index} style={{ position: 'relative', display: 'grid', placeContent: 'center' }}>
            <picture className='w-full h-full block opacity-50 absolute top-0 left-0 -z-10'>
              <img className='object-cover w-full h-full' src={section.image} alt="imagen de arreglos florales de Qunacrochet" />
            </picture>
            <div className='relative z-10! text-white font-playfair flex justify-center items-center flex-col px-10'>
              <p className='md:text-4xl text-lg'>{section.subtitle}</p>
              <h1 className='md:text-7xl text-4xl text-center'>{section.title}</h1>
              <button className='bg-custom-black py-2 md:px-7 px-5 rounded-sm md:text-xl text-lg mt-5 hover:scale-110 duration-150'><Link href="/arreglos-florales">Ver más</Link></button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}