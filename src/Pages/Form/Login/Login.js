import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import Social from '../Social/Social';
import './Login.css'


const Login = () => {
    return (
        <div className='login-container'> 

            
            <Social></Social>
            <Form className='login-from'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;