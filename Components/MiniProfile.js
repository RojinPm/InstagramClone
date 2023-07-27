import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center p-8 justify-between  mt-14 ml-10 '>
        
         <img
         className='rounded-full border h-14 w-15 object-cover  p-[2px]'
          src="https://cdn.devdojo.com/users/December2021/rojinpm20241.jpg"/>

       <div className='p-2'>
          <h1 className='font-semibold'>Rojin Pm</h1>
          <h3>Welcome to Instagram</h3>
       </div>

      <button className='text-blue-500 font-semibold ml-3'>Sign Out</button>
    </div>
  )
}

export default MiniProfile