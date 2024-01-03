import React from 'react'
import Logo from '../assets/logo.png';
function Navbar() {
  return (
    <>
    <div className='navbar flex  h-16 w-full justify-between px-2 '>
        <div className='LeftSide justify-items-start'>
            <img className='h-11 ml-9 mt-1  ' src={Logo}/>
        </div>
        <div className='rightSide'>
        <ul class="md:flex hidden font-semibold item-center ">
            <li class="mx-[15px] mt-5  cursor-pointer text-orange-600">Home</li>
            <li class="mx-[15px] mt-5 cursor-pointer hover:text-orange-600 duration-100">Products</li>
            <li class="mx-[15px] mt-5 cursor-pointer hover:text-orange-600 duration-100">About Us</li>
            <li class="mx-[15px] mt-5  cursor-pointer hover:text-orange-600 duration-100">Contact Us</li>
         
         </ul>
         <div class="md:hidden">
            <a class="text-4xl" href="#">&#8801;</a>
         </div>
        
        </div>
    </div>

    

    </>
    

  )
}

export default Navbar