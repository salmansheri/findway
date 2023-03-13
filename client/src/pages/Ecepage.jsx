import React, { useState } from "react";
import { ececourses } from "../../courses";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Ecepage = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="px-[100px]">
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
       {ececourses.filter(course=> course.name.toLowerCase().includes(searchItem.toLowerCase()) || course.desc.toLowerCase().includes(searchItem.toLowerCase())).map((course, index) => (
        <Link key={index} index={index} to={`${course.link}`}>
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

export default Ecepage;
