import React, { useState } from 'react'; 
import Search from '../components/Search';
import Card from '../components/Card';
import { mcocourses } from '../../courses';
import { Link } from 'react-router-dom'


const Mcopage = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="p-[100px]">
    <Search searchItem={searchItem} setSearchItem={setSearchItem} />
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {mcocourses.filter(course=>course.name.toLowerCase().includes(searchItem.toLowerCase()) || course.desc.toLowerCase().includes(searchItem.toLowerCase())).map((course, index)=> (
      <Link to={`/mcopage/courses/${course.link}`}>
        <Card 
          name={course.name}
          img={course.img}
          desc={course.desc}
        />
      </Link>
    ))}

    </div>

    </div>
  )
}

export default Mcopage