import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import doctor from '../../images/doctors.png';
const DoctorsInformation=[
    {
        name:'Dr. Weleamson ',
        number:+880128784528,
        icon:faPhone,
        img:doctor
    },
    {
        name:'Dr. Surma Khanom ',
        number:+88019873628,
        icon:faPhone,
        img:doctor
    },
    {
        name:'Dr. Khondokar ',
        number:+88018874528,
        icon:faPhone,
        img:doctor
    }
]
const Doctors = () => {
    return (
        <section className='my-5'>
            <div className='container w-75 text-center'>
                <h1 style={{color:'#5FC7C7'}}>Our Doctors</h1>
                <div className='d-flex justify-content-center'>

                        <div className='row'>
                            {
                                DoctorsInformation.map(info=><DoctorInfo Info={info}></DoctorInfo>)
                            }
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;