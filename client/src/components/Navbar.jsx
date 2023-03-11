import React from 'react'; 

const Navbar = () => {
    return(
        <div className="h-12 flex items-center bg-red-600 justify-between px-[100px] sticky top-0">
        <div className="">
        <img className="h-10 w-[100px]" src="/logo/logono.png" />

        </div>
        <div className="flex gap-10">
            <a className="text-white hover:font-bold" href="/login">Login</a>
            <a className="text-white hover:font-bold" href="/register">Register</a>
        </div>
            
            

        </div>
    )
}

export default Navbar; 