import React, {useState, useEffect} from 'react'; 
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Videopage = () => {
  const [courses, setCourses] = useState([])
  const {pathname} = useLocation(); 

  const id = pathname.split("/")[2]; 
  const index= pathname.split("/")[3]; 

  const fetchVideo = async () => {
    const response = await axios.get(`https://findway.onrender.com/api/v1/department/${id}`)

    const data = response.data 
   
    setCourses(data.courses[index].url); 
    console.log(data.courses[index].url)

  }

  useEffect(() => {
    fetchVideo();

  }, [])
 
  return (
    <div className="bg-red-700 h-screen">
 
      <iframe className="w-full h-full" src={courses} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    
     
    </div>
  )
}

export default Videopage