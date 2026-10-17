import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Deed Poll UK",
  description:
    "How Deed Poll UK handles your data, including cookies, analytics, advertising and payments, and your rights under UK GDPR.",
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      "en-GB": "/privacy-policy",
      "x-default": "/privacy-policy",
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: 15 October 2026</p>

      <div className="prose prose-lg text-gray-800 space-y-6">
        <p>
          This policy explains what information Deed Poll UK (deedpolluk.uk) collects when you use the website, why we
          collect it, and the choices you have. We aim to collect as little personal data as possible.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information you type into our tools</h2>
        <p>
          The deed poll generator, name change letter generator and calculators run entirely in your web browser. The
          names, addresses, salaries and other details you enter are used to produce your document or result on your own
          device and are not sent to or stored on our servers.
        </p>
        <p>
          The interactive checklist saves which items you have ticked in your browser&apos;s local storage so your progress
          is still there when you return. This stays on your device and you can clear it at any time using the
          checklist&apos;s reset option or your browser settings.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Analytics</h2>
        <p>
          We use Google Analytics (with IP anonymisation) and Microsoft Clarity to understand how visitors use the site,
          for example which guides are read most and where pages are confusing. These services use cookies or similar
          technologies and collect information such as pages visited, device and browser type, approximate location and
          interactions with the page. We use this only in aggregate to improve the site.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Advertising</h2>
        <p>
          We may display adverts provided by Google AdSense to help fund the site and keep our guides and tools free. Third-party vendors, including
          Google, use cookies to serve ads based on your previous visits to this and other websites. Google&apos;s use of
          advertising cookies enables it and its partners to serve ads based on your visits to this site and/or other
          sites on the internet.
        </p>
        <p>
          You can opt out of personalised advertising by visiting{" "}
          <a href="https://adssettings.google.com" className="text-[#1d70b8] underline underline-offset-2" rel="noopener noreferrer" target="_blank">
            Google Ads Settings
          </a>
          , and learn more about how Google uses data at{" "}
          <a href="https://policies.google.com/technologies/partner-sites" className="text-[#1d70b8] underline underline-offset-2" rel="noopener noreferrer" target="_blank">
            How Google uses information from sites that use its services
          </a>
          . You can also opt out of some third-party vendors&apos; use of cookies at{" "}
          <a href="https://www.aboutads.info/choices" className="text-[#1d70b8] underline underline-offset-2" rel="noopener noreferrer" target="_blank">
            aboutads.info
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Payments</h2>
        <p>
          Payments for deed poll downloads are handled by PayPal. Your card or PayPal account details are entered on PayPal&apos;s systems
          and never reach us. PayPal processes that information under its own privacy policy.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. If you email us</h2>
        <p>
          If you contact us by email, we use your email address and message only to reply to you. We do not add you to a
          mailing list or share your details with anyone else.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Managing cookies</h2>
        <p>
          Most browsers let you block or delete cookies through their settings. Blocking cookies will not stop our
          generators or calculators from working, although the checklist will not remember your progress if local
          storage is disabled.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Your rights</h2>
        <p>
          Under UK GDPR and the Data Protection Act 2018 you have the right to ask what personal data we hold about you,
          and to ask us to correct or delete it. Because our tools do not store what you type, we usually hold no
          personal data about you beyond any emails you have sent us. If you are unhappy with how your data has been
          handled, you can complain to the Information Commissioner&apos;s Office (ico.org.uk).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes and contact</h2>
        <p>
          We will update this page if the way we handle data changes. If you have any questions, please{" "}
          <Link href="/contact-us" className="text-[#1d70b8] underline underline-offset-2">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
