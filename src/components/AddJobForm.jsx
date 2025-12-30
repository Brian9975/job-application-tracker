import React, { useContext } from 'react'
import "./index.css"
import { JobContext } from '../context/JobContext'
import { useCreateJob } from '../hooks/useCreateJob'

export const AddJobForm = () => {
const {companyName, setCompanyName, role, setRole, status, setStatus, deadline, setDeadline} = useContext(JobContext)
const {addJob} = useCreateJob()
  return (
    <div>  <form  className="addJobForm" onSubmit={addJob}>
      <div className='flexField'>
         <label>Company Name:</label>
         <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} required/> 
      </div>
      
      <div className='flexField'>
         <label>Role:</label>
         <input type="text" value={role}  onChange={e => setRole(e.target.value)} required/> 
      
      </div>

      <div className='flexField'>
         <label>Status:</label>
         <select value={status} className='selectStyle'  onChange={(e) => setStatus(e.target.value)} required>
            <option value="" disabled></option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
         </select>
         
      </div>

      <div className='flexField'>
         <label>Deadline:</label>
         <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required/> 
      </div>
      <div className='addBtnFlex'>
        <button type="submit" className="addBtn">Add Job</button>
      </div>
      
     </form></div>
  )
}
