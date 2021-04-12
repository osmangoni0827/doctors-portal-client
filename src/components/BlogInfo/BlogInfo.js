import React from 'react';
import './InfoStyle.css';
const BlogInfo = ({Info}) => {
    return (
           <div className='col-md-4'>
            <div className={`BlogInfoStyle mb-5 ${Info.background}`}>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={Info.img} alt='' className='img-fluid w-25'></img>
                    <div className='px-2 text-start'>
                        <h4>{Info.name}</h4>
                        <p>{Info.date}</p>

                    </div>
                </div>
                <h5 className='py-3'>{Info.title}</h5>
                <div>
                   <p>{Info.description}</p>
                </div>
                
            </div>
        </div>
    );
};

export default BlogInfo;