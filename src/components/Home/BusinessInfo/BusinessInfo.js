import React from 'react';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from './InfoCard';
const BusinessInfo = () => {
    const Information = [
        {
            title: 'Opening Hours',
            description: `lorem ipsume is a dummy text information.
             It is very very Important`,
            background: '#1CC7C1',
            icon: faClock
        },
        {
            title: 'Visit Our Location',
            description: 'Brookyan NY100036 United Status',
            background: '#3A4256',
            icon: faMapMarkerAlt
        },
        {
            title: 'Contact Us',
            description: '+88018698545',
            background: '#1CC7C1',
            icon: faPhone
        }

    ]
    return (
        <section className='d-flex justify-content-center' >
            <div className='row p-2' style={{height:'300px'}}>
                {
                    Information.map(info => <InfoCard Info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;