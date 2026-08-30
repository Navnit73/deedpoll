import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

export const metadata: Metadata = {
  title: "Free Deed Poll Template UK (Word & PDF Download) — Official Legal Wording",
  description:
    "Download our 100% free UK deed poll template in Word and PDF format. Fully compliant with HM Passport Office, DVLA, and UK banks. Complete wording & witness guide.",
  alternates: {
    canonical: "/free-deed-poll-template-uk",
    languages: {
      "en-GB": "/free-deed-poll-template-uk",
      "x-default": "/free-deed-poll-template-uk",
    },
  },
  openGraph: {
    title: "Free Deed Poll Template UK (Word & PDF Download) — Official Legal Wording",
    description:
      "Download our 100% free UK deed poll template in Word and PDF format. Fully compliant with HM Passport Office, DVLA, and UK banks. Complete wording & witness guide.",
    url: "https://deedpolluk.uk/free-deed-poll-template-uk",
    type: "article",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Deed Poll Template UK (Word & PDF Download)",
    description:
      "Download our 100% free UK deed poll template in Word and PDF format. Fully compliant with HM Passport Office, DVLA, and UK banks.",
  }
};

export default function FreeDeedPollTemplatePage() {
  const sampleWording = `BY THIS DEED OF CHANGE OF NAME made by myself the undersigned [NEW FULL NAME] of [FULL RESIDENTIAL ADDRESS & POSTCODE] formerly known as [OLD FULL NAME] a British Citizen:

1. I ABSOLUTELY and entirely renounce, relinquish and abandon the use of my former name of [OLD FULL NAME] and assume, adopt and determine to take and use from the date hereof the name of [NEW FULL NAME] in substitution for my former name of [OLD FULL NAME].

2. I SHALL at all times hereafter in all records, deeds, documents and other writings and in all actions, suits and proceedings as well as in all dealings and transactions and upon all occasions whatsoever use and subscribe the said name of [NEW FULL NAME] as my name, in place of and in substitution for my former name of [OLD FULL NAME].

3. I EXPRESSLY AUTHORISE and require all persons at all times to designate, describe and address me by such adopted name of [NEW FULL NAME] accordingly.

IN WITNESS WHEREOF I have hereunto subscribed my adopted and substituted name of [NEW FULL NAME] and my relinquished name of [OLD FULL NAME] and provided my seal the day and year first above written.

SIGNED, SEALED AND DELIVERED as a Deed by the said:

[NEW SIGNATURE IN NEW NAME] _________________________________
(New Name: [NEW FULL NAME])

[FORMER SIGNATURE IN OLD NAME] ______________________________
(Formerly Known As: [OLD FULL NAME])

In the presence of:

FIRST WITNESS:
Signature: _________________________________
Name: [FIRST WITNESS FULL NAME]
Address: [FIRST WITNESS RESIDENTIAL ADDRESS]
Occupation: [FIRST WITNESS OCCUPATION]

SECOND WITNESS:
Signature: _________________________________
Name: [SECOND WITNESS FULL NAME]
Address: [SECOND WITNESS RESIDENTIAL ADDRESS]
Occupation: [SECOND WITNESS OCCUPATION]`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HowTo",
              "name": "How to Create a Free UK Deed Poll Using a Template",
              "description": "Step-by-step instructions on wording, printing, signing, and witnessing a legal UK deed poll for free.",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Insert personal details",
                  "text": "Fill in your former full legal name, chosen new name, current home address, and today's date into the template."
                },
                {
                  "@type": "HowToStep",
                  "name": "Print on quality paper",
                  "text": "Print at least 3 to 5 copies onto good quality standard A4 paper (100gsm+ recommended)."
                },
                {
                  "@type": "HowToStep",
                  "name": "Sign in front of independent witnesses",
                  "text": "Sign each copy in both your old signature and new signature in front of one or two independent adult witnesses who are not family members."
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is a free deed poll template legally valid in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Under UK law (England, Wales, and Scotland), an unenrolled deed poll does not require a solicitor or government registration. As long as it contains the correct legal declarations and is witnessed properly, it is fully legally binding."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who can witness a UK deed poll?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Any adult aged 18 or over who is a UK resident, knows you, and is not a family member or living at the same address as you can act as a witness."
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
            <li className="text-gray-900 font-semibold">Free Deed Poll Template UK</li>
          </ol>
        </nav>

        {/* H1 */}
        <div className="border-b-2 border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-blue-100 text-[#1d70b8] font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
            UK Legal Document Resource
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b0c0c]">
            Free UK Deed Poll Template (Word & PDF)
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Looking for a <strong>free deed poll template</strong> in the UK? Use the legally validated wording below or use our free instant PDF generator to create your ready-to-print deed poll in 2 minutes.
          </p>
        </div>

        {/* CTA Banner: Generator vs Manual Template */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-[#00703c] rounded-xl p-6 sm:p-8 mb-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="bg-[#00703c] text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-2">
              ⚡ Recommended: Instant Automated Generator
            </span>
            <h2 className="text-2xl font-bold text-[#0b0c0c]">Want an instantly formatted PDF?</h2>
            <p className="text-sm sm:text-base text-gray-700 mt-1 max-w-xl">
              Skip copy-pasting into Word. Our free automated system formats the legal text, validates names, and gives you a download-ready official PDF in under 2 minutes.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="whitespace-nowrap bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-6 py-3.5 rounded-lg text-base sm:text-lg transition-transform active:scale-95 shadow-md flex-shrink-0"
          >
            Generate Free Deed Poll PDF →
          </Link>
        </div>

        {/* Legal Text Template Container */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0b0c0c]">
            Official UK Unenrolled Deed Poll Wording
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            This wording follows statutory UK legal standards accepted by <strong>HM Passport Office, DVLA, HMRC, NHS, and all UK banks</strong>.
          </p>

          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 font-mono text-xs sm:text-sm text-gray-900 whitespace-pre-wrap leading-relaxed shadow-inner select-all relative">
            {sampleWording}
          </div>
        </section>

        {/* How to Execute a Deed Poll Template */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] border-b-2 border-gray-100 pb-3">
            How to Execute Your Deed Poll Template Correctly
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-300 rounded-lg p-5">
              <div className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center font-bold text-sm mb-3">1</div>
              <h3 className="text-lg font-bold mb-2">Print Multiple Originals</h3>
              <p className="text-sm text-gray-600">
                Print 3 to 5 copies on high-quality paper. Sign all copies at the same sitting so you have multiple legal originals to send to DVLA, Passport Office, and banks simultaneously.
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-5">
              <div className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center font-bold text-sm mb-3">2</div>
              <h3 className="text-lg font-bold mb-2">Sign in Both Names</h3>
              <p className="text-sm text-gray-600">
                You must sign the deed poll in your new signature as well as signing in your old signature. This demonstrates the legal transition from old name to new name.
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-5">
              <div className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center font-bold text-sm mb-3">3</div>
              <h3 className="text-lg font-bold mb-2">Independent Witnesses</h3>
              <p className="text-sm text-gray-600">
                Witnesses must physically watch you sign. They must be over 18, UK residents, and not family members or living at your home address (e.g. colleagues, neighbours, friends).
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-5">
              <div className="w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center font-bold text-sm mb-3">4</div>
              <h3 className="text-lg font-bold mb-2">No Court Registration Needed</h3>
              <p className="text-sm text-gray-600">
                Unenrolled deed polls become legally active the instant they are signed and witnessed. You do not need to register at the Royal Courts of Justice or pay solicitor fees.
              </p>
            </div>
          </div>
        </section>

        {/* Share Widget */}
        <ShareWidget
          title="Free UK Deed Poll Template (Word & PDF Download) — Legally Valid"
          description="Free legal UK deed poll template accepted by Passport Office, DVLA, and banks."
        />

        {/* Related Tools Callout */}
        <section className="bg-gray-100 rounded-xl p-6 sm:p-8 mt-10 border border-gray-300">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-4">
            Next Steps & Helpful Free Tools
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-[#1d70b8]">
            <li>
              <Link href="/name-change-letters-generator" className="hover:underline flex items-center gap-2">
                ✉️ Name Change Notification Letters Generator →
              </Link>
            </li>
            <li>
              <Link href="/checklist" className="hover:underline flex items-center gap-2">
                📋 Interactive Name Change Checklist →
              </Link>
            </li>
            <li>
              <Link href="/how-to-change-name-on-passport-uk" className="hover:underline flex items-center gap-2">
                🛂 How to Update Your Passport After Name Change →
              </Link>
            </li>
            <li>
              <Link href="/how-to-change-name-after-marriage-uk" className="hover:underline flex items-center gap-2">
                💍 Changing Your Name After Marriage Guide →
              </Link>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
