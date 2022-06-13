import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import skillImage from '../../../images/skills.png';

const Skills = () => {

    return (
        <section className="skills py-5" >
            <div className="container">
                <h2 className="fw-bold text-center heading mb-4">My Skills</h2>
                <hr className='mt-2 mb-4 mx-auto' />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className='mb-3'>
                            <h5>React Js</h5>
                            <ProgressBar now={80} label="80%" />
                        </div>
                        <div className='mb-3'>
                            <h5>Express Js</h5>
                            <ProgressBar now={65} label="65%" />
                        </div>
                        <div className='mb-3'>
                            <h5>MongoDB</h5>
                            <ProgressBar now={60} label="60%" />
                        </div>
                        <div className='mb-3'>
                            <h5>Javascript</h5>
                            <ProgressBar now={70} label="70%" />
                        </div>
                        <div className='mb-3'>
                            <h5>HTML/CSS</h5>
                            <ProgressBar now={90} label="90%" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='skill-image text-center'>
                            <img src={skillImage} className="img-fluid" alt="skillImage" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;