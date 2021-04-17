import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FooterInfo = ({ Info }) => {
    const description = Info?.discription;
    return (
        <div className='col-md-3'>
            {/* Footer Headers */}
            <div className='py-3'>
                <h3 style={{ color: '#5FC7C7', height: '50px' }}>{Info.name}</h3>
            </div>
            {
                             // Address Information
                Info.address ?
                    <div>
                        <div className='mb-4'>
                            <h6>{Info.address}</h6>
                            <h6>{Info.paddress}</h6>
                        </div>
                        <div className='d-flex justify-content-around align-items-center '>
                            <FontAwesomeIcon icon={Info.icon1} color='#6ACECE' size='3x'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={Info.icon2} color='#6ACECE' size='3x'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={Info.icon3} color='#6ACECE' size='3x'></FontAwesomeIcon>
                        </div>
                        <div className='mt-5'>
                            <h6>Call Now</h6>
                            <button className='btn-brand'>{Info.number}</button>
                        </div>
                    </div>
                    //Another Information
                    : description.map(data => <li style={{ listStyle: 'none' }}>{data}</li>)
            }
        </div>
    );
};

export default FooterInfo;