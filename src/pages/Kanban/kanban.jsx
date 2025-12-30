import React from 'react'
import "./index.css"
import { KanbanComp } from '../../components/KanbanComp'
import {Logo} from "../../components/Logo"
export const KanbanBoard  = () => {
  return (
    <div className='kanbanBody'>
      <Logo/>
      <KanbanComp/>
    </div>
  )
}
