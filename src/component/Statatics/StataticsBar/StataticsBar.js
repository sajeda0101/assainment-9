import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const StataticsBar = ({statatic}) => {
    const {total}=statatic
    console.log(statatic.total)
    return (

       <div>
        <LineChart width={500} height={400} data={statatic}>
          <Line type="monotone" datakey="total" stroke="#8ca9d"></Line>
        </LineChart>
       </div>
     
      )
    
};

export default StataticsBar;