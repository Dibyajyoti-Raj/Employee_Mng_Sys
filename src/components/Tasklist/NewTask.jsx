import React from 'react'

const NewTask = ({tasks}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl p-3'>
        <div className='flex justify-between items-center  text-sm'>
            <h3 className='bg-red-500 px-4 py-1 rounded  text-sm font-medium cursor-pointer'>{tasks.category}</h3>
            <h4 className='font-medium'>{tasks.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>{tasks.title}</h2>
        <p className='mt-2 text-lg'>{tasks.description}</p>
        <div>
          <button className='mt-4 bg-blue-400 px-4 py-1 cursor-pointer rounded'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
