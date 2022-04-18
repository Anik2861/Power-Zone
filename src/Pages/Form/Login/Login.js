import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import Social from '../Social/Social';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    const navigateRegister = event => {
        navigate('/register')

    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPass = async() => {
        const email = emailRef.current.value
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast('Please Enter Your Email')
        }
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'> Error: {error?.message}</p>
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='login-container'>

            <Form className='login-from' onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <Button variant="info" type="submit">
                    Submit
                </Button>

                <p>New to Power Zone ? <Link to='/register' onClick={navigateRegister} className='text-primary decoration-nonenn pe-auto'>
                    Please Register
                </Link></p>

                <p onClick={handleResetPass}>Forget Password ? <span className='text-primary  pe-auto'>Reset Password </span></p>
                <ToastContainer />
            </Form>

            <Social></Social>
        </div>
    );
};

export default Login;