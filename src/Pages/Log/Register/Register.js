import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Authorization/hooks/useAuth';

const Register = () => {
    const {user, registerUser} = useAuth();
    const [inputData, setInputData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    console.log(user);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = {...inputData};
        newInputData[field] = value;
        setInputData(newInputData);
        console.log(newInputData);
    }
    const submitRegister = e => {
        e.preventDefault();
        registerUser(inputData.email, inputData.password, location, navigate);
        e.target.reset();
    }


    return (
        <Container>
            <Row>
                <div>
                    <Form onSubmit={submitRegister}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="" name="fullName" required onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="name" placeholder="" name="userName" required onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" name="email" required onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" name="password" required onChange={handleOnChange} />
                        </Form.Group>
                        <Button type="submit">Register</Button>
                    </Form>
                </div>
            </Row>
            <Row>
                <h4>Already has an account? </h4>
            </Row>
        </Container>
    );
};

export default Register;