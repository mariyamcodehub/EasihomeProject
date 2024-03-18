import React from 'react';
import './Join.css'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select className='select' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};


const Join = () => {
    return (
        <>
            <div className="join-form">
                <h1>Join us as a professional</h1>
                <p>Work with us as architect, Interior Designer or contractor.</p>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        acceptedTerms: false, // added for our checkbox
                        city: '', // added for our select
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        phone: Yup.string()
                            .min(10, 'Must be 10 number')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        acceptedTerms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                        city: Yup.string()
                            .oneOf(
                                ['Lucknow', 'Kanpur', 'Varanasi', 'other'],
                                'Invalid Job Type'
                            )
                            .required('Required'),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                        resetForm()
                    }}
                >

                    <Form>
                        <div className='wrap-pro'>
                            <div className='join-pro'>
                                <label htmlFor="">Name</label>

                                <MyTextInput

                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div className='join-pro'>
                                <label htmlFor="">Phone</label>

                                <MyTextInput

                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                />
                            </div>
                        </div>
                        <div className='wrap-pro'>
                            <div className='join-pro'>
                                <label htmlFor="">Email Address</label>
                                <MyTextInput

                                    name="email"
                                    type="email"
                                    placeholder="jane@formik.com"
                                />
                            </div>
                            <div className='join-pro'>
                                <label htmlFor="">City</label>
                                <MySelect type="select" name="city">
                                    <option value="">Select your city</option>
                                    <option value="Lucknow">Lucknow</option>
                                    <option value="Kanpur">Kanpur</option>
                                    <option value="Varanasi">Varanasi</option>
                                    <option value="other">Other</option>
                                </MySelect>
                            </div>
                        </div>
                        <div className='dabba'>
                            <MyCheckbox name="acceptedTerms">
                                I accept the terms and conditions
                            </MyCheckbox>

                            <button type="submit" className='btn fix-width'>Submit</button>
                        </div>
                    </Form>

                </Formik>
            </div>
        </>
    );
};

export default Join;