import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons CSS is imported
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-2">
            <div className="container">
                <div className="row">
                    {/* Instagram */}
                    <div className="col-md-4 mb-1">
                        <h5>Follow Us</h5>
                        <a href="https://www.instagram.com/yourprofile" className="text-white" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i> Instagram
                        </a>
                    </div>
                    
                    {/* WhatsApp */}
                    <div className="col-md-4 mb-1">
                        <h5>Contact Us</h5>
                        <a href="https://wa.me/yourphonenumber" className="text-white" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                    
                    {/* Location */}
                    <div className="col-md-4 mb-3">
                        <h5>Our Location</h5>
                        <p className="mb-0">
                            <i className="bi bi-geo-alt"></i> 123 Your Street<br />
                            City, State, ZIP Code<br />
                            Country
                        </p>
                    </div>
                </div>
                <div className="text-center ">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
