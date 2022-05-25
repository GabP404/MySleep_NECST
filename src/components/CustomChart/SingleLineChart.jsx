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
        console.log('value & type',value,type);
        if(type == 'time') return formatAxis_time(value);
        return value;
    }
    

    return (
            <div className='chart'>
                <div className='chart_decriptions'>
                <div>
                <LineChart width = {450} height={300} data={props.plot} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
                    />
                    <Tooltip content = {<CustomTooltip type={props.type}/>}/>
                    <CartesianGrid vertical = {false}></CartesianGrid>
                </LineChart> 
                </div>
                <TransitionsModal text = {props.text}></TransitionsModal>
            </div>   
            </div>
    );
}


export default SingleLineChart;