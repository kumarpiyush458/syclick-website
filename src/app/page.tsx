
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import DashboardPreview from "@/components/sections/DashboardPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import VoiceDemo from "@/components/sections/VoiceDemo";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import BuiltFor from "@/components/sections/BuiltFor";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BuiltFor />
      <Problem />
      <HowItWorks />
      <DashboardPreview />
      <VoiceDemo />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />

    </>
  );
}