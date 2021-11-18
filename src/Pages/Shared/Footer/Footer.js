import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container fluid>
                <Row className="footer-area">
                    <Col lg={6}>
                        <div className="logo-text">
                            <h2>Traveler</h2>
                        </div>
                        <div className="logo-description">
                               <p>It is your world and we will help you explore it. Find the best prices among millions of flight, hotel and car rental offers to organize your perfect trip and easily manage your travel expenses, so you can relax even before departure. Do you already know where to go? Find out what is the best time to book. Do you have flexible dates? Find offers for a short relaxing weekend or an unforgettable adventure.</p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="list-item">
                            <h3 className="destination-title">Popular Destination</h3>
                            <ul >
                                <li><a href=".#">Sydney</a></li>
                                <li><a href=".#">Dhaka</a></li>
                                <li><a href=".#">New York</a></li>
                                <li><a href=".#">Tokyo</a></li>
                                <li><a href=".#">London</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="list-item">
                            <h3 className="destination-title">Partners</h3>
                            <ul >
                                <li><a href=".#">Booking</a></li>
                                <li><a href=".#">Rental Car</a></li>
                                <li><a href=".#">Discover Car</a></li>
                                <li><a href=".#">Trivago</a></li>
                                <li><a href=".#">Booking</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="list-item">
                            <h3 className="destination-title">Popular Flights</h3>
                            <ul >
                                <li><a href=".#">Flights to Washington</a></li>
                                <li><a href=".#">Flights to Seoul</a></li>
                                <li><a href=".#">Flights to New York</a></li>
                                <li><a href=".#">Flights to Tokyo</a></li>
                                <li><a href=".#"> Flights to London</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="footer-copyright">
                    <Col>
                         <p className="footer-text">© 2021 Traveler, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;