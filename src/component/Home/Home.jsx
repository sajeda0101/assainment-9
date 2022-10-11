import React, { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import img from '../../image/1.jpg'
import { useLoaderData } from 'react-router-dom';
import Statatics from '../Statatics/Statatics';

const Home = () => {
    const quizs=useLoaderData().data
  
   
    return (
        <section style={{width:'960px' ,margin:'auto'}} className="grid grid-cols">
           
                <div className='mb-16 mt-32'>
                    <h1 className='text-4xl mb-12 text-center font-bold'>Welcome to our Quiz World</h1>
                    <div className='flex items-center border border-abmer-100 rounded'>
                        <img src={img} alt="" className='w-full rounded mr-6 p-3' />
                    <p className='text-xl'>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.In an educational context, a quiz is usually a form of a student assessment.</p></div>
                </div>
                <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-cols-3'>
                {
                   quizs.map(quiz=><Quiz quiz={quiz} key={quiz.id}></Quiz>)
                } 
                
                </div>

        
        </section>
    );
};

export default Home;