import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import axios from 'axios';



const Courses = () => {
  

  const [courses, setCourses] = useState([]); 

  const {pathname} = useLocation(); 
  const path = pathname.split("/")

 

  const fetchPost = async () => {
    const response = await axios.get(`https://findway.onrender.com/api/v1/department/${path[2]}`)

    const data = response.data; 

    setCourses(data.courses); 
   
    

  }

  useEffect(() => {
    fetchPost(); 
    
  },[])
  

 

  const [searchItem, setSearchItem] = useState(""); 
  return(
    <div className="mb-10">
    <Navbar  />
     <div className="px-[100px] mt-10">
     <Search searchItem={searchItem} setSearchItem={setSearchItem} />
    <div className="flex flex-wrap justify-center items-center gap-10">

    {courses.filter(course => course.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchItem.toLowerCase())
    ).map((course, index) => (
      <Link key={course._id} index={index} to={`/video/${path[2]}/${index}`}>
        <Card title={course.title} img={course.img} desc={course.desc} />
      </Link>
    ))}

     
    
   

    </div>
   

    </div>

    </div>
   
  )
}

export default Courses; 