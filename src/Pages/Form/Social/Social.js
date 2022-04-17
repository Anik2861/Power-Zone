import React from 'react';
import auth from '../../firebase.init';
import './Social.css'
import './Social.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    return (
        <div className='Social-container'><div>
            <h3>To continue, log in to Power Zone.</h3>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info'>Continue With Google</button><br />
                <button className='btn btn-dark mt-2' onClick={() => signInWithGithub()}>Continue With Github</button>
            </div>
        </div>
        <div className='horizontal-style mt-5'>
                <div className='line'></div>
                <div><p className='or'>or</p></div>
                <div className='line'></div>
            </div>
        </div>
    );
};

export default Social;