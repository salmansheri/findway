import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = ({email, isAdmin}) => {
  return (
    <div className="h-12 flex items-center bg-red-600 justify-between px-[100px] sticky top-0">
      <div className="">
        <img className="h-10 w-[100px]" src="/logo/logono.png" />
      </div>
      <div className="flex gap-10">
        <a className="text-white hover:font-bold" href="/login">
          Login
        </a>
        <a className="text-white hover:font-bold" href="/register">
          Register
        </a>
      </div>

      {email && (
        <div className="flex gap-2 items-center">
      <div className="bg-green-600 p-5 rounded-full w-5 h-5 flex items-center justify-center text-3xl">{email[0]}</div>
        <p className="text-md text-white">{email}</p>
      </div>
      )}

      {isAdmin && (
        <div><Link to="/adddep" className="text-white hover:font-bold">Add Department</Link></div>
      )}
     
    </div>
  );
};

export default Navbar;
