import React from 'react'
import './Refer.css'
import { useState } from 'react'
import Referform from './Referform'
const Refer = () => {

    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };
    return (
        <div>
            <div className="refer-container">
                <h1>How to become referral partner</h1>
                <p>Just follow these easy steps and earn via successful referrals today !</p>
                <div className="refer-card">
                    <div className="card-refer">
                        <div className="refer-img img1"></div>
                        <h4>Fill The Details</h4>
                        <p>Fill in the details of yourself and your references.</p>
                    </div>
                    <div className="card-refer">
                        <div className="refer-img img2"></div>
                        <h4>Friends, Family raises the request</h4>
                        <p>They raise a request with us.</p>
                    </div>

                </div>
                <div className='last-card'>
                    <div className="card-last">
                        <div className="refer-img img3"></div>
                        <h4>Successful Referral</h4>
                        <p>your referee starts a project with us and you earn cashback upto Rs.25,000/-</p>
                    </div>
                    <button type='button' className='block' onClick={toggleComponent}>
                        {showComponent ? 'BECOME A REFERAL PARTNER' : 'BECOME A REFERAL PARTNER'}
                    </button>
                </div>



                {showComponent && <Referform />}



            </div>


        </div>
    )
}

export default Refer;