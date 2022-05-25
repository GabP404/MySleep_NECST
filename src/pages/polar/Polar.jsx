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



const Polar = () => {
    var months_values = localStorage.getItem('my-json');
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
