import React from 'react'
import {

    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import { HeartIcon as HearIconFilled } from '@heroicons/react/solid'

function Post({id,username,img,userImg,caption}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
         
            <div className='flex items-center p-5 '>
            
               <img src={userImg} className='h-12 w-12 object-contain border p-1 mr-3 rounded-full' alt=''/>
               <p className='flex-1 font-semibold'>{username}</p>
               <DotsHorizontalIcon className='h-5' />
             
            </div>
            {/* {Img} */}
             <img src={img} className=' object-cover w-full' alt='' />
        
        
            <div className='flex justify-between items-center px-4 pt-4'>
      
                   <div className='flex items-center space-x-4'>

                        <HeartIcon className='btn'   />
                        <ChatIcon className='btn' />
                        <PaperAirplaneIcon className='btn' />
                   </div>
                
                     <BookmarkIcon className='btn' />

            </div>

              <p className='p-5 truncate'>

               <span className='font-bold mr-1'>{username}</span>
               {caption}
              </p>
        
        
         {/* {Header} */}
        
         {/* {caption} */}
         
          <form className='flex items-center p-4'>

           <EmojiHappyIcon className='h-7 ' />
           <input type='text'
            placeholder='Add a comment....'
            className='border-none focus:ring-0 outline-none flex-1 font-medium' 
        
             />
           <button className='font-semibold text-blue-400'>Post</button>
 

          </form>





    </div>
  )
}

export default Post