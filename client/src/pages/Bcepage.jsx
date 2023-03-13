import React from "react";
import { bcecourses } from "../../courses";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Search from '../components/Search';

const Bcepage = () => {
  return (
    <div className="px-[100px]">
    <Search searchItem={searchItem} setSearchItem />
     <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
     {bcecourses.filter(course=> course.name.toLowerCase().includes(searchItem.toLowerCase()) || course.desc.toLowerCase().includes(searchItem.toLowerCase())).map((course, index) => (
      <Link to={`/bcepage/courses/${course.link}`}>
          <Card
            key={index}
            img={course.img}
            name={course.name}
            desc={course.desc}
          />
        </Link>
     ))}
    </div>

    </div>
   
  );
};

export default Bcepage;
