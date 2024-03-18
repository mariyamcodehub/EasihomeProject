import React from 'react'
import './Cancellation.css'

function HeadingWithDynamicList(props) {
    return (
        <>
            <section>
                <div className="term-all">
                    <h4>{props.heading}</h4>
                    <p>{props.headingFour}</p>
                    <ul className='term-list'>
                        {props.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

const Cancellation = () => {

    const heading1 = "Cancellation Policy & Refund";
    const items1 = ["Easihome connects the customer with service providers in the construction Industry (individually, a 'SP'). We endeavour to help customers discover and select an SP based on characteristics that matter most to them.", "Easihome takes pride in the process of providing transparent and trustful construction services. Tremendous amounts of efforts are being put by Easihome in understanding the customer's requirement and/or providing designs and other documents/details.", "In the unlikely event that the customer decides to cancel the project after paying any portion of the booking amount, the customer shall inform Easihome (from the e-mail address provided to Easihome) in writing, vide an e-mail to info@easihome.in (or such other e-mail address provided from time to time) or registered post with acknowledgement due, mentioning the reason(s) for cancelation. Easihome on receipt of such e-mail or registered post, shall proceed to examine the cancellation on a case-to-case basis and shall follow the following principles in terms of cancellation."]

    const headingFour = "For any cancellations subsequent to payment of the booking amount, Easihome shall be entitled to collect 1.5% of the total project value* excluding applicable taxes from the customer. Any cancellations subsequent to allocation or appointment of a contractor will be deducted per actual cost borne by the contractor and Easihome."
    const items2 = ["In the event the costs incurred by Easihome for the afore-mentioned services exceeds the amounts paid by the customer, the customer shall be liable to pay such excess to Easihome or to such other persons as referred by Easihome, In writing, 15 (fifteen) working days of Easihome issuing a written notice informing of the same.", "Easihome shall transfer the refund amount, if any, payable to the customer after making suitable deductions and adjustments by Easihome in the manner as provided for above, to the bank account provided by the customer, within 30 (thirty) business days from the date Easihome and the customer mutually agree on the final value of the refund amounts."]

    return (
        <div className='cancellation-container' >
            <h1 >Cancellation Policy</h1>
            <HeadingWithDynamicList heading={heading1} items={items1} />
            <HeadingWithDynamicList headingFour={headingFour} items={items2} />
        </div>
    )
}

export default Cancellation