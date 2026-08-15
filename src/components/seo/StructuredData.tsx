export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://getsyclick.com/#organization",
        name: "Syclick",
        url: "https://getsyclick.com",
        logo: "https://getsyclick.com/logo.png",
        description:
          "AI-powered front desk employees for healthcare providers.",
      },
      {
        "@type": "WebSite",
        "@id": "https://getsyclick.com/#website",
        url: "https://getsyclick.com",
        name: "Syclick",
        publisher: {
          "@id": "https://getsyclick.com/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://getsyclick.com/#software",
        name: "Syclick",
        url: "https://getsyclick.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        publisher: {
          "@id": "https://getsyclick.com/#organization",
        },
        description:
          "Syclick is an AI-powered front desk solution for healthcare providers that answers patient calls, schedules appointments, handles patient questions, and provides 24/7 receptionist support.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}