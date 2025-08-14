import { useContext, useEffect, useState } from "react"
import LoginAuth from "./components/Auth/LoginAuth"
import EmpDshbrd from "./components/Dashboard/EmpDshbrd"
import AdminDash from "./components/Dashboard/AdminDash"
import { AuthContext } from "./context/AuthProvider"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData)
  // console.log(authData.employees)

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // })

 
  // useEffect(()=>{
  //     const currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || ''
  //     // console.log('No User Found')
  //     if(currentUser){
  //       console.log(currentUser)
  //       setUser(currentUser.role)
  //       console.log(user)

  //       if(currentUser.role === 'employee')
  //         setLoggedInUser(currentUser.data)
  //       }
  // },[])

  const handleLogin = (email, pswd) => {
    // console.log(email, pswd)
    // console.log(authData.employees[1].email, authData.employees[1].password)
    if (email == "admin1@example.com" && pswd == "admin123") {
      // console.log('This is admin')

      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
      setUser("admin")
    } else if (authData) {
      // console.log('This is employye')
      const emp = authData.employees.find((e) => e.email == email && e.password == pswd)
      if (emp) {
        setUser("employee" )
        setLoggedInUser(emp)
        localStorage.setItem("loggedInUser", JSON.stringify({ role:"employee", data:emp })
        )
      }else 
        alert("Invalid Credentials")
    }else 
    alert("Not Found: Local-Storgae Error")
  }
  // handelLogin('employee1@example.com', '123')

  return (
    <>
      {console.log(user)}
      {!user ? <LoginAuth handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDash name={'Alice Anderson'}/>}
      {user === "employee" && <EmpDshbrd user={loggedInUser}/>}
    </>
  )
}

export default App
