import * as React from 'react';
import "./home.scss";
import { AddBoxTwoTone, DataArrayTwoTone } from "@mui/icons-material";
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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";
import WatchRoundedIcon from "@mui/icons-material/WatchRounded";
import SingleLineChart from '../../components/CustomChart/SingleLineChart';
import CustomTooltip from "../../components/CustomTooltip/CustomTooltip";
import DoubleLineChart from '../../components/CustomChart/DoubleLineChart';
import TransitionsModal from '../../components/modal/TransitionsModal';

import {
    useParams,
    useNavigate,
    useLocation,
    Link,
  } from "react-router-dom";
import SingleBarChart from '../../components/CustomChart/SingleBarChart';


const drawerWidth = 240;


  


 

const Home = () => {

    function parsing_Date() {
        plot_values = JSON.parse(months_values);
        plot_values.forEach(element => {
            element.actual_waking_time_month = round_time(element.actual_waking_time_month.substring(11,16));
            element.expected_waking_time_month = round_time(element.expected_waking_time_month.substring(11,16));
            element.sleep_time_month = round_time(element.sleep_time_month);
            element.sleep_hours_month = up_time(round_time(element.sleep_hours_month.substring(11,16)));
        });
    }
  
      function round_time(x) {
          var str = x.split(':');
          str[0] = parseInt(str[0]);
          str[1] = parseInt(str[1]);
          var y = str[0] + ((str[1] * 10) / 600);
          return y;
      }
  
      function up_time(x) {
          if ( x>= 0 && x<=3) return x+24;
          return x;
      }
  
  
    function format_time(x) {
      var h = Math.trunc(x);
      var m = x-h;
      m = (m/10) * 600;
      m = Math.round(m);
      return padTo2Digits(h)+":"+padTo2Digits(m);
    }
  
    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
  
  function CustomTooltip_sleep( {active, payload, label} ) {
      if(active) 
      return (
          <div className='tooltip'>
              <Typography variant='h6' >{payload[0].payload.month}</Typography>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              {
              React.Children.toArray(
                  payload.map((element)=> {                      
                      return <Typography variant='h7' style={{color: element.stroke}} >{format_time(element.value)}</Typography>
                  }
                  )
              )
           
              }
              </div>
          </div>
  
      );
  }
   


    var months_values = localStorage.getItem('my-json'); 
    parsing_Date();
    var plot_values;
    let navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MySleep
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <InsertChartOutlinedSharpIcon></InsertChartOutlinedSharpIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">ANALYSIS</ListItemText>
                        </ListItem>
                        
                        <ListItem button onClick = {()=> navigate("/details")}>
                            <ListItemIcon>
                                <AddchartRoundedIcon></AddchartRoundedIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">
                                DETAILS
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button onClick = {()=> navigate("/polar")}>
                            <ListItemIcon>
                                <WatchRoundedIcon></WatchRoundedIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">
                                POLAR
                                
                                </ListItemText>
                        </ListItem>
                    </List>
                </Box>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            <Box className='homeContainer' sx={{boxShadow:5, borderRadius:5 }}>
                <SingleLineChart  plot={plot_values} value={'sleep_time_month'} type={'time'} name={'Sleep time'} text={"This chart tells the sleep time (montly average)" } format={'time'}/>
                <DoubleLineChart plot={plot_values} value1={'expected_waking_time_month'} value2 ={"actual_waking_time_month"} type={'time'} name1={'Expected waking time'} name2={'Actual waking time'} text={"This chart compares the expected waking time with the actual waking time (montly average)"} format={'time'}/>
                <DoubleLineChart plot ={plot_values} value1 = {'level_of_sleepiness_month'} name1 = {'Level of sleepiness'} value2 = {'level_of_fatigue_month'} name2 = {'Level of fatigue'} type ={'int'} text={"This chart describes the levels of fatigue and sleepiness (0:not at all - 10: a lot) (montly average)"} format={'int'}/>                <DoubleLineChart  plot={plot_values} value1={'disturbed_sleep_month'} value2={'sleep_quality_month'} type={'int'} name1={'Disturbed sleep'} name2={'Sleep quality'} text={"This chart describes your sleep quality (0:not at all - 10: a lot) (montly average)" } format={'int'}/>
                
                <div className='chart'>
                    <div className='chart_decriptions'>
                        <div>
                    <LineChart width = {450} height={300} data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="sleep_hours_month" stroke="#8884d8" name = "Sleep hours"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month"
                        interval = {0}
                        tickCount = {12}
                        />
                        <YAxis
                            datakey = {'sleep_hours_month'}
                            tickLine = {false}
                            allowDecimals = {false}
                            domain = {[18,27]}
                            tickFormatter = { (number) => {if(number >= 24) {
                                return number-24;
                            }else return number;
                        }}
                            interval = {0}
                            tickCount = {4}
                        />
                        <Tooltip content = {<CustomTooltip_sleep/>}/>
                        <CartesianGrid vertical = {false}></CartesianGrid>
                    </LineChart> 
                    </div>
                    <TransitionsModal text = {"This chart describes the hours you go to sleep (average monthly)"}></TransitionsModal>
                    </div>             
                </div>
                    
            </Box>
      </Box>
    </Box>
    );
};

export default Home;
