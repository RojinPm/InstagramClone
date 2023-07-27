import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Header from '../../Components/Header';




function signin({ providers}) {
  return (
    <>
    
   
    <Header />
      
     <div className='mt-40 flex justify-center flex-col mx-auto'>
       <img className='w-80' src='https://links.papareact.com/ocw'/>
       <p className='font-xs italic'>This is just a social media plaform Welcome and Login to app</p>
         {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-red-500 rounded-md font-semibold text-white'  onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    
     </div>
   
    
    
    </>
  )
}

export async function getServerSideProps() {

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}



export default signin