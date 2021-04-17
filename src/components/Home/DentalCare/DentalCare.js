import React from 'react';
import Dental from '../../../images/dentlacare.png';
import './DentalCare.css';
const DentalCare = () => {
    return (
        <section className='row  mt-5 d-flex align-items-center DentalStyle'>
            <div className='col col-md-5 col-12 dentalPic'>
                <img src={Dental} alt='' className='img-fluid w-75'></img>
            </div>
            <div className='col col-md-4 col-12 p-5'>
                <h2 style={{color:'#474F62'}}>Exceptional Dental <br/> Care, on Your Terms </h2>
                <p className='mt-3 mb-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus mollitia accusantium omnis velit accusamus. Eum dignissimos facere autem odio cumque labore nostrum ab animi earum, eius a, vel soluta sequi rem impedit enim eligendi ad temporibus corrupti. Labore in quos modi tempora autem eius, molestias sequi exercitationem neque culpa aliquid perspiciatis incidunt rem ipsam a cumque nesciunt.
                </p>
                <button className='btn-brand'> Learn More</button>
            </div>
        </section>
    );
};

export default DentalCare;