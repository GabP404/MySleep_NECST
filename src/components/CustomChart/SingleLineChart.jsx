import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import TransitionsModal from '../modal/TransitionsModal';
import "./chart.scss";
const SingleLineChart = (props) => {


    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
    
    const formatAxis_time = (number) => {
        return padTo2Digits(number)+":00";
    };
    
    const formatAxis = (value, type) =>{
        if(type == 'time') return formatAxis_time(value);
        return value;
    }

    const bestDomain = (data,x,type) => {
        var min = Math.min.apply(Math, data.map(function(o) { return o[x]; }));
        
        var max = Math.max.apply(Math, data.map(function(o) { return o[x]; }))
        if(type == 'time') {
            min = Math.round(min) - 1;
            max = Math.round(max) + 1;
        }else {
            min = 0;
            max = Math.round(max * 1.2);
        }
        
        return [min,max]; 
    }
    
    

    return (
    
            <div className='chart'>
                <div className='chart_decriptions'>
                <div>
                <LineChart width = {450} height={300} data={props.plot}>
                    <Legend verticalAlign="top" height={36}/>
                    <Line type="monotone" dataKey={props.value} stroke="#8884d8" name ={props.name}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month"
                    tickCount = {12}
                    interval={0}
                    />
                    <YAxis
                        tickLine = {false}
                        tick
                        tickCount = {5}
                        allowDecimals = {false}
                        tickFormatter={(tick) => formatAxis(tick,props.format)}
                        domain = {bestDomain(props.plot,props.value,props.type)}
                    />
                    <Tooltip content = {<CustomTooltip type={props.type} chartType={'LineChart'}/>}/>
                    <CartesianGrid vertical = {false}></CartesianGrid>
                </LineChart> 
                </div>
                <TransitionsModal text = {props.text}></TransitionsModal>
            </div>   
            </div>
    );
}


export default SingleLineChart;