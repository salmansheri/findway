import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Courses,
  Videopage,
  Login,
  Register,
  AdminLogin,
  Admin,
  AddDepartment,
} from "./pages";

import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);
 
  const email = localStorage.getItem('email'); 
  console.log(email)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!email ? <Login /> : <Home />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:id/:index" element={<Videopage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={!admin.email ? <AdminLogin /> : <Admin />}
        />
        <Route path="/adddep" element={<AddDepartment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
