import React, { useState } from 'react';
import { Col, Container, Form, Image, Row,Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {isLoading,user,authError,loginUser,signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogInSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location,history);
    } 
    const handleGoogleSignIn = () => {
        signInWithGoogle(location,history);
    }

    return (
        <div className="log-in py-5">
            <Container>
            <Row>
                <Col>
                    <div className="login-form">
                         <h2 className="text-center">Please LogIn</h2>
                    {!isLoading && <Form onSubmit={handleLogInSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onChange={handleOnchange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onChange={handleOnchange} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className="more-btn" type="submit">
                            Log In
                        </Button>
                        <NavLink style={{textDecoration: 'none'}} to="/register">
                              <h5>NEW USER? PLEASE REGISTER</h5>
                        </NavLink>
                        </Form>}
                        <Button className="more-btn" onClick={handleGoogleSignIn} variant="primary">Sign In Google</Button>
                        {isLoading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                        {user?.email && <Alert>
                                Log In Successfully
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

export default Login;