import React from 'react'
import menu from '../img/Group75.svg'
import bandeja from '../img/Vector-1.svg'
import persona from '../img/Vector-2.svg'
import house from '../img/Vector-3.svg'
import archivo from '../img/Vector.svg'
const Bar = () => {
  return (
    <>
    <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/16 bg-gray-700 px-5 ' >
           <div className='mt-6 mb-10'>
           <a href="" ><img src={menu} alt=""/></a>
           </div>
           <div className='mt-6'>
           <a href="" ><img src={house} alt=""/></a>
           </div>
           <div className='mt-6'>
           <a href="" ><img src={persona} alt=""/></a>
           </div>
           <div className='mt-6'>
           <a href="" ><img src={bandeja} alt=""/></a>
           </div>
           <div className='mt-6'>
           <a href="" ><img src={archivo} alt=""/></a>
           </div>
           
           
        </div>
    </div>
    
    </>
  )
}

export default Bar
