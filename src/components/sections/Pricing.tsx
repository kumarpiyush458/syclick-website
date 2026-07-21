import Reveal from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter Clinic",
    description:
      "Perfect for clinics and practices looking to automate patient calls.",
    features: [
      "24/7 AI Call Answering",
      "Appointment Scheduling",
      "Patient FAQs",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Growing Practice",
    description:
      "For healthcare providers handling higher call volumes.",
    features: [
      "Everything in Starter",
      "Call Summaries",
      "Calendar Integration",
      "Priority Support",
      "Custom AI Workflows",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description:
      "Tailored for hospitals and multi-location healthcare organizations.",
    features: [
      "Everything in Growth",
      "Multi-location Support",
      "Dedicated Onboarding",
      "Custom Integrations",
      "Enterprise Security",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <Reveal>
    <section
      id="pricing"
      className="bg-[#050816] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Choose the Right Plan
            <span className="text-cyan-400"> for Your Practice</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Every healthcare organization is different. We'll help you
            choose the plan that best fits your workflow.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-cyan-400 bg-cyan-500/5 scale-105"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {plan.featured && (
                <div className="mb-6 inline-block rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4 text-slate-400">
                {plan.description}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-cyan-400" />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <div className="mt-10">

                <Button>
                  Book a Demo
                </Button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
    </Reveal>
  );
}