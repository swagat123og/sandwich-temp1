import React from "react";
import { Search, Heart, ShoppingBag, Settings } from "lucide-react";
import pizza from "./assets/pizza.png"; // Decorative image (absolute right)
import mix from "./assets/mix.png"; // Decorative image (absolute left)
import main from './assets/main.png';
import fries from './assets/fries.png';
import roll from './assets/roll.png'
import drink from './assets/drink.png';
import panner from './assets/panner.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import leaf from './assets/leaf.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const App = () => {
  let tl=gsap.timeline();
  
  useGSAP(()=>{
    
    tl.from('.left_div',{
      y:-80,
      opacity:0,
      duration:0.8,
      ease:"power3.out",
      stagger:0.2
    })

    // tl.from('.bur',{
    //   z:-80,
    //   opacity:0,
    //   duration:2,
    //   delay:1,
    //   rotate:360,
    //   ease:"power3.out",
    // })

    tl.from('.test',{
      x:-80,
      opacity:0,
      duration:1.3,
      ease:"power3.out",
    })

  })

  return (
    <div className="w-full h-screen bg-[#EDE6D4] main">
      
      {/* NAVBAR */}
<div className="w-full h-20 flex items-center justify-between px-10 shadow-md relative overflow-hidden">
<div>
  <img
    src={mix}
    alt="decor"
    className="absolute left-[-45px] top-0 h-28 w-auto pointer-events-none select-none drop-shadow-lg left_div"
  />
  <h2 className="text-4xl left_div">Odisha Grills</h2>
</div>
  {/* CENTER - MENU */}
  <div className="flex items-center gap-10 text-gray-700 font-semibold text-sm">
    <a href="" className="hover:text-black active:scale-95">HOME</a>
    <a href="" className="hover:text-black active:scale-95">FRUITS</a>
    <a href="" className="hover:text-black active:scale-95">FLOUR</a>
    <a href="" className="hover:text-black active:scale-95">SPECIALS</a>
    <a href="" className="hover:text-black active:scale-95">CONTACT US</a>
    <a href="" className="hover:text-black active:scale-95">BLOG</a>
  </div>

  {/* RIGHT - ICONS */}
  <div className="flex items-center gap-6 text-gray-700">
    <Search className="cursor-pointer hover:text-black" />
    <Heart className="cursor-pointer hover:text-black" />
    <ShoppingBag className="cursor-pointer hover:text-black" />
    <Settings className="cursor-pointer hover:text-black" />
  </div>

  {/* DECOR IMAGE */}
  <img
    src={pizza}
    alt="decor"
    className="absolute right-[-70px] top-0 h-28 w-auto pointer-events-none select-none drop-shadow-lg left_div"
  />
</div>

<div className="flex justify-between ">
  <div>
      <img
    src={leaf}
    alt="decor"
    className="absolute  h-40 mt-30  left-[-70px] w-auto pointer-events-none select-none drop-shadow-lg test"
  />
    </div>

  {/* left div*/}
<div className="mt-20 flex flex-col gap-3 p-12">
  <h3 className="text-xl left_div ">MADE FRESH. MADE FLAVORFUL. 100% ORGANIC</h3>
  <h1 className="text-7xl font-bold left_div">FLAME-GRILLED TASTE</h1>
  <h1 className="text-4xl font-bold left_div">HOT. CRISPY. HANDCRAFTED.</h1>
  <div className="flex gap-5">
    <button className="text-white rounded-3xl clr p-3 left_div">
      ORDER NOW
    </button>
    <button className="text-white rounded-3xl  p-3 left_div fit">FULL MANU</button>
  </div>

    <div >
      <img
    src={fries}
    alt="decor"
    className="absolute  h-60  right-0 w-auto pointer-events-none select-none drop-shadow-lg test"
  />
    </div>

    <div>
      <img
    src={drink}
    alt="decor"
    className="absolute  h-50 mt-6  right-30 w-auto pointer-events-none select-none drop-shadow-lg test"
  />
    </div>
  <div >

{/* SLIDER (3 ROTATION CARDS) */}
<Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  speed={1200}
  className="w-[520px] mt-8"
>

  {/* Slide 1 – Paneer */}
  <SwiperSlide>
    <div className="w-100 h-[150px] bg-white rounded-3xl  
                    flex items-center gap-2 p-4 overflow-hidden card">

      <img src={panner} alt="Paneer" className="h-30 w-35 drop-shadow-xl" />

      <div>
        <h2 className="text-2xl font-bold text-white">FRESHLY GRILLED PANEER</h2>
        <p className="text-lg font-medium text-gray-700 mt-2">Soft • Juicy • Smoky</p>
        <p className="italic text-white mt-2 text-md">Perfect for Grill Lovers.</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 – Burger */}
  <SwiperSlide>
    <div className="w-100 h-[150px] bg-white rounded-3xl  
                    flex items-center gap-6 p-4 overflow-hidden card">

      <img src={fries} alt="Burger" className="h-28 w-auto drop-shadow-xl" />

      <div>
        <h2 className="text-2xl font-bold text-white">CLASSIC BURGER COMBO</h2>
        <p className="text-lg font-medium text-gray-700 mt-2">Crispy • Cheesy • Juicy</p>
        <p className="italic text-white mt-2 text-md">Perfect for Food Lovers.</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 – Drink */}
  <SwiperSlide>
    <div className="w-100 h-[150px] bg-white rounded-3xl
                    flex items-center gap-6 p-4 overflow-hidden card">

      <img src={drink} alt="Drink" className="h-28 w-auto drop-shadow-xl" />

      <div>
        <h2 className="text-2xl font-bold text-white">CHILLED COKE GLASS</h2>
        <p className="text-lg font-medium text-gray-700 mt-2">Cold • Refreshing</p>
        <p className="italic text-white mt-2 text-md">Perfect with Every Meal.</p>
      </div>
    </div>
  </SwiperSlide>

</Swiper>

    </div>




</div>

{/* right div*/}
<div className="top-0">
  <img src={main} className="h-160 w-150 bur" alt="" />
</div>

</div>

    </div>
  );
};

export default App;
