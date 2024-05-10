import React from 'react'
import Form from '../form/page'
import Detailform from '../detailform'


import Galleryslider from '../galleryslider/Galleryslider';
function Construction() {
    const images = [
        'https://www.easihome.in/assets/img/homeideas/5.jpg',
        'https://www.easihome.in/assets/img/homeideas/6.jpg',
        'https://www.easihome.in/assets/img/homeideas/6.jpg',
    ];

    return (
        <div>
            <div className="hero hero-img1">
                <div className="hero-content ">
                    <div className="banner-quote">
                        <p className='p1' style={{ color: 'yellow' }}>UPTO 18% OFF</p>
                        <p className='p2' style={{ color: 'blueviolet' }}>Tech-enable Construction</p>
                        <p className='p3' style={{ color: 'green' }}>100% Hassle Free</p>
                    </div>
                    <Detailform />
                </div>
            </div>

            <div className='abt-head'> <h1>Home Ideas</h1>
                <div className="sym-home icon-size"></div>
            </div>

            <div className="Construct-gallery">
                <div className="pic pic1"></div>
                <div className="pic pic2"> </div>
                <div className=" pic pic3"></div>

            </div>
            <div className="gallery-container">
                <Galleryslider images={images} />
            </div>


            <div className='abt-head'> <h1>Our Packages</h1>

                <div className="sym-about"></div>
                <div className='mx'>Find the best home construction packages.*</div>
            </div>

            <div class="construct-package">
                <div >
                    <div className='list-heading'>
                        <h2>Basic package</h2>
                        <p><strike>1700/Sqft</strike></p>
                        <p>UPTO 18% OFF</p>
                        <p >1399/Sqft</p>
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
                <div >
                    <div className='list-heading'>
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
                <div >
                    <div className='list-heading'>
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
                    <div className="img1 img"></div>

                    <div className="anchor-wrap">
                        <a href="#">Highest Quality Standard</a>
                    </div>
                    <div className="para-wrap">
                        <p>Customer satisfaction is our main priority. we are not going to Compromise with quality to achieve the highest quality standard we have experienced team of architects, Project engineers, site Engineers, quality control Engineers, Professional Contractors skilled labour along with this we also ensure the use of branded materials for projects</p>
                    </div>
                </div>

                <div className="quality">
                    <div className="img2 img"></div>
                    <div className="anchor-wrap">
                        <a href="#">Hassle Free Experience</a>
                    </div>
                    <div className='para-wrap'><p>Whole process is tech enable from plan approval to site handover. Customer's need not to visit on site they can monitor their project through our E-Monitoring services. Project progress report, images, videos can be seen in our E-Monitoring app.</p></div>
                </div>


                <div className="quality">
                    <div className="img3 img"></div>
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