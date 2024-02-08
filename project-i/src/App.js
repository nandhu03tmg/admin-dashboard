import React from 'react'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import Navbar from './components/Navbar/navbar'
import Topnav from './components/Topnav/topnav'
import Dashboard from './components/Dashboard/dashboard'
import Setting from './components/Settings/setting'
import Task from './components/Tasks/task'
import Leads from './components/Leads/leads'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faHomeUser } from '@fortawesome/free-solid-svg-icons';
import Reports from './components/Reports/reports'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {Route,Routes,Link} from 'react-router-dom'
import Contact from './components/Contact/contact'

function App() {
  return (
    <div>
{/* <Navbar/> */}


      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}> </Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='/leads' element={<Leads/>}></Route>
        <Route path='/reports' element={<Reports/>}></Route>




        


      </Routes>
    </div>
  )
}

library.add(faHomeUser);
export default App
