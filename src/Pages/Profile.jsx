import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import MostOrdered from '../Components/MostOrdered';

export default function Profile() {
  return (
    <div className='flex flex-col mb-[20%]'>

      <div className='profile-head flex m-5 items-center justify-between'>
          <button className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          </button>

          <h1 className='text-xl font-black'>Profile</h1>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
      </div>


      <div className='flex flex-col justify-center items-center mt-10 gap-4'>

          <div className="avatar">
            <div className="w-28 rounded-full mb-4">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <h1 className='text-3xl font-bold'>Daisy Smith</h1>
          <p className='text-emerald-700'>London, England</p>

      </div>

      <div className='flex flex-col m-8 mt-6 gap-8'>
        <div className='flex flex-row gap-8 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-emerald-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>

          <div className='flex flex-col gap-2'>
            <h1 className='text-xs font-semibold'>Mobile Phone</h1>
            <p className='font-bold'>+12 345 678 92</p>
          </div>
        </div>


        <div className='flex flex-row gap-8 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-emerald-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>


          <div className='flex flex-col gap-2'>
            <h1 className='text-xs font-semibold'>Email</h1>
            <p className='font-bold'>example@gmail.com</p>
          </div>
        </div>


        <div className='flex flex-row gap-8 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-emerald-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>



          <div className='flex flex-col gap-2'>
            <h1 className='text-xs font-semibold'>Address</h1>
            <p className='font-bold'>Franklin Avenue, Corner St. London, 24125151</p>
          </div>
        </div>
      </div>
      
      <h1 className='ms-4 text-lg font-semibold'>Most ordered</h1>

     
      <div className='h-[70%] w-[95%] m-3' >
      <MostOrdered/>
      </div>
        




    </div>
  )
}
