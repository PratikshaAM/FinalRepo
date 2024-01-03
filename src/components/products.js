import React from 'react'
import PrivilegeMeal from '../assets/Privilege-meal-df41f9b4.png'
import Standard from '../assets/Standard-meal-95fb3a5b.png'
import Fruit from '../assets/fruit-bowl-ee8f120e.png'
import Dry from '../assets/dry-fruits-a604feb0.png'
import Ondemand from '../assets/on-demand-snacks-d6da45c0.png'

function products() {
  return (
    <div>
        <h1 className='text-3xl my-4
         ml-5  font-medium'>OUR PRODUCTS</h1>
    <div className='mt-5 h-[400px] flex'>

    <div className=' bg-orange-600 ml-12 rounded-tl-2xl h-80 flex flex-col w-60' >
        <p className='text-4xl  text-white  pt-4 pl-4 font-bold'>PRIVILEGE MEALS</p>
        <img className='pt-14' src={PrivilegeMeal}/>
    </div>

    <div className='  ml-12 rounded-tl-2xl h-80 flex flex-col w-60 bg-red-950' >
        <p className='text-4xl  text-white  pt-4 pl-4 font-bold'>STANDARD MEALS</p>
        <img className='mt-14' src={Standard}/>
    </div>

 <div className='  ml-12 rounded-tl-2xl h-80 flex flex-col w-60 bg-violet-950' >
    <p className='text-4xl  text-white  pt-4 pl-4 font-bold'>FRUIT BOWLS</p>
    <img className='flex mt-12' src={Fruit}/>
</div>

<div className=' ml-12 rounded-tl-2xl h-80 flex flex-col w-60 bg-rose-900' >
    <p className='text-4xl  text-white  pt-4 pl-4 font-bold'>DRY FRUITS</p>
    <img className='flex items-end  pt-16 mt-7' src={Dry}/>
</div>  

<div className=' ml-12 rounded-tl-2xl h-80 flex flex-col w-60 bg-orange-800' >
        <p className='text-4xl  text-white  pt-4 pl-4 font-bold'> ON-DEMAND SNACKS</p>
        <img className='flex mb-1 py-6' src={Ondemand}/>
    </div>

</div>

</div>
  )
}

export default products