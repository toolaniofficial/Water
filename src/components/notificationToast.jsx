import { useState } from 'react';

const faqData = [
  { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'What is TailwindCSS?', answer: 'TailwindCSS is a utility-first CSS framework.' },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-4 bg-blue-100 rounded"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white border-l-4 border-blue-500">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
