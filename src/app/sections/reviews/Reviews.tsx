'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineStar } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './revies.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from './data/reviews';

export default function Reviews () {
  return (
    <section className='w-full bg-white text-custom-black px-4 pt-32'>
      <div className='max-w-[1010px] mx-auto'>
        <h3 className='text-center font-playfair text-4xl pb-10 uppercase'>Lo que dicen nuestros clientes</h3>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            }
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ padding: '10px' }}
        >
          {reviews.map((info, i) => (
            <SwiperSlide key={i}>
              <article className='p-6 flex flex-col items-center space-y-4 shadow-lg border rounded-md'>
                <picture className='w-full h-[320px] rounded-md overflow-hidden block'>
                  <img className="w-full h-full object-cover" src={info.image} alt={info.name} />
                </picture>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-pretty text-center'>{info.opinion}</p>
                  <div className='mt-2'>
                    <strong className='text-lg'>{info.name}</strong>
                    <footer className='flex justify-center'>
                      {[...Array(5)].map((_, i) => <MdOutlineStar className='text-[#f3bd49]' key={i} size={20} />)}
                    </footer>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
