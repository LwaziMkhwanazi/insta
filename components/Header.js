import React from 'react'
import Image from 'next/image'
import {SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  MenuIcon} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'
import Me from "../public/images/Me.png"

function Header() {
  return (
    <header className='shadow-sm bg-white border-b sticky top-0 z-50 p-0'>
       <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
           {/* Left */}
          
           <div className='hidden sm:inline-grid relative w-24  cursor-pointer'>
               <Image src="https://links.papareact.com/ocw"
                layout='fill'
                objectFit='contain'
               />
               
           </div>
           <div className='sm:hidden relative w-10 flex-shrink-0 cursor-pointer'>
               <Image src="https://links.papareact.com/jjm"
                layout='fill'
                objectFit='contain'
               />
               
           </div>

     
            {/* Center */}
           <div className="max-w-xs">
              <div className='mt-1 relative p-3 rounded-md '>
                  <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className='h-6 w-6 text-gray-400'/>
                </div>
                <input className='bg-gray-50 w-full pl-10 text-sm border-gray-300 rounded-md
                focus:ring-black focus:border-black' 
                type="text" 
                placeholder='Search'
                  />
              </div>
           </div>


            {/* Right */}
           <div className='flex items-center justify-end space-x-4'>
              <HomeIcon className='navBtn'/>
              <MenuIcon className='h-6 md:hidden cursor-pointer'/>
              <div className="relative hidden md:block ">
              <PaperAirplaneIcon className='navBtn rotate-45'/>
              <div className="absolute text-sm -top-1 -right-2 bg-red-600 rounded-full
              
              h-5 w-5  flex items-center justify-center text-white animate-pulse">4</div>
              </div>
             
              <PlusCircleIcon className='navBtn'/>
              <UserGroupIcon className='navBtn'/>
              <HeartIcon className='navBtn'/>

              {/* <Image 
               src={Me}
                className='h-10 rounded-full'
                layout='fill'
              /> */}
           </div>
       </div>
    </header>
  )
}

export default Header
