import { useState } from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const faqs = [
    { question: "How do I track my order?", answer: "You can track your order by logging into your account and checking the order status." },
    { question: "What is your return policy?", answer: "We offer a 30-day return policy. If you are not satisfied, you can return the item for a full refund." },
    { question: "How do I contact customer support?", answer: "You can contact our support team via email at support@example.com or call us at 123-456-7890." }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-md sm:max-w-xl mx-auto px-4 sm:px-6 py-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg shadow-md overflow-hidden transition-all duration-300">
                        <button
                            className="w-full flex justify-between items-center border-b p-3 sm:p-4 bg-white hover:bg-gray-50"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="text-sm sm:text-lg font-medium">{faq.question}</span>
                            <ExpandMoreOutlinedIcon
                                sx={{
                                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.2s ease-in-out",
                                }}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="p-3 sm:p-4 bg-gray-100">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
