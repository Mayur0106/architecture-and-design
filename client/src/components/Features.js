
import React from 'react';
import './Features.css';

const Features = () => {

    const handleClick = (title, description, imageUrl) => {
        // Encode image URL to make sure it's URL safe
        const encodedImageUrl = encodeURIComponent(imageUrl);
        // Redirect to a new page with the image URL, title, and description as parameters
        window.location.href = `/FullscreenPage?title=${"OPranges"}&description=${description}&imageUrl=${encodedImageUrl}`;
    };

    const str = "Architectural design in product development focuses on creating functional, aesthetically pleasing, and user-centric products. It involves a comprehensive understanding of materials, ergonomics, and user experience to craft products that seamlessly integrate form and function. The process starts with conceptual sketches and evolves through detailed drawings and prototypes. Architects ensure that every design element serves a purpose, enhancing the product's usability and appeal. Sustainable practices are often employed to minimize environmental impact. Collaboration with engineers and marketers ensures the product meets technical specifications and market demands. Ultimately, architectural design bridges the gap between innovative ideas and practical, market-ready solutions."
    return (
        <div>
            <div className="trending-stories">TRENDING STORIES</div>
            <div className="card-container">

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>






                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/66437d94adf525dd33da1720/1:1/w_1600,c_limit/GettyImages-1862736594.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="card" onClick={() => handleClick('Card 1 Title', str, 'https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg')}>
                    <img src="https://media.architecturaldigest.com/photos/663ced24e9c38f1aec4f7852/1:1/w_1600,c_limit/TW2023HIGH_Andrew%20Pielage-45.jpg" alt="Image 1" className="card-image" />
                    <div className="card-text">
                        <h3>Card 1 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>



                <hr className="custom-hr" />
            </div>
            {/* Your existing content */}
        </div >
    );
};

export default Features;
