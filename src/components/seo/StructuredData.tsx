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
        name: "Syclick",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "AI-powered front desk employees that answer calls, schedule appointments, and automate patient communication.",
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