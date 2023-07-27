import React from 'react'
import  { useState, useEffect } from 'react';
import Story from './Story';
import Items from '../data'
import Chance from 'chance';

const chance = new Chance();
function Stories({user}) {

    const [suggestions, setSuggestions] = useState([]);

    const users = [];
    for (let i = 0; i <= 30; i++) {
      const firstName = chance.first();
      const lastName = chance.last();
      const fullName = `${firstName} ${lastName}`;
      const image = chance.avatar();
  
      users.push({
        name: fullName,
        image: image
      });
   

    }

    return (


        <div className='flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 md:max-w-3xl max-w-sm space-x-2 p-5 bg-white mt-4 border-gray-200 border rounded-sm'>

             { users &&
                              
              users.map((user,index) => (

              <Story 
              
                     key={index}
                     img={user.image}
                     username={user.name}
                    
              
              />
             )) }


        
            {/* {Stories} */}
            {/* {Stories} */}
            {/* {Stories} */}
            {/* {Stories} */}
            {/* {Stories} */}

        

        </div>
    )
}

// export async function getServerSideProps(){

//   const response=await fetch('https://randomuser.me/api/');
//   const data = await response.json();
//   const user = data.results[0];

//   return {
//     props: { user },
//   };
// }

export default Stories
