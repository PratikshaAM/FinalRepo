import React from 'react'
import Main from '../assets/main.png';

function Home() {
  return (
    <>
   <div className=" w-full h-96 flex justify-between bg-orange-600  ">
      <div className='flex flex-col'>
      <p className=' text-8xl text-white font-extrabold ml-5 pt-12'>CHOOSE RIGHT,
      <br/>
     
      <span className='text-[142px]'>DAILYBITE</span></p>
      <button className=' items-center ml-64 h-20 w-40 rounded-xl text-white text-2xl bg-amber-950'>
        Order Trail 
      </button>
      </div>
      <img className='max-h-fit' src={Main} alt="main img"/>
      
   </div>
   
   </>
  )
}

export default Home;