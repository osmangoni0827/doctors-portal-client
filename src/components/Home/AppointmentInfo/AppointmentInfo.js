import React from 'react';
import './Appoinment.css';
import doctor from '../../../images/doctors.png'
const AppointmentInfo = () => {
    return (
        <section className='w-75 appointmentStyle'>
            <div className='container'>
                <div className='row '>
                    <div className=' col-md-5 text-center'>
                        <img src={doctor} alt='' className='img-fluid'></img>
                    </div>
                    <div className=' col-md-7 py-5 ' style={{zIndex:500}}>
                        <h6 className='mb-3 text-uppercase' style={{ color: '#10CFE6' }}>Appointment</h6>
                        <h1 className='my-3 text-white'>Make an appointment <br />Today</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa similique accusamus, hic molestiae sequi ab soluta. Debitis, itaque repellendus? Porro magni aliquid laudantium ipsum consequuntur.</p>
                        <button className='mt-4 '>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentInfo;