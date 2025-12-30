import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { Login } from "./pages/Auth/login"
import { Applications } from "./pages/Applications/applications"
import { Dashboard } from "./pages/Dashboard/dashboard"
import {KanbanBoard} from "./pages/Kanban/kanban"
import { Layout } from './layouts/layout'
import { useContext } from 'react'
import { JobContext} from './context/JobContext'

function App() {

  const {isAuth} = useContext(JobContext)

  return (
   <Router>
    
      
    <Routes>


      <Route path='/login' element={<Login/>}></Route>
     
      { isAuth ? (
      
        <>
       <Route element={<Layout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='applications' element={<Applications/>}></Route>
        <Route path='kanban-board' element={<KanbanBoard/>}></Route>
      </Route></>) : <Route path='*' element={<Login /> }/> }
      
    </Routes>

   </Router> 
  )
}

export default App
