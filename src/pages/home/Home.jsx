import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import ClippedDrawer from "../../components/clippedDrawer/ClippedDrawer";
import * as XLSX from 'xlsx';
import { DataArrayTwoTone } from "@mui/icons-material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data_chart = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


const Home = () => {
    return (
        <div className="home">
           {/*  <Sidebar />
            <div className="homeContainer">container</div> 
             <ClippedDrawer/>  */}  
            <div>
                <LineChart width={600} height={300} data={data_chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Home;


/* var pos;
data.forEach((element) => {
    pos = element.date.substr(5,2);
    pos = parseInt(pos);
    months[pos-1].nap_time += parseInt(element.nap_time);
    months[pos-1].sleep_hour += element.sleep_hour.getTime();
    console.log(months[pos-1].sleep_hour);
    months[pos-1].lights_off += element.lights_off.getTime();
    months[pos-1].fall_asleep_after_lights_off += parseInt(element.fall_asleep_after_lights_off);
    months[pos-1].expected_waking_time += element.expected_waking_time.getTime();
    months[pos-1].actual_waking_time += element.actual_waking_time.getTime();
    months[pos-1].get_out_of_bed += element.get_out_of_bed.getTime();
    months[pos-1].times_wake_up_night += parseInt(element.times_wake_up_night);
    months[pos-1].disturbed_sleep += parseInt(element.disturbed_sleep);
    months[pos-1].sleep_quality += parseInt(element.sleep_quality);
    months[pos-1].level_of_fatigue += parseInt(element.level_of_fatigue);
    months[pos-1].level_of_sleepiness += parseInt(element.level_of_sleepiness);

    if(element.actual_sleep.equals(null) ) element.actual_sleep = "0%";
    months[pos-1].actual_sleep += toDecimal(element.actual_sleep);  
    console.log(element.actual_sleep, months[pos-1].actual_sleep );

    if(element.daily_activity_goal.equals(null) ) element.daily_activity_goal = "0%";
    months[pos-1].daily_activity_goal += toDecimal(element.daily_activity_goal_sleep);
    console.log(element.daily_activity_goal, months[pos-1].daily_activity_goal );
    
    if(element.sleep_continuity.equals(null) ) element.sleep_continuity = '0';
    console.log(element.sleep_continuity, months[pos-1].sleep_continuity );
    months[pos-1].sleep_continuity += parseInt(element.sleep_continuity.replace(',','.')); 
}); 

var months = 
    [{"Month":"Gennaio",  "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Febbraio",  "days":29,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Marzo", "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Aprile",  "days":30,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Maggio",  "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Giugno",  "days":30,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Luglio",  "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Agosto",  "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Settembre",  "days":30,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Ottobre", "value":0 , "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0},
    {"Month":"Novembre",  "days":30,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 },
    {"Month":"Dicembre",  "days":31,'nap_time':0,'sleep_hour':0,
    'lights_off':0,'fall_asleep_after_lights_off':0,'expected_waking_time':0,
    'actual_waking_time':0,'get_out_of_bed':0,'times_wake_up_night':0,'minutes_wake_up_night':0,
    'disturbed_sleep':0,'sleep_quality':0,'level_of_fatigue':0,'level_of_sleepiness':0,'daily_activity_goal':0, 'actual_sleep':0,'sleep_continuity':0 }];


*/