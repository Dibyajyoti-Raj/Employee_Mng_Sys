import React from 'react'

const FailedTask = ({tasks}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-3'>
        <div className='flex justify-between items-center  text-sm'>
            <h3 className='bg-red-500 px-4 py-1 rounded  text-sm font-medium cursor-pointer'>{tasks.category}</h3>
            <h4 className='font-medium'>{tasks.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>{tasks.title}</h2>
        <p className='mt-2 text-lg'>{tasks.description}</p>
        <div className='mt-4'>
            <button className='bg-lime-400 py-1 px-4 my-1 rounded cursor-pointer'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
