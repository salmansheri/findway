import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="bg-white w-[500px] h-auto mt-10  rouded-lg shadow-sm hover:shadow-lg cursor-pointer rounded-lg overflow-hidden hover:bg-black hover:bg-opacity-5">
      <div className="w-full ">
        <img className="w-[700px] object-contain" src={img} alt="courses" />
      </div>
      <div className="mt-8 flex flex-col gap-5 pb-10 px-8 text-left">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
