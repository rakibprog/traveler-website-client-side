import React, { useState } from 'react';
import { Col, Container, Form, Image, Row,Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const history = useHistory();
    const [loginData,setLoginData] = useState({});
    const {registerUser,isLoading,user,authError} = useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogInSubmit = e => {
        if(loginData.password !==  loginData.password2){
            alert('Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name,history);
        e.preventDefault();
        
    } 
    return (
        <div className="log-in py-5">
            <Container>
            <Row>
                <Col>
                    <div className="login-form">
                         <h2 className="text-center">Please Register</h2>
                         {!isLoading &&  <Form onSubmit={handleLogInSubmit}>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onBlur={handleOnBlur} type="text" placeholder="Name" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onBlur={handleOnBlur} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control name="password2" onBlur={handleOnBlur} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className="more-btn" type="submit">
                            Register
                        </Button>
                        <NavLink style={{textDecoration: 'none'}} to="/login">
                              <h5>ALREADY REGISTER? PLEASE LOGIN </h5>
                        </NavLink>
                        </Form>}
                        {isLoading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                        {user?.email && <Alert>
                                User Created Successfully
                            </Alert>}
                         {authError&& <Alert>
                                {authError}
                            </Alert>}   
                    </div>
                </Col>
                <Col>
                    <div className="log-image">
                        <Image className="img-fluid" src={'https://i.ibb.co/8rMhMk5/images.jpg'}/>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Register;