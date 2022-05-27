import React from 'react'
import "./upload.scss"
import * as XLSX from 'xlsx';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {
    useNavigate,
  } from "react-router-dom";

const Upload = () => {


    function checkUndefined(x) {
        if (typeof x === 'undefined' || isNaN(x))
            return 0;
        return x;
    }

    function get_POLAR(data) {
        data.forEach((element) => {
            var month_element = element.actual_waking_time.getMonth();
            months_values[month_element].daily_activity_goal_month += checkUndefined(parseFloat(element.daily_activity_goal));
            months_values[month_element].actual_sleep_month += checkUndefined(parseFloat(element.actual_sleep));
            months_values[month_element].sleep_continuity_month += checkUndefined(parseInt(element.sleep_continuity));
        });
        months_values.forEach(element => {
            element.daily_activity_goal_month = Math.round(element.daily_activity_goal_month/element.days);
            element.actual_sleep_month = Math.round(element.actual_sleep_month/element.days);
            element.sleep_continuity_month = Math.round(element.sleep_continuity_month/element.days);
        });
    }

    const names_replace_excel = ['date','nap_time','sleep_hour',
'lights_off','fall_asleep_after_lights_off','expected_waking_time',
'actual_waking_time','get_out_of_bed','times_wake_up_night','minutes_wake_up_night',
'disturbed_sleep','sleep_quality','level_of_fatigue','level_of_sleepiness','daily_activity_goal','actual_sleep','sleep_continuity'];

var months_values = [
    { "month":"Gen", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Feb", days:29 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Mar", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Apr", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Mag", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Giu", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Lug", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Ago", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Set", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Ott", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Nov", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    },
    { "month":"Dic", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0,'times_wake_up_night_month':0, 'minutes_wake_up_night_month':0,'disturbed_sleep_month':0, 'lights_off_month':0,'fall_asleep_after_lights_off_month':0,'get_out_of_bed_month':0
    }
];

var first_date;

const readExcel = (file) => {
        const promise = new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)
            fileReader.onload = (e) =>{
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray,{type:'buffer'});
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                var i = 65;
                names_replace_excel.forEach((element) => {
                    var char = String.fromCharCode(i);
                    var pos = char+'1';
                    XLSX.utils.sheet_add_aoa(ws, [
                      [element]
                    ], { origin: pos }); 
                    i++;  
                });

                const data = XLSX.utils.sheet_to_json(ws,{
                    raw:false,
                });
                resolve(data);
            };

            fileReader.onerror = ((error)=>{
                reject(error);
            });
        });

        promise.then((d)=>{
            formatting_data(d);
            localStorage.setItem('my-json',JSON.stringify(months_values));       
            navigate("/home");
        })
};

let navigate = useNavigate();


function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

const create_date = (date, time) => {
    var str = time.split(':');
    str[0] = padTo2Digits(str[0]);
    var new_date = date + " " + str[0]+ ":" + str[1] + ":00";
    return new Date(new_date);
}

const formatting_data = (data) => {
    data.forEach(element => {
        element.sleep_hour = create_date(element.date,element.sleep_hour);
        element.lights_off = create_date(element.date,element.lights_off);
        element.expected_waking_time = create_date(element.date,element.expected_waking_time);
        element.actual_waking_time = create_date(element.date,element.actual_waking_time);
        element.get_out_of_bed = create_date(element.date,element.get_out_of_bed);
    });
    first_date = data[0];
    data.splice(0, 1);
    get_sleep_hour_month(data);
    get_sleep_time_month(data);
    get_plain_data(data);
    get_POLAR(data);
};

/* Per fare una media sull'orario in cui si va a dormire assumo che l'orario minimo per andare a dormire sono le 18.
Prima delle 18 verranno considerati come pisolini, la mattina inizierà dalle ore 6. Queste assunzioni sono necessarie
per trovare il tempo minimo per svolgere i calcoli, visto la possibilità di andare a dormire in due giorni diversi.
23:00 -> 1:00 esempio
*/
const get_sleep_hour_month = (data) => {
    var days_count = 0;
    months_values.forEach(element => {
        element.sleep_hours_month = get_average_sleep_hour_month(data.slice(days_count,days_count + element.days));
        days_count += element.days;
        
    });
};


const get_average_sleep_hour_month = (data) => {
    var min_time = data[0].sleep_hour.getHours() * 60 + data[0].sleep_hour.getMinutes();
    var hours = [];
    hours.push(data[0].sleep_hour);
    for(var i = 1; i < data.length; i++) {
        hours.push(data[i].sleep_hour);
        var element_hours = data[i].sleep_hour.getHours() * 60 + data[i].sleep_hour.getMinutes();
        if(element_hours < 18 * 60) element_hours += (24 * 60);
        if(min_time < 18 * 60)  min_time += (24 * 60);
        if(min_time > element_hours) min_time = element_hours % (24 * 60);
    };
    var x = calculateAverageOfHours(hours,new Date(min_time * 60000 - 3600000));
    return x;
}


