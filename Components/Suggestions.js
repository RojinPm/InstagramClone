import React, { useState, useEffect } from 'react'
import Chance from 'chance';

const chance = new Chance();
function Suggestions() {

  const [suggestions, setSuggestions] = useState([]);

     useEffect(() => {
    
      const fetchSuggestions = () =>{

        const newSuggestions = [];
 
        for (let i = 0; i < 5; i++) {
          
          const firstName = chance.first();
          const lastName = chance.last();
          const fullName = `${firstName} ${lastName}`;
          const image = chance.avatar();
          const companyName = chance.company();
        
          newSuggestions.push({
            name: fullName,
            image: image,
            company: companyName,
          });
        }

        setSuggestions(newSuggestions)
   
      }

       fetchSuggestions();
     
          console.log(suggestions)
    
     }, [])
     


  return (
    <div className='mt-4 ml-10'>

      <div className='flex justify-between text-sm mb-5'>
    
       <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
       <button>See All</button>

      </div>

        {

             suggestions &&
             suggestions.map((profile,index) => (

               <div
               
                key={index}
                className='flex items-center justify-between mt-3'
               >

               <img className='w-10 h-10 rounded-full' 
               
                 src={profile.image}
               />

               <div className='flex-1 ml-4'>

                      <h2 className=' font-semibold text-sm'>{profile.name}</h2>
                       <h3 className='  text-xs text-gray-400'>Works at {profile.company}</h3>
               </div>

                 <h3 className='text-blue-500 font-semibold'>follow</h3>

               </div>

            
             ))}


    </div>
  )
}

export default Suggestions