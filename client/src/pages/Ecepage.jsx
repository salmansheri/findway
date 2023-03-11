import React from "react";
import { ececourses } from "../../courses";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Ecepage = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 items-center justify-center px-11 pb-10">
        {ececourses.map((course, index) => (
          <Link to={`${course.link}`}>
            <Card
              key={index}
              img={course.img}
              name={course.name}
              desc={course.desc}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ecepage;
