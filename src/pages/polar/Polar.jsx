import React from 'react'
import { Category, DataArrayTwoTone } from "@mui/icons-material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,BarChart, Bar, Pie, PieChart, LabelList, ResponsiveContainer, ReferenceLine } from 'recharts';
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
import SingleLineChart from '../../components/CustomChart/SingleLineChart';
import CustomTooltip from "../../components/CustomTooltip/CustomTooltip";
import DoubleLineChart from '../../components/CustomChart/DoubleLineChart';
import TransitionsModal from '../../components/modal/TransitionsModal';
import SingleBarChart from '../../components/CustomChart/SingleBarChart';
import SingleAreaChart from '../../components/CustomChart/SingleAreaChart';
import { shadows } from '@mui/system';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";


const drawerWidth = 240;


var months_values = localStorage.getItem('my-json');
var test_value = [{'month':'Gen', 'ora':22},{'month':'Feb', 'ora':25},{'month':'Marz', 'ora':19},{'month':'Apr', 'ora':26}];



const Polar = () => {
    var plot_values = JSON.parse(months_values);
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
                        <ListItem button onClick = {()=> navigate("/home")}>
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
                        <ListItem button>
                            <ListItemIcon>
                                <WatchRoundedIcon></WatchRoundedIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">POLAR</ListItemText>
                        </ListItem>
                    </List>
                </Box>
        
      </Drawer>

    

      <Box component="main" sx={{ flexGrow: 1, p: 3,} }>
        <Toolbar />
            <Box className='homeContainer' sx={{boxShadow:5, borderRadius:5 }}>
                <SingleAreaChart  plot={plot_values} value={'daily_activity_goal_month'} type={'int'} name={'Daily activity goal month'} text={"The activity goal is a daily target of movement (0-100)"}/>
                <SingleBarChart plot={plot_values} value={'actual_sleep_month'} type={'int'} name={'Actual sleep month'} text={"This data tell you the actual sleep during the night (0-100)"}/>
                <SingleLineChart  plot={plot_values} value={'sleep_continuity_month'} type={'int'} name={'Sleep continuity month'} text={"This data tell you the sleep continuity during the nigth (0-10))"}/>
               

               
            </Box>
      </Box>
    </Box>
    );
}

export default Polar;

/*
 <div className='chart'>
                    <LineChart width = {500} height={300} data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="daily_activity_goal_month" stroke="#8884d8" name = "Daily activity Goal 0-100%"/>
                        <ReferenceLine y={100} label="Nice level 100%" stroke="red" strokeDasharray="3 3" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month"
                        tickCount = {12}
                        />
                        <YAxis
                            tickLine = {false}
                            tickCount = {8}
                            allowDecimals = {false}
                            //tickFormatter = {(number) => number +':00'}
                            domain={[0, 'dataMax + 20']}

                        />
                        <Tooltip />
                        <CartesianGrid vertical = {false}></CartesianGrid>
                    </LineChart>       
                </div>
                <div className='chart'>
                    <LineChart width = {500} height={300} data={plot_values} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="actual_sleep_month" stroke="#8884d8" name = "Actual sleep 0-100%"/>
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
                        <Tooltip/>
                        <CartesianGrid vertical = {false}></CartesianGrid>
                    </LineChart>       
                </div>

                <div className='chart'>
                        <BarChart width={500} height={300} data={plot_values} >
                        <Legend verticalAlign="top" height={36}/>
                            <Bar dataKey="sleep_continuity_month" fill="#8884d8" name = "Sleep continuity"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month"
                            tickCount = {12}
                            />
                            <YAxis
                        
                                tickCount = {5}
                                //tickFormatter = {(number) => number +':00'}
                                allowDecimals = {false}
                                domain={[0, 'dataMax + 1']}
                            />
                            <Tooltip/>
                            <CartesianGrid vertical = {false}></CartesianGrid>
                        </BarChart>
                </div>

*/