import React from 'react'
import Image from 'next/image'

function Story({key, img, username }) {
    return (
        <div className='flex justify-center  items-center flex-col space-x-2  '  >
            
            <img src={img}  className=' cursor-pointer border-2 border-red-500 hover:scale-110 transition transform duration-200 ease-out  shadow-sm shadow-slate-900 h-14 w-14 p-[1.5px] rounded-full  ' alt='' />
            <p className='w-14 truncate text-center text-xs'>{username}</p>
             
        </div>
    )
}

export default Story
