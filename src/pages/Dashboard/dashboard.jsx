import React from 'react'
import {Logo } from "../../components/Logo"
import "./index.css"
import { JobApplications } from '../../components/JobApplications'
import { KanbanComp } from '../../components/KanbanComp'
import { StatusOverview } from '../../components/statusOverview'

export const Dashboard = () => {
 

  return (
    <div className='dashBody'>
       <Logo/>
       <StatusOverview/>

       <JobApplications/>
       <KanbanComp/>
      
    </div>
  )
}
