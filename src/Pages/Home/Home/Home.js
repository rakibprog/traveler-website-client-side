import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Area from '../Area/Area';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Area></Area>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;