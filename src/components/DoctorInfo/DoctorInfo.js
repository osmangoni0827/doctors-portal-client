import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Doctorinfo.css';
const DoctorInfo = ({Info}) => {
    const {img,name,icon,number}=Info;
    return (
        <div className='col-md-4'>
           <div className='InformationStyle'>
           <img src={img} alt='' className='img-fluid'></img>
            <h5 className='mt-3'>{name}</h5>
            <p>
                <FontAwesomeIcon icon={icon} color='green'></FontAwesomeIcon>
                <small className='px-1'>{number}</small>
            </p>
           </div>
        </div>
    );
};

export default DoctorInfo;