import React from 'react';
import { Link } from 'react-router-dom';
import FooterImage from '../assets/FooterImage.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='footer-container'>
            <div className='row d-flex align-items-center justify-between'>
                <div className='col-md-3 p-3'>
                    <h1 className='logo-title'>Honesty</h1>
                    <p className='footer-text'>All Copyrights claimed @ 2023</p>
                </div>
                {/* <div className='col-md-6 p-3'>
                    <div className='footer-links'>
                        <Link className='footer-link' to="/" onClick={scrollToTop}>
                            <div>Home</div>
                        </Link>
                        <Link className='footer-link' to="/services" onClick={scrollToTop}>
                            <div>Services</div>
                        </Link>
                        <Link className='footer-link' to="/furniture" onClick={scrollToTop}>
                            <div>Furniture</div>
                        </Link>
                        <Link className='footer-link' to="/contact" onClick={scrollToTop}>
                            <div>Connect</div>
                        </Link>
                    </div>
                </div> */}
                <div className='col-md-3 p-3'>
                    <img
                        src={FooterImage}
                        alt="FooterImage"
                        width="100%"
                        className="d-inline-block align-top"
                    />
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='footer-text'>Address: 4, karukkalacherry road, karaikal. 609602</p>
                <div className='divider'>
                    <span className='dot'></span>
                    <span className='line'></span>
                    <span className='dot'></span>
                </div>
                <a className='footer-text' href="mailto:vimalbcet@gmail.com"><p>Vimalbcet@gmail.com</p></a>
                <a className="footer-text" href="tel:+919600858598"><p>+91 9600858598</p></a>
            </div>
        </div>
    );
};

export default Footer;
