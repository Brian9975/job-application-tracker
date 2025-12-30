import React, { useContext } from 'react'
import { JobContext } from '../context/JobContext'

export const useEditJob = () => {
const { jobs, setJobs,  setEditId, setEditCompanyName, setEditRole, setEditStatus, setEditDeadline, editCompanyName, editRole, editStatus, editDeadline} = useContext(JobContext)

const startEdit = (job) => {
 setEditId(job.id)
 setEditCompanyName(job.companyName)
 setEditRole(job.role)
 setEditDeadline(job.deadline)
 setEditStatus(job.status)
}

const saveEdit = (id) => {
 setJobs(prev => 
  prev.map(job => 
      job.id === id ? {...job, 
        companyName: editCompanyName,
        role: editRole,
        status: editStatus,
        deadline: editDeadline,
    } : job
  )
 )
 setEditId(null)
}

const cancelEdit = () => {
    setEditId(null)
}
  return {
  startEdit, saveEdit, cancelEdit
  
  }
}
