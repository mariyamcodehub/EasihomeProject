import React, { useState } from 'react';
import './Faq.css'; // Make sure to have a CSS file with this name for styling

const FAQItem = ({ question, answer, isOpen, toggleAccordion }) => {
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
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="faq-container">
                <FAQItem
                    question="HOW EASIHOME WORKS?"
                    answer="If you want to construct home or Renovate home just go through our website book a free consultation. Our expert will contact you understand your requirement in detail. Share design and quotation with you. Once you approve the plan agreement will be signed. Execution begins with in seven working days."
                    isOpen={openIndex === 0}
                    toggleAccordion={() => toggleAccordion(0)}
                />
                <FAQItem
                    question="WHY SHOULD ANYONE CHOOSE EASIHOME?"
                    answer="One should choose easihome for their home construction Renovation, Interior, Painting, as well as material financing to enjoy a hassle free experience. Our team of qualified professionals take care of every thing from plan approvals to project hand over and stands for very high standard of work quality."
                    isOpen={openIndex === 1}
                    toggleAccordion={() => toggleAccordion(1)}
                />
                <FAQItem
                    question="HOW WILL BE YOUR PAYMENT PROCESS?"
                    answer="Payment Schedule will be clearly mention in the contract agreement we take a deposite of 5% as a booking amount And the rest of payments will be on stage wise on an actual works, so that client does not worry whether they are Paying more than the actual work done."
                    isOpen={openIndex === 2}
                    toggleAccordion={() => toggleAccordion(2)}
                />
                <FAQItem
                    question="WHAT IS EXCLUDED FROM THE PACKAGES?"
                    answer="Electricity and water connection or submersible boring will be charged extra."
                    isOpen={openIndex === 3}
                    toggleAccordion={() => toggleAccordion(3)}
                />
                <FAQItem
                    question="DOES THE CUSTOMER HAVE TO FLLOW UP THE SITE REGULARLY?"
                    answer="No, the client can enjoy a hassle free experience. They can monitor their project through our E-Monitoring Service."
                    isOpen={openIndex === 4}
                    toggleAccordion={() => toggleAccordion(4)}
                />
                <FAQItem
                    question="HOW ANYONE CAN PURCHASE BUILDING MATERIAL FROM EASIHOME ?"
                    answer="Just go on building material slot on website and select the material you want to purchase."
                    isOpen={openIndex === 5}
                    toggleAccordion={() => toggleAccordion(5)}
                />
            </div>
        </>
    );
};

export default Faq;
