import { render } from '@testing-library/react';
import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import TransitionsModal from '../modal/TransitionsModal';
import "./chart.scss";
const SingleBarChart = (props) => {

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
    
    const formatAxis_time = (number) => {
        return padTo2Digits(number)+":00";
    };
    
    const formatAxis = (value, type) =>{
        //console.log('value & type',value,type);
        if(type == 'time') return formatAxis_time(value);
        return value;
    }

    const bestDomain = (data,x,type) => {
        console.log(x);
        var min = Math.min.apply(Math, data.map(function(o) { return o[x]; }));
        
        var max = Math.max.apply(Math, data.map(function(o) { return o[x]; }))
        console.log(type);
        if(type == 'time') {
            min = Math.round(min) - 1;
            max = Math.round(max) + 1;
        }else {
            min = 0;
            max = Math.round(max * 1.2);
        }
        
        //console.log(min,max);
        return [min,max]; 
    }
    

    return(
        <div className = "chart"> 
            <div className='chart_decriptions'>
                <div>
                    <BarChart width={450} height={300} data={props.plot} >
                        
                            <Legend verticalAlign="top" height={36}/>
                            <Bar dataKey={props.value} fill="#8884d8" name ={props.name}/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month"
                            tickCount = {12}
                            interval={0}
                            />
                            <YAxis
                        
                                tickCount = {4}
                                //tickFormatter = {(number) => number +':00'}
                                tickFormatter={(tick) => formatAxis(tick,props.format)}
                                allowDecimals = {false}
                            />
                            <Tooltip content = {<CustomTooltip type={props.type} chartType={'BarChart'}/>}/>
                        
                    </BarChart>
                </div>
                <TransitionsModal text = {props.text}></TransitionsModal>
            </div>
        </div>
    );

}

export default SingleBarChart;