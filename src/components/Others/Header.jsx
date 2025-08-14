import React from 'react'

const Header = ({name}) => {
  const logOut = () =>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{name}!</span></h1>
      <button onClick={logOut} className='bg-red-500 text-white text-lg font-medium rounded px-5 py-2 cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header
