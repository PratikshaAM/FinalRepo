import React from 'react'
import Christmas from '../assets/WebChristmasDesk.png'
import Volt from '../assets/voltnightshift.png'

function All_in_one() {
  return (
    <div className='flex flex-col h-[800px] pt-4 '>
        <img src={Christmas}/>
        <div className='flex'>
            <div className='flex flex-col pt-10  ml-12 justify-evenly pr-22 w-1/2'>
            <h1 className='text-[50px] font-extrabold'> ALL-IN-ONE <span className='text-orange-600'>CORPORATE FOOD PARTNER</span></h1>
             <p className='font-semisbold'>
                DailyBite is a FoodTech partner that provides end-to-end corporate food solutions for companies. From daily meals to special events,
                     we cater to all your food requirements throughout the year. Our diverse services include daily and healthy snacks, festival feasts, team celebrations, 
                     board meetings, and more. Operating on a hybrid model with 50+ reputed food suppliers in Bangalore. DailyBite effectively combines 
                     in-house and outsourced expertise to deliver the best possible service in the market.
                     We're already serving satisfied clients including Volt Money, Insnap, Bolt, Clayworks, Keploy, Fampay, Vance and employees from Accenture,
                      Practo, CIEL, Navi and many more. Daily meals and snacks are at the core of our service, with Standard Meals, Privilege Meals, and 
                      Fruit Bowls being our most popular products. Our commitment to providing healthy, home-like, tasty food with innovative one-click customization features sets us apart.</p>
            </div>
            <div className='pt-10'>
                <img className='h-[300px] w-[600px] mt-16 pr-16 pl-32 rounded-2xl' src={Volt}/>
            </div>
        </div>
    </div>
  )
}

export default All_in_one