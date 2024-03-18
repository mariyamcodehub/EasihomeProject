import React from 'react'
import "./Interior.css"
import Galleryslider from './Galleryslider';
const Interior = () => {

    const images = [
        'https://www.easihome.in/assets/img/interior%20ideas/9.jpg',
        'https://www.easihome.in/assets/img/interior%20ideas/10.jpg',
        'https://www.easihome.in/assets/img/interior%20ideas/1.jpg',
    ];
    return (
        <div>
            <div className="Interior-banner">
                <div className="interior-quote">
                    <p className='p1'>UPTO 12% OFF</p>
                    <p className='p2'>Creating excellent </p>
                    <p className='p3'>Interior</p>
                    <p className='p4'>100% Hassle - Free and managed by us!</p>
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
            <div className='abt-head'> <h1>Interior Ideas</h1>
                <div className="sym-construction"></div>
            </div>
            <div className="Construct-gallery">
                <div className="pic pic7"></div>
                <div className=" pic pic8"></div>
                <div className="pic pic9"></div>
            </div>
            <div className="gallery-container">
                <Galleryslider images={images} />
            </div>

            <div className='abt-head'> <h1>Our Packages</h1>

                <div className="sym-about"></div>
                <div className='mx'>Find the best home Interior packages.*</div>
            </div>
            <div class="Interior-package">
                <div className="package-Int">
                    <div className="basic-interior">
                        <h2>Basic package</h2>
                        <p>UPTO 12% OFF</p>
                        <p>2BHK- <strike> 4.1 Lakhs</strike> 3.6 Lakhs</p>
                        <p>3BHK- <strike> 4.2 Lakhs</strike> 3.8 Lakhs</p>
                        <p>4BHK- <strike> 5.7 Lakhs</strike> 5.03 Lakhs</p>

                    </div>
                    <div className="list-interior">
                        <ul>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/1.png" width="23px" alt="" /> Kitchen</li>
                            <li> <img src="https://www.easihome.in/assets/img/interior%20plan/3.png" width="23px" alt="" /> Wardrobes 1 and 2</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/2.png" width="23px" alt="" /> Living Room/Family living</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/4.png" width="23px" alt="" /> Shoe Rack /study unit</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/5.png" width="23px" alt="" /> Crockery unit</li>
                            <li><img src="	https://www.easihome.in/assets/img/interior%20plan/6.png" width="23px" alt="" /> False ceiling</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/7.png" width="23px" alt="" /> Study unit</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/8.png" width="23px" alt="" /> Vanity unit</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/9.png" width="23px" alt="" /> Miscellaneous</li>
                        </ul>
                    </div>
                </div>
                <div className="package-Int">
                    <div className="basic-interior">
                        <h2>Premium Package</h2>
                        <p>UPTO 12% OFF</p>
                        <p>2BHK- <strike> 4.8 Lakhs</strike> 4.3 Lakhs</p>
                        <p>3BHK- <strike> 5.9 Lakhs</strike> 5.22 Lakhs</p>
                        <p>4BHK- <strike> 7.2 Lakhs</strike> 6.3 Lakhs</p>
                    </div>
                    <div className="list-interior">
                        <ul>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/1.png" width="23px" alt="" /> Kitchen</li>
                            <li> <img src="https://www.easihome.in/assets/img/interior%20plan/3.png" width="23px" alt="" /> Wardrobes 1 and 2</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/2.png" width="23px" alt="" /> Living Room/Family living</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/4.png" width="23px" alt="" /> Shoe Rack /study unit</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/5.png" width="23px" alt="" /> Crockery unit</li>
                            <li><img src="	https://www.easihome.in/assets/img/interior%20plan/6.png" width="23px" alt="" /> False ceiling</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/7.png" width="23px" alt="" /> Study unit</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/8.png" width="23px" alt="" /> Vanity unit</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/9.png" width="23px" alt="" /> Miscellaneous</li>
                        </ul>
                    </div>
                </div>
                <div className="package-Int">
                    <div className="basic-interior">
                        <h2>Luxury Package</h2>
                        <p>UPTO 12% OFF</p>
                        <p>2BHK- <strike> 8.3 Lakhs</strike> 7.3 Lakhs</p>
                        <p>3BHK- <strike> 9.8 Lakhs</strike> 8.6 Lakhs</p>
                        <p>4BHK- <strike> 11.3 Lakhs</strike> 9.9 Lakhs</p>
                    </div>
                    <div className="list-interior">
                        <ul>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/1.png" width="23px" alt="" /> Kitchen</li>
                            <li> <img src="https://www.easihome.in/assets/img/interior%20plan/3.png" width="23px" alt="" /> Wardrobes 1 and 2</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/2.png" width="23px" alt="" /> Living Room/Family living</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/4.png" width="23px" alt="" /> Shoe Rack /study unit</li>
                            <li> <img src="	https://www.easihome.in/assets/img/interior%20plan/5.png" width="23px" alt="" /> Crockery unit</li>
                            <li><img src="	https://www.easihome.in/assets/img/interior%20plan/6.png" width="23px" alt="" /> False ceiling</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/7.png" width="23px" alt="" /> Study unit</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/8.png" width="23px" alt="" /> Vanity unit</li>
                            <li><img src="https://www.easihome.in/assets/img/interior%20plan/9.png" width="23px" alt="" /> Miscellaneous</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='abt-head'> <h1>Custom Package</h1>
                <div className="sym-construction"></div>
            </div>
            <div className="banner-bottom">
                <div className="banner-image"></div>
            </div>

            <div className='abt-head'> <h1>Our Promises</h1>
                <div className="sym-about "></div>
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

export default Interior