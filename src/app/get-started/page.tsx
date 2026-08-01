"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";


export default function GetStartedPage() {
  
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    plan: "Starter",
    monthly_call_volume: "",
    message: "",
  });

  useEffect(() => {
    const plan = searchParams.get("plan");

    switch (plan) {
      case "starter":
        setForm((prev) => ({ ...prev, plan: "Starter" }));
        break;
      case "growth":
        setForm((prev) => ({ ...prev, plan: "Growth" }));
        break;
      case "enterprise":
        setForm((prev) => ({ ...prev, plan: "Enterprise" }));
        break;
      default:
        setForm((prev) => ({ ...prev, plan: "Starter" }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const response = await fetch("/api/leads", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

const result = await response.json();

if (!response.ok) {
  setError(result.error);
  setLoading(false);
  return;
}

setSuccess(
  "Thank you! We've received your request and will contact you shortly."
);

setForm({
  full_name: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  plan: "Starter",
  monthly_call_volume: "",
  message: "",
});

setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-20">

        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Get Started
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            Let's Build Your
            <span className="text-cyan-400"> AI Receptionist</span>
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Fill in a few details and we'll recommend the best Syclick solution
            for your organization.
          </p>

          {success && (
            <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
              {success}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Work Email"
              required
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Clinic / Hospital Name"
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              type="text"
              placeholder="Your Designation"
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            >
              <option value="Starter">Starter</option>
              <option value="Growth">Growth</option>
              <option value="Enterprise">Enterprise</option>
            </select>

            <select
              name="monthly_call_volume"
              value={form.monthly_call_volume}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            >
              <option value="">Monthly Call Volume</option>
              <option value="Less than 500">Less than 500</option>
              <option value="500 - 1000">500 - 1000</option>
              <option value="1000 - 5000">1000 - 5000</option>
              <option value="5000+">5000+</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your requirements..."
              className="w-full rounded-xl border border-white/10 bg-[#0A1020] px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get Started"}
            </Button>

          </form>

        </div>

      </div>
    </main>
  );
}