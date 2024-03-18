import React, { useState } from 'react';
import './Faq.css'; // Make sure to have a CSS file with this name for styling

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">

            <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                <div className="faqi"></div> {question}
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                {answer}
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <>

            <div className="faq-container">


                <FAQItem question="HOW EASIHOME WORKS?" answer="If you want to construct home or Renovate home just go through our website book a free consultation. Our expert will contact you understand your requirement in detail. Share design and quotation with you. Once you approve the plan agreement will be signed. Execution begins with in seven working days." />
                <FAQItem question="WHY SHOULD ANYONE CHOOSE EASIHOME?" answer="One should choose easihome for their home construction Renovation, Interior, Painting, as well as material financing to enjoy a hassle free experience. Our team of qualified professionals take care of every thing from plan approvals to project hand over and stands for very high standard of work quality." />
                <FAQItem question="HOW WILL BE YOUR PAYMENT PROCESS?" answer="Payment Schedule will be clearly mention in the contract agreement we take a deposite of 5% as a booking amount And the rest of payments will be on stage wise on an actual works, so that client does not worry whether they are Paying more than the actual work done." />
                <FAQItem question="WHAT IS EXCLUDED FROM THE PACKAGES?" answer="Electricity and water connection or submersible boring will be charged extra." />
                <FAQItem question="DOES THE CUSTOMER HAVE TO FLLOW UP THE SITE REGULARLY?" answer="No, the client can enjoy a hassle free experience. They can monitor their project through our E-Monitoring Service." />
                <FAQItem question="APPROXIMATELY HOW LONG DOES IT TAKE TO COMPLETE CONSTRUCTION OF FLOOR?" answer="It depends upon the built up area, location design, But, generally it takes 4 months for first floor and 2 months for every floor beyond that." />
                <FAQItem question="DOES EASIHOME PROVIDE LOAN. FOR THEIR CUSTOMER?" answer="Easihome helps the clients for loan approval process. we collaborated with different bank and NBFCs with attractive interest rates." />
                <FAQItem question="WHAT IS MATERIAL FINANCING SERVICE AT EASIHOME PLATFORM?" answer="We provide 120 days terms for Professional contractor on there material purchase. We pay the supplier and the contractor will pay us in easy installment." />
            </div>
        </>
    );
};

export default Faq;
