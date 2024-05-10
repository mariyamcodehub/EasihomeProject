import React from 'react'
import Faq from '../faq/Faq'


function Aboutus() {
    return (
        <>
            <div className="about-container">
                <h1>About Us</h1>

            </div>

            <div className="sec-about">
                <h2>About</h2>
                <p>Easihome is a one to end solution for construction services ranging from home construction Renovation, Interior, Painting, material financing & purchase building material professionally and conveniently</p>
                <p>Our goal is to become India's largest organised marketplace for construction services. we have experienced team of architects, interior designers, civil Engineer, Project manager and Relationship manager.Our strong technological team will make the whole process convenient and hassle free for Customer from booking, design phase documentation, Project execution, quality checks payment flow and final hand over.</p>
                <div className="boxabout">
                    <h2>Mission</h2>
                    <p>To simplify the construction services using technology as well as putting it in organised frame.</p>
                </div>
            </div>


            <div className='abt-head'> <h1>Our Promises</h1>
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
                    <div className="para-wrap"><p>Whole process is tech enable from plan approval to site handover. Customer's need not to visit on site they can monitor their project through our E-Monitoring services. Project progress report, images, videos can be seen in our E-Monitoring app.</p></div>
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
            <div className="parallex">
                <div className="count-wrap">
                    <div className='num-wrap'><p>Project Completed</p></div>
                    <div className='num-wrap2'><p>Quality Checks</p></div>
                    <div className='num-wrap3'><p>Safe Payment</p></div>
                </div>
            </div>


            <div className="faq">
                <h2>FAQs</h2>

                <Faq />

            </div>

        </>
    )
}

export default Aboutus