import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="16 July 2026"
    >
      <LegalSection title="Introduction">
        <p>
          Welcome to <strong>Syclick</strong>. We are committed to protecting
          your privacy and handling your information responsibly. This Privacy
          Policy explains what information we collect, how we use it, and the
          choices available to you when using our website and AI-powered
          services.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>Depending on how you interact with Syclick, we may collect:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Name and contact information</li>
          <li>Email address and phone number</li>
          <li>Company or organization details</li>
          <li>Appointment or demo request information</li>
          <li>Information you voluntarily submit through our forms</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>Your information may be used to:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to enquiries and demo requests</li>
          <li>Schedule appointments</li>
          <li>Provide customer support</li>
          <li>Improve our products and services</li>
          <li>Maintain security and prevent misuse</li>
        </ul>
      </LegalSection>

      <LegalSection title="AI Call Processing">
        <p>
          Syclick provides AI-powered voice assistants that can answer calls,
          schedule appointments, and assist customers on behalf of businesses.
          Calls may be processed or transcribed where enabled by our customers.
          Customers are responsible for ensuring compliance with applicable
          laws regarding call recording and consent.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We use reasonable technical and organizational safeguards to help
          protect the information entrusted to us. While no online system can
          guarantee absolute security, we continuously work to improve the
          protection of our services.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          We may work with trusted third-party providers for services such as
          cloud hosting, communications, analytics, appointment scheduling,
          payment processing, and AI infrastructure. These providers process
          data only as necessary to deliver their services.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Our website may use cookies and similar technologies to improve
          performance, understand website usage, and enhance the user
          experience.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          Depending on applicable law, you may have the right to request
          access, correction, deletion, or restriction of your personal
          information. To exercise these rights, please contact us.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have any questions regarding this Privacy Policy or our data
          practices, please contact us using the details provided on our
          website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}