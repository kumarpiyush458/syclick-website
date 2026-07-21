import PhoneMockup from "@/components/Phone/PhoneMockup";
import VoiceWave from "@/components/ui/VoiceWave";
import {
  PhoneCall,
  CalendarCheck,
  Languages,
  MessageCircle,
} from "lucide-react";
import { PhoneMissed, Clock3, Users } from "lucide-react";
export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#050816]">
        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                    SOLUTIONS
                </p>

                <h1 className="mt-4 text-6xl font-bold text-white leading-tight">
                    AI Reception Solutions
                    <br />
                    Built for Modern Healthcare
                </h1>

                <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-400 leading-8">
                    From answering patient calls to scheduling appointments and handling
                    routine inquiries, Syclick automates your front desk so your staff can
                    focus on delivering exceptional patient care.
                </p>

                </div>

            </div>

        </section>
        <section className="pb-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                    THE CHALLENGE
                </p>

                <h2 className="mt-4 text-5xl font-bold text-white">
                    Hospitals Lose Patients
                    <br />
                    Before They Even Walk In.
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-8">
                    Every missed call, long wait, or unanswered question creates a poor
                    patient experience. Syclick ensures every patient receives immediate,
                    professional assistance—24 hours a day.
                </p>

                </div>

            </div>
            <div className="mt-20 grid md:grid-cols-3 gap-8">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                        <PhoneMissed className="w-8 h-8 text-cyan-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                    Missed Patient Calls
                    </h3>

                    <p className="mt-4 text-slate-400 leading-8">
                    Busy receptionists can't answer every call, resulting in lost appointments
                    and frustrated patients.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                        <Clock3 className="w-8 h-8 text-purple-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                    Long Waiting Times
                    </h3>

                    <p className="mt-4 text-slate-400 leading-8">
                    Patients spend valuable time waiting for simple information or appointment
                    scheduling.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                        <Users className="w-8 h-8 text-emerald-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                    Overloaded Staff
                    </h3>

                    <p className="mt-4 text-slate-400 leading-8">
                    Your front desk should focus on patient care, not repetitive phone calls
                    and administrative tasks.
                    </p>
                </div>

            </div>

        </section>
        <section className="pb-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                        THE SOLUTION
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Meet Your AI Front Desk
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-8">
                        Syclick works like a trained receptionist—answering calls,
                        booking appointments, handling FAQs, and routing patients to
                        the right department, 24 hours a day.
                    </p>

                    <div className="mt-20 grid md:grid-cols-2 gap-8">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

                            <div className="w-18 h-18 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                                <PhoneCall className="w-10 h-10 text-cyan-400" />
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-white">
                                Answer Every Call
                            </h3>

                            <p className="mt-4 text-slate-300 leading-8">
                                Every patient call is answered instantly—even after business hours—so your hospital never loses another opportunity.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

                            <div className="w-18 h-18 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                <CalendarCheck className="w-10 h-10 text-purple-400" />
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-white">
                                Book Appointments
                            </h3>

                            <p className="mt-4 text-slate-300 leading-8">
                                Schedule directly into your calendar in seconds.
                            </p>

                        </div>
                        
                    </div>

                    <div className="mt-20 grid md:grid-cols-2 gap-8">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

                            <div className="w-18 h-18 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                                <Languages className="w-10 h-10 text-emerald-400" />
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-white">
                                Multilingual Support
                            </h3>

                            <p className="mt-4 text-slate-300 leading-8">
                                Speak naturally in English, Hindi, and more.
                            </p>

                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

                            <div className="w-18 h-18 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                <MessageCircle className="w-10 h-10 text-orange-400" />
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-white">
                                Answer FAQs
                            </h3>

                            <p className="mt-4 text-slate-300 leading-8">
                                Instantly answer common questions like timings, doctors, and services.
                            </p>

                        </div>
                        
                    </div>

                    <div className="mt-32 text-center">

                        <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                            LIVE DEMO
                        </p>

                        <h2 className="mt-4 text-5xl font-bold text-white">
                            See Syclick Handle
                            <br />
                            A Real Patient Call
                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-8">
                            Watch how Syclick answers a patient, understands the request,
                            books the appointment, and confirms everything automatically.
                        </p>

                    </div>
                    <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

                                        <p className="text-white font-semibold">
                                            Patient
                                        </p>

                                    </div>

                                    <p className="text-slate-500 text-sm">
                                        Just now
                                    </p>

                                </div>

                                <p className="mt-6 text-xl text-slate-200 leading-9">
                                    "Hello, I'd like to book an appointment with a cardiologist."
                                </p>

                            </div>
                            <div className="my-8 flex justify-center">
                                <VoiceWave />
                            </div>

                            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>

                                        <p className="text-white font-semibold">
                                            Syclick AI
                                        </p>

                                    </div>

                                    <p className="text-cyan-400 text-sm">
                                        Responding...
                                    </p>

                                </div>

                                <p className="mt-6 text-xl text-slate-200 leading-9">
                                    "Certainly! Dr. Sharma is available tomorrow at 10:30 AM.
                                    Shall I book your appointment?"
                                </p>

                        </div>
                        <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                    ✓
                                </div>

                                <div>

                                    <p className="text-white font-semibold">
                                        Appointment Confirmed
                                    </p>

                                    <p className="text-slate-400 text-sm">
                                        Tomorrow • 10:30 AM • Dr. Sharma
                                    </p>

                                </div>

                            </div>

                        </div>


                    </div>

                        <div className="relative flex justify-center items-start">

                            <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px] animate-glow"></div>

                            <PhoneMockup />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </main>
  );
}