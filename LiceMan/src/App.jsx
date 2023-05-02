import React from 'react'
import Login from './Auth/Login'
import imgLogin from './img/Group.svg' 

const App = () => {

 
  return (
   <>
   <div class="flex h-screen">
  <div class="flex flex-1 items-center justify-center">
  <img id='img' src={imgLogin} alt=""  className='absolute bottom-0 left-0 h-3/4  ' />
  </div>
  <div class="flex flex-1 items-center justify-end mr-10 pr-10  w-full ">
  

            <Login/>
            
       
  </div>
</div>
   </>
  )
}

export default App
