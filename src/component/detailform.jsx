
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const detailform = () => {

    const detailsValidationSchema = Yup.object().shape({
        email: Yup.string().email('email is invalid').required('email is required'),
        name: Yup.string().required('name is required'),

    })

    const detailForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            city: '',
            work: ''
        },
        onSubmit: async (values, { resetForm }) => {


            setTimeout(() => {
                console.log(values);
                resetForm();
            }, 2000)

        },
        validationSchema: detailsValidationSchema
    })
    return (
        <>
            <div className='form-card'>

                <div className='card-wrap'>
                    <h2>Book a Free Consultation</h2>
                    <form onSubmit={detailForm.handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="name" placeholder="Name" id='name' className="input input-bordered" onChange={detailForm.handleChange} value={detailForm.values.name} />
                            {
                                detailForm.touched.name &&
                                <small className="text-red-500">{detailForm.errors.name}</small>
                            }

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" id="email"
                                onChange={detailForm.handleChange}
                                value={detailForm.values.email} required />
                            {
                                detailForm.touched.email &&
                                <small className="text-red-500">{detailForm.errors.email}</small>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Contact</span>
                            </label>
                            <input type="phone" placeholder="Contact" className="input input-bordered" id="phone"
                                onChange={detailForm.handleChange}
                                value={detailForm.values.phone} required />
                            {
                                detailForm.touched.phone &&
                                <small className="text-red-500">{detailForm.errors.phone}</small>
                            }
                        </div>
                        <div className="form-control">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">City</span>
                                </label>
                                <input type="city" placeholder="City" className="input input-bordered" id='city' onChange={detailForm.handleChange}
                                    value={detailForm.values.city} required />
                                {
                                    detailForm.touched.city &&
                                    <small className="text-red-500">{detailForm.errors.city}</small>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Work</span>
                                </label>
                                <select name="work" id="work" className='input input-bordered'>
                                    <option value="normal">Construction</option>
                                    <option value="normal">Renovation</option>
                                    <option value="normal">Interior designing</option>
                                    <option value="normal">Painting</option>
                                    <option value="normal">Material Financing</option>
                                </select>
                            </div>
                            <button disabled={detailForm.isSubmitting} type='submit' className="btn btn-con">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default detailform