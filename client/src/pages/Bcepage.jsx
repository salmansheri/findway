import React from "react";
import { bcecourses } from "../../courses";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Bcepage = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
      {bcecourses.map((course, index) => (
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
  );
};

export default Bcepage;
