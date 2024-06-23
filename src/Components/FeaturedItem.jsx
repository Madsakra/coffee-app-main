import React from 'react'

export default function FeaturedItem(props) {
  return (
    <div className="card card-side bg-base-100 w-[460px]  mb-10">
    
    <div className='flex flex-col justify-center'>
    <figure className='rounded-3xl w-36'><img src={props.image} alt="Movie"/></figure>
    <div className='w-20 h-9 rounded-full py-1 px-2 bg-orange-500 text-white text-center self-center absolute bottom-[-15px]' >3.8</div>
    </div>


    <div className='flex flex-col font-[poppins]'>

    <div className="card-body  h-[100px]">
        <p className='text-md font-bold h-10'>{props.name} </p>
    </div>

    <div className='flex ms-6 text-lg'>
        <h1 className='font-bold'>$ {props.price}</h1>
        <h1 className='text-emerald-700 absolute right-0'>{props.points} pts</h1>
    </div>

    

    </div>


   
    </div>
  )
}
