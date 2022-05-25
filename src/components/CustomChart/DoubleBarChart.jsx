import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import TransitionsModal from '../modal/TransitionsModal';
import "./chart.scss";

const DoubleBarChart = (props) => {

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

    const bestDomain = (data,x1,x2,type) => {
        var min1 = Math.min.apply(Math, data.map(function(o) { return o[x1]; }));
        var min2 = Math.min.apply(Math, data.map(function(o) { return o[x2]; }));
        var max1 = Math.max.apply(Math, data.map(function(o) { return o[x1]; }));
        var max2 = Math.max.apply(Math, data.map(function(o) { return o[x2]; }));
        var min,max;
        console.log(min1,min2,max1,max2);
        min = Math.min(min1,min2);
        max = Math.max(max1,max2);
        if(type == 'time') {
            min = Math.round(min) - 1;
            max = Math.round(max) + 1;
        }else {
            min = 0;
            max = Math.round(max * 1.2);
        }
        
        console.log(min,max);
        return [min,max]; 
    }

    return (
            <div className='chart'>
                <div className='chart_decriptions'>
                <div>
                <BarChart width = {450} height={300} data={props.plot}>
                    <Legend verticalAlign="top" height={36}/>
                    <Bar dataKey={props.value1} fill="#8884d8" name = {props.name1}/>
                    <Bar dataKey={props.value2} fill="#259d9f" name = {props.name2}/>
                    
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month"
                    tickCount = {12}
                    interval={0}
                    />
                    <YAxis
                        tickLine = {false}
                        tickCount = {5}
                        allowDecimals = {false}
                        tickFormatter={(tick) => formatAxis(tick,props.format)}
                        domain = {bestDomain(props.plot,props.value1,props.value2,props.type)}

                    />
                    <Tooltip content = {<CustomTooltip type={props.type} chartType={'BarChart'}/>}/>
                    <CartesianGrid vertical = {false}></CartesianGrid>
                </BarChart> 
                </div>
                <TransitionsModal text = {props.text}></TransitionsModal>      
            </div>
            </div>
    );
}


export default DoubleBarChart;