import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Referform.css'

const Referform = () => {

    const referValidationSchema = Yup.object().shape({
        name: Yup.string().required('name is Required'),
        email: Yup.string().required('Email is Required').email('Email is invalid'),
        phone: Yup.string().required('phone is Required')

    });
    const referForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },

        validationSchema: referValidationSchema
    });
    return (

        <div className='F-container'>
            <h1 >Become Referral Partner</h1>
            <div style={{ height: '10vh', paddingLeft: 20 }} ><h3 style={{ fontWeight: 400 }}>Enter Your Details</h3></div>
            <form onSubmit={referForm.handleSubmit}>
                <div className="main-container">
                    <div class="form-referal">

                        <input
                            type="text"
                            id="name"
                            onChange={referForm.handleChange}
                            value={referForm.values.email}
                            class="form-control"
                            placeholder="Your Name"
                        />
                        {
                            referForm.touched.name &&
                            <small class="text-danger">{referForm.errors.name}</small>
                        }

                    </div>
                    <div class="form-referal">

                        <input
                            type="text"
                            id="phone"
                            onChange={referForm.handleChange}
                            value={referForm.values.phone}
                            class="form-control"
                            placeholder="Your Phone"
                        />
                        {
                            referForm.touched.phone &&
                            <small class="text-danger">{referForm.errors.phone}</small>
                        }

                    </div>
                </div>
                <div className="main-container">
                    <div class="form-referal">

                        <input
                            type="text"
                            id="email"
                            onChange={referForm.handleChange}
                            value={referForm.values.email}
                            class="form-control"
                            placeholder="Your Email"
                        />
                        {
                            referForm.touched.email &&
                            <small class="text-danger">{referForm.errors.email}</small>
                        }

                    </div>
                </div>
            </form>
            <div style={{ height: '10vh', paddingLeft: 20, marginTop: 40 }} ><h3 style={{ fontWeight: 400 }}>Enter Your Friend/Relative Details</h3></div>
            <form onSubmit={referForm.handleSubmit}>
                <div className="main-container">
                    <div class="form-referal">

                        <input
                            type="text"
                            id="name"
                            onChange={referForm.handleChange}
                            value={referForm.values.email}
                            class="form-control"
                            placeholder="Name*"
                        />
                        {
                            referForm.touched.name &&
                            <small class="text-danger">{referForm.errors.name}</small>
                        }

                    </div>
                    <div class="form-referal">

                        <input
                            type="text"
                            id="phone"
                            onChange={referForm.handleChange}
                            value={referForm.values.phone}
                            class="form-control"
                            placeholder="Phone*"
                        />
                        {
                            referForm.touched.phone &&
                            <small class="text-danger">{referForm.errors.phone}</small>
                        }

                    </div>
                </div>
                <div className="main-container" style={{ justifyContent: 'space-between' }}>
                    <div class="form-referal">

                        <input
                            type="text"
                            id="email"
                            onChange={referForm.handleChange}
                            value={referForm.values.email}
                            class="form-control"
                            placeholder="Email*"
                        />
                        {
                            referForm.touched.email &&
                            <small class="text-danger">{referForm.errors.email}</small>
                        }

                    </div>
                    <div className="referbtn-div">
                        <button
                            type="submit"
                            className="btn size">
                            Send Us
                        </button>
                    </div>
                </div>

            </form>

        </div>

    );
}

export default Referform