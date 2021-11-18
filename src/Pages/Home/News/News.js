import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './News.css';

const News = () => {
    return (
        <div className="travel-news py-5">
            <Container>
            <div className="news-title">
                <h4 className="news-subtitle">FROM THE BLOG</h4>
                <h2 className="news-title">ARTICLES & NEWS</h2>
            </div>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={"https://i.ibb.co/PQrmj3N/blog-1.jpg"} />
                            <Card.Body>
                            <Card.Title>24 Of Our Favorite Things To Do In Cape Town And Around</Card.Title>
                            <Card.Text>
                            It is your world and we will help you explore it. Find the best prices among millions of flight, hotel and car rental offers to organize your perfect trip and easily manage your travel expenses, so you can relax even before departure. Do you already know where to go? Find out what is the best time to book. Do you have flexible dates? Find offers for a short relaxing weekend or an unforgettable adventure.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" className="more-btn">Read More</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={"https://i.ibb.co/nnZnXvL/blog-5.jpg"} />
                            <Card.Body>
                            <Card.Title>Our Favorite Things To Do In The Fascinating City Of Córdoba</Card.Title>
                            <Card.Text>
                            It is your world and we will help you explore it. Find the best prices among millions of flight, hotel and car rental offers to organize your perfect trip and easily manage your travel expenses, so you can relax even before departure. Do you already know where to go? Find out what is the best time to book. Do you have flexible dates? Find offers for a short relaxing weekend or an unforgettable adventure.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" className="more-btn">Read More</Button>
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={"https://i.ibb.co/znKXXHT/blog-3.jpg"} />
                            <Card.Body>
                            <Card.Title>Mexico Road Trip – Impressions Of A Challenging Journey</Card.Title>
                            <Card.Text>
                            It is your world and we will help you explore it. Find the best prices among millions of flight, hotel and car rental offers to organize your perfect trip and easily manage your travel expenses, so you can relax even before departure. Do you already know where to go? Find out what is the best time to book. Do you have flexible dates? Find offers for a short relaxing weekend or an unforgettable adventure.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" className="more-btn">Read More</Button>
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={"https://i.ibb.co/PQrmj3N/blog-1.jpg"} />
                            <Card.Body>
                            <Card.Title>24 Of Our Favorite Things To Do In Cape Town And Around</Card.Title>
                            <Card.Text>
                            It is your world and we will help you explore it. Find the best prices among millions of flight, hotel and car rental offers to organize your perfect trip and easily manage your travel expenses, so you can relax even before departure. Do you already know where to go? Find out what is the best time to book. Do you have flexible dates? Find offers for a short relaxing weekend or an unforgettable adventure.
                            </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" className="more-btn">Read More</Button>
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default News;