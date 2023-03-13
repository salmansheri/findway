import React, { useState } from "react";
import { eeecourses } from "../../courses";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Search from "../components/Search";

const Eeepage = () => {
  const [searchItem, setSearchItem] = useState(""); 
  return (
    <div className="px-[100px]">
    <Search searchItem={searchItem} setSearchItem={setSearchItem} />
    <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
     {eeecourses.filter(course=> course.name.toLowerCase().includes(searchItem.toLowerCase()) || course.desc.toLowerCase().includes(searchItem.toLowerCase())).map((course, index) => (
      <Link to={`/eeepage/courses/${course.link}`}>
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

export default Eeepage;
