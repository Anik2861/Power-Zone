import React from 'react';
import './BecomeMember.css'
import bcmMember from '../../../images/cta-bg.jpg'

const BecomeMember = () => {
    return (
        <div >
            <div className='bcm-member' id='member'>
                <div style={{
                    backgroundImage: `url(${bcmMember})`
                }}></div>

                <h1 >DON'T <span className='bcm-style'>THINK</span > BEGAIN <span className='bcm-style'>TODAY</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus voluptatibus repellendus possimus nostrum eos dignissimos, suscipit rem magnam corrupti officiis sunt laudantium? Fugit quasi, sapiente expedita error quod suscipit!</p>
            </div>
        </div>


    );
};

export default BecomeMember;