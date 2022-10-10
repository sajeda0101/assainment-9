import React from 'react';

const Quiz = ({quiz}) => {
   const {name,logo}=quiz
    return (
        <div className='border border-orange-600 bg-slate-200 m-4 rounded-xl'>
            <img src={logo} alt="" style={{width:'250px'}} className="rouded-xl"/>
          <div className='flex justify-between bg-slate-50 p-5 rounded-xl text-xl'>
          <h1>{name}</h1>
          <button>Practice Start</button>
          </div>
        </div>
    );
};

export default Quiz;