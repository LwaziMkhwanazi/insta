import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
       <div className="flex justfy-between bg-white max-w-6xl">
           {/* Left */}
           <div className='relative hidden w-24 h-24'>
               <Image src="https://links.papareact.com/ocw"
                layout='fill'
               objectFit='contain'
               />
               
           </div>
           <div className='relative w-24 h-24'>
               <Image src="https://links.papareact.com/ocw"
                layout='fill'
               objectFit='contain'
               />
               
           </div>


            {/* Center */}
           <div></div>


            {/* Right */}
           <div></div>
       </div>
    </header>
  )
}

export default Header
