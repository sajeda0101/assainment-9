import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../component/Header/Header';

export const QuizContext=createContext( [])
const Main = () => {
    const quizs=useLoaderData();
 
    return (
       <QuizContext.Provider value={quizs.data}>
         <Header/>
            <Outlet/>
       </QuizContext.Provider>
    );
};

export default Main;