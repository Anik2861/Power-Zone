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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magni? Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Dicta incidunt error iusto quis. Animi, fugiat consequuntur non eveniet explicabo asperiores harum atque nulla. Sequi a labore pariatur voluptatem obcaecati maxime.</p>
               </div>
            </div>
        </div>
    );
};

export default Banner;