import React, { useRef } from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import './AddService.css';

const AddService = () => {
    const serviceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const handleAddService = e =>{
        const service = serviceRef.current.value;
        const desc = descriptionRef.current.value;
        const image = imgRef.current.value;
        const price = priceRef.current.value;
        const newService = {service,desc,image,price}
        fetch('https://safe-harbor-87472.herokuapp.com/travelerService',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newService)
                })
                .then(res=> res.json())
                .then(data =>{
                     if(data.insertedId){
                         alert("successfully added the Traveler service");
                         e.target.reset();
                     }
                })
        e.preventDefault();
    }
    return (
        <div className="py-5">
             <Container>
                  <Row>
                      <Col>
                           <h2 className="text-center"> Please Add Travel Service</h2>
                           <Form onSubmit={handleAddService} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Travel Service Name</Form.Label>
                                    <Form.Control type="text" ref={serviceRef} placeholder="Travel Service Name" />
                                    <Form.Text className="text-muted">
                                      Travel Service Name
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" ref={descriptionRef} rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type="text" ref={imgRef} placeholder="Image Url" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" ref={priceRef} placeholder="Price" />
                                </Form.Group>
                                 <input  type="submit" className="add-service" value="Add" />
                            </Form>
                      </Col>
                  </Row>
             </Container>
        </div>
    );
};

export default AddService;