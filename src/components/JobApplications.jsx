import React, { useContext, useEffect } from "react";
import "./index.css";
import { JobContext } from "../context/JobContext";
import { useEditJob } from "../hooks/useEditJob";
import { useDeleteJob } from "../hooks/useDeleteJob";

export const JobApplications = () => {
  const {jobs, editId, editCompanyName, setEditCompanyName, editRole, setEditRole, editStatus, setEditStatus, editDeadline, setEditDeadline} = useContext(JobContext)
  const {startEdit, saveEdit, cancelEdit} = useEditJob()
  const {deleteJob} = useDeleteJob()




  useEffect(() => {
   localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])


  
  return (
    <>
      <h2>Job Applications</h2>
      {jobs.length < 1 && <div className="relative"><p className="emptyJobState">No Jobs Yet ! Please add Job</p></div>}
      {jobs.map((job) => 
       <div key={job.id}>
        {
        editId === job.id ? 
         
        
            <>
           <form className="addJobForm">
              <input type="text" value={editCompanyName} onChange={e => setEditCompanyName(e.target.value)}/>
              <input type="text" value={editRole} onChange={e => setEditRole(e.target.value)}/>
              <select value={editStatus} className='selectStyle' onChange={e => setEditStatus(e.target.value)} required>
                <option value="" disabled></option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
              <input type="date" value={editDeadline} onChange={e => setEditDeadline(e.target.value)}/>
            </form> 
            <div className="flex-center">
              <button onClick={() => {saveEdit(job.id)}}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </div>
         </>
        
        : 
      
       (       <div className="jobAppCont">
              <div className="jobAppCard">
                <div className="flexBtn">
                  <h3>Company : </h3>
                  <p>{job.companyName}</p>
                  <button className="editJobBtn" onClick={() => startEdit(job)}>Edit</button>
                </div>
                <div className="flex">
                  <h3 className="relative">
                    Role : <span className="span">{job.role}</span>
                  </h3>
                </div>
                <div className="flex">
                  <h3>
                    Status : <span className="span">{job.status}</span>
                  </h3>
                </div>
 
                <div className="flexBtn">
                  <h3>Deadline : </h3>
                  <p>{job.deadline}</p>
                  <button className="deleteJobBtn" onClick={() => deleteJob(job.id)}>Delete</button>
                </div>
              </div>
            </div>
       ) 
      }
     </div>
        
      )}
    </>
  );
};
