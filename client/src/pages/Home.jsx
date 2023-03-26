import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import { useSelector } from "react-redux";


const Home = () => {
 
  const [departments, setDepartments] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const user = useSelector((state) => state.user);
 
  useEffect(() => {
    const fetchdep = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/department"
      );

      const data = response.data;
      setDepartments(data);
    };

    fetchdep();
  }, []);

  return (
    <>
      <Navbar email={user.email} />
      <div className="px-[100px] mb-10">
        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
        {departments
          .filter(
            (dep) =>
              dep.title.toLowerCase().includes(searchItem.toLowerCase()) ||
              dep.desc.toLowerCase().includes(searchItem.toLowerCase())
          )
          .map((department, index) => (
            <div
              key={department._id}
              index={index}
              className="w-full bg-white mt-10 p-11 rounded-xl h-auto shrink shadow-md"
            >
              <li className="uppercase lg:text-3xl sm:text-lg font-extrabold">
                {department.title}
              </li>
              <p className="m-10">{department.desc}</p>

              <Link
                className="text-red-700 hover:underline text-lg font-bold"
                to={`/courses/${department._id}`}
              >
                Explore
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
