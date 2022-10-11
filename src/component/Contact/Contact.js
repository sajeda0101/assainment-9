import React from 'react';
import img from '../../image/2.jpg'

const Contact = () => {
    return (
        <div className='mt-48 flex items-center mx-auto mb-6 shadow-lg bg-slate-50 w-4/5 px-24 sm:w-full '>
            <img src={img} alt="" className='rounded-lg'/>
            <div className='ml-6 text-center'>
                <h1 className='text-4xl'>Sajeda Akter</h1>
                <p className='text-xl'>I am student of Chittagong Polytechnic Institute.I want to be Web developer that's why i enrolled here.I think this is my best decision of my entire life.  </p>
              
            </div>
        </div>
    );
};

export default Contact;