import React, { useContext } from 'react'
import {JobContext} from "../context/JobContext"
import "./index.css"
export const StatusOverview = () => {
  const {jobs} = useContext(JobContext)
  const totalApp = jobs
  .map(job => job.count)
  .reduce((total, job) => total + job,0)
  
 const totalApplied = jobs.filter(job => job.status === "Applied").length
 const totalInter = jobs.filter(job => job.status === "Interview").length
 const totalOffers = jobs.filter(job => job.status === "Offer").length
 const totalRejected = jobs.filter(job => job.status === "Rejected").length
  return ( 
        <>
      <h2>Application Status Overview</h2>
       <div className="appStatusCont">
        <div className="statusCards">
          <h1 className='count'>{jobs.length}</h1>
          <p>Total Applications</p>
        </div>
        <div className="statusCards"> 
          <h1 className='count'>{totalApplied}</h1>
          <p>Applied stage</p>
          </div>
        <div className="statusCards"> 
          <h1 className='count'>{totalInter}</h1>
          <p>Interview Stage</p>
          </div>
        <div className="statusCards">
           <h1 className='count'>{totalOffers}</h1>
          <p>Offers</p>
        </div>
        <div className="statusCards">
           <h1 className='count'>{totalRejected}</h1>
          <p>Rejected</p>
        </div>
       </div>
       </>
  )
}
