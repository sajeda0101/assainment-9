import React from "react";
import { Link } from "react-router-dom";

const QuizDetails = ({ quizQuestion }) => {
  const { question, options, } = quizQuestion;
  
  return (
    <div className="bg-gray-500  py-4 m-12 text-center rounded-lg">

      <h1 className="text-white text-2xl py-4">{question}</h1>
      {options.map((option) => (
        <div className="px-52  my-6 ">
          <p className=" bg-slate-400 text-green-200 border border-indigo-500 text-center  rounded-lg w-4/5">
            <li className="mt-3 ">{option}</li>
          </p>
        </div>
      ))}
      <Link to="/statatics"><button className="border border-green-300 bg-slate-100 px-5 py-2 rounded-xl text-xl mr-20">See more
      </button></Link>
    </div>
  );
};

export default QuizDetails;
