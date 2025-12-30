import React, { useContext } from 'react'
import "./index.css"
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase-config'
import { JobContext } from '../context/JobContext'
export const Navbar = () => {
  const navigate = useNavigate()
const {setIsAuth, isAuth} = useContext(JobContext)
  const logUserOut = () => {
    signOut(auth).then((result) => {
      localStorage.removeItem("isAuth")
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <div>
      <nav className="nav-container">
        <aside className='nav-aside'>
          <Link to="/">Dashboard</Link>
          <Link to="/applications">Applications</Link>
          <Link to="kanban-board">Kanban</Link>
          <button onClick={logUserOut} className='logOutBtn'>LogOut</button>
        </aside>
      </nav>
    </div>
  )
}
