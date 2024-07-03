import CartItem from "../Components/CartItem"
import { getDocs,collection } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useEffect, useState } from "react";


export default function Cart() {
  
  const [cart,setCart] = useState([]);



  const getCart = async ()=>{
    const querySnapshot = await getDocs(collection(db, "Cart"));
    let temp = [];
    querySnapshot.forEach((doc) => {
      const coffeeData = doc.data();
      temp.push(coffeeData);
    });
    setCart([...temp]);
  }


  useEffect(()=>{
    getCart();

  },[])
  
  
  
  
  return (
    <div className='flex flex-col mb-[100px]'>
      
    <div className='flex justify-between p-5 items-center shadow w-full h-[75px] '>
    <div className='flex flex-col'> 
      <h1 className='font-bold text-lg'>My Cart</h1>
      <div className='text-xs flex flex-row items-center'>
        
        <p><span className='font-bold'>8</span> items</p>

          <div className='w-2 h-2 bg-emerald-700 ms-2 me-2 rotate-45'></div>

        <p className='text-xs'>Deliver To: <span className='font-bold'>Country</span></p>
      </div>
    </div>

          <button className='border text-green-700 border-emerald-700
           hover:bg-emerald-600 hover:text-white 
            py-1 px-2 rounded-full 
            flex gap-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Change
          </button>
    </div>    

    <div className='subtotal-cal flex flex-col p-4 shadow w-full'>
        <h1>Subtotal <span className='font-black '> $3,599</span></h1>
        <p className='text-sm flex items-center gap-1 font-semibold text-green-600'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
          Your Order is eligible for free delivery</p>     
    </div>


    
    <div className='flex flex-col shadow '>
      
      {cart.map((item)=>{
        return (<CartItem name={item.name}
                          price={item.price}
                          image={item.image}
                          reviews={item.reviews}
                          quantity={item.quantity}/>)
      })}

    </div>

    {/* <div className="h-[120px] w-screen shadow flex justify-center items-center">
      <button className="btn w-[470px] h-16 rounded-full hover:bg-emerald-600
       bg-emerald-700 text-white text-lg">Proceed to buy ({cart.length} Items)</button>
    </div> */}
        <button className="btn w-[full] h-16 rounded-full hover:bg-emerald-600 m-4 mt-10
       bg-emerald-700 text-white text-lg">Proceed to buy ({cart.length} Items)</button>

    </div>
  )
}
