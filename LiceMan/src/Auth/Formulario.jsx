import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setnombre] = useState('')
    const [password, setpassword] = useState('');
  return (
   <>
   <form action="" className='bg-white rounded-lg py-2 px-5  '>
    <div className='mb-8'>
        <label htmlFor='user' className='block text-black font-bold'>Usuario</label>
        
        <input id='user' onChange={(e)=>setnombre(e.target.value)} className='rounded-lg w-full bg-gray-100 p-2 mt-2' type="text" name="user" value={nombre} placeholder='Nombre de usuario o correo electronico'/>

        
    </div>
    <div className='mb-8'>
        <label htmlFor='password' className='block text-black font-bold'>Contraseña</label>
        
        <input id='password' onChange={(e)=>setpassword(e.target.value)} className='rounded-lg w-full bg-gray-100 p-2 mt-2' type="text" name="password" value={password} placeholder='Contraseña'/>

        
    </div>
    <div className='justify-center text-center w-1/2   rounded-lg bg-blueLogin '>
    <input className='  text-white  py-2' type="submit" name="" value="Iniciar sesión"/>

    </div>
   </form>
   
   </>
  )
}

export default Formulario
