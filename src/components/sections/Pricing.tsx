import Reveal from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    slug: "starter",
    price: "$199",
    period: "/month",
    subtitle: "Starting at",
    description:
      "Perfect for solo practices and small clinics looking to automate patient calls and appointment scheduling.",
    features: [
      "24/7 AI Call Answering",
      "Appointment Scheduling",
      "Patient FAQ Responses",
      "Basic Analytics",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    slug: "growth",
    price: "$499",
    period: "/month",
    subtitle: "Starting at",
    description:
      "Designed for growing clinics and multi-provider practices handling higher patient call volumes.",
    features: [
      "Everything in Starter",
      "Higher Call Capacity",
      "Calendar & CRM Integration",
      "Advanced Analytics",
      "Priority Support",
      "Custom AI Workflows",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    price: "Custom",
    period: "",
    subtitle: "",
    description:
      "Built for hospitals and healthcare organizations requiring enterprise-grade AI solutions.",
    features: [
      "Unlimited Scale",
      "Dedicated Account Manager",
      "Multi-location Support",
      "Custom Integrations",
      "Enterprise Security",
      "SLA & Priority Support",
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
              Simple Pricing That
              <span className="text-cyan-400">
                {" "}Grows With Your Practice
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Every plan includes an AI receptionist that answers calls
              24/7, schedules appointments, and helps ensure no patient
              inquiry goes unanswered.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {plans.map((plan) => (

              <div
                key={plan.name}
                className={`group flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? "border-cyan-400 bg-gradient-to-b from-cyan-500/10 to-cyan-500/5 shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                    : "border-white/10 bg-white/[0.03] hover:border-cyan-500/40"
                }`}
              >

                {plan.featured && (
                  <div className="mb-6 inline-flex w-fit rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    ⭐ Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-6">

                  {plan.subtitle && (
                    <p className="text-sm uppercase tracking-widest text-slate-400">
                      {plan.subtitle}
                    </p>
                  )}

                  <div className="mt-2 flex items-end gap-2">

                    <span className="text-5xl font-bold">
                      {plan.price}
                    </span>

                    {plan.period && (
                      <span className="mb-1 text-slate-400">
                        {plan.period}
                      </span>
                    )}

                  </div>

                </div>

                <p className="mt-6 text-slate-400">
                  {plan.description}
                </p>

                <div className="my-8 h-px bg-white/10" />

                <div className="flex-1 space-y-4">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span>{feature}</span>
                    </div>

                  ))}

                </div>

                <div className="mt-10">

                  <Link
                    href={`/get-started?plan=${plan.slug}`}
                    className="block"
                  >
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </Link>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-14 text-center">

            <p className="text-sm text-slate-500">
              No setup fees • Cancel anytime • Custom onboarding available for
              healthcare organizations.
            </p>

          </div>

        </div>
      </section>
    </Reveal>
  );
}