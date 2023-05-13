import React from "react";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { reset } from "../redux/userSlice";

const Navbar = ({isAdmin}) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const user = useSelector(state => state.user); 
  console.log(user)
  const handleLogout = () => {
    localStorage.removeItem('email')
    navigate("/login")



  }

  const email = localStorage.getItem('email')
  return (
    <div className="h-12 flex items-center bg-red-600 justify-between px-[100px] sticky top-0">
      <div className="">
        <img className="h-10 w-[100px]" src="/logo/logono.png" />
      </div>
      {!email ? (

      <div className="flex gap-10">
        <a className="text-white hover:font-bold" href="/login">
          Login
        </a>
        <a className="text-white hover:font-bold" href="/register">
          Register
        </a>
      </div>
      ): (

      <div>
        <button onClick={handleLogout} className="text-white">Logout</button>
      </div>
      )}
      

      {email && (
        <div className="flex gap-2 items-center">
      <div className="bg-green-600 p-5 rounded-full w-5 h-5 flex items-center justify-center text-3xl">{email[0]}</div>

        <p className="hidden md:block text-md text-white">{email}</p>
      </div>
      )}

      {isAdmin && (
        <div><Link to="/adddep" className="text-white hover:font-bold">Add Department</Link></div>
      )}
     
    </div>
  );
};

export default Navbar;
