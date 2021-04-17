import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingData=[
    {
        id:1,
        subject:'Teeth Orthonodics',
        hoursTime:'8.00 Am to 9.00 Am',
        totalSpace: 10,
    },
    {
        id:2,
        subject:'Cravity Protection',
        hoursTime:'9.00 Am to 10.00 Am',
        totalSpace: 9,
    },
    {
        id:3,
        subject:'Teeth Orthonodics',
        hoursTime:'11.00 Am to 12.00 Am',
        totalSpace: 12,
    },
    {
        id:4,
        subject:'Teeth Orthonodics',
        hoursTime:'2.00 Pm to 3.00 Pm',
        totalSpace: 8,
    },
    {
        id:5,
        subject:'Cosmetric Denstrity',
        hoursTime:'4.00 Pm to 5.00 Pm',
        totalSpace: 10,
    },
    {
        id:6,
        subject:'Teeth Comastic',
        hoursTime:'7.00 Pm to 8.00 Pm',
        totalSpace: 15,
    },
]
const BookingAppointment = ({date}) => {
    return (
        <section>
            <div className='container'>
                <h1  className='btn-text text-center my-5'>Available Appointments on {date.toDateString()} </h1>
                <div className="row">
                    {
                       BookingData.map(booking=><BookingCard date={date} key={booking.id} booking={booking}></BookingCard>) 
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingAppointment;