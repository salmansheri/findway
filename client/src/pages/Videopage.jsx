import React from "react";
import { useLocation } from "react-router-dom";

const Videopage = () => {
  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  console.log(pathname);
  const isLogicalComplexity = pathname.includes("logicalcomplexity");
  const isDesignmethodologies = pathname.includes("designmethodologies");
  const isSemiCustomDesign = pathname.includes("semicustomdesign")
  const isHeirarchy = pathname.includes("hierarchylocality"); 
  const isDesignFlow = pathname.includes("designflow");
  const isIntroduction = pathname.includes("introduction"); 

  return (
    <div className="">
      {isLogicalComplexity && (
        <div className="flex justify-between">
          <div className="flex-4 bg-red-500 h-screen w-screen">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ifLNELMfLTA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}

      {isDesignmethodologies && (
        <div className="flex justify-between">
          <div className="flex-4 bg-red-500 h-screen w-screen">
          <iframe className="w-full h-screen" src="https://www.youtube.com/embed/286OUoKGjlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      )}

      {isSemiCustomDesign && (
        <div className="flex justify-between">
          <div className="flex-4 bg-red-500 h-screen w-screen">
          <iframe className="h-screen w-full" src="https://www.youtube.com/embed/B6K5LgSbz8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      )}

      {isHeirarchy && (
        <div className="flex justify-between">
          <div className="flex-4 bg-red-500 h-screen w-screen">
          <iframe className="h-screen w-full" src="https://www.youtube.com/embed/etIVu0vMKMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      )}

      {isDesignFlow && (
        <div className="flex justify-between">
          <div className="flex-4 bg-red-500 h-screen w-screen">
          <iframe className="h-screen w-full" src="https://www.youtube.com/embed/A7k1RZI5lC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      )}

      {isIntroduction && (
        <div className="flex justify-between">
          <div className="flex-4 bg-red-500 h-screen w-screen">
          <iframe className="h-full w-full" src="https://www.youtube.com/embed/r-X9coYTOV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      )}
    </div>
  );
};

export default Videopage;
