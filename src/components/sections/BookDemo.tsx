"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import {
  Calendar,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function BookDemo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const response = await fetch("https://vapi-ai-receptionist-production.up.railway.app/demo-request/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName.trim(),
        email: email.trim(),
        organization_name: organizationName.trim(),
        phone: phone.trim(),
        message: message.trim(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Something went wrong.");
    }

    setSuccessMessage("Thanks! We've received your request. A Syclick specialist will contact you within 24 hours to schedule your personalized demo.");

    setFullName("");
    setEmail("");
    setOrganizationName("");
    setPhone("");
    setMessage("");
  } catch (error: any) {
    setErrorMessage(error.message);
  } finally {
    setLoading(false);
  }
};
  return (
    <Reveal>
      <section
        id="book-demo"
        className="relative overflow-hidden bg-[#050816] py-32"
      >
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="rounded-[36px] border border-cyan-500/20 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-16">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

              {/* Left Side */}
              <div>
                <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Book a Personalized Demo
                </span>

                <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                  See How <span className="text-cyan-400">Syclick</span> Can
                  Transform Your Front Desk
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                  In a 30-minute personalized demo, we'll show how Syclick
                  answers patient calls, books appointments, reduces missed
                  opportunities, and helps your staff focus on delivering
                  exceptional care.
                </p>

                <div className="mt-10 space-y-6">

                  <div className="flex items-start gap-4">
                    <Calendar className="mt-1 h-6 w-6 text-cyan-400" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Personalized Walkthrough
                      </h3>
                      <p className="mt-1 text-slate-400">
                        Tailored to your hospital or clinic's workflow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock3 className="mt-1 h-6 w-6 text-cyan-400" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Only 30 Minutes
                      </h3>
                      <p className="mt-1 text-slate-400">
                        A concise session with time for questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 text-cyan-400" />
                    <div>
                      <h3 className="font-semibold text-white">
                        No Obligation
                      </h3>
                      <p className="mt-1 text-slate-400">
                        Explore whether Syclick is the right fit for your
                        organization.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Side */}
              <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1224]/80 p-8">

                <h3 className="text-2xl font-semibold text-white">
                  Request a Demo
                </h3>

                <p className="mt-2 text-slate-400">
                  Fill out the form below and we'll contact you within one
                  business day.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@hospital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Hospital / Clinic
                    </label>
                    <input
                      type="text"
                      placeholder="ABC Hospital"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us a little about your clinic or hospital..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  {successMessage && (
                    <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                      {successMessage}
                    </div>
                  )}

                  

                  {errorMessage && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Request Demo"}
                  </Button>

                  <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                      What happens next?
                    </h4>

                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                      <li>✓ We'll review your request within one business day.</li>
                      <li>✓ Schedule a personalized 30-minute demo.</li>
                      <li>✓ Discuss your current workflow.</li>
                      <li>✓ Show how Syclick fits your organization.</li>
                    </ul>
                  </div>

                </form>

              </div>

            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}