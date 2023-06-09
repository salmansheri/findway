import React from "react";
import { useLocation, Link } from "react-router-dom";
import { vlsiCourses, edeCourses } from "../../courses.js";
import Card from "../components/Card";

const Courses = () => {
  /* to get the location of the current page */
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
  const isMechanics = pathname.includes("mechanicsandmaterials");
  const isSensor = pathname.includes("sensorandactuatorDesign");
  const isElectricals = pathname.includes("electricalandelectroniccircuits");
  const isRobotics = pathname.includes("roboticsandautomation");
  const isProgramming = pathname.includes("computerprogramming");

  const isCommunication = pathname.includes("elctronics");

  return (
    <>
      {/* Vlsi page */}
      {isVlsi && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
            VLSI Design Systems:{" "}
          </h1>

          <div className="flex flex-wrap gap-8 pb-11">
            {vlsiCourses.map((course, index) => (
              <Link
                key={course.id}
                index={index}
                to={`/videopage/${course.link}`}
              >
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

      {/* EDE Page */}
      {isEde && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600">
            Electronics Devices and Circuits
          </h1>

          <div className="flex flex-wrap gap-8">
            {edeCourses.map((course, index) => (
              <Link
                key={course.id}
                index={index}
                to={`/videopage/${course.link}`}
              >
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

      {/* isAnolog */}

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

      {/* control System page */}

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

      {/* Electromagnetics page */}

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

      {/* Power Electronics page */}
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

      {/* Signal processing */}

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

      {/* communication page */}
      {isCommunication && (
        <div className="px-[100px]">
          <h1 className="mt-10 text-3xl font-semibold text-gray-600"></h1>

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

      {/* Circuit analysis */}
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

      {/* Mechanics page */}
      {isMechanics && (
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

      {/* Electricals */}
      {isElectricals && (
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

      {/* Robotics */}
      {isRobotics && (
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

      {isProgramming && (
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

      {isSensor && (
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
