import React from 'react';
import { Card, Col, Row, Container  } from 'react-bootstrap';
import './Area.css'


const Area = () => {
    return (
        <div className=" drones py-5 ">
        <Container>
        <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={"https://i.ibb.co/6WXKs4v/h2-tour-carousel-img-2.jpg"} />
                        <Card.Body>
                        <Card.Title>Diving Adventure</Card.Title>
                        <Card.Text>
                        Explore our cheap flights today and escape for an adventure in the sun, visiting historic cities, shopping in another city and partying until dawn in one of the most extraordinary cities in the world.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={"https://i.ibb.co/mc6smFc/h2-tour-carousel-img-3.jpg"} />
                        <Card.Body>
                        <Card.Title>Marmore Waterfalls</Card.Title>
                        <Card.Text>
                        Explore our cheap flights today and escape for an adventure in the sun, visiting historic cities, shopping in another city and partying until dawn in one of the most extraordinary cities in the world.

                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={"https://i.ibb.co/4mJF5G4/h2-tour-carousel-img-1.jpg"} />
                        <Card.Body>
                        <Card.Title className="tex-center">Explore Thai Jungle</Card.Title>
                        <Card.Text >
                        Explore our cheap flights today and escape for an adventure in the sun, visiting historic cities, shopping in another city and partying until dawn in one of the most extraordinary cities in the world.

                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Area;