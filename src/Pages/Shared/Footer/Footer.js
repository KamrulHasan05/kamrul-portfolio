import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-5'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h3 className='fs-6 text-center mb-0 text-white'>&copy; Md Kamrul Hasan || All Rights Reserve By Kamrul {new Date().getUTCFullYear()}</h3>
                    </div>
                    <div className="col-md-5">
                        <div className="social-icon text-center text-md-end mt-4 mt-md-0">
                            <a rel="noreferrer" href="https://web.facebook.com/kh.kamrulhasan.05/" target="_blank"><i className="fa-brands fa-facebook-square"></i></a>
                            <a rel="noreferrer" href="https://twitter.com/kamrulhasan_05" target="_blank"><i className="fa-brands fa-twitter-square"></i></a>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/kamrul-hasan-05/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            <a rel="noreferrer" href="https://github.com/KamrulHasan05" target="_blank"><i className="fa-brands fa-github-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;