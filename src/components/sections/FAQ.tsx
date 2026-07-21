
"use client";
import Reveal from "@/components/ui/Reveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can Syclick book appointments automatically?",
    answer:
      "Yes. Syclick can schedule, reschedule, and cancel appointments based on your configured workflow.",
  },
  {
    question: "Can it answer patient questions?",
    answer:
      "Yes. Syclick can answer common questions such as clinic hours, location, services, and other information you configure.",
  },
  {
    question: "Will it replace my receptionist?",
    answer:
      "No. Syclick is designed to support your team by handling repetitive calls, allowing your staff to focus on patients who need personal attention.",
  },
  {
    question: "Does it work outside office hours?",
    answer:
      "Yes. Syclick answers calls 24 hours a day, including weekends and holidays.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a demo with our team. We'll understand your workflow and help you set up an AI receptionist tailored to your practice.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Reveal>
    <section
      id="faq"
      className="bg-[#050816] py-28 text-white"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Frequently Asked
            <span className="text-cyan-400"> Questions</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before bringing an AI receptionist
            to your healthcare organization.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/[0.03]"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {isOpen && (

                  <div className="px-6 pb-6 text-slate-400 leading-7">

                    {faq.answer}

                  </div>

                )}

              </div>
            );

          })}

        </div>

      </div>
    </section>
    </Reveal>
  );
}