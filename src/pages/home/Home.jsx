import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import ClippedDrawer from "../../components/clippedDrawer/ClippedDrawer";
import * as XLSX from 'xlsx';
import { DataArrayTwoTone } from "@mui/icons-material";

const names_replace_excel = ['date','nap_time','sleep_hour',
'lights_off','fall_asleep_after_lights_off','expected_waking_time',
'actual_waking_time','get_out_of_bed','times_wake_up_night','minutes_wake_up_night',
'disturbed_sleep','sleep_quality','level_of_fatigue','level_of_sleepiness','daily_activity_goal','actual_sleep','sleep_continuity'];

var months_values = [
    { "month":"Gennaio", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Febbraio", days:29 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Marzo", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Aprile", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Maggio", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Giugno", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Luglio", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Agosto", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Settembre", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Ottobre", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Novembre", days:30 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
    },
    { "month":"Dicembre", days:31 , "sleep_hours_month":0, "sleep_time_month":0, 
    "expected_waking_time_month": 0, "actual_waking_time_month": 0, "level_of_fatigue_month":0,
    "level_of_sleepiness_month":0, "nap_time_month":0, "sleep_quality_month":0, 'daily_activity_goal_month':0, 'actual_sleep_month':0, 'sleep_continuity_month':0
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
                    //console.log(pos);
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
            console.log("MBARE",d);
            plot(d);
        })
};

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }


const average_time = (milliseconds, days) => {
    var avgTime = Math.round(milliseconds / days);
    var result = new Date(avgTime);
    return result;
};


const create_date = (date, time) => {
    //console.log(time);
    var str = time.split(':');
    str[0] = padTo2Digits(str[0]);
    var new_date = date + " " + str[0]+ ":" + str[1] + ":00";
    return new Date(new_date);
}


const time_to_millisecond = (x) => {
    var y = x.split(':');
    var tot = y[0] * 60 + y[1];
    tot = tot * 60000;
    return tot;
};

const average = (data) => {
    data.forEach(element => {

        element.nap_time = Math.round(element.nap_time / element.days);
        element.sleep_hour = average_time(element.sleep_hour,element.days);
        element.lights_off = average_time(element.lights_off,element.days);
        element.fall_asleep_after_lights_off = Math.round(element.fall_asleep_after_lights_off / element.days);
        element.expected_waking_time= average_time(element.expected_waking_time,element.days);
        element.actual_waking_time = average_time(element.actual_waking_time,element.days);
        element.get_out_of_bed = average_time(element.get_out_of_bed,element.days);
        element.times_wake_up_night = Math.round(element.times_wake_up_night / element.days);
        element.minutes_wake_up_night = Math.round(element.minutes_wake_up_night / element.days);
        element.disturbed_sleep = Math.round(element.disturbed_sleep /element.days);
        element.sleep_quality = Math.round(element.sleep_quality /element.days);
        element.level_of_fatigue = Math.round(element.level_of_fatigue/element.days);
        element.level_of_sleepiness = Math.round(element.level_of_sleepiness/ element.days);
       /*  element.actual_sleep/= element.days;
        element.actual_sleep = toPercentage(element.actual_sleep);

        console.log(element.daily_activity_goal);
        element.daily_activity_goal= element.days;
        console.log(element.daily_activity_goal);

        element.daily_activity_goal = toPercentage(element.daily_activity_goal);
        element.sleep_continuity/= element.days; */
    });
};

function toDecimal(percent) {

    //console.log("Parsing",percent ,parseFloat(percent) / 100);
    return parseFloat(percent) / 100;
}

function toPercentage(x) {
    x = x * 100;
    return toString(x+'%');
}


const plot = (data) => {
    data.forEach(element => {
        element.sleep_hour = create_date(element.date,element.sleep_hour);
        element.lights_off = create_date(element.date,element.lights_off);
        element.expected_waking_time = create_date(element.date,element.expected_waking_time);
        element.actual_waking_time = create_date(element.date,element.actual_waking_time);
        element.get_out_of_bed = create_date(element.date,element.get_out_of_bed);
    });
    //console.log(data);
    first_date = data[0];
    data.splice(0, 1);
    console.log(data);

    var year_sleep_quality = 0;
    data.forEach((element) => {
        year_sleep_quality += element.sleep_quality;
    });
    year_sleep_quality = year_sleep_quality / 365;

    //console.log(data[0].sleep_hour,data[1].actual_waking_time,get_time_between(data[0].sleep_hour,data[1].actual_waking_time));

    //get_sleep_hour_month(data);
    //get_sleep_time_month(data);
    get_waking_time_levels_month_nap_time_month_sleep_quality_month(data);
    console.log(months_values);
};

/* Per fare una media sull'orario in cui si va a dormire assumo che l'orario minimo per andare a dormire sono le 18.
Prima delle 18 verranno considerati come pisolini, la mattina inizierà dalle ore 6. Queste assunzioni sono necessarie
per trovare il tempo minimo per svolgere i calcoli, visto la possibilità di andare a dormire in due giorni diversi.
23:00 -> 1:00 esempio
*/

