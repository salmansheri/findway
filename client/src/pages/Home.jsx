import React from "react";
import { cardData } from "../Data";

const Home = () => {
  return (
    <div className="px-[100px] mb-10">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="bg-white py-[50px] px-[100px] mt-10 rounded-lg shadow-lg"
        >
          <li className="text-3xl font-bold text-gray-500">{item.name} </li>
          <div className="mt-10">
            <p>{item.desc}</p>
          </div>
          <div className="mt-10 text-xl text-red-600 font-bold  flex gap-8">
            <a className="hover:underline" href={item.link} target="_blank">
              Explore
            </a>
            <a className="hover:underline" href={item.page} target="_blank">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
