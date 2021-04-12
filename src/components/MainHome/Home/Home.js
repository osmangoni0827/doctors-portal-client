import React from 'react';
import Appointment from '../../Appoinment/Appointment';
import Blog from '../../Blog/Blog';
import Contactus from '../../ContactUs/Contactus';
import DentalCare from '../../DentalCare/DentalCare';
import Doctors from '../../Doctors/Doctors';
import Footer from '../../Footer/Footer';
import Services from '../../Services/Services';
import Testimonial from '../../Testimonial/Testimonial';
import Headers from '../Headers/Headers';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;