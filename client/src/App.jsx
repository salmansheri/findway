import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Home, Courses, Videopage, Login, Register  } from './pages'; 


import { useSelector } from "react-redux";

const App = () => {
  const user =  useSelector(state => state.user)
  const {email} = user 
  return(
    <BrowserRouter>
       
       <Routes>
        <Route path="/" element={!email ? <Login /> : <Home />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:id/:index" element={<Videopage />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    
     
    
  )
}

export default App;