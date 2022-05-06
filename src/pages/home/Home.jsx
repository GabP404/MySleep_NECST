import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import ClippedDrawer from "../../components/clippedDrawer/ClippedDrawer";
import * as XLSX from 'xlsx';

const names_replace_excel = ['date','nap_time','sleep_hour',
'lights_off','fall_asleep_after_lights_off','expected_waking_time',
'actual_waking_time','get_out_of_bed','times_wake_up_night','minutes_wake_up_night',
'disturbed_sleep','sleep_quality','level_of_fatigue','level_of_slepiness','actual_sleep','daily_activity_goal','Sleep_continuity'];

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
                    console.log(pos);
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
            console.log(d);

        })
};


const Home = () => {
    return (
        <div className="home">
            {/* <Sidebar />
            <div className="homeContainer">container</div> */}
            {/* <ClippedDrawer/> */}
            <div>
                <input type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}></input>
            </div>

        </div>
    );
};

export default Home;
