
import React from 'react'
import imglogo from '../img/girelogo.png'
import Bar from './Bar'
import userLogo from '../img/Ellipse2.svg'
const Navbar = () => {
  return (
   <>
   <div className='flex justify-between  h-24 ' >
   <Bar/>
        <div className='  self-center mr-5 ml-8 '>
            <img src={imglogo} alt="" className='object-contain h-12' />
        </div>
        <div className='self-center ml-10 mr-10 flex-1 '>
            <input className='border-2 placeholder:pl-3  border-black py-1 w-full rounded-full' type="text"  placeholder='Buscar....'/>
        </div>
        <div className='self-center ml-5 mr-8  '>
           <img src={userLogo} alt="" />
        </div>
   </div>
   
    
   
   </>
  )
}

export default Navbar
