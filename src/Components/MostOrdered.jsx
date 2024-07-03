import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';



import React from 'react'

export default function MostOrdered(props) {
  return (

    <Swiper
    spaceBetween={30}
    slidesPerView='auto'
    speed={1200}
    loop={false}
  
    >


      <SwiperSlide className='flex gap-3 border-2 rounded-3xl h-[100px] most-ordered
      items-center justify-center font-bold w-[70%] bg-emerald-700 p-1 ps-4'>
        <img src={'https://ombe.dexignzone.com/bootstrap/xhtml/assets/images/order/pic1.png'} className='w-[90px]'></img>
        <div className='flex flex-col'>
          <h1 className='text-white'>Creamy Latte Coffee</h1>
          <p className='text-xs text-gray-400'>Beverage</p>
        </div>        
      </SwiperSlide>


      <SwiperSlide className='flex gap-3 border-2 rounded-3xl h-[100px] most-ordered
      items-center justify-center font-bold w-[70%] bg-emerald-700 p-1 ps-4'>
        <img src={'https://ombe.dexignzone.com/bootstrap/xhtml/assets/images/order/pic2.png'} className='w-[90px]'></img>
        <div className='flex flex-col'>
          <h1 className='text-white'>Ombe Ice Coffee Latte</h1>
          <p className='text-xs text-gray-400'>Beverage</p>
        </div>        
      </SwiperSlide>
      



      


    </Swiper>
  )
}
