import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
const Contactus = () => {
    const { register, handleSubmit ,errors} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className=' ContactStyle'>

            <div className='container d-flex justify-content-center py-4'>
                <div className=' col-md-12 form py-5' style={{ zIndex: 500 }}>
                    <div className='text-center py-3'>
                        <h3 style={{color:'#5FC7C7'}}>Contact Us</h3>
                        <h1 style={{color:'#FFFFFF'}}>Always Connect With Us</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' name='email' placeholder='Enter Your Email*' {...register("email", { required: true})} />
                        <p> {errors?.email && <span>This field is required</span>}</p><br/>
                        <input type='text' placeholder='Subject*' {...register("subject", {required: true})} />
                        <p> {errors?.subject && <span>This field is required</span>}</p><br/>
                        <input className='masageInput' type='text' placeholder='Massage*' {...register("massage", { required: true})} />
                        <p> {errors?.Massage && <span>This field is required</span>}</p><br/>
                        <button className='btn-brand' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactus;