import React from 'react'
import "./footer.css"
const footer = () => {
    return (
        <div className='Container-footer'>
            <div className="row-footer">
                <div className="Address">
                    <h4>Address</h4>
                    <p> LEVANA CYBER HEIGHTS, 2nd FLOOR VIBHUTI KHAND, GOMTI NAGAR LUCKNOW, U.P. 226010</p>
                    <p>CALL US : +91 894 894 5757</p>
                    <p>EMAIL : care@easihome.in</p>
                </div>
                <div className="Sitemap">
                    <h4>Site map</h4>
                    <p><a href="#">How It Works</a></p>
                    <p><a href="/Form">Construction Cost Estimater</a></p>
                    <p><a href="/Formpain">Painting Cost Estimator</a></p>
                    <p><a href="/Constructionpayment">Construction Payment schedule</a></p>
                    <p><a href="/Aboutus">About Us</a></p>
                    <p><a href="#">Blogs and Articles</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="/Contact">Contact Us</a></p>
                </div>
                <div className="Others">
                    <h4>Others</h4>
                    <p><a href="/Join">Join Us as a Professional</a></p>
                    <p><a href="/Refer">Refer a Friend</a></p>
                    <p><a href="/Form">Cost Estimator</a></p>
                </div>
                <div className="Information">
                    <h4>Information</h4>
                    <p><a href="/Termspage">Terms and Condition</a></p>
                    <p><a href="/Privacy">Privacy policy</a></p>
                    <p><a href="/Faqpage">FAQ</a></p>
                    <p><a href="/Cancellation">Cancellation Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default footer