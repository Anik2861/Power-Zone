import React from 'react';
import './Banner.css'
import BannerVideo from '../../../images/gym-video.mp4'

const Banner = () => {
    return (
        <div>
            <div >
                <video loop muted autoPlay controls className='banner-video'  src={BannerVideo}></video>
            </div>
            <div className=' video-overlay'>
               <div className='description'>
               <h1 className='title'>Power Zone</h1>
                <p className='container'>Join the Mutants family and enjoy exclusive and state of the art training amenities along with exclusive membership privileges at the best gym in Patna. Train with our personal trainers and build your dream physique in less than a few months with a dedicated support staff and top notch fitness equipments.</p>
               </div>
            </div>
        </div>
    );
};

export default Banner;