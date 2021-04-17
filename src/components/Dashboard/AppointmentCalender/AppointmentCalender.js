import React  from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderStyle.css';
const AppointmentCalender = ({HandleOnChange}) => {
    
    return (
        <div>
            <h4 className='pr-3'>Appointments</h4>
            <div className=' d-flex justify-content-center'>
            
           <div className='CalenderPartStyle'>
           <h5 className='text-center py-3'>Calender</h5>
            <Calendar
                    onChange={HandleOnChange}
                    value={new Date()}
                />
           </div>
        </div>
        </div>
        
    );
};

export default AppointmentCalender;