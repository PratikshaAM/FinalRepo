import React from 'react'
import Privilegemeal from '../assets/Privilegemeal.png';
import Dailysnack from '../assets/snacksdaily.png';
import Healthysnacks from '../assets/fruit-bowl-dry-fruits.png';
import Corporate from '../assets/catering-service.png';

function Offering() {
  return (
    <div>
        <h1 className='text-3xl my-4 ml-5  font-medium'>OUR OFFERINGS</h1>

        <div className='mt-5 h-[430px] flex'>

        <div className=' bg-pink-600 ml-12 rounded-tl-2xl w-80 h-96 flex flex-col' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'>HEALTHY MEALS</p>
            <img className='flex mb-1 py-6' src={Privilegemeal}/>
        </div>
        
        <div className=' ml-12 rounded-tl-2xl w-80 h-96 flex flex-col bg-yellow-600' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'> DAILY SNACKS</p>
            <img className='flex  mt-[-26px] pl-[20px]' src={Dailysnack}/>
        </div>

         <div className='  ml-12 rounded-tl-2xl w-80 h-96 flex flex-col bg-green-500' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'>HEALTHY SNACKS</p>
            <img className='flex pb-32 pt-[5px] pl-[20px]' src={Healthysnacks}/>
        </div>

        <div className=' ml-12 rounded-tl-2xl w-80 h-96 flex flex-col bg-sky-400' >
            <p className='text-5xl  text-white  pt-4 pl-4 font-bold'>CORPORATE EVENTS CATERING </p>
            <img className='flex items-end  pl-[20px] mt-[-22px]' src={Corporate}/>
            {/* Here  in every card you have to put all margin and padding same clear this later */}
        </div>  
        
        </div>

        

    </div>
  )
}

export default Offering;