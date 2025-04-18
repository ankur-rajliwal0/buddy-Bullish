import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What’s the blockchain the buddybullies call home ?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.",
  },
  {
    question: "What’s the blockchain the buddybullies call home ?",
    answer: "",
  },
  {
    question: "What’s the blockchain the buddybullies call home ?",
    answer: "",
  },
  {
    question: "What’s the blockchain the buddybullies call home ?",
    answer: "",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#040B16] to-[#011627] text-white px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10">FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0B1323] rounded-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-6 pb-6 text-sm text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