const get_sleep_time_month = (data) => {
    months_values[0].sleep_time_month = get_time_between(first_date.sleep_hour,data[0].actual_waking_time);
    for(var i = 1; i < data.length; i++) {
        var month_element = data[i].sleep_hour.getMonth();
        months_values[month_element].sleep_time_month += get_time_between(data[i-1].sleep_hour,data[i].actual_waking_time);
    } 

    months_values.forEach((element) => {
        element.sleep_time_month = Math.round(element.sleep_time_month/element.days);
        element.sleep_time_month = padTo2Digits(Math.trunc(element.sleep_time_month / (3600000))) +":"+ padTo2Digits(Math.trunc(element.sleep_time_month % 3600000 / (60000)));
    });
}

const get_plain_data = (data) => {
    data.forEach((element) => {
        var month_element = element.actual_waking_time.getMonth();
        months_values[month_element].actual_waking_time_month += parseInt(getTimePartInMilliseconds(element.actual_waking_time));
        months_values[month_element].expected_waking_time_month += parseInt(getTimePartInMilliseconds(element.expected_waking_time));
        months_values[month_element].level_of_fatigue_month += parseInt(element.level_of_fatigue);
        months_values[month_element].level_of_sleepiness_month += parseInt(element.level_of_sleepiness);
        months_values[month_element].nap_time_month += parseInt(element.nap_time);
        months_values[month_element].times_wake_up_night_month += parseInt(element.times_wake_up_night);
        months_values[month_element].minutes_wake_up_night_month += parseInt(element.minutes_wake_up_night);
        months_values[month_element].disturbed_sleep_month += parseInt(element.disturbed_sleep);
        months_values[month_element].sleep_quality_month += parseInt(element.sleep_quality);
        months_values[month_element].fall_asleep_after_lights_off_month += parseInt(element.fall_asleep_after_lights_off);
        months_values[month_element].get_out_of_bed_month += parseInt(getTimePartInMilliseconds(element.get_out_of_bed));
    });

    

    months_values.forEach(element => {
        element.expected_waking_time_month = get_average_date(element.expected_waking_time_month,element.days);
        element.actual_waking_time_month = get_average_date(element.actual_waking_time_month,element.days);
        element.lights_off_month = get_average_date(element.lights_off_month,element.days);
        element.get_out_of_bed_month = get_average_date(element.get_out_of_bed_month,element.days);
        element.level_of_fatigue_month = Math.round(element.level_of_fatigue_month/element.days);
        element.level_of_sleepiness_month = Math.round(element.level_of_sleepiness_month/element.days);  
        element.nap_time_month = Math.round(element.nap_time_month/element.days);
        element.sleep_quality_month = Math.round(element.sleep_quality_month/element.days);
        element.minutes_wake_up_night_month = Math.round(element.minutes_wake_up_night_month/element.days);
        element.disturbed_sleep_month = Math.round(element.disturbed_sleep_month/element.days);
    });
    

};

function get_average_date(x,days) {
    var y = Math.round(x/days);
    return new Date(y);
}

function get_time_between(night,morning) {
    var morningTimestamp = getTimePartInMilliseconds(morning);
    let nightTimestamp = getTimePartInMilliseconds(night);
    var sleep_time = getMillisecondsFromTimeTillMinTime(morningTimestamp, nightTimestamp);
    //return new Date(sleep_time - 3600000); this number because for js the day start at 01:00
    return sleep_time;
}


const ONE_DAY_IN_MILLISECONDS = 24 * 3600 * 1000;

function calculateAverageOfHours(times, minTime){
  let timestamps = times.map(getTimePartInMilliseconds);
  let minTimestamp = getTimePartInMilliseconds(minTime);
  
  let average = 0;
  timestamps.forEach(t => {
    average += getMillisecondsFromTimeTillMinTime(t, minTimestamp) / timestamps.length;
  });
  
  const millisecondsFromStartOfDay = (minTimestamp + average) % ONE_DAY_IN_MILLISECONDS;
  
  return new Date(0,0,0,
                 Math.trunc(millisecondsFromStartOfDay / (3600000)),
                 Math.trunc(millisecondsFromStartOfDay % 3600000 / (60000)),
                 Math.trunc(millisecondsFromStartOfDay % 10000 / 1000));
}

function getMillisecondsFromTimeTillMinTime(time, minTime){
  if(time < minTime){
    return ONE_DAY_IN_MILLISECONDS - minTime + time;
  }
  
  return time - minTime;
}

function getTimePartInMilliseconds(t){
  return (t.getHours() * 3600 +
         t.getMinutes() * 60 +
         t.getSeconds()) * 1000 + t.getMilliseconds();
}

const Input = styled('input')({
    display: 'none',
  });


    const paperStyle = {
        padding:20,
        width: 280,
        margin: "20px auto",
    }
    const avatarStyle = {
        backgroundColor: '#8ecae6'
    }

    return(
        
<Grid container spacing = {2} padding = '40px'>
            <Paper elevation={20} style={paperStyle}>
                <Grid container align='center' direction="row" justifyContent="center" alignItems="center">
                <h2 className='item_left'>Upload</h2>
                    <Avatar style={avatarStyle} variant="rounded">
                        <CloudUploadIcon />
                    </Avatar>
                    
                </Grid>
                <Grid align='center' >    
                    <h5 className = "item_upload"> Select the .xlsx file to get the datasleep analysis</h5>
                    <label  htmlFor="contained-button-file">
                        <Input  id="contained-button-file" multiple type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                } }/>
                        <Button variant="contained" component="span">
                        Upload
                        </Button>
                    </label>   
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Upload;