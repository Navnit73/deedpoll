import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

export const metadata: Metadata = {
  title: "How to Change Name on Driving Licence UK (DVLA Guide & Free D1 Form)",
  description:
    "Complete step-by-step guide to changing your name on your UK driving licence with DVLA. Postal D1 form instructions, V5C logbook updates, and required documents.",
  alternates: {
    canonical: "/change-name-on-driving-licence-dvla-uk",
    languages: {
      "en-GB": "/change-name-on-driving-licence-dvla-uk",
      "x-default": "/change-name-on-driving-licence-dvla-uk",
    },
  },
  openGraph: {
    title: "How to Change Name on Driving Licence UK (DVLA Guide & Free D1 Form)",
    description:
      "Complete step-by-step guide to changing your name on your UK driving licence with DVLA. Postal D1 form instructions, V5C logbook updates, and required documents.",
    url: "https://deedpolluk.uk/change-name-on-driving-licence-dvla-uk",
    type: "article",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Change Name on Driving Licence UK (DVLA Guide)",
    description:
      "Complete step-by-step guide to changing your name on your UK driving licence with DVLA. Postal D1 form instructions and required documents.",
  }
};

export default function ChangeNameDrivingLicencePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HowTo",
              "name": "How to Change Your Name on a UK Driving Licence (DVLA)",
              "description": "Step-by-step procedure to update your name on a UK photocard driving licence and vehicle log book (V5C).",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Get a D1 Application for a Driving Licence form",
                  "text": "Pick up a paper D1 form from most Post Offices or order online from the DVLA website."
                },
                {
                  "@type": "HowToStep",
                  "name": "Complete the D1 form",
                  "text": "Fill in Section 1 (What are you applying for), Section 2 (Your details - old and new name), and sign Section 7 in your new legal name."
                },
                {
                  "@type": "HowToStep",
                  "name": "Enclose proof of name change & existing licence",
                  "text": "Enclose your original Deed Poll or Marriage Certificate, plus your current photocard driving licence."
                },
                {
                  "@type": "HowToStep",
                  "name": "Post documents to DVLA Swansea",
                  "text": "Send the application package to DVLA, Swansea, SA99 1BN. There is no fee when updating your name by post."
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does it cost to change the name on a UK driving licence?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is completely free to change your name and address on your UK driving licence when applying by post with a D1 form."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I still drive while DVLA is updating my licence?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Under Section 88 of the Road Traffic Act 1988, you can continue driving while your application is being processed by the DVLA, provided your previous licence was valid and you meet all medical requirements."
                  }
                }
              ]
            }
          ]
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#1d70b8] underline">Home</Link></li>
            <li>›</li>
            <li className="text-gray-900 font-semibold">Change Name on Driving Licence DVLA</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="border-b-2 border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-green-100 text-green-800 font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
            Official DVLA Step-by-Step Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b0c0c]">
            How to Change Your Name on a UK Driving Licence (DVLA)
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Everything you need to know about updating your UK photocard driving licence and vehicle logbook (V5C) with the DVLA after changing your name.
          </p>
        </div>

        {/* Important Warning Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10 text-gray-800">
          <h2 className="text-xl font-bold text-amber-900 mb-2">
            ⚠️ Legal Requirement to Notify DVLA
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Under UK law, you must inform the DVLA immediately if you change your legal name or address. Failing to keep your driving licence details updated is an offence carrying a fine of up to <strong>£1,000</strong>. Updating your licence is <strong>100% free</strong>.
          </p>
        </div>

        {/* Steps Section */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] border-b-2 border-gray-100 pb-3">
            Step-by-Step DVLA Name Change Process
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-sm font-bold">1</span>
                Obtain a 'D1: Application for a Driving Licence' Form
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-2">
                Because name changes require physical proof of your new identity, DVLA does not allow you to change your name purely online. You need a paper D1 form.
              </p>
              <p className="text-xs text-gray-600">
                You can pick up a D1 form for free at most local Post Office branches or order one to be delivered by post from GOV.UK.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-sm font-bold">2</span>
                Complete the Required Sections
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-700">
                <li><strong>Section 1:</strong> Tick "To change my name and/or address on my licence".</li>
                <li><strong>Section 2:</strong> Enter your new full name, title, and current address. Write your former name in the previous name section.</li>
                <li><strong>Section 7:</strong> Sign the declaration using your <strong>NEW signature</strong> in your new legal name.</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-sm font-bold">3</span>
                Enclose Supporting Documents
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-3">
                Include the following items inside your envelope:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Your completed D1 application form.</li>
                <li>Your current photocard driving licence.</li>
                <li>Your original signed <strong>UK Deed Poll</strong> or marriage certificate.</li>
                <li>Our free custom DVLA cover letter (available via our <Link href="/name-change-letters-generator" className="text-[#1d70b8] underline font-bold">Letter Generator</Link>).</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-sm font-bold">4</span>
                Post to DVLA Swansea
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-2">
                Send your application envelope via Royal Mail Signed For or Special Delivery to:
              </p>
              <div className="bg-white border border-gray-300 p-4 rounded font-mono text-sm text-gray-800">
                DVLA<br />
                Swansea<br />
                SA99 1BN
              </div>
            </div>
          </div>
        </section>

        {/* Also Remember: Vehicle Logbook V5C */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
            Don't Forget: Update Your Vehicle Log Book (V5C)
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            If you own or are the registered keeper of a vehicle, updating your driving licence does <strong>not</strong> automatically update your car log book (V5C).
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Fill in Section 3 of your V5C log book with your new name and post it to: <strong>DVLA, Swansea, SA99 1BA</strong>. This is also completely free.
          </p>
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-[#00703c] rounded-xl p-6 sm:p-8 mb-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#0b0c0c]">Need your legal deed poll first?</h3>
            <p className="text-sm sm:text-base text-gray-700 mt-1 max-w-xl">
              Create your official UK Deed Poll in under 2 minutes completely free. Download the PDF instantly and send it to the DVLA.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="whitespace-nowrap bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-6 py-3.5 rounded-lg text-base sm:text-lg transition-transform active:scale-95 shadow-md flex-shrink-0"
          >
            Create Free Deed Poll PDF →
          </Link>
        </div>

        {/* Share Widget */}
        <ShareWidget
          title="How to Change Name on Driving Licence UK (DVLA Guide)"
          description="Complete guide to changing your name on your driving licence with the DVLA."
        />

      </div>
    </main>
  );
}
