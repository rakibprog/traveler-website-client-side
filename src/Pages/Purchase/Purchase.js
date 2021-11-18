import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    let {purchaseId} = useParams();
    const [booking, setBooking] = useState([]);
    const [bookDetails, setBookDetails] = useState({});
    //form
    const {user} = useAuth();
    const nameRef = useRef();
    const bookingRef = useRef();
    const emailRef = useRef();
    const adressRef = useRef();
    useEffect(()=>{
        fetch('https://safe-harbor-87472.herokuapp.com/travelerService')
        .then(res=> res.json())
        .then(data => setBooking(data));
    },[]);
    console.log(booking);
     useEffect(()=>{
         const book = booking.find(book=> book._id == purchaseId);
         setBookDetails(book);
     },[booking,purchaseId]);
    //form
    const handleAddBooking = e =>{
        const booking = bookingRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = adressRef.current.value;
        const newBooking = {booking,name,email,address}
        fetch('https://safe-harbor-87472.herokuapp.com/travelerBooking',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newBooking)
                })
                .then(res=> res.json())
                .then(data =>{
                     if(data.insertedId){
                         alert("Successfully Booked Check My Order");
                         e.target.reset();
                     }
                })
        e.preventDefault();
    }

    return (
        <Container className="py-5">
            <Row>
                  <h2 className='text-center'>Please Booking</h2>
                <Col>
                    <Card className="w-50 mx-auto mt-5">
                        <Card.Img variant="top" src={bookDetails?.image} />
                        <Card.Body>
                            <Card.Title>{bookDetails?.service}</Card.Title>
                            <Card.Text>{bookDetails?.desc}
                            <h4>Price: {bookDetails?.price}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Form onSubmit={handleAddBooking} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Booking Name</Form.Label>
                                    <Form.Control type="text" ref={bookingRef} placeholder="Travel Service Name" value={bookDetails?.service} />
                                    <Form.Text className="text-muted">
                                      Booking Name
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" ref={nameRef} placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="text" ref={emailRef} placeholder="Your Email" value={user?.email} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control type="text" ref={adressRef} placeholder="Your Address"/>
                                </Form.Group>
                                 <input  type="submit" className="add-service" value="Booking" />
                            </Form>
                </Col>
            </Row>
        
        </Container>
        
    );
};

export default Purchase;