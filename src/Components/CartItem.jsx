import React from 'react'

export default function CartItem(props) {
  return (
    <div className='flex shadow p-4 gap-3  items-center w-full overflow-x-hidden'>
        <img src={props.image} className='w-[20%] h-[20%] rounded-lg'></img>

        <div className='flex flex-col self-start mt-1 w-[70%]'>
            <h1 className='font-bold'>{props.name}</h1>
            <p className='flex items-center gap-2'><span className='font-bold text-sm'>${props.price}</span> 

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb8a7d" className="size-4">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

            
             <span className='text-green-600 text-sm font-thin'>({props.reviews} Reviews)</span> </p>
                
                
                <div className='flex w-[350px] items-center gap-x-16'>


                <p className='flex items-center gap-2 mt-2'> 
 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#15803d" className="size-10">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
                </svg>
 
                    {props.quantity}
 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#15803d" className="size-10">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                </svg>

                </p>




                <p className='text-sm text-emerald-700 flex items-center gap-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                    Remove</p>
                </div>

        </div>


    </div>
  )
}
