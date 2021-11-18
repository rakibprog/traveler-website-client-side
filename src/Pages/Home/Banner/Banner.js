import React from 'react';
import { Carousel} from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
             <Carousel fade className="sliders">
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={'https://i.ibb.co/x1S4cy3/travel2.jpg'}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>Man cannot discover new oceans unless he has the courage to lose sight of the shore</h2>
                    <p>Andre Gide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={"https://i.ibb.co/zQYSN6C/travel3.jpg"}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2> A journey of a thousand miles begins with a single step</h2>
                    <p>Lao Tzu</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block "
                    src={"https://i.ibb.co/smzccGM/travel1.jpg"}
                    alt="Third slide"
                    />
                    <div className="bio">

                    </div>
                    <Carousel.Caption>
                    <h2>Do not follow where the path may lead. Go instead where there is no path and leave a trail</h2>
                    <p>Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>     
        
    );
};

export default Banner;