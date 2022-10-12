import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizDetails = ({ quizQuestion }) => {
  const {correctAnswer}=quizQuestion
  const rightAnswer=(value)=>{
    toast.success(`${value}`,{
      position:'top-center',
      autoClose:2000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:'light'

    })}
  const wrongAnswer=(value)=>{
    toast.error(`${value}`,{
      position:'top-center',
      autoClose:2000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:'light'

    })}
    const handleClick=(event)=>{
      const value=event.target.innerText;
      if(value===correctAnswer){
        rightAnswer('Answer is Correct')
      }
      else{
        wrongAnswer('Answer is Wrong')
      }
    }
   
    const notify=()=>{
    if(correctAnswer===correctAnswer){
      rightAnswer(correctAnswer)
    }
    }
  
   
  const { question, options, } = quizQuestion;

  
  return (
    <div className="bg-gray-500 shadow-lg py-4 m-12 text-center rounded-lg sm:w-max-full">
      
     <h1 className="text-white text-2xl py-4">{question.slice(3,-4)}</h1>
      {options.map((option) => (
        <div className="px-56 md:px-2 lg:px-52 sm:px-6  my-6 
        ">
          
          <button className=" bg-slate-400 text-green-200 border border-indigo-500 text-center  rounded-lg py-3 w-full" onClick={handleClick}>{option}</button>
        </div>
      ))}
      <div className="m-auto border  border-green-300 bg-slate-100  rounded px-2 w-32 lg:w-12  text-orange-800  icon-size">
      <EyeIcon className="w-8 ml-9 lg:m-0" onClick={notify}></EyeIcon>
      </div>
      <ToastContainer></ToastContainer>
      
    </div>
  );
};

export default QuizDetails;
