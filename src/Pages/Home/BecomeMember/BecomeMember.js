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

                <h1 ><b>DON'T <span className='bcm-style'>THINK</span > BEGIN <span className='bcm-style'>TODAY</span></b></h1>
                <p>It might seem counterproductive, but a workout can actually boost your mood and energy. Exercising can help you feel more motivated and enthusiastic, Everyday Health notes. If you're not feeling your best, you'll likely find yourself in better spirits after a productive gym session.</p>
                <button className='member-btn'>Become A Member</button> 
            </div>
        </div>


    );
};

export default BecomeMember;