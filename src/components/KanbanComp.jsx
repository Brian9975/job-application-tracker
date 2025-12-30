import React, { useContext } from 'react'
import {JobContext} from "../context/JobContext"
import "./index.css"
export const KanbanComp = () => {
const {jobs} = useContext(JobContext)
  const appliedState = jobs.filter(job => job.status === "Applied")
  const interState = jobs.filter(job => job.status === "Interview")
  const offerState = jobs.filter(job => job.status === "Offer")
  const rejectState = jobs.filter(job => job.status === "Rejected")

  return (
        
      <div className="kanbanBoard">
        <h2>Kanban Board</h2>
        <div className="kanbanCont">
        <div className="kanbanContFlex">
          <div className="kanbanInfo">
            <h3>Applied</h3>
           <div className='kanbanCard'>
             {appliedState.map(job => (<p key={job.id}>{job.companyName}</p>))}
           </div>
          </div>
          <div className="kanbanInfo">
            <h3>Interview</h3>
             <div className='kanbanCard'>
              {interState.map(job => (<p key={job.id}>{job.companyName}</p>))}
             </div>
          </div>
       
        </div>
        <div className="kanbanContFlex">
          <div className="kanbanInfo">
            <h3>Offer</h3>
           <div className='kanbanCard'>
             {offerState.map(job => (<p key={job.id}>{job.companyName}</p>))}
           </div>
          </div>
          <div className="kanbanInfo">
            <h3>Rejected</h3>
             <div className='kanbanCard'>
              {rejectState.map(job => (<p key={job.id}>{job.companyName}</p>))}
             </div>
          </div>
        </div>
        </div>
      </div>
  )
}