const get_sleep_hour_month_1 = (data) => {
    var min_time = data[0].sleep_hour.getHours();
    console.log(min_time);
    var actual_month = 0;
    var dates = [];
    var x;

    data.forEach(element => {
        var month_element = element.sleep_hour.getMonth();
        console.log(month_element);
        dates[month_element].push(element.sleep_hour);
        console.log(dates[month_element]);



        if(month_element == actual_month) {
            var element_hours = element.sleep_hour.getHours();
            if(element_hours < 18) element_hours += 24;
            if(min_time < 18)  min_time += 24;
            if(min_time > element_hours) min_time = element_hours % 24;
            console.log(min_time);
        }else {
            x = calculateAverageOfHours(dates[actual_month],min_time[actual_month]);
            months_values[actual_month].sleep_hours_month = x;
            min_time = element.sleep_hour.getHours();
            actual_month++;
        }
    });
    //ultimo mese
    x = calculateAverageOfHours(dates[actual_month],min_time[actual_month]);
    months_values[actual_month].sleep_hours_month = x;

    months_values.forEach((element) => {
        element.sleep_hours_month /= element.days;
        Math.round(element.sleep_hours_month);
    });
};

const get_sleep_hour_month = (data) => {
    var days_count = 0;
    months_values.forEach(element => {
        console.log(element.month,days_count,element.days);
        element.sleep_hours_month = get_average_sleep_hour_month(data.slice(days_count,days_count + element.days));
        days_count += element.days;
        
    });
    console.log(months_values);
};


const get_average_sleep_hour_month = (data) => {
    var min_time = data[0].sleep_hour.getHours() * 60 + data[0].sleep_hour.getMinutes();
    var hours = [];
    console.log(data[0].sleep_hour);
    hours.push(data[0].sleep_hour);
    for(var i = 1; i < data.length; i++) {
        hours.push(data[i].sleep_hour);
        var element_hours = data[i].sleep_hour.getHours() * 60 + data[i].sleep_hour.getMinutes();
        console.log(i, min_time, element_hours);
        if(element_hours < 18 * 60) element_hours += (24 * 60);
        if(min_time < 18 * 60)  min_time += (24 * 60);
        if(min_time > element_hours) min_time = element_hours % (24 * 60);
        //console.log(min_time);
    };
    console.log(new Date(min_time * 60000 - 3600000));
    var x = calculateAverageOfHours(hours,new Date(min_time * 60000 - 3600000));
    return x;
}


const get_sleep_time_month = (data) => {
    console.log(first_date.sleep_hour,data[0].actual_waking_time);
    months_values[0].sleep_time_month = get_time_between(first_date.sleep_hour,data[0].actual_waking_time);
    console.log(months_values[0].sleep_time_month);
    for(var i = 1; i < data.length; i++) {
        var month_element = data[i].sleep_hour.getMonth();
        months_values[month_element].sleep_time_month += get_time_between(data[i-1].sleep_hour,data[i].actual_waking_time);
    } 

    months_values.forEach((element) => {
        element.sleep_time_month = Math.round(element.sleep_time_month/element.days);
        element.sleep_time_month = padTo2Digits(Math.trunc(element.sleep_time_month / (3600000))) +":"+ padTo2Digits(Math.trunc(element.sleep_time_month % 3600000 / (60000)));
    });
}

const get_waking_time_levels_month_nap_time_month_sleep_quality_month = (data) => {
    data.forEach((element) => {
        var month_element = element.actual_waking_time.getMonth();
        months_values[month_element].actual_waking_time_month += parseInt(getTimePartInMilliseconds(element.actual_waking_time));
        months_values[month_element].expected_waking_time_month += parseInt(getTimePartInMilliseconds(element.expected_waking_time));
        months_values[month_element].level_of_fatigue_month += parseInt(element.level_of_fatigue);
        months_values[month_element].level_of_sleepiness_month += parseInt(element.level_of_sleepiness);
        months_values[month_element].nap_time_month += parseInt(element.nap_time);
        months_values[month_element].sleep_quality_month += parseInt(element.sleep_quality);
    });
    
    months_values.forEach(element => {
        element.actual_waking_time_month = Math.round(element.actual_waking_time_month/element.days);

        element.actual_waking_time_month = new Date(element.actual_waking_time_month);

        element.expected_waking_time_month = Math.round(element.expected_waking_time_month/element.days);
        element.expected_waking_time_month = new Date(element.expected_waking_time_month);

        element.level_of_fatigue_month = Math.round(element.level_of_fatigue_month/element.days);
    
        element.level_of_sleepiness_month = Math.round(element.level_of_sleepiness_month/element.days);  

              
        element.nap_time_month = Math.round(element.nap_time_month/element.days);
        
        element.sleep_quality_month = Math.round(element.sleep_quality_month/element.days);

    });
    
};

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


const Home = () => {
    return (
        <div className="home">
           {/*  <Sidebar />
            <div className="homeContainer">container</div> 
             <ClippedDrawer/>  */}
           { <div>

                <input type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}></input>
            </div> }

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