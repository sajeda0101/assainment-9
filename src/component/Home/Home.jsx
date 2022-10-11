import React, { useContext } from 'react';
import { QuizContext } from '../../Main/Main';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs=useContext(QuizContext);
    console.log(quizs.data)
    return (
        <section style={{width:'960px' ,margin:'auto'}}>
            <div className=''>
                <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
                    <h1>Welcome</h1>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-2  '>
                {
                   quizs.map(quiz=><Quiz quiz={quiz}></Quiz>)
                } 
                </div>

            </div>
        </section>
    );
};

export default Home;