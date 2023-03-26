import React, { useState } from "react";
import axios from 'axios'; 
import { useDispatch, useSelector } from "react-redux";
import { LoggedUser } from "../redux/userSlice";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");

  const dispatch = useDispatch(); 
  const name = useSelector(state => state.name)
 
  const navigate = useNavigate(); 
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/v1/users/login", {
      email: loginData.email, 
      password: loginData.password, 
    }); 
    const data = await res.data;
    setEmail(data.email)
   

    if(data) {
      dispatch(LoggedUser({email: email}))
      navigate("/"); 
    } 
    if(data.message) {
      alert(data.message); 
    }


    
    
  };
  return (
    <>
    
     <div className="flex h-screen justify-center items-center">
      <div className="bg-white flex flex-col gap-5 items-center p-10 rounded-lg shadow-lg">
      <div>
        <img src="/logo/logoblack.png" className="w-[150px]" />
      </div>
      <div className="flex flex-col items-center -mt-11">
      <h2 className="text-2xl font-bold">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mt-10">
        Email: 
        <input type="email"  onChange={(e) => setLoginData({...loginData, email: e.target.value})} className="border w-full mt-3 h-10 p-4 placeholder:italic" placeholder="Enter Email Id" required />

        </label>
        <label className="mt-5">
        password: 

        <input type="password"  onChange={(e) => setLoginData({...loginData, password: e.target.value})} className="border w-full mt-3 h-10 placeholder:italic p-4" placeholder="Enter Password" required />

        </label>
        <button className="bg-red-600 py-2 mt-5 rounded-md shadow-lg hover:bg-red-700 cursor-pointer text-white" type="submit">Login</button>
        <div className="mt-4 flex gap-2">
        <p>Not having Account?</p>
            <a href="/register" className="text-blue-600 hover:underline">Create Accout</a>
        </div>

        <div>
            <a href="/forgotpassword" className="text-red-600 hover:underline">Forgot password</a>
        </div>
           
          

        </form>
        
      </div>
    
      </div>
    </div>

    </>
   
  );
};

export default Login;
