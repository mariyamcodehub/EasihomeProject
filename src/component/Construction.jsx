import React from 'react'
import "./Construction.css"
import Form from './Form';

import Galleryslider from './Galleryslider';
function Construction() {
    const images = [
        'https://www.easihome.in/assets/img/homeideas/5.jpg',
        'https://www.easihome.in/assets/img/homeideas/6.jpg',
        'https://www.easihome.in/assets/img/homeideas/6.jpg',
    ];

    return (
        <div>
            <div className="Construction-banner">
                <div className="construction-quote">
                    <p className='p1'>UPTO 18% OFF</p>
                    <p className='p2'>Tech-enable Construction</p>
                    <p className='p3'>100% Hassle Free</p>
                </div>
                <div className="form-consultation">
                    <div className="consult-form-container">
                        <div className='f-h2'>Book a Free Consultation</div>
                        <form id="userForm">
                            <div className="consult-form">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="consult-form">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="consult-form">
                                <label htmlFor="contact">Contact:</label>
                                <input type="text" id="contact" name="contact" />
                            </div>
                            <div className="consult-form">
                                <label htmlFor="city">City</label>
                                <select id="city" name="city" className="select-dropdown">
                                    <option value="normal">Lucknow</option>
                                </select>
                            </div>
                            <div className="consult-form">
                                <label htmlFor="userType">Work</label>
                                <select id="userType" name="userType" className="select-dropdown">
                                    <option value="normal">Construction</option>
                                    <option value="normal">Renovation</option>
                                    <option value="normal">Interior Design</option>
                                    <option value="normal">Painting</option>
                                    <option value="normal">Material Financing</option>
                                </select>
                            </div>
                            <div className="button"><input type="button" value="submit" /></div>
                        </form>
                    </div>
                </div>

            </div>

            <div className='abt-head'> <h1>Home Ideas</h1>
                <div className="sym-construction "></div>
            </div>

            <div className="Construct-gallery">


                <div className="pic pic1"></div>


                <div className="pic pic2">
                </div>

                <div className=" pic pic3">
                </div>

            </div>
            <div className="gallery-container">
                <Galleryslider images={images} />
            </div>


            <div className='abt-head'> <h1>Our Packages</h1>

                <div className="sym-about"></div>
                <div className='mx'>Find the best home construction packages.*</div>
            </div>

            <div class="construct-package">
                <div className="package-one">
                    <div className="basic">
                        <h2>Basic package</h2>
                        <p><strike>1700/Sqft</strike></p>
                        <p>UPTO 18% OFF</p>
                        <p>1399/Sqft</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Designs & Drawings</li>
                            <li>Structure</li>
                            <li>Kitchen</li>
                            <li>Bathroom</li>
                            <li>Doors & Windows</li>
                            <li>Painting</li>
                            <li>Flooring</li>
                            <li>Painting</li>
                            <li>Miscellaneous</li>
                        </ul>
                    </div>
                </div>
                <div className="package-one">
                    <div className="basic">
                        <h2>Premium Package</h2>
                        <p><strike>1999/Sqft</strike></p>
                        <p>UPTO 18% OFF</p>
                        <p>1649/Sqft</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Designs & Drawings</li>
                            <li>Structure</li>
                            <li>Kitchen</li>
                            <li>Bathroom</li>
                            <li>Doors & Windows</li>
                            <li>Painting</li>
                            <li>Flooring</li>
                            <li>Painting</li>
                            <li>Miscellaneous</li>
                        </ul>
                    </div>
                </div>
                <div className="package-one">
                    <div className="basic">
                        <h2>Luxury Package</h2>
                        <p><strike>2900/Sqft</strike></p>
                        <p>UPTO 18% OFF</p>
                        <p>2349/Sqft</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Designs & Drawings</li>
                            <li>Structure</li>
                            <li>Kitchen</li>
                            <li>Bathroom</li>
                            <li>Doors & Windows</li>
                            <li>Painting</li>
                            <li>Flooring</li>
                            <li>Painting</li>
                            <li>Miscellaneous</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='abt-head'> <h1>Custom Packages</h1>
                <div className="gift-wrap "></div>
            </div>
            <div className="banner-bottom">
                <div className="banner-image"></div>
            </div>
            <Form />

            <div className='abt-head'> <h1>Our promises</h1>
                <div className="sym-about"></div>
            </div>

            <div className="icon-wrap">

                <div className="quality">
                    <div className="img1"></div>

                    <div className="anchor-wrap">
                        <a href="#">Highest Quality Standard</a>
                    </div>
                    <div className="para-wrap">
                        <p>Customer satisfaction is our main priority. we are not going to Compromise with quality to achieve the highest quality standard we have experienced team of architects, Project engineers, site Engineers, quality control Engineers, Professional Contractors skilled labour along with this we also ensure the use of branded materials for projects</p>
                    </div>
                </div>

                <div className="Experience">
                    <div className="img2"></div>
                    <div className="anchor-wrap">
                        <a href="#">Hassle Free Experience</a>
                    </div>
                    <div className='para-wrap'><p>Whole process is tech enable from plan approval to site handover. Customer's need not to visit on site they can monitor their project through our E-Monitoring services. Project progress report, images, videos can be seen in our E-Monitoring app.</p></div>
                </div>


                <div className="Completion">
                    <div className="img3"></div>
                    <div className="anchor-wrap">
                        <a href="#">On Time Completion</a>
                    </div>
                    <div className="para-wrap">
                        <p>We are commited to complete the project on time. E-Monitoring of Projects help us to ensure the clients. Compensation will be given to the client on delay of the projects.</p></div>
                </div>



            </div>

        </div>
    )
}

export default Construction;