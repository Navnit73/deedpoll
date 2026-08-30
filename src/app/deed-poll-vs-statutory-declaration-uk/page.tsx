import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

export const metadata: Metadata = {
  title: "Deed Poll vs Statutory Declaration UK: What's the Difference?",
  description:
    "Deed Poll vs Statutory Declaration for UK name changes. Understand legal differences, costs, solicitor requirements, and which document you need for passport and DVLA.",
  alternates: {
    canonical: "/deed-poll-vs-statutory-declaration-uk",
    languages: {
      "en-GB": "/deed-poll-vs-statutory-declaration-uk",
      "x-default": "/deed-poll-vs-statutory-declaration-uk",
    },
  },
  openGraph: {
    title: "Deed Poll vs Statutory Declaration UK: What's the Difference?",
    description:
      "Deed Poll vs Statutory Declaration for UK name changes. Understand legal differences, costs, solicitor requirements, and which document you need for passport and DVLA.",
    url: "https://deedpolluk.uk/deed-poll-vs-statutory-declaration-uk",
    type: "article",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deed Poll vs Statutory Declaration UK: What's the Difference?",
    description:
      "Understand legal differences, costs, solicitor requirements, and which document you need for your UK name change.",
  }
};

export default function DeedPollVsStatutoryDeclarationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Deed Poll vs Statutory Declaration: Which Do You Need in the UK?",
              "description": "A comprehensive comparison between a Deed of Change of Name (Deed Poll) and a Statutory Declaration for changing your name in the UK.",
              "publisher": {
                "@type": "Organization",
                "name": "Deed Poll UK",
                "url": "https://deedpolluk.uk"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the main difference between a deed poll and a statutory declaration?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A deed poll is a formal binding agreement made by yourself and witnessed by independent adults without needing a solicitor or fee. A statutory declaration is a sworn statement of truth governed by the Statutory Declarations Act 1835 that must be signed in front of a solicitor or Commissioner for Oaths."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will the Passport Office accept a deed poll or do I need a statutory declaration?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HM Passport Office readily accepts an unenrolled deed poll for virtually all standard name changes. A statutory declaration is generally only requested in complex dual-nationality cases or historical name discrepancies."
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
            <li className="text-gray-900 font-semibold">Deed Poll vs Statutory Declaration</li>
          </ol>
        </nav>

        {/* H1 */}
        <div className="border-b-2 border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-purple-100 text-purple-800 font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
            UK Legal Comparison
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b0c0c]">
            Deed Poll vs Statutory Declaration: Which Do You Need?
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Both documents can be used to prove a change of name in the UK, but they work very differently. Here is how they compare on cost, legal standing, and official acceptance.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-6 rounded-r-xl mb-10 text-gray-800">
          <h2 className="text-xl font-bold text-[#0b0c0c] mb-2">
            Quick Verdict: Which should you choose?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            For <strong>99% of UK residents</strong> changing their first name or surname, an <strong>unenrolled Deed Poll</strong> is the standard, simplest, and most cost-effective method (free online). You only need a Statutory Declaration if specifically requested by a foreign embassy, professional regulatory board, or immigration authority.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0b0c0c]">
            Key Differences at a Glance
          </h2>
          
          <div className="overflow-x-auto border border-gray-300 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead className="bg-gray-100 text-[#0b0c0c] font-bold border-b border-gray-300">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 bg-blue-50 text-[#1d70b8]">Deed Poll</th>
                  <th className="p-4">Statutory Declaration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Legal Governing Act</td>
                  <td className="p-4 bg-blue-50/50">UK Common Law</td>
                  <td className="p-4">Statutory Declarations Act 1835</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Solicitor Required?</td>
                  <td className="p-4 bg-blue-50/50 text-[#00703c] font-semibold">No — any adult witness</td>
                  <td className="p-4 text-red-600 font-semibold">Yes — Solicitor / Commissioner</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Cost</td>
                  <td className="p-4 bg-blue-50/50 text-[#00703c] font-bold">100% Free online</td>
                  <td className="p-4">£5–£20 oath swearing fee + solicitor time</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Passport Office Accepted?</td>
                  <td className="p-4 bg-blue-50/50 text-[#00703c] font-bold">✓ Yes (Standard)</td>
                  <td className="p-4">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">DVLA & Banks Accepted?</td>
                  <td className="p-4 bg-blue-50/50 text-[#00703c] font-bold">✓ Yes (Universal)</td>
                  <td className="p-4">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Time to Complete</td>
                  <td className="p-4 bg-blue-50/50 font-bold">2 Minutes</td>
                  <td className="p-4">Requires appointment with a solicitor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Dive on Deed Poll */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
            What is a Deed Poll?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            A Deed Poll (officially a <em>Deed of Change of Name</em>) is a legally binding legal deed in which you formally renounce your former name and promise to use your new name for all official and personal purposes.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Because English common law recognises your legal right to be known by any name you choose (provided there is no intent to defraud), an unenrolled Deed Poll does not require court registration or expensive legal fees.
          </p>
        </section>

        {/* Deep Dive on Statutory Declaration */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
            What is a Statutory Declaration?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            A Statutory Declaration is a formal statement of fact sworn under the Statutory Declarations Act 1835. Making a false statutory declaration is a criminal offence equivalent to perjury.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            You must swear or affirm the document in person before an authorised official (such as a practicing solicitor, Commissioner for Oaths, or notary public) who will stamp and sign the declaration for a statutory fee.
          </p>
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#1d70b8] rounded-xl p-6 sm:p-8 mb-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#0b0c0c]">Need a legal name change today?</h3>
            <p className="text-sm sm:text-base text-gray-700 mt-1 max-w-xl">
              Create your official UK Deed Poll for free. Generate your instant PDF and start updating your passport and driving licence immediately.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="whitespace-nowrap bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-6 py-3.5 rounded-lg text-base sm:text-lg transition-transform active:scale-95 shadow-md flex-shrink-0"
          >
            Create Free Deed Poll →
          </Link>
        </div>

        {/* Share Widget */}
        <ShareWidget
          title="Deed Poll vs Statutory Declaration UK: Which Do You Need?"
          description="Legal comparison of deed polls vs statutory declarations in the UK."
        />

      </div>
    </main>
  );
}
