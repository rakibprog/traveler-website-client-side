import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
     const [product, setProducts] = useState([]);
     useEffect(()=>{
          fetch('https://safe-harbor-87472.herokuapp.com/travelerService')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[]);
     const products =  product.slice(0,15);
    return (
        <div className="products py-5">
             <Container>
                <div className="products-header">
                    <h2>Popular Tour Places</h2>
                    <p>Enjoy vacation with Traveler</p>
                </div>
                <Row xs={1} md={3} className="g-4 py-5">
                    {products.map(product => <Product product={product} key={product._id}></Product> )}   
                </Row>
             </Container>
        </div>
    );
};

export default Products;
