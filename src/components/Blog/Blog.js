import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import './Blog.css';
import Winsion from '../../images/Ellipse 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const BlogInformaion = [
    {
        name: 'Dr. Cohan Mollik',
        img: Winsion,
        date: new Date().toDateString('dd/MM/yyyy'),
        title: '2 Times brush in a day can keep you healthy',
        background: '',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam voluptate tempore eaque maiores.'
    },
    {
        name: 'Dr. Badsah Khan',
        img: Winsion,
        date: new Date().toDateString('dd/MM/yyyy'),
        title: 'The Tooth Cancer is Challenge',
        background: '',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam voluptate tempore eaque maiores.'
    }
]

const Blog = () => {
    return (
        <section className=''>
            <div className='container w-75'>
                <div className='text-center'>
                    <h4 style={{ color: '#16D2BD' }}>Our Blog </h4>
                    <h1 className='py-4'>From Our Blog News</h1>
                </div>
                <div className='row '>

                    <div className='col-md-4'>
                        <div className={`BlogStyle mb-5`}  >
                            <div className='px-2 text-start' style={{zIndex:1000}}>
                                <h4>Rashed Kabir</h4>
                                <p>{new Date().toDateString('dd/MM/yyyy')}</p>
                            </div>
                            <h5 className='py-3'>Check at least a doctor in a year for your teeth</h5>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} size='3x' color='black'></FontAwesomeIcon>
                            </div>

                        </div>
                    </div>

                    {
                        BlogInformaion.map(info => <BlogInfo Info={info}></BlogInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;