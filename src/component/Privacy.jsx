import React from 'react'
import './Privacy.css'

function HeadingWithDynamicList(props) {
    return (
        <>
            <section>
                <div className="privacy-all">
                    <h4>{props.heading}</h4>
                    <p>{props.headingFour}</p>
                    <ul className='privacy-list'>
                        {props.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

const Privacy = () => {

    const items1 = ["Narja Projects Private Limited. ('us', 'we', or 'our') operates the 'https://www.easihome.in' website (the 'Service').", "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.", "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy."];

    const heading2 = "Personal Data";
    const headingFour = "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data“). Personally identifiable information may include, but is not limited to:"
    const items2 = ["Email address", "First name and last name", "Phone number", "Cookies and Usage Data"]

    const heading3 = "Usage Data";
    const items3 = ["We may also collect information how the Service is accessed and used (“Usage Data“). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.", "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:", "Internal record keeping.",
        "We may use the information to improve our products and services.", "We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.", "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website/app according to your interests.", "To contact you via email, facsimile, phone or text message, to deliver certain services or information you have requested."]

    const heading4 = "Security Of Data"
    const items4 = ["The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."]

    const heading5 = "Service Provider"
    const items5 = ["We may employ third party companies and individuals to facilitate our Service ('Service Providers'), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.", "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."]

    const heading6 = "Email Policy";
    const items6 = ["Our affiliates and we fully comply with national laws regarding SPAM. You can always opt out of receipt of further email correspondence from us and/or our affiliates. We agree that we will not sell, rent, or trade your email address to any unaffiliated third-party without your permission."]

    const heading7 = "Changes To This Policy";
    const items7 = ["We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.", "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the 'effective date' at the top of this Privacy Policy.", "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."]
    const heading8 = "Contact";
    const items8 = ["If you have any questions about this Privacy Policy, please contact us:", "By Email : info@easihome.in"]



    return (
        <div>
            <div className="privacy-page">
                <h1>Privacy Policy</h1>
                <HeadingWithDynamicList items={items1} />
                <HeadingWithDynamicList heading={heading2} headingFour={headingFour} items={items2} />
                <HeadingWithDynamicList heading={heading3} items={items3} />
                <HeadingWithDynamicList heading={heading4} items={items4} />
                <HeadingWithDynamicList heading={heading5} items={items5} />
                <HeadingWithDynamicList heading={heading6} items={items6} />
                <HeadingWithDynamicList heading={heading7} items={items7} />
                <HeadingWithDynamicList heading={heading8} items={items8} />


            </div>
        </div>
    )
}

export default Privacy