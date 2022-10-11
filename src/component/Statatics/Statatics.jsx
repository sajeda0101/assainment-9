import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statatics = () => {
    const statics=useLoaderData();
    console.log(statics)
   
    return (
        <div>
           
        </div>
    );
};

export default Statatics;