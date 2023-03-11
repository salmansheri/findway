import React, {useState} from 'react'

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "", 
        email: "",
        password: "", 
        dateofbirth: "", 

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerData)
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

export default Register