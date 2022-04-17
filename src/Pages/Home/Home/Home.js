import React from 'react';
import Banner from '../Banner/Banner';
import BecomeMember from '../BecomeMember/BecomeMember';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <BecomeMember></BecomeMember>
        </div>
    );
};

export default Home;