import React, { useEffect, useState } from 'react'
import SingleWish from '../Components/SingleWish'
import { getDocs,collection } from 'firebase/firestore';
import { db } from '../firebase.config';

export default function WishList() {

  const [wishlist,setWishList] = useState([]);



  const getWishses = async ()=>{
    const querySnapshot = await getDocs(collection(db, "Wishlist"));
    let temp = [];
    querySnapshot.forEach((doc) => {
      const coffeeData = doc.data();
      temp.push(coffeeData);
    });
    setWishList([...temp]);
  }


  useEffect(()=>{
    getWishses();

  },[])

  return (
    <>
    <div className='flex justify-between p-5 items-center shadow-md w-[500px] h-[75px] md:w-[1000px]'>
    <div className='flex flex-col'> 
      <h1 className='font-bold text-lg'>Wishlist</h1>
      <div className='text-xs flex flex-row items-center'>
        
        <p><span className='font-bold'>6</span> items</p>

          <div className='w-2 h-2 bg-emerald-700 ms-2 me-2 rotate-45'></div>

        <p className='text-xs'>Total: <span className='font-bold'>$213</span></p>
      </div>
    </div>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </div>    
    
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-2 md:gap-1 md:w-fit h-[650px] 
      overflow-y-scroll md:h-fit md:overflow-hidden '>
          {wishlist.map((wish)=>{

              return (
                <SingleWish image={wish.image}
                            name={wish.name}
                            variant={wish.variant}
                            price={wish.price}/>
              )


          })}
        
      </div>

    </>

  )
}
