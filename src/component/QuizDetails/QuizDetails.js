import React from 'react';

const QuizDetails = ({quizQuestion}) => {
    const {question,options,correctAnswer}=quizQuestion
    console.log(quizQuestion)
    return (
        <div className='bg-gray-500  py-4 m-12 text-center rounded-lg'>
            <h1  className='text-white text-2xl py-4'>{question}</h1>
            {
                options.map(option=><div className='px-52 '>
                    <ul className=' my-6 py-2 h-18 bg-slate-400 text-green-200 border border-indigo-500 text-center  rounded-lg w-4/5'>
                        <li className='mt-3'>{option}</li>
                    </ul>
                </div>)
            }
            
            
        </div>
    );
};

export default QuizDetails;