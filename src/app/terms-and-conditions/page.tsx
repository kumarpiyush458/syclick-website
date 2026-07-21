import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="16 July 2026"
    >
      <LegalSection title="Acceptance of Terms">
        <p>
          By accessing or using the Syclick website or services, you agree to
          be bound by these Terms & Conditions. If you do not agree with these
          terms, please do not use our website or services.
        </p>
      </LegalSection>

      <LegalSection title="Our Services">
        <p>
          Syclick provides AI-powered customer communication solutions,
          including virtual receptionists, appointment scheduling, call
          handling, and workflow automation for businesses.
        </p>
      </LegalSection>

      <LegalSection title="Permitted Use">
        <p>You agree to use our website and services only for lawful purposes.</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Do not misuse or attempt to disrupt our services.</li>
          <li>Do not upload malicious software or harmful content.</li>
          <li>Do not attempt unauthorized access to our systems.</li>
          <li>Do not violate applicable laws while using our platform.</li>
        </ul>
      </LegalSection>

      <LegalSection title="AI Service Disclaimer">
        <p>
          Syclick's AI assistants are designed to assist with communication,
          appointment scheduling, and customer interactions. They are not a
          substitute for professional medical, legal, financial, or other
          professional advice.
        </p>

        <p>
          Businesses remain responsible for reviewing AI-generated responses
          and ensuring compliance with applicable laws and regulations.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content, software, branding, trademarks, logos, designs, and
          technology available through Syclick remain the intellectual property
          of Syclick unless otherwise stated.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Syclick shall not be liable
          for any indirect, incidental, consequential, or special damages
          arising from the use of our website or services.
        </p>
      </LegalSection>

      <LegalSection title="Availability of Service">
        <p>
          We strive to provide reliable services but cannot guarantee
          uninterrupted availability. Services may occasionally be modified,
          updated, or temporarily unavailable due to maintenance or unforeseen
          circumstances.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms & Conditions from time to time. Continued
          use of our website or services after changes become effective
          constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of the Republic of India.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions regarding these Terms & Conditions, please contact us
          using the contact information provided on our website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}