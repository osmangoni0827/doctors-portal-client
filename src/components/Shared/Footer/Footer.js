import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGooglePlus, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import FooterInfo from '../FooterInfo/FooterInfo';
const FotterInfomation=[
    {
        name:'',
        discription:[
        'Emargenci Dental Care',
        'Check Up',
        'Treatment',
        'Troth Extraction',
        'Emargenci Dental Care',
        'Check Up',]
    },
    {
        name:'Services',
        discription:[
        'Emargenci Dental Care',
        'Check Up',
        'Treatment',
        'Troth Extraction',
        'Emargenci Dental Care',
        'Check Up',]
    },
    {
        name:'Oral Health',
        discription:[
        'Emargenci Dental Care',
        'Check Up',
        'Treatment',
        'Troth Extraction',
        'Emargenci Dental Care',
        'Check Up',
        'Check Up',
        'Treatment',
        'Troth Extraction',]
    },
    {
        name:'Our Address',
        address:'New York-1000010 hodson',
        paddress:'Yeards',
        number:+8845872563,
        icon1:faFacebookSquare,
        icon2:faGooglePlus,
        icon3:faTwitterSquare
    }
]
const Footer = () => {
    return (
        <section className='mt-5 footerStyle'>
            <div className='container w-75'>
            <div className='row'>
                {
                    FotterInfomation.map(info=><FooterInfo Info={info}></FooterInfo>)
                }
            </div>
            <p className='mt-5 d-flex align-items-center justify-content-center'>
                <FontAwesomeIcon icon={faCopyright} size='2x' className='px-2'></FontAwesomeIcon>
                {new Date().getFullYear()} All Rights Reserved
            </p>
            </div>
        </section>
    );
};

export default Footer;