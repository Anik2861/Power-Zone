import React from 'react';
import './Social.css'
import './Social.css'


const Social = () => {
    return (
        <div><div>
            <h3>To continue, log in to Power Zone.</h3>
            <div>
                <button className='btn btn-light'>Continue With Google</button>
                <button className='btn btn-dark'>Continue With Github</button>
            </div>
        </div>
            <div className='horizontal-style'>
                <div className='line'></div>
                <div><p>or</p></div>
                <div className='line'></div>
            </div>
        </div>
    );
};

export default Social;