import React from 'react';

const Quiz = ({quiz}) => {
   const {name,logo,total}=quiz
    return (
        <div className='border border-orange-600 bg-slate-200 m-4 rounded-xl'>
            <img src={logo} alt="" style={{width:'250px'}} className="rouded-xl m-3"/>
          <div className='flex justify-between bg-slate-50 p-2 rounded-xl text-xl'>
          <div className='flex '>
          <h1 className='mr-12'>{name}</h1>
          <h3>Quiz:{total}</h3>
          </div>
          <button className='bg-purple-500 text-white px-5 py-1 rounded hover:bg-indigo-700 hover:text-white'>Practice Start</button>
          </div>
        </div>
    );
};

export default Quiz;