import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const QuizStart = () => {
    const quizs=useLoaderData().data;
    const questions=quizs.questions;

    return (
        <div className="m-36">
            
        
            <h1 className='text-center text-4xl font-bold'>Quiz of {quizs.name} </h1>
           {questions.map(question=><QuizDetails quizQuestion={question} key={question.id}></QuizDetails>)}
            
        </div>
    );
};

export default QuizStart;