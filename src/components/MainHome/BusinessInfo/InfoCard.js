import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';
const InfoCard = ({ Info }) => {
    return (
        <div className='col col-md-4 Cardcontainer'>
            <div className='CardStyle' style={{ backgroundColor: Info.background }}>
                <div className='ms-3'>
                    <FontAwesomeIcon size='4x' color='white' icon={Info.icon} />
                </div>
                <div className='ms-3'>
                    <h5>{Info.title}</h5>
                    <small>{Info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;