import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from '../../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <section className='projects'>
            <div className="container my-3">
                <div className="d-flex flex-column align-items-center mb-3">
                    <h2 className="fw-bold text-center text-white heading mb-0">My Projects</h2>
                    <hr className='bg-white mt-2' />
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project => <Project
                            key={project.key}
                            project={project}
                        ></Project>)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Projects;