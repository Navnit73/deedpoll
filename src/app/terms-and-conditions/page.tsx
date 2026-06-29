import Link from 'next/link';

export const metadata = {
  title: "Terms and Conditions | Deed Poll UK",
  description: "Terms and conditions for using the Deed Poll UK service.",
  alternates: {
    canonical: "/terms-and-conditions",
    languages: {
      "en-GB": "/terms-and-conditions",
      "x-default": "/terms-and-conditions",
    },
  },
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms and Conditions</h1>

      <div className="prose prose-lg text-gray-800 space-y-6">
        <p>
          Welcome to Deed Poll UK. By using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. No Legal Advice</h2>
        <p>
          The information and services provided on this website are for general informational purposes only and do not constitute legal advice. We provide a free tool to generate a deed poll document based on the information you input, but we do not guarantee its acceptance by any specific organisation, government body, or institution. If you require legal advice regarding changing your name or any other matter, you should consult a qualified legal professional.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of the Service</h2>
        <p>
          This service is provided free of charge. The deed poll generation happens entirely within your web browser. We do not store, track, or transmit your personal data (such as your name or address) to our servers. You are solely responsible for the accuracy of the information you enter into the generator.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer of Warranties</h2>
        <p>
          The website and its contents are provided "as is" and "as available" without any representations or warranties, express or implied. We do not warrant that the website will be constantly available, or available at all; nor do we warrant that the information on this website is complete, true, accurate, or non-misleading.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
        <p>
          Deed Poll UK and its creators will not be liable to you (whether under the law of contact, the law of torts, or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website, for any indirect, special, or consequential loss; or for any business losses, loss of revenue, income, profits, or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Revisions</h2>
        <p>
          We may revise these terms and conditions from time to time. The revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please <Link href="/contact-us" className="text-[#1d70b8] underline underline-offset-2">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
