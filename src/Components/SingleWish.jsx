import { useState } from "react"

useState
export default function SingleWish(props) {
  
    const [select,setSelect] = useState(true);
  

    const unLike = ()=>{
        setSelect(!select);
    }

    return (

    <div className='rounded-2xl flex p-4 pb-7 h-[150px] pt-10  gap-4 shadow-xl md:w-[500px] justify-center items-center'>
        <img src={props.image} className='w-[100px] h-[110px] rounded-3xl'></img>
    
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold h-10'>{props.name} </h1>
            <p className='text-gray-500 text-sm'>Variant : {props.variant}</p>

            <div className='flex flex-row items-center justify-between w-[330px]'>
            <h1 className='text-2xl font-bold w-1/3'>${props.price}</h1>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}  fill={select?"red":""} className="size-8  right-10 md:relative"  onClick={()=>{unLike()}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </div>
        </div>
    




    </div>

    

  )
}
