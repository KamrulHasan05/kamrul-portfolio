import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ue4qjdj', 'contact_form', form.current, 'RbaPsj2MJdNQAfgP1')
            .then((result) => {
                if (result.text === "OK") {
                    setSuccess("successful")
                }
            }, (error) => {
                if (error.text) {
                    setSuccess("error, try again please or send email to mdkamrulhasan.du@gmail.com")
                }
            });
        e.target.reset();

    };

    return (
        <section id='#contact'>
            <div className="container my-5">
                <div className="d-flex flex-column align-items-center mb-3">
                    <h2 className="fw-bold text-center heading mb-0">Contact me</h2>
                    <hr className='mt-2 mb-4' />
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className='myEmailForm' ref={form} onSubmit={sendEmail}>
                            <label className='h6 fw-bold text-center  '>Your Name</label>
                            <input required type="text" className='mb-3' name="user_name" />
                            <label className='h6 fw-bold text-center  '>Your Email</label>
                            <input required type="email" className='mb-3' name="user_email" />
                            <label className='h6 fw-bold text-center  '>Message</label>
                            <textarea required name="message" className='mb-3' />
                            <button className='btn submit-btn w-md-25 w-50 mt-3 mx-auto' type="submit">Send</button>
                        </form>
                        <h6 className='text-success text-center mb-0'>{success}</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;