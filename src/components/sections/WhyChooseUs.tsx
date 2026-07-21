import Reveal from "@/components/ui/Reveal";
import FeatureCard from "../ui/FeatureCard";
import {
  PhoneCall,
  CalendarCheck,
  Bot,
  Users,
  ShieldCheck,
  Languages,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <Reveal>
    <section className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            BUILT FOR MODERN HEALTHCARE
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Designed for Busy
            <br />
            Healthcare Teams
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-8">
            Built to reduce missed calls, improve patient experience,
            and help your staff focus on care instead of repetitive tasks.
          </p>

        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FeatureCard
                icon={PhoneCall}
                title="Never Miss a Patient Call"
                description="Every incoming patient call is answered instantly, 24/7, ensuring no opportunity is lost."
            />
            <FeatureCard
                icon={CalendarCheck}
                title="Instant Appointment Booking"
                description="Patients can book appointments in seconds without waiting for your front desk staff."
            />
            <FeatureCard
                icon={Bot}
                title="Natural AI Conversations"
                description="Patients speak naturally while Syclick understands requests and responds like a trained receptionist."
            />
            <FeatureCard
                icon={Users}
                title="Reduce Front Desk Workload"
                description="Let Syclick handle repetitive calls and appointment scheduling while your staff focuses on patient care."
            />
            <FeatureCard
                icon={ShieldCheck}
                title="Secure & Reliable"
                description="Built with enterprise-grade security and dependable infrastructure to protect every patient interaction."
            />
            <FeatureCard
                icon={Languages}
                title="Multilingual Support"
                description="Speak naturally with patients in multiple languages, making healthcare more accessible to everyone."
            />

        </div>


    
    </div>
      

</section>
</Reveal>
  );
}