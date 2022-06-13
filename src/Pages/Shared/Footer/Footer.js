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
                            <Link to={''}><i className="fa-brands fa-facebook-square"></i></Link>
                            <Link to={''}><i className="fa-brands fa-twitter-square"></i></Link>
                            <Link to={''}><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to={''}><i className="fa-brands fa-github-square"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;