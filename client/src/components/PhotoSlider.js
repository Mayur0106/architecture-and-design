import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './PhotoSlider.css'; // Import the custom CSS file

const slideData = [
    {
        src: 'https://images.adsttc.com/media/images/6037/0ec7/f91c/8122/3000/03d3/large_jpg/_FI_2_EXTERIOR_2.jpg?1614220985',
       
        title: '',
        description: ''
    },
    {
        src: 'https://images.adsttc.com/media/images/6037/0ec7/f91c/8122/3000/03d3/large_jpg/_FI_2_EXTERIOR_2.jpg?1614220985',
       
        title: '',
        description: ''
    },
    {
        src: 'https://images.adsttc.com/media/images/6037/0ec7/f91c/8122/3000/03d3/large_jpg/_FI_2_EXTERIOR_2.jpg?1614220985',
       
        title: 'Third Slide',
        description: 'Description for the third slide.'
    }
];

const PhotoSlider = () => {
    return (
        <div className="photo-slider-container mt-3">
            <Carousel>
                {slideData.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={slide.src}
                            alt={slide.alt}
                        />
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default PhotoSlider;
