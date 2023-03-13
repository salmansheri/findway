import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { mbacourses } from '../../courses';
import Search from '../components/Search';

const Mbapage = () => {
  const [searchItem, setSearchItem] = useState(""); 
  return (
    <div className="p-[100px]">
    <Search searchItem={searchItem} setSearchItem={setSearchItem} />
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {mbacourses.filter(course => course.name.toLowerCase().includes(searchItem.toLowerCase()) || course.desc.toLowerCase().includes(searchItem.toLowerCase())).map((course, index) => (
        <Link to={`/mbapage/courses/${course.link}`}>
          <Card 
            img={course.img}
            name={course.name}
            desc={course.desc}
          />

        </Link>
      ))}
    </div>


      
    
    </div>
  )
}

export default Mbapage