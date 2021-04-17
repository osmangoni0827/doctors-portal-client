import React, { useEffect, useState } from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
useEffect( () => {
    fetch('https://secret-waters-40749.herokuapp.com/doctors')
    .then(res => res.json())
    .then(data => {
    setDoctors(data)
   })
}, [])
    return (
        <section className='my-5'>
            <div className='container w-75 text-center'>
                <h1 style={{color:'#5FC7C7'}}>Our Doctors</h1>
                <div className='d-flex justify-content-center'>

                        <div className='row'>
                        {
                     doctors.map(doctor =><DoctorInfo key={doctor._id} doctor={doctor} />)
                    }
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;