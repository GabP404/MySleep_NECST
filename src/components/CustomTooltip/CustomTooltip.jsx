import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({active, payload, label,type}) =>{
    function format_time(x) {
        var h = Math.trunc(x);
        //console.log(x);
        var m = x-h;
        m = (m/10) * 600;
        m = Math.round(m);
        //console.log(m);
        return padTo2Digits(h)+":"+padTo2Digits(m);
    
      }
    
      function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }

    switch(type) {
        case 'time':
            if(active) {
                return (
                    <div className='tooltip'>
                        <h3>{payload[0].payload.month}</h3>
                        {payload.map((element)=> {                          
                            return <h4 style={{color: element.stroke}} >{format_time(element.value)}</h4>
                        })}
                        
                    </div>
        
                );
            }

        case 'int':
            if(active) {
                return (
                    <div className='tooltip'>
                        <h3>{payload[0].payload.month}</h3>
                        {payload.map((element)=> {                        
                            return <h4 style={{color: element.stroke}}>{element.value}</h4>
                        })}
                    </div>
        
                );
            }

    }
        
}

export default CustomTooltip;