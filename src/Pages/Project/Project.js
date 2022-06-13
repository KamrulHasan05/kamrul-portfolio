import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const { img, name, details, key, url } = props.project;
    return (
        <Col>
            {!props.project ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
                :
                <div className="image">
                    <img className="image__img" src={img} alt="website" />
                    <div className="image__overlay image__overlay--primary">
                        <h3 className="title-color fw-bold">{name}</h3>
                        <p className="subTitle-color">
                            {details}
                        </p>
                        <div className='d-flex'>
                            <Link className='btn project_btn' to={`/details/${key}`}>Details</Link >
                            <a rel="noreferrer" className='btn project_btn ms-3' href={url} target="_blank">Live <i className="fa-solid fa-arrow-up-right-from-square"></i></a >
                        </div>
                    </div>
                </div>}
        </Col >
    );
};

export default Project;