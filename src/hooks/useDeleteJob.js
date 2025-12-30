import React, { useContext } from 'react'
import { JobContext } from '../context/JobContext'

export const useDeleteJob = () => {
    const {jobs, setJobs} = useContext(JobContext)
    const deleteJob = (id) => {
      setJobs(jobs.filter(job => job.id !== id))
    }
  return {
    deleteJob
  }
}
