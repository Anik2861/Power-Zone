import React from 'react';
import './Service.css'


const Service = ({service}) => {
    const { picture, name,Description ,price} = service
    return (
        <div className='service-container shadow-lg p-2 text-center rounded-3'>
            
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <p>{Description}</p>
            <button className='btn btn-dark anik'>Add to cart</button>
        </div>
    );
};

export default Service;