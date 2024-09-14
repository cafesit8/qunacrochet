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

export default function Reviews () {
  return (
    <section className='w-full bg-white text-custom-black px-4 pt-32'>
      <div className='max-w-[1010px] mx-auto'>
        <h3 className='text-center font-playfair text-4xl pb-10 uppercase'>Lo que dicen nuestros clientes</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ padding: '10px' }}
        >
          {[...Array(5)].map((_, i) => (
            <SwiperSlide key={i}>
              <article className='h-auto text-center p-5 shadow-lg rounded-md'>
                <p className='text-pretty'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet asperiores ea possimus quidem commodi! Sequi laboriosam, quisquam fuga inventore est cumque blanditiis enim maiores dolor laudantium harum asperiores animi ipsam.</p>
                <strong className='text-lg'>Novak Djokovic</strong>
                <footer className='flex justify-center'>
                  {[...Array(5)].map((_, i) => <MdOutlineStar className='text-[#f3bd49]' key={i} size={20} />)}
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
