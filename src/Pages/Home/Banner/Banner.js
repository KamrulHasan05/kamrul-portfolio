import React from 'react';
import banner from '../../../images/banner.png';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
    const TypewriterHook = () => {
        const { text } = useTypewriter({
            words: ["Javascript Developer", "React Developer", "Frontend Developer"],
            loop: false,
        });

        return (
            <div>
                <h4 className="mb-4 subTitle-color d-inline">{text}</h4>
                <Cursor />
            </div>
        );
    };
    return (
        <section className="banner">
            <div className="container">
                <div className="row align-items-center gx-lg-0 gx-md-5 ">
                    <div className="col-md-5">
                        <div className="banner-img text-center">
                            <img src={banner} alt="banner-img" className='rounded-pill' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="banner-content text-white mt-5 mt-md-0 text-center text-md-start">
                            <h1 className='heading'>Md Kamrul Hasan</h1>
                            <TypewriterHook />
                            <hr className='bg-white mt-2 mb-4' />
                            <p className=" mt-3">
                                I am a passionate web developer who wants to learn more and more
                                about web-based technology. I want to touch the highest peak of
                                web development and provide value to the organization I work.
                            </p>
                            <div className=" d-flex social-btn mt-5 justify-content-center justify-content-md-start">
                                <a rel="noreferrer" href="https://www.linkedin.com/in/kamrul-hasan-05/" target="_blank" className="btn bg-white me-2"><i className="fab fa-linkedin" ></i> LinkedIn</a>

                                <a rel="noreferrer" href="https://github.com/KamrulHasan05" target="_blank" className="btn bg-white"><i className="fab fa-github-square"></i> Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;