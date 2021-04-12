import React from 'react';
import './TestimonialInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const TestimonialInfo = ({Info}) => {
    return (
        <div className='col-md-4'>
            <div className='InfoStyle mb-5'>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, officiis adipisci et odio explicabo perspiciatis excepturi praesentium aliquam natus illo obcaecati.
                    </p>
                </div>
               
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={Info.img} alt='' className='img-fluid w-25'></img>
                    <div className='px-2 py-4 text-start'>
                        <h4>{Info.name}</h4>
                        <p>{Info.city}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialInfo;