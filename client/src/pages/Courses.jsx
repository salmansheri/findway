import React from "react";
import { useLocation, Link } from "react-router-dom";
import { vlsiCourses, edeCourses } from "../../courses.js";
import Card from "../components/Card";

const Courses = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const isVlsi = pathname.includes("vlsi");
  console.log(isVlsi);
  const isEde = pathname.includes("ede");
  const isAnolog = pathname.includes("analog");
  const isControlSystem = pathname.includes("controlsystem");
  const isElectromagnetics = pathname.includes("electromagnetics");
  const isSignalProcessing = pathname.includes("signalprocessing");
  const isPowerElectronics = pathname.includes("powersystem");
  const isCircuitAnalysis = pathname.includes("circuitanalysis");

  const isCommunication = pathname.includes("elctronics");

  return (
    <>
      {isVlsi && (
      
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
            VLSI Design Systems:{" "}
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Link key={course.id} index={index} to={`/videopage/${course.link}`}>
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
               </Link>
            ))}
          </div>
        </div>

       
       
      )}

      {isEde && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
            Electronics Devices and Circuits 
          </h1>

          <div className="flex flex-wrap gap-8">
            {edeCourses.map((course, index) => (
              <Link key={course.id} index={index} to={`/videopage/${course.link}`}>
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />

              </Link>
             
            ))}
          </div>
        </div>
      )}

      {isAnolog && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
           Analog Devices and Circuits 
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}

      {isControlSystem && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
           Control Systems 
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}

      {isElectromagnetics && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
            Electromagnetics 
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}

      {isPowerElectronics && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
           Signal Processing 
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}

      {isSignalProcessing && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
           Signal Processing 
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}

      {isCommunication && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
           
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}
      {isCircuitAnalysis && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
            VLSI Design Systems:{" "}
          </h1>

          <div className="flex flex-wrap gap-8">
            {vlsiCourses.map((course, index) => (
              <Card
                key={course.id}
                img={course.img}
                name={course.title}
                desc={course.desc}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
