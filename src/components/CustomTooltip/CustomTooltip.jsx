import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';


const CustomTooltip = ({active, payload, label,type,chartType}) =>{
    
    function format_time(x) {
        var h = Math.trunc(x);
        
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
                        <Typography variant='h6' >{payload[0].payload.month}</Typography>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                        {
                        React.Children.toArray(
                            payload.map((element)=> {  
                                //console.log(chartType);                    
                                if(chartType == 'LineChart') return <Typography variant='h7'style={{color: element.stroke}} >{format_time(element.value)}</Typography>
                                else return <Typography variant='h7' style={{color: element.fill}} >{format_time(element.value)}</Typography>
                            }
                            )
                        )
                     
                        }
                        </div>
                    </div>
        
                );
            }

        case 'int':
            if(active) {
                return (
                    <div className='tooltip'>
                        <Typography variant='h6' >{payload[0].payload.month}</Typography>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                        {
                        React.Children.toArray(
                            payload.map((element)=> {      
                                //console.log(chartType);                   
                                if(chartType == 'LineChart') return <Typography variant='h7' style={{color: element.stroke}} >{element.value}</Typography>
                                else return <Typography variant='h7' style={{color: element.fill}} >{(element.value)}</Typography>
                            }
                            )
                        )
                     
                        }
                        </div>
                    </div>
        
                );
            }

    }
        
}

export default CustomTooltip;

