import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MyNavbar() {



  const [goHome,setGoHome] = useState(true);
  const [goWishList,setGoWishList] = useState(false);
  const [goCart,setGoCart] = useState(false);
  const [goProfile,setGoProfile] = useState(false);
  
  const highlightedClass = "bg-emerald-700 w-12 h-12 rounded-full justify-center text-white";
  const nonHighlightedClass = "w-12 h-12 rounded-full justify-center"




  let location = useLocation();

  const processToggle =(currentPath)=>{
    
 
    switch(currentPath){
      case "home": setGoHome(true);
                   setGoWishList(false);
                   setGoCart(false);
                   setGoProfile(false);
                   
                   break;
                  
    case "wishlist":setGoHome(false);
                    setGoWishList(true);
                    setGoCart(false);
                    setGoProfile(false);
                    break;
    
      case "cart": setGoHome(false);
                    setGoWishList(false);
                    setGoCart(true);
                    setGoProfile(false);
                    break;
    
    case "profile": setGoHome(false);
                    setGoWishList(false);
                    setGoCart(false);
                    setGoProfile(true);
                    break;

      
                  }


  }


  useEffect(()=>{

    let currentPath = location.pathname.replace("/","");
    processToggle(currentPath);
  },[])
  


  return (
    <>
    
      <div className="navbar bg-base-100 justify-around p-2 w-[500px]">
      
        <Link to="/" relative='path' className={goHome?highlightedClass:nonHighlightedClass} onClick={()=>processToggle("home")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </Link>


        <Link to="/wishlist" relative='path'  className={goWishList?highlightedClass:nonHighlightedClass} onClick={()=>processToggle("wishlist")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </Link>


        <Link to="/cart" relative='path'  className={goCart?highlightedClass:nonHighlightedClass} onClick={()=>processToggle("cart")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </Link>

        <Link to="/profile" relative='path'  className={goProfile?highlightedClass:nonHighlightedClass} onClick={()=>processToggle("profile")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </Link>


      </div>
  
    </>
  )
}
