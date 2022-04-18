import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import Social from '../Social/Social';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const nameRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = event => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value;
        const confirmPasswor = confirmPasswordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }

    let errorElement;
    if (error) {
        errorElement = <p>{error.message}</p>
    }
    if(loading){
        return<Loading></Loading>
    }
    return (
        <div>
            <Form className='register-container' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Enter Name" ref={nameRef}  required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control name="email" type="email" placeholder="Enter Your E-mail" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Enter Your Password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="confirmPasswor" ref={confirmPasswordRef} placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <p>Already Have Account ? <Link to='/login'>
                    Please Login
                </Link></p>

                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>

            <Social></Social>
        </div>
    );
};

export default Register;