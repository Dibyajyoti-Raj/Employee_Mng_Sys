import React from 'react'
import { useState } from 'react'

const LoginAuth = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')

  const submitHandeler = (e) =>{
    e.preventDefault()
    handleLogin(email, pswd)
    // console.log("email is", email)
    // console.log("password is", pswd)
    setEmail('')
    setPswd('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded p-20'>
        <form onSubmit={submitHandeler} className='flex flex-col items-center justify-center'>
          <input type="email" placeholder='Email' required value={email}  onChange={(e)=>{setEmail(e.target.value)}}
           className='border-2 border-emerald-600 rounded-full px-5 py-3 text-black outline-none placeholder:text-white m-3 '/>
          <input type="password" placeholder='Password' required value={pswd}  onChange={(e)=>{setPswd(e.target.value)}}
           className='border-2 border-emerald-600 rounded-full px-5 py-3 text-black outline-none placeholder:text-white m-3 '/>
          <button type='submit' className=' text-white font-semibold bg-emerald-500  px-5 py-3 m-3 rounded-full w-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default LoginAuth
