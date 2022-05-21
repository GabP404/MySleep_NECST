import * as React from 'react';
import "./home.scss";
import { DataArrayTwoTone } from "@mui/icons-material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer } from 'recharts';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Paper from '@mui/material/Paper';
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";
import WatchRoundedIcon from "@mui/icons-material/WatchRounded";

const drawerWidth = 240;



var data_chart_sleep_time = [];
var data_chart_waking_time = [];
var data_chart_wak

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  var months_values = localStorage.getItem('my-json'); 
  console.log(months_values);
  var plot_values;

  function parsing_Date() {
      plot_values = JSON.parse(months_values);
      plot_values.forEach(element => {
          element.actual_waking_time_month = round_time(element.actual_waking_time_month.substring(11,16));
          console.log(element.actual_waking_time_month);
          element.sleep_hours_month = new Date(Date.parse(element.sleep_hours_month));
          //element.expected_waking_time_month = new Date(Date.parse(element.expected_waking_time_month));
          element.expected_waking_time_month = round_time(element.expected_waking_time_month.substring(11,16));
          element.sleep_time_month = round_time(element.sleep_time_month);
      });
  }

    function round_time(x) {
        var str = x.split(':');
        str[0] = parseInt(str[0]);
        str[1] = parseInt(str[1]);
        //console.log(str[0],str[1]);
        var y = str[0] + ((str[1] * 10) / 600);
        console.log(y);
        return y;
    }

//   function mapping_sleep_charts() {
//       plot_values.forEach(element => {
//           data_chart_sleep_time.push({
//               date: element.month,
//               value: round_time(element.sleep_time_month),
//           });
//       });
//   }

//   function mapping_waking_charts() {
//     plot_values.forEach(element => {
//         data_chart_waking_time.push({
//             date: element.month,
//             expected: round_time(element.expected_waking_time_month),
//             actual: round_time(element.actual_waking_time_month),
//         });
//     });
// }

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



  parsing_Date();
  //mapping_sleep_charts();
  //mapping_waking_charts();
  console.log(plot_values);
  console.log(data_chart_sleep_time);
    var Domains = [];


function createDomain() {
    var max = Math.max.apply(Math, data_chart_sleep_time.map(function(o) { return o.value; }));
    var min = Math.min.apply(Math, data_chart_sleep_time.map(function(o) { return o.value; }));
    max = Math.trunc(max);
    min = Math.trunc(min);
    Domains.push(() => {

    });
    
    
}  
   
function CustomTooltip_sleep( {active, payload, label} ) {
    if(active) {
        return (
            <div className='tooltip'>
                <h4>{format_time(payload[0].value)}</h4>
            </div>

        );
    }
}

function CustomTooltip_waking( {active, payload, label} ) {
    if(active) {
        return (
            <div className='tooltip'>
                <h4>{format_time(payload[0].value)}</h4>
                <h4>{format_time(payload[1].value)}</h4>
            </div>

        );
    }
}

function CustomTooltip( {active, payload, label} ) {
    if(active) {
        return (
            <div className='tooltip'>
                <h4>{payload[0].value}</h4>
            </div>

        );
    }
}



const Home1 = () => {

    

    return (   
        <div className="home">
            <div className='homeContainer'>
                <div>
                    <LineChart  data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="sleep_time_month" stroke="#8884d8" name = "Sleep Time"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month"
                        tickCount = {12}
                        />
                        <YAxis
                            tickLine = {false}
                            tickCount = {5}
                            allowDecimals = {false}
                            //tickFormatter = {(number) => number +':00'}

                        />
                        <Tooltip content = {<CustomTooltip_sleep/>}/>
                        <CartesianGrid vertical = {false}></CartesianGrid>
                    </LineChart>
                </div>
                {/* <div>
                        <LineChart width={1000} height={300} data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Legend verticalAlign="top" height={36}/>
                            <Line type="monotone" dataKey="expected_waking_time_month" stroke="#8884d8" name = "Expected waking time"/>
                            <Line type="monotone" dataKey="actual_waking_time_month" stroke="#82ca9d" name = "Actual waking time"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month"
                            tickCount = {12}
                            />
                            <YAxis
                                tickLine = {false}
                                tickCount = {4}
                                //tickFormatter = {(number) => number +':00'}
                                domain = {[4,'auto']}
                                allowDecimals = {false}
                            />
                            <Tooltip content = {<CustomTooltip_waking />}/>
                            <CartesianGrid vertical = {false}></CartesianGrid>
                        </LineChart>
                </div>
                <div>
                        <LineChart width={1000} height={300} data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Legend verticalAlign="top" height={36}/>
                            <Line type="monotone" dataKey="expected_waking_time_month" stroke="#8884d8" name = "Expected waking time"/>
                            <Line type="monotone" dataKey="actual_waking_time_month" stroke="#82ca9d" name = "Actual waking time"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month"
                            tickCount = {12}
                            />
                            <YAxis
                                tickLine = {false}
                                tickCount = {4}
                                //tickFormatter = {(number) => number +':00'}
                                domain = {[4,'auto']}
                                allowDecimals = {false}
                            />
                            <Tooltip content = {<CustomTooltip_waking />}/>
                            <CartesianGrid vertical = {false}></CartesianGrid>
                        </LineChart>
                </div>
                <div>
                        <BarChart width={1000} height={300} data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Legend verticalAlign="top" height={36}/>
                            <Bar dataKey="nap_time_month" fill="#8884d8" name = "Nap time"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month"
                            tickCount = {12}
                            />
                            <YAxis
                        
                                tickCount = {4}
                                //tickFormatter = {(number) => number +':00'}
                                allowDecimals = {false}
                            />
                            <Tooltip content = {<CustomTooltip/>}/>
                            <CartesianGrid vertical = {false}></CartesianGrid>
                        </BarChart>
                </div>

                <div>
                    <PieChart width={730} height={250}>
                        <Pie data={plot_values} dataKey="level_of_sleepiness_month" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8"/>
                        <LabelList dataKey="month" position="top" />
                        <Tooltip content = {<CustomTooltip/>}/>
                    </PieChart>
                </div> */}
            </div>
        </div>
    );
};

export default Home1;
