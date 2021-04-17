import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import AppointmentCalender from '../AppointmentCalender/AppointmentCalender';
import Slider from '../../Shared/Slider/Slider';

const Dashboard = () => {
    const [Selecteddate,setSelectedDate]=useState(new Date());
    const HandleOnChange=(date)=>{
        setSelectedDate(date)
    }
    console.log(Selecteddate);
    return (
        <div style={{backgroundColor:'#F4FDFB'}}>
            <div className=" row">
                <div className="col-md-3">
                    <Slider></Slider>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <AppointmentCalender HandleOnChange={HandleOnChange}></AppointmentCalender>
                </div>
                <div className="col-md-4">
                    <AppointmentByDate Selecteddate={Selecteddate}></AppointmentByDate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;