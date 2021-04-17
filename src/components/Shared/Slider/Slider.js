import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loggedInContext } from '../../../App';
import './SliderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
const Slider = () => {
   const [loggedInUser,setLoggedInUser]=useContext(loggedInContext);
   const [isDoctor,setDoctor]=useState(false);
   useEffect(()=>{
        fetch('https://secret-waters-40749.herokuapp.com/isDoctor',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
               setDoctor(true);
            }
        })
   },[loggedInUser.email])
   console.log(isDoctor);
    return (
        <div className='sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"'>
           
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isDoctor && <div>
                    <li>
                        <Link to="/allPatients" className="text-white" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-white" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div className='py-3'>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt}  /> <span onClick={()=>setLoggedInUser({})}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Slider;