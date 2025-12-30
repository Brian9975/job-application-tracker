import React, { useContext } from 'react'
import { JobContext } from '../context/JobContext'
import { useNavigate } from 'react-router-dom'

export const useCreateJob = () => {
  const navigate = useNavigate()
  const {jobs, setJobs, companyName, role, status, deadline, setCompanyName, setRole, setStatus, setDeadline} = useContext(JobContext)
//  Add Job To Array
const addJob = (e) => {
e.preventDefault()

const newJob = {
  id: Date.now(),
  companyName,
  role,
  status,
  deadline,
  count: 1,
}

setJobs(prev => [...prev, newJob])
navigate("/")
// Clear Inputs
setCompanyName("")
setRole("")
setStatus("")
setDeadline("")

}
  return {
    addJob
  }
}
