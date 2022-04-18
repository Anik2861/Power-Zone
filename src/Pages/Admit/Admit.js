import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useProduct from '../Other/Hook/useProduct';
import './Admit.css'


const Admit = () => {



    return (
        <div>
          
            <Link to='admitProcess'>
                <button > Admit Process</button>
            </Link>
        </div>
    );
};

export default Admit;