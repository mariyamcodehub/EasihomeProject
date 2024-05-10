import React from 'react'

import Map from '../Map';
import { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add your logic here to handle form submission.. 
        console.log(formData);
    };

    return (
        <>
            <div className="info-section">
                <div className="contact-container">
                    <h2>CONTACT US</h2>
                    <p>Are you intrested in building your dream home or renovation, interior, painting services & purchase of building materials Contact us.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-con">
                            <div className='contact-form'>

                                <input
                                    placeholder='Name'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='contact-form'>

                                <input
                                    placeholder='Your email'
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-con">
                            <div className='contact-form'>

                                <input
                                    placeholder='Phone'
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='contact-form'>

                                <input
                                    placeholder='subject'
                                    type="subject"
                                    id="subject"
                                    name="subject"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='contact-form'>

                            <textarea
                                placeholder='Message'
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className='form-btn' type="submit">Send us</button>
                    </form>
                </div>

                <div className="info-right">
                    <h2>INFORMATION</h2>
                    <div className="info-address">
                        <div className="location">
                            <div className="ico"></div>
                            <p style={{ fontSize: 12 }}>
                                LEVANA CYBER HEIGHTS, 2nd FLOOR VIBHUTI KHAND, GOMATI NAGAR LUCKNOW, U.P. 226010</p>
                        </div>
                        <div className="call">
                            <div className="ico2"></div>
                            <p style={{ fontSize: 12 }}>CALL US : +91 894 894 5757</p>
                        </div>
                        <div className="email">
                            <div className="ico3"></div>
                            <p style={{ fontSize: 12 }}>EMAIL : care@easihome.in</p>
                        </div>
                    </div>
                    <div className="info-map">
                        <Map />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;