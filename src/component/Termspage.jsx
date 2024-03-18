import React from 'react'
import './Termspage.css'

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


const Termspage = () => {
    const heading1 = "Benefits For Referrer (Person Who is referring)";
    const items1 = ["Referrer can get a cashback of 1% of the project after the succesfull conversion of project.", "For the project other than Home Construction like renovation, interior, painting cashback upto 25,000/- as per the work cost."];

    const heading2 = "Benefits for refree";
    const items2 = ["Get flat upto 10% of on your modular kitchen or interior services"];

    const heading3 = "Others";
    const items3 = ["Easihome reserve the right to modify the offer without prior information to public.", "Easihome reserve the right to interpret the offering in case of ambiguity.", "By using the services, you agree that you have read understand and are bound by these terms"]

    const heading4 = "1. Services";
    const headingFour = "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data“). Personally identifiable information may include, but is not limited to:"
    const items4 = ["Easihome connects customers and nearest onboards service providers of all types (individually, a 'SP').", "Easihome will act as an project supervisor and assist the customer to get the project completed as per the agreement. Once the contract has been executed between the customer Easihome and the SP, and a copy is submitted to Easihome and the project has commenced easihome will provide e-monitoring services to monitor the project on daily basis on the app.", "Invoice will be directly raised by Easihome after the completion of each stages.", "Customer have to pay the bill with in a weak after the issue date otherwise delay may hamper the project progress."]

    const heading5 = "2. Indemnity";
    const items5 = ["You shall indemnify, defend at Our option, and hold Us, our parent companies, subsidiaries, affiliates, and their officers, associates successors, assigns, licensors, employees, directors, agents, and representatives, harmless from and against any claim, demand, lawsuits, judicial proceeding, losses, liabilities, damages and costs (including, without limitation, from all damages, liabilities, settlements, costs and attorneys fees) due to or arising out of your access to the Services, use of the Services, violation of these Terms or any infringement by any third party who may use your account with Us, of these Terms."]

    const heading6 = "4. Modification";
    const items6 = ["Easihome reserves the right at any time to add, modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without cause. We shall not be liable for any such addition, modification, suspension or discontinuation of the Services."]

    const heading7 = "5. Compliance With Applicable Laws And Regulations";
    const items7 = ["Compliance with Applicable Laws and Regulations - You agree to comply with all central, state, and local laws, rules, and regulations related to or connected with use of the Services, and you assume all liability and responsibility for your use of the Services. If Easihome reasonably determines that you are not in compliance with applicable laws in your use of the Services, we reserve the right to immediately suspend or terminate your use of the Services, and you will be solely responsible for any penalties and other sanctions for legal noncompliance.", "Possible Suspension or Termination of Service for Non-Compliance - If, for any reason, Easihome reasonably believes that your use of the Services is violating central, state, and/or local rules or regulations, or is harassing to consumers or businesses, Easihome may suspend its Service to prevent further calling of those numbers through its Service. In addition, Easihome may review your Service settings."]

    const heading8 = "6. Jurisdiction, Governing Laws, And Dispute Resolution";
    const items8 = ["These Terms shall be governed by and construed and enforced in accordance with the laws of India. Subject to other provisions in this Clause, courts in Lucknow shall have exclusive jurisdiction over all issues arising out of these Terms or the use of the Services.", "Any controversies, conflicts, disputes, or differences arising out of these Terms shall be resolved by arbitration in Lucknow in accordance with the Arbitration and Conciliation Act, 1996 for the time being in force, which is deemed to be incorporated by reference in this Clause. The tribunal shall consist of 1 (one) arbitrator appointed by Easihome. The language of the arbitration shall be English.", "The parties to the arbitration shall keep the arbitration confidential and not disclose to any person, other than on a need to basis or to legal advisors, unless required to do so by law. The decision of the arbitrator shall be final and binding on all the Parties hereto.", "Each party to the arbitration shall bear its own costs with respect to any dispute."]

    const heading9 = "7. Miscellaneous Provisions";
    const items9 = ["Modification - Easihome reserves the right at any time to modify these Terms and to add new or additional terms or conditions on use of the Services. Such modifications and additional terms and conditions will be communicated to you and, unless expressly rejected (in which these Terms shall terminate), will be effective immediately and will be incorporated into these Terms. In the event you refuse to accept such changes, these Terms will terminate.", "Severability - If any provision of these Terms is determined by any court or other competent authority to be unlawful or unenforceable, the other provisions of these Terms will continue in effect. If any unlawful or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect (unless that would contradict the clear intention of the clause, in which case the entirety of the relevant provision will be deemed to be deleted).", "Assignment - You shall not license, sell, transfer or assign your rights, obligations, or covenants under these Terms in any manner without Our prior written consent. We may grant or withhold this consent in its sole discretion and subject to any conditions it deems appropriate. We may assign its rights to any of its affiliates, subsidiaries, or parent companies, or to any successor in interest of any business associated with the Services without any prior notice to you.", "Notices - All notices, requests, demands, and determinations for Easihome under these Terms (other than routine operational communications) shall be sent to info@easihome.in If you have questions on these Terms, please contact us by email at info@Easihome.in", "Third Party Rights - No third party shall have any rights to enforce any terms contained herein.", "Force Majeure - No third party shall have any rights to enforce any terms contained herein.", "Entire Agreement - These Terms constitute the entire agreement between You and Easihome concerning the Services and supersede all prior or contemporaneous communications of any kind between You and Easihome with respect to the Services.", "Waiver - No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such term or any other term, and Easihome's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.", "Attorney Fees - If the Easihome Parties take legal action against you as a result of your violation of these Terms, the Easihome Parties will be entitled to recover from you, and you agree to pay, all reasonable attorneys' fees and costs of such action, in addition to any other relief granted to the Easihome Parties."]


    return (
        <>
            <div className="terms-page">
                <h1>Terms & Conditions</h1>
                <h5>Refer your friends and family and win exciting cashback and rewards!</h5>
                <HeadingWithDynamicList heading={heading1} items={items1} />
                <HeadingWithDynamicList heading={heading2} items={items2} />
                <HeadingWithDynamicList heading={heading3} items={items3} />
                <HeadingWithDynamicList heading={heading4} headingFour={headingFour} items={items4} />
                <HeadingWithDynamicList heading={heading5} items={items5} />
                <HeadingWithDynamicList heading={heading6} items={items6} />
                <HeadingWithDynamicList heading={heading7} items={items7} />
                <HeadingWithDynamicList heading={heading8} items={items8} />
                <HeadingWithDynamicList heading={heading9} items={items9} />


            </div>
        </>
    )
}

export default Termspage