import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "Answer 1",
    },
    {
      question: "Is there parking available?",
      answer: "Answer 2",
    },
    {
      question: "Can I bring a plus one?",
      answer: "Answer 3",
    },
    {
      question: "Can I bring children?",
      answer: "Answer 4",
    },
    {
      question: "Will food and drinks be provided?",
      answer: "Answer 5",
    },
    {
      question: "Do you cater for dietary requirements?",
      answer: "Answer 6",
    },
    {
      question: "When should I RSVP by?",
      answer: "Answer 7",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "Answer 8",
    },
    {
      question: "Are there nearby hotels?",
      answer: "Answer 9",
    },
    {
      question: "Is the venue wheelchair accessible?",
      answer: "Answer 10",
    },
    {
      question: "What happens if I can no longer attend?",
      answer: "Answer 11",
    },
    {
      question: "Who should I contact if I have any questions?",
      answer: "Answer 12",
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FDF1EE] py-28 px-6 text-[#676b57]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8e8f7c]">
            Everything You Need To Know
          </p>

          <h2 className="font-tangerine text-[5rem] leading-none md:text-[7rem]">
            FAQ
          </h2>

          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D6C27A]" />
            <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
            <div className="h-px w-16 bg-[#D6C27A]" />
          </div>

          <p className="mx-auto max-w-2xl leading-8 text-[#676b57]/80">
            If you can't find the answer you're looking for, please don't
            hesitate to get in touch with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-sm text-[#676b57]">{faq.question}</h3>

                  <ChevronDown
                    size={22}
                    className={`text-[#D6C27A] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`flex overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-60 border-b border-[#676b57]/10" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 leading-7 text-sm text-[#676b57]/75">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
