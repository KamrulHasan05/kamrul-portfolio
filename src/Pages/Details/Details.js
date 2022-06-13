import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { projectId } = useParams()
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const singleItem = details.find(details => parseInt(details.key) === parseInt(projectId));
    const bgImg = {
        backgroundImage: `url('${singleItem?.img2}')`,
        height: '500px',
    }

    return (
        <section>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="screenshot" style={bgImg}></div>
                        <div className="mbl-img-div">
                            <img src={singleItem?.img2} alt="" className="img-fluid mbl-img rounded-3" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="fw-bold my-3 title-color">{singleItem?.name}</h1>
                        <hr />
                        <h5 className="fw-bold subTitle-color">Project Details</h5>
                        <p className="fs-5 subTitle-color">{singleItem?.details}</p>
                        <p className="fs-5 subTitle-color"><i className="fas fa-chevron-circle-right"></i> {singleItem?.feature1}</p>
                        <p className="fs-5 subTitle-color"><i className="fas fa-chevron-circle-right"></i> {singleItem?.feature2}</p>
                        <p className="fs-5 subTitle-color"><i className="fas fa-chevron-circle-right"></i> {singleItem?.feature3}</p>
                        <p className="fs-5 subTitle-color"><span className="fw-bold">Technology:</span> {singleItem?.technology}</p>
                        {
                            singleItem?.server ?
                                <div className=" d-flex mt-5 justify-content-center justify-content-md-start">
                                    <a rel="noreferrer" href={singleItem?.url} target="_blank" className="btn me-2 submit-btn"><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Live</a>

                                    <a rel="noreferrer" href={singleItem?.server} target="_blank" className="btn me-2 submit-btn"><i className="fab fa-github-square me-2"></i>Server</a>

                                    <a rel="noreferrer" href={singleItem?.client} target="_blank" className="btn submit-btn"><i className="fab fa-github-square me-2"></i>Client</a>
                                </div>
                                :
                                <div className=" d-flex mt-5 justify-content-center justify-content-md-start">
                                    <a rel="noreferrer" href={singleItem?.url} target="_blank" className="btn me-2 submit-btn"><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Live</a>

                                    <a rel="noreferrer" href={singleItem?.client} target="_blank" className="btn submit-btn"><i className="fab fa-github-square me-2"></i>Client</a>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;