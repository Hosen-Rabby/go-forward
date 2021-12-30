import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Authorization/hooks/useAuth';

const Login = () => {
    const { user, logInUser, authError } = useAuth();
    const [inputData, setInputData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData };
        newInputData[field] = value;
        setInputData(newInputData);
    }

    const submitRegister = e => {
        e.preventDefault();
        logInUser(inputData.email, inputData.password, location, navigate);
        e.target.reset();
    }


    return (
        <Container>
            <Row>
                {
                    user?.email?
                        <h6>Your are inside</h6>
                        :
                        <div>
                            <Form onSubmit={submitRegister}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="" name="email" required onChange={handleOnChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="" name="password" required onChange={handleOnChange} />
                                </Form.Group>
                                <Button type="submit">Login</Button>
                            </Form>
                        </div>
                }
            </Row>
            <Row>
                <h4>No accout yet! Create new account.</h4>
                <Link to="/register">Register</Link>
            </Row>
        </Container>
    );
};

export default Login;