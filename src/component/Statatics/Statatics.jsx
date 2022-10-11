import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StataticsBar from './StataticsBar/StataticsBar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statatics = () => {
    const statatics=useLoaderData().data;
    
   
    return (
       
       <div className='mt-52 px-44'>
     
     <LineChart width={500} height={400} data={statatics}>
      <Line dataKey='total'></Line>
      <XAxis dataKey='name' />
      <YAxis dataKey='total'/>
      <Tooltip/>
     </LineChart>
        
        
       </div>
    );
};

export default Statatics;