import React from 'react';
import './Testimonial.css';

import Winsion from '../../images/Ellipse 1.png';
import Herry from '../../images/Ellipse 2.png';
import Devid from '../../images/Ellipse 3.png';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonalInformation=[
    {
        name:'Winson Herry',
        img:Winsion,
        city:'Calfornia'
    }, 
    {
        name:'Herry Mension',
        img:Herry,
        city:'New York'
    }, 
    {
        name:'Devid Warner',
        img:Devid,
        city:'Chicago'
    }

]
const Testimonial = () => {
    return (
        <section className='testimonialStale'>
            <div className='container w-75'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-md-6 mb-5'>
                        <h4 style={{color:'#19D3B6'}}> Testimonial</h4>
                        <h1>Whats Our Patients <br/>Says</h1>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <FontAwesomeIcon icon={faQuoteLeft} size='10x' color='#D6F6F6' className='fluid'></FontAwesomeIcon>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row'>
                        {
                            TestimonalInformation.map(info=><TestimonialInfo Info={info} ></TestimonialInfo>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;