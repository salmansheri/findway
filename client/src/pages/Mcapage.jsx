import React from 'react'; 
import { csecourses } from '../../courses';
import { Link } from 'react-router-dom'; 
import Card from '../components/Card';


const Mcapage = () => {
  return (
    <div>
      {csecourses.map((course, index) => (
        <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
      {csecourses.map((course, index) => (
        <Link to={`/csepage/courses/${course.link}`}>
          <Card
            key={index}
            img={course.img}
            name={course.name}
            desc={course.desc}
          />
        </Link>
      ))}
    </div>
      ))}
    </div>
  )
}

export default Mcapage