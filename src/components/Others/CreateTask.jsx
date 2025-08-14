import React, {useState } from 'react'

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [assign, setAssign] = useState('')
  const [cat, setCat] = useState('')
  const [date, setDate] = useState('')

  //State update timing issue
  const [newTask, setTask] = useState({})//asynchronous — it updates on the next render.

  const submitHandeler = (e) =>{
    e.preventDefault()

    //To work with the new task immediately, you should store it in a local variable instead of reading from state right away.
    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      title,
      desc,
      cat,
      date,
      // assign
    }
    console.log(newTask)
    
    const data = JSON.parse(localStorage.getItem('employees')) || [] // LocalStorage null safety
    console.log(data)
    //assign the new newTask to the employee
    data.forEach(e => {
      if(e.name == assign){
        e.tasks.push(newTask)
      }
    });
    // update the employee in local storage
    localStorage.setItem('employees', JSON.stringify(data))

    setTitle('')
    setDesc('')
    setAssign('')
    setCat('')
    setDate('')
  }

  return (
    <div className=" mt-2 p-2">
        <form onSubmit={submitHandeler} className="flex flex-wrap w-full bg-gray-600 items-start justify-between p-3 rounded-xl">
          <div className="w-1/2 flex flex-col gap-2 pe-5 ">
            <div>
              <h3 className='text-xl'>Task Title</h3>
              <input type="text" placeholder="Give title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="bg-gray-400 rounded p-2 text-black w-full text-lg"/>
            </div>
            <div>
              <h3 className='text-xl'>Date</h3>
              <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} className="bg-gray-400 rounded p-2 text-black w-full"/>
            </div>
            <div>
              <h3 className='text-xl'>Assign to</h3>
              <input type="text" placeholder="Employee" value={assign} onChange={(e)=>{setAssign(e.target.value)}} className="bg-gray-400 rounded p-2 text-black w-full"/>
            </div>
            <div>
              <h3 className='text-xl'>Category</h3>
              <input type="text" placeholder="design, dev, .." value={cat} onChange={(e)=>{setCat(e.target.value)}} className="bg-gray-400 rounded p-2 text-black w-full"/>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <h3 className="text-xl">Description</h3>
            <textarea name="" id="" rows={3} cols={5} value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="bg-gray-400 rounded p-2 text-black w-full"></textarea>

            <button type="submit" className="mt-5 bg-emerald-400 rounded-lg text-lg w-full py-1 cursor-pointer">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
