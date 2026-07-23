"use client";

import { useEffect, useState } from "react";
import PhoneHeader from "./PhoneHeader";
import CallerCard from "./CallerCard";
import AIConversation from "./AIConversation";
import AppointmentPopup from "./AppointmentPopup";

export default function PhoneMockup() {
    const [seconds, setSeconds] = useState(18);
    const fullMessage =
  "Good afternoon Rahul,\nHow may I help you today?\nI can book appointments, answer hospital queries, or connect you to a department.";

    const [displayMessage, setDisplayMessage] = useState("");
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "📞 Incoming Call",
        },
        {
            title: "🎧 Listening...",
        },
        {
            title: "🤖 AI Speaking",
        },
        {
            title: "✅ Appointment Confirmed",
        },
    ];
    const nextStep = () => {
    setStep((prev) => {
        if (prev === steps.length - 1) {
        return 0;
        }

        return prev + 1;
    });
    };
    const wait = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
    const runDemo = async () => {
        console.log("Step 0");

        setStep(0);
        setDisplayMessage("");

        await wait(1000);

        console.log("Step 1");

        setStep(1);

        await wait(1000);

        console.log("Step 2");

        setStep(2);

        await wait(11000);

        setStep(3);

        await wait(3000);
        await wait(1000);

        runDemo();
    };

    useEffect(() => {
    let index = 0;

    if (step !== 2) {
        setDisplayMessage("");
        return;
    }

    const typing = setInterval(() => {
        setDisplayMessage(fullMessage.slice(0, index + 1));
        index++;

        if (index >= fullMessage.length) {
        clearInterval(typing);
        }
    }, 75);

    return () => clearInterval(typing);
    }, [step]);

    useEffect(() => {
    runDemo();
    }, []);

  return (
    <div className="relative w-[330px] h-[650px] animate-float rounded-[40px] bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20 shadow-[0_0_80px_rgba(0,255,255,0.12)] overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
            <div className="w-32 h-8 rounded-full bg-black/90 border border-white/5 shadow-lg"></div>
        </div>
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
    {/* Glass Reflection */}
    <div
  className="
    absolute
    -top-20
    -left-16
    w-40
    h-[900px]
    rotate-[25deg]
    bg-gradient-to-r
    from-white/25
    via-white/10
    to-transparent
    blur-2xl
    pointer-events-none
  "
></div>

      <div className="relative z-10 pt-14 px-6 pb-6">
        <PhoneHeader
        seconds={seconds}
        title={steps[step].title}
        />
        <AppointmentPopup show={step === 3} />
        <CallerCard> 
            <AIConversation
                status={steps[step].title}
                message={displayMessage}
            />
        </CallerCard>
    

    
        </div>
        
    </div>
  );
}
