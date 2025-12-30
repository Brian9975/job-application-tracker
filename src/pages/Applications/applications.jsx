import React from 'react'
import "./index.css"
import { Logo } from '../../components/Logo'
import { JobApplications } from '../../components/JobApplications'
import { AddJobForm } from '../../components/AddJobForm'

export const Applications = () => {
  return (
    <div className='applBody'>
      <Logo/>
      <AddJobForm/>
      <JobApplications/>
     {/* <div className='btnCenter'><button className='AddJobBtn'>Add Job</button></div>  */}
    </div>
  )
}
