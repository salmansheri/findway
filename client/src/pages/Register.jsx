import React, {useState} from 'react'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        username: "", 
        email: "",
        password: "", 
        dateofbirth: "", 

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
        const postData = async () => {
            const data = await axios.post("http://localhost:5000/api/v1/users/register", {
                username: registerData.username, 
                email: registerData.email, 
                password: registerData.password, 
                dateofbirth: registerData.dateofbirth,

            }); 

           
        }
        postData().then(() => {
            alert("created Successfully")
            navigate("/login")
        })

            
        } catch(err) {
            alert("something went wrong")
        }
    }
  return (
    <div className="flex h-screen justify-center items-center">
        <div className="bg-white p-10 flex flex-col gap-5 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold">Register</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <label className="">
                Username:
                <input placeholder="Enter UserName" className="border w-full mt-3 h-10 p-4" value={registerData.username}  onChange={(e) => setRegisterData({...registerData, username: e.target.value})} required />

                </label>
                 <label className="">
                Email
                <input placeholder="Enter Email" className="border w-full mt-3 h-10 p-4" value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})}  required />

                </label>
               <label className="">
                Password
                <input placeholder="Enter Password" className="border w-full mt-3 h-10 p-4" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} required />

                </label>
                 <label className="">
                Date of Birth
                <input type="date"  className="border w-full mt-3 h-10 p-4" value={registerData.dateofbirth} onChange={(e) => setRegisterData({...registerData, dateofbirth: e.target.value})} required />

                </label>
                <button type="submit" className="bg-red-600 py-3 rounded-md shadow-md text-white hover:bg-red-700">Create Account</button>
                <div className="flex gap-2 items-center justify-center">
                    <p>Have Account?</p>
                    <a href="/login" className="text-blue-600 hover:underline">Login</a>
                </div>
               

            </form>
        </div>
    </div>
  )
}

export default Register; 