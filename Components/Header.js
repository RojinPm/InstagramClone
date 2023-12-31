import React from 'react'
import Image from 'next/image'
import {

  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,


} from '@heroicons/react/outline'

import {

   HomeIcon
  
  
  } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'


function Header() {

    const {data: session } = useSession();
    console.log(session);

    return (
        <div className='shadow-sm border-b  bg-white pb-2 lg:pb-0 sticky top-0 z-50'>
            
             <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto items-center'>

           {/* {left} */}

           <div className='relative hidden lg:inline-grid w-24 h-20 cursor-pointer'>

           <Image src="https://links.papareact.com/ocw"  layout="fill" objectFit="contain"/>

           </div>

           <div className='relative w-10 h-10 mt-4  lg:hidden flex-shrink-0 cursor-pointer'>

           <Image className='' src="https://links.papareact.com/jjm"  layout="fill" objectFit="contain"/>


           </div>

           {/* {Middle} seach Field */}


         <div className='max-w-xs flex items-center'>

           <div className='relative mt-1 pt-3 ml-2 rounded-md'>

               <div className='absolute inset-y-0 pl-3 mt-4 sm:pb-8 sm:mt-8 flex items-center pointer-events-none'>

                   <SearchIcon className='h-5 w-5 text-gray-500 ' />

               </div>

                <input 
                
                className='bg-gray-50 block w-full pl-10 sm:text-sm selection:border-gray-300 rounded-md focus:ring-black focus:border-red'
                
                type="text" placeholder='Search'
                
                />
   

           </div>

           </div>

           {/* {Right} */}
 
                   <div className='flex items-center justify-end space-x-4 mt-2 lg:mt-0'>
  
                        <HomeIcon className='navBtn' />
                        <MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />

                       
                

              { session?.user ? (

                 <>

                 <div className='relative navBtn'>

                     <PaperAirplaneIcon className='navBtn rotate-45' />
                     <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full
  
                          flex items-center justify-center animate-pulse text-white'>3</div>

                      </div>


                 <PlusCircleIcon className='navBtn' />
                 <UserGroupIcon className='navBtn'/>
                 <HeartIcon className='navBtn' />
                <img
                onClick={signOut}
                className='h-10 w-10  rounded-full cursor-pointer'
                 layout="fill"  objectFit="contain" 
                 src={session.user?.image} alt="Profile_pic" />

                </>
                        
             
             
             
                ): (

                  <button onClick={signIn}>Sign In</button>

               )
              
              
              }
                       
               
               
               
                       
 
                    </div>
            


               </div>

        </div>
    )
}

export default Header
