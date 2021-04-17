import React, { useContext, useEffect, useState } from 'react';
import { loggedInContext } from '../../../App';
import './StyleForAppointment.css';
const AppointmentByDate = (Selecteddate) => {
    const [appointments,setAppointMents]=useState([]);
    const[loggedInUser]=useContext(loggedInContext);
    
    useEffect(()=>{
        fetch('https://secret-waters-40749.herokuapp.com/appointmentByDate',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
              },
            body:JSON.stringify({date:Selecteddate,email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>{setAppointMents(data)
        console.log(data)})
    },[Selecteddate])
    return (
        <div className='appointmentbydate shadow'>
            <h6>Appointment</h6>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Schedule</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                {
                    appointments.map((appointment)=>(
                        
                        <tr>
                            <td>{appointment.name}</td>
                            <td>{appointment.HoursTime}</td>
                            <td>
                                <button>No Visited</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
           {
               appointments.length===0&&
                <h6 className='text-center mt-3'>This Day Appointment Not Found</h6>
                
           }
            
        </div>
    );
};

export default AppointmentByDate;
