import React from 'react';
import { Card,Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {service,desc,image,price,_id} = props.product;
    console.log(props);
     return (
        <div>
            <Col className="d-flex align-items-stretch"> 
                <Card className="card-product">
                    <Card.Img className="product-img" variant="top"src={image}/>
                    <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>
                            {desc}
                            <h5>Rent: {price}</h5>
                        </Card.Text>
                        <NavLink to={`/purchase/${_id}`}>
                            <Button variant="primary" className="more-btn">Book Now</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;

