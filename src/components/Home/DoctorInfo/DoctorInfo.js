import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Doctorinfo.css';
const DoctorInfo = ({ doctor }) => {
    const { Image, name } = doctor;

    return (
        <div className='col-md-4 col-12'>
            <div className='InformationStyle'>
                {
                    <img style={{ height: '200px', width: '1000px' }} className="img-fluid mb-3" src={`data:image/gif;base64,${Image?.img}`} alt="" />
                }
                <h4>{name}</h4>
                <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
            </div>
        </div>
    );
};

export default DoctorInfo;