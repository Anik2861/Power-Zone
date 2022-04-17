import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer-container shadow-lg'>
            <div className='footer-description'>
                <div>
                    <h3 className='footer-header'>About Power Zone</h3>
                    <p>Power Zone is dedicated to making your dreams of a successful fitness career come true in the most efficient and timely way..</p>
                </div>
                <div>
                    <h3 className='footer-header'>Top Features</h3>
                    <p>Online Coaching</p>
                    <p>Consulting</p>
                    <p>Born Fitness +</p>
                    <p>Fit father Guid</p>
                    <p>Fat loss Academy</p>

                </div>
                <div>
                    <h3 className='footer-header'>Contact Us</h3>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
            <div className='copyright mt-5'>
                <span>Copyright &copy; {year} Power Zone</span>
                <p>All Rights Reserve by <span className='footer-header'>Shohidul Jaman Anik</span></p>
            </div>
        </div>
    );
};

export default Footer;