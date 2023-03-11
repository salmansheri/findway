import React from "react";
import { eeecourses } from "../../courses";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Eeepage = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
      {eeecourses.map((course, index) => (
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
  );
};

export default Eeepage;
