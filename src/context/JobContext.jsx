import React, { use } from 'react'
import { createContext,useState } from 'react'
import { JOBS } from '../JOBS'

export const JobContext = createContext("")
export const JobContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  // All Jobs Will live Here
  const [jobs, setJobs] = useState(() => {

       const savedJobs = localStorage.getItem("jobs")
        if (savedJobs) {
          return JSON.parse(savedJobs) 
        } else{
          return JOBS
        }
  })

  // Keep Track of my Form
  const [companyName, setCompanyName] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState("")
  const [deadline, setDeadline] = useState("yyyy-MM-dd")

  // Editing Functionality
  const [editId, setEditId] = useState(null)
  const [editCompanyName, setEditCompanyName] = useState("") 
  const [editStatus, setEditStatus] = useState("")
  const [editRole, setEditRole] = useState("")
  const [editDeadline, setEditDeadline] = useState("yyyy-MM-dd")

  const contextValue = {isAuth, setIsAuth, jobs, setJobs, companyName, setCompanyName, role, setRole, status, setStatus, deadline, setDeadline
    , editId, setEditId, editCompanyName, setEditCompanyName, editStatus, setEditStatus, editRole, setEditRole, editDeadline, setEditDeadline  
  }
  return (
     <JobContext.Provider value={contextValue}>{props.children}</JobContext.Provider>
  )
}
