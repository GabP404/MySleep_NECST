import React from 'react'
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
import DoubleLineChart from '../../components/CustomChart/DoubleLineChart';
import DoubleBarChart from '../../components/CustomChart/DoubleBarChart';
import SingleBarChart from '../../components/CustomChart/SingleBarChart';
import {
    useNavigate,
  } from "react-router-dom";


const drawerWidth = 240;

const Details = () => {

  var months_values = localStorage.getItem('my-json');
var plot_values = JSON.parse(months_values);
    parsing_Date();


function parsing_Date() {
    plot_values = JSON.parse(months_values);
    plot_values.forEach(element => {
        element.actual_waking_time_month = round_time(element.actual_waking_time_month.substring(11,16));
        element.expected_waking_time_month = round_time(element.expected_waking_time_month.substring(11,16));
        element.sleep_time_month = round_time(element.sleep_time_month);
        element.get_out_of_bed_month = round_time(element.get_out_of_bed_month.substring(11,16));
        element.lights_off_month = round_time(element.lights_off_month.substring(11,16));
    });
}

  function round_time(x) {
      var str = x.split(':');
      str[0] = parseInt(str[0]);
      str[1] = parseInt(str[1]);
      var y = str[0] + ((str[1] * 10) / 600);
      return y;
  }


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
                        <ListItem button>
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
                            <ListItemText typography="true">POLAR</ListItemText>
                        </ListItem>
                    </List>
                </Box>
        
      </Drawer>

    

      <Box component="main" sx={{ flexGrow: 1, p: 3,} }>
        <Toolbar />
            <Box className='homeContainer' sx={{boxShadow:5, borderRadius:5 }}>
            <SingleBarChart plot={plot_values} value={'fall_asleep_after_lights_off_month'} type={'int'} name={'Minutes to fall asleep after lights off'} text={"This chart describes the time after turning off the lights and sleep"} format={'int'}/>
            <DoubleLineChart  plot={plot_values} value2 ={'get_out_of_bed_month'} value1 ={"actual_waking_time_month"} type={'time'} name2={'Get out of bed'} name1={'Actual waking time'} text={"This chart shows the waste of time in the bed before get up (montly average)"} format={'time'}/>
            <DoubleBarChart  plot={plot_values} value2 ={'minutes_wake_up_night_month'} value1 ={"times_wake_up_night_month"} type={'int'} name2={'Minutes while awake'} name1={'Times wake up night'} text={"This chart show how often you wake up in the night and for how long (total time per month)"} format={'int'}/>
            <SingleBarChart plot={plot_values} value={'nap_time_month'} type={'int'} name={'Nap time'} text={"This chart describes the minutes of nap (montly average)"} format={'int'}/>
            
               
            </Box>
      </Box>
    </Box>
    );
}

export default Details;
