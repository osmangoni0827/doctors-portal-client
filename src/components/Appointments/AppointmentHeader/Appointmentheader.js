import React from 'react';
import Chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Appointmentheader = ({HandleOnChange}) => {

    
    return (
        <main style={{ height: '600px' }} className='style row d-flex align-items-center'>
            <div className="col col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4156' }}>Appoinment</h1>
                <Calendar
                    onChange={HandleOnChange}
                    value={new Date()}
                />
            </div>
            <div className='col col-md-6'>
                <img className='img-fluid' src={Chair} alt="" />
            </div>
        </main>

    );
};

export default Appointmentheader;