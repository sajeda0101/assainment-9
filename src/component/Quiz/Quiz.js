import React from "react";
import { ArrowRightIcon, BeakerIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { name, logo, total,id } = quiz;
  return (
    <div className="border border-orange-600 bg-slate-200 m-4 rounded-xl ">
      <img
        src={logo}
        alt=""
        style={{ width: "250px" }}
        className="rouded-xl m-3"
      />
      <div className=" bg-slate-50  leading-loose p-2 rounded-xl text-xl">
       
          <h1 className="text-center text-3xl mt-5">{name}</h1>
          <h3 className="text-2xl mb-4 text-center">Total Quiz:{total}</h3>
          <Link to={`/quiz/${id}`} >
            <button className="bg-purple-500 w-full  text-white rounded hover:bg-indigo-700 hover:text-white justify-center flex items-center">
              Quiz Start
              <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default Quiz;
