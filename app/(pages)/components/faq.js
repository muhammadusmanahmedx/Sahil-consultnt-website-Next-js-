import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const faqs = [
  {
    question: "What are the requirements to apply for a student visa?",
    answer:
      "Requirements vary by country but generally include proof of admission, financial statements, passport, and English proficiency test scores.",
  },
  {
    question: "How long does it take to process a student visa?",
    answer:
      "Processing times vary by country, but it typically takes 4 to 12 weeks. It's best to apply as early as possible.",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Most countries allow students to work part-time, usually up to 20 hours per week during semesters and full-time during breaks.",
  },
  {
    question: "Do I need to show proof of funds for a visa?",
    answer:
      "Yes, you need to show you have sufficient funds to cover tuition and living expenses as required by the host country.",
  },
  {
    question: "What happens if my visa application is rejected?",
    answer:
      "If your visa is rejected, you can appeal the decision or reapply after addressing the reasons for rejection.",
  },
  {
    question: "Is an interview required for a student visa?",
    answer:
      "Some countries require an interview as part of the visa process, such as the USA, while others may not.",
  },
  {
    question: "Can I apply for permanent residency after studying abroad?",
    answer:
      "Some countries offer pathways to permanent residency for international students after graduation and work experience.",
  },
  {
    question: "What is the cost of a student visa?",
    answer:
      "Visa fees vary depending on the country. The cost can range from $100 to $500, excluding other associated expenses.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full lg:mb-[12rem] mt-[-5rem] max-w-3xl mx-auto px-6 py-8" >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-700">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 border border-blue-200"
          >
            {/* FAQ Header */}
            <div
              className="relative z-10 w-full cursor-pointer flex justify-between items-center px-6 py-5 bg-blue-600 hover:bg-blue-700 transition"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex-grow text-lg font-medium text-white">
                {faq.question}
              </span>
              <ExpandMoreOutlinedIcon
                sx={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </div>
            {/* FAQ Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-60 p-4 bg-blue-50 text-blue-900"
                  : "max-h-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}