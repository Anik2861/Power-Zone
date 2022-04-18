import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Admit.css'


const Admit = () => {

    const [show, setShow] = useState(true);

    return (
        <div>
            <div className='w-50 mx-auto mt-5 mb-5'>
                <Alert show={show} variant="info">
                    <Alert.Heading>Do you really Admit ?</Alert.Heading>
                    <p>
                        Then submit your details by clicking on the button below. I hope now you will make your body fit and  slim .
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">

                        <Link to='/admitProcess'>
                            <button className='btn btn-dark'> Admit Process</button>
                        </Link>
                    </div>
                </Alert>

                {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

            </div>

        </div>
    );
};

export default Admit;