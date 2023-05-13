import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Admin = () => {
    const [departments, setDepartments] = useState([]); 
    const admin = useSelector(state => state.admin)
    



    const fetchDep = async () => {
        const response = await fetch("https://findway.onrender.com/api/v1/department", {
            method: "GET", 
            headers: {
                "Content-Type":"application/json"
            }
        })

         
        const data = await response.json()
        setDepartments(data)
        

    }


    const handleDelete = async (id) => {
        alert("Do you Want to delete the department")
        const response = await axios.delete(`https://findway.onrender.com/api/v1/department/${id}`)
        setDepartments(departments.filter(department => department._id !== id))



    }

    useEffect(() => {
        fetchDep();

    }, [])
    return(
        <div>
            <Navbar isAdmin={true} />
            <h1 className="mx-10 my-10 font-bold uppercase">Admin: {admin.email}</h1>
            <div className="flex items-center justify-center h-screen">
            <div className="bg-white  rounded-md shadow-md shadow-red-200 flex justify-center w-[50rem] overflow-hidden -mt-[500px]">
                <table className="w-full text-center">
                    <thead className="bg-red-100 rounded-t-lg mb-3">
                    <tr>
                        <th>Department ID</th>
                        <th>Department Title</th>
                        <th>Courses</th>
                        <th>Delete Department</th>
                        
                    </tr>

                    </thead>
                    <tbody>
                    {departments.map((department, index) => (
                        <tr key={department._id} index={index}>
                        <td>{department._id.slice(0, 10) + "...."}</td>
                        <td>{department.title}</td>
                        <td className="text-left">
                        {department.courses.map((course, index) => (
                            
                        <li key={course._id} index={index}>{course.title}</li>
                        ))}
                      
                        </td>
                        <td><button className="bg-red-600 px-2 py-1 rounded-sm shadow-md text-white" onClick={() => handleDelete(department._id)}>Delete</button></td>
                    </tr>


                    ))}
                  
                    </tbody>
                </table>
                
            </div>

            </div>
          
        </div>
    )
}

export default Admin; 