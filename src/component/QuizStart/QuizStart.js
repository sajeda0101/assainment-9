import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const QuizStart = () => {
    const quizs=useLoaderData().data;
    const questions=quizs.questions;
    const quizNums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
        <div className="m-36">
            {/* {
                quizNums.map(quizNum=><div> {quizNum}</div>)
            } */}
        
            <h1 className='text-center text-4xl font-bold'>Quiz of {quizs.name} </h1>
           {questions.map(question=><QuizDetails quizQuestion={question} key={question.id}></QuizDetails>)}
            
        </div>
    );
};

export default QuizStart;