import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';

import CategoriesBar from '../Components/CategoriesBar'
import FeaturedItem from "../Components/FeaturedItem";
import MyNavbar from '../Components/Navbar'

import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase.config"


export default function Homepage() {

  const [theme,setTheme] = useState('light');
  const [hamburgMenu,setHamburgMenu] = useState(false);
  const [loading,setloading] = useState(true);

 

  const toggleTheme = ()=>{
    setTheme(theme==='dark'? 'light':'dark');
  };



  const [bestCoffees,setBestCoffees] = useState([]);
  const [featured,setFeatured] = useState([]); 

  const getBestSellers = async ()=>{

    const querySnapshot = await getDocs(collection(db, "bestSellers"));
    let temp = [];
    querySnapshot.forEach((doc) => {
      const coffeeData = doc.data();
      temp.push(coffeeData);
    });
    setBestCoffees([...temp]);
    
  }

  const getFeatured = async ()=>{

    const querySnapshot = await getDocs(collection(db, "featured"));
    let temp = [];
    querySnapshot.forEach((doc) => {
      const coffeeData = doc.data();
      temp.push(coffeeData);
    });
    setFeatured([...temp]);
    
  }



  useEffect(()=>{
    getBestSellers();
    getFeatured();
    setloading(false);
  },[])


  useEffect(()=>{
    document.querySelector('html').setAttribute('data-theme',theme);
  },[theme])


  return (
    <>
    <div className="flex flex-col relative">
      <div className={hamburgMenu?"":"hidden"}>
      <div className="logo-section flex flex-row m-5 gap-2 justify-center ">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#27a05b"
          stroke="#27a05b"
          viewBox="0 0 80 80"
          className="h-10"
        >
          <path d="M54.5 8a1 1 0 00-.104.006l-28.037 2.93a1 1 0 00-.039.005c-1.764.258-2.936 1.398-3.601 2.774a1 1 0 00-.053.133L22.301 15h-1.268c-1.183 0-2.217.416-2.951 1.111-.734.696-1.176 1.61-1.465 2.59-.577 1.959-.584 4.267-.584 6.299a1 1 0 001 1h2.041l5.703 42.506a1 1 0 00.004.021C25.012 70.01 26.351 71 27.828 71H53.12c1.48 0 2.818-.992 3.047-2.473a1 1 0 00.004-.02L61.875 26h2.158a1 1 0 001-1c0-2.074-.14-4.405-.861-6.361-.36-.979-.876-1.88-1.65-2.555-.775-.676-1.817-1.084-3-1.084H59.1l-.78-3.988a1 1 0 00-.013-.055A3.937 3.937 0 0054.5 8zm.012 2.004c.88.006 1.636.592 1.855 1.445l.002.002.803 4.11a.972.972 0 00-.12.449c0 .55.452 1 1 1 .035 0 .063-.016.096-.02a1 1 0 00.127.01h1.246c.759 0 1.25.212 1.686.592.435.38.806.972 1.088 1.738.47 1.277.632 2.992.685 4.67H18.121c.024-1.692.041-3.47.414-4.734.226-.766.542-1.344.922-1.703.38-.36.818-.563 1.576-.563h2a1 1 0 00.953-.697l.553-1.746c.498-1.02.919-1.469 2.07-1.637l27.903-2.916zm-28.46 5.006c-.55 0-1 .45-1 1s.452 1 1 1c.55 0 1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.562 0 1-.45 1-1s-.438-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.562 0 1-.45 1-1s-.438-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.55 0 1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.55 0 1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.562 0 1-.45 1-1s-.438-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.562 0 1-.45 1-1s-.438-1-1-1zm4 0c-.55 0-1 .45-1 1s.452 1 1 1c.562 0 1-.45 1-1s-.438-1-1-1zM21.093 26h38.765l-2.09 15.56-.464-.498-.348-.062-.8.402-.159.881.613.654.346.063.664-.334-3.43 25.555c-.05.327-.557.779-1.07.779H27.83c-.51 0-1.02-.454-1.071-.781l-2.465-18.365.508-.256.158-.881-.611-.654-.303-.055-.695-5.184.45-.226.159-.881-.611-.654-.24-.043L21.091 26zm18.887 8.021l-.801.4-.158.884.61.654.349.062.8-.402.158-.88-.61-.657-.348-.06zm3.935.551l-.8.403-.159.88.611.655.348.062.8-.4.159-.883-.611-.654-.348-.063zm-7.795.39l-.803.403-.156.881.611.656.348.06.8-.4.16-.882-.614-.655-.346-.062zm11.24 1.595l-.8.4-.159.883.612.654.347.063.801-.403.158-.883-.611-.654-.348-.06zm-14.47.72l-.803.403-.156.883.611.654.348.06.8-.4.159-.883-.614-.654-.345-.063zM40.5 38c-4.13 0-7.5 3.37-7.5 7.5s3.37 7.5 7.5 7.5 7.5-3.37 7.5-7.5-3.37-7.5-7.5-7.5zm9.322 1.676l-.8.4-.159.883.614.654.345.063.803-.403.156-.88-.611-.655-.348-.062zM40.5 40c3.05 0 5.5 2.45 5.5 5.5S43.55 51 40.5 51 35 48.55 35 45.5s2.45-5.5 5.5-5.5zm-9.754.625l-.8.402-.159.881.611.654.348.063.8-.4.16-.883-.612-.654-.348-.063zM27 41l-.8.402-.159.881.611.654L27 43l.8-.402.159-.881-.611-.654L27 41zm25.955 0l-.8.402-.159.881.613.654.346.063.803-.402.156-.881-.611-.654-.348-.063zM28 48l-.8.402-.159.881.611.654L28 50l.8-.402.159-.881-.611-.654L28 48zm25.955 0l-.8.402-.159.881.613.654.346.063.803-.402.156-.881-.611-.654-.348-.063zm-3.717.416l-.8.4-.159.883.612.655.347.062.801-.402.158-.881-.613-.656-.346-.061zm-19.08.87l-.803.401-.156.881.612.655.347.062.801-.402.158-.881-.613-.654-.346-.063zm16.924 2.468l-.8.4-.159.883.611.654.348.063.8-.402.159-.881-.613-.655-.346-.062zm-14.475.66l-.8.402-.159.881.614.657.345.06.801-.4.158-.883-.61-.654-.349-.063zm11.235 1.64l-.801.403-.158.88.611.655.348.063.8-.4.159-.884-.612-.654-.347-.062zm-7.797.358l-.803.4-.156.883.611.655.348.062.8-.402.159-.881-.613-.654-.346-.063zm3.932.568l-.801.403-.158.88.613.655.346.062.802-.4.157-.883-.612-.654-.347-.063z"></path>
        </svg>
      <h1 className="text-3xl font-bold">MockBucks</h1>
      </div>


      <div className="m-4 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Main Menu</h1>
        <button onClick={()=>{setHamburgMenu(false)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>


      <div className="SideBar Menus font-['Helvetica']">

      <div class="grid grid-cols-1 gap-8 mt-10 ms-8 text-gray-500">

          <div className="flex gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
           </svg>
              <h1 className="text-xl">Home</h1>
          </div>

          <div className="flex gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
            <h1 className="text-xl">My Order</h1>
          </div>


          <div className="flex gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
              <h1 className="text-xl">Transaction</h1>
          </div>

          <div className="flex gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
            <h1 className="text-lg">Products</h1>
          </div>

          <div className="flex gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>


            <h1 className="text-xl">Profile</h1>
          </div>


          <div className="flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>

            <h1 className="text-xl">Logout</h1>
          </div> 
        </div>

  <div className="flex items-center gap-4 m-6 border-2 bottom-2 p-5 w-[150px] rounded-xl 
  border-emerald-500" >
  <p>{theme==='light'? 'Dark':'Light'} Mode</p>
  <label className="swap swap-rotate">

 
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={toggleTheme} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

</div>

      <div className="declaration flex flex-col m-6">
        <h1 className="text-md font-bold text-gray-500">MockBucks Coffee Shop</h1>
        <p className="text-sm text-gray-400">App Version 1.1</p>
      </div>
      </div>
      </div>

    {/* screen overlay */}
    <div className={hamburgMenu? "main-menu-after ms-2 ":"main-menu-before ms-2 "} >

      {/* Navigation bar on top*/}
      <div className="home-nav flex flex-row justify-between items-center m-5 font-[poppins]">
        <h1>Good Morning <br/><span className="text-2xl font-bold">William</span> </h1>
        <div className="flex flex-row gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-emerald-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

        <button onClick={()=>{setHamburgMenu(!hamburgMenu)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
      </svg>
      </button>
      </div>
    </div>


    {/* Home Search Bar */}
    <label className="input input-lg input-bordered  rounded-full flex items-center gap-2 m-5 ms-2 p-5">
      <input type="text" className="grow " placeholder="Search beverages or foods" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-8 opacity-40"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
    </label>


    {/* first carousel */}

    { !loading &&
    <div className=" m-2 ms-2 mt-12 w-[600px]">
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      modules={[Autoplay]}
      speed={1200}>

      {bestCoffees.map((coffee,index)=>{


        return (
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive? 'bg-emerald-700 h-64  w-52 rounded-3xl best-coffee-common p-8 ':"bg-emerald-700 h-48 w-48 rounded-3xl p-5 best-coffee-common"}>
                <img src={coffee.image} className="w-30 h-30"></img>
                
                <div className="text-lg text-white font-bold mb-8">
                <p className="mb-2 text-2xl">{coffee.name}</p>

                {isActive && 
                <p className="text-4xl"><span className="text-sm">$</span> {coffee.price}</p>}
                </div>
              </div>
            )}
          </SwiperSlide>
        )
      })}
        </Swiper>
        </div>
      }

      {/* CATEGORIES */}
      <h1 className="mt-12 font-[poppins] font-bold text-lg ms-3 mb-3">Categories</h1>
      <CategoriesBar/>
      
      {/*Featured Beverages*/}
      <div className="mt-8 flex justify-between w-[450px] ms-5 items-center">
        <p className="text-lg font-bold">Featured Beverages</p>
        <p className="text-emerald-700 font-semibold">More</p>
      </div>




      {!loading &&
      <div className="flex flex-col gap-4 m-3 mt-8 mb-[70px]">
        {featured.map((item)=>{
          return <FeaturedItem 
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  points={item.points}
          />
        })}
      </div>      
      }

      {!hamburgMenu &&  <MyNavbar/>}
     
      <div>


      </div>


    </div>

   




    </div>






    </>
  )



}
