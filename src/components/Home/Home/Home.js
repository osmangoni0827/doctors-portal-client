import React from 'react';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';
import Contactus from '../ContactUs/Contactus'
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Headers from '../Headers/Headers';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentInfo></AppointmentInfo>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;