import React from 'react'
import linkdln from '../assets/linkdin.png'
import insta from '../assets/insta.png'
import youtube from '../assets/youtib.png'
import twitter from '../assets/twittwe.png'
import facebook from '../assets/facebook.png'

function Footer() {
  return (
    <div className='h-[400px] bg-orange-600 flex justify-around items-center'>
        
        <div className='ml-20'>
          <div className='item-start'>
            <img className=' w-48' src="https://dailybite.in/assets/DailyBite_white_logo-096ceb94.png" alt="" />
          </div>
          <div className='w-80 text-xl'>
            <p>17, 24th Main Rd, 3rd Cross Rd, Agara Village, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
          </div>
          <div className=' flex w-72 justify-between pt-4'>
            <div className=' bg-white w-12 h-12 p-[5px] rounded-full cursor-pointer'>
              <img className=' w-12 h-10' src={linkdln} alt="" />
            </div>
            <div className=' bg-white w-12 h-12 p-[5px] rounded-full cursor-pointer'>
              <img className=' w-12 h-10' src={insta} alt="" />
            </div>
            <div className=' bg-white w-12 h-12 p-[5px] rounded-full cursor-pointer'>
              <img className=' w-12 h-10' src={youtube} alt="" />
            </div>
            <div className=' bg-white w-12 h-12 p-[5px] rounded-full cursor-pointer'>
              <img className=' w-12 h-10' src={twitter} alt="" />
            </div>
            <div className=' bg-white w-12 h-12 p-[5px] rounded-full cursor-pointer'>
              <img className=' w-12 h-10' src={facebook} alt="" />
            </div>
          </div>
          <div className='border-b-[1px] w-full border-black mt-10'></div>
      <div className=' text-[20px] font-medium my-6'>
        <p>© 2023DailyBite. All Rights Reserved.</p>
      </div>
        </div>

        <div className='flex flex-col text-white '>
            <div className=' font-bold'>
              <p>RESOURCES</p>
            </div>
            <div className=' pt-7 font-semibold'>
              <ul>
                <li className='pb-4'>Home</li>
                <li className='pb-4'>About</li>
              </ul>
            </div>
          </div>
          

          <div className='flex justify-between w-2/4 text-white ml-20'>
          <div className='flex flex-col'>
            <div className=' font-bold'>
              <p>LEGAL</p>
            </div>
            <div className=' pt-7 font-semibold'>
              <ul>
                <li className='pb-4'>Privacy Policy</li>
                <li className='pb-4'>Terms and conditions</li>
              </ul>
            </div>
          </div>
         </div>
         
          

    </div>
    
  )
}

export default Footer