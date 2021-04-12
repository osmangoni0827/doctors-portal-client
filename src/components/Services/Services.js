import React from 'react';
import './Services.css';
import fluride from '../../images/flouride.png';
import cavity from '../../images/cravity.png';
import whitening from '../../images/trathweating.png';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
const ServiceInfo=[
    {
        name:'Fluoride Treatment',
        img:fluride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teath Whitening',
        img:whitening
    }
]
const Services = () => {
    return (

        <section className='mt-5'>
                         {/* Service Header */}
            <div className ='text-center mt-4 mb-4 ServicesStyle'>
            <h4>OUR SERVICES</h4>
            <h1>Services We Provide</h1>
            </div>

                             {/* Service Info Card */}
            <div className='d-flex justify-content-center'>
                <div className='row w-75'>
                    {
                        ServiceInfo.map(Info=><ServicesInfo InfoService={Info}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
        
        
    );
};
export default Services;