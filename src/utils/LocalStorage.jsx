import React from 'react'
import data from './Employees.json';

const emp = data.employees.emp
const admin = data.employees.admin
const LocalStorage = () => {
  // console.log(data.admins)

  return (
    <div>
      
    </div>
  )
}

export const  setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(emp))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const  getLocalStorage = () => {
  // const data = localStorage.getItem('employees')
  // console.log(JSON.parse(data))

  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees, admin)
  return {employees,admin}
}

export default LocalStorage
