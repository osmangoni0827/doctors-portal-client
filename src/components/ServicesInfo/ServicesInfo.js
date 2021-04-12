import React from 'react';

const ServicesInfo = ({InfoService}) => {
    return (
        <section className='col col-md-4 mt-5 mb-5'>
          <div className='text-center'>
            <img src={InfoService.img} className='img-fluid mb-3' style={{width:'50px'}}></img>
            <h5 className='mb-3'>{InfoService.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam vel consectetur veniam perferendis.</p>
          </div>
        </section>
    );
};

export default ServicesInfo;