import type { Metadata } from 'next';
import Link from 'next/link';
import StampDutyCalculator from '@/components/StampDutyCalculator';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

export const metadata: Metadata = {
  title: 'Calculate Stamp Duty England — Official SDLT Calculator 2025/2026',
  description:
    'Calculate Stamp Duty Land Tax (SDLT) for property purchases in England & Northern Ireland. Real-time rates for first-time buyers, main homes, and additional properties.',
  alternates: {
    canonical: '/calculate-stamp-duty-england',
    languages: {
      'en-GB': '/calculate-stamp-duty-england',
      'x-default': '/calculate-stamp-duty-england',
    },
  },
  openGraph: {
    title: 'Calculate Stamp Duty England — Official SDLT Calculator 2025/2026',
    description:
      'Free real-time Stamp Duty Land Tax (SDLT) calculator for buying residential property in England and Northern Ireland. Includes first-time buyer relief & surcharge rules.',
    url: 'https://deedpolluk.uk/calculate-stamp-duty-england',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate Stamp Duty England — Official SDLT Calculator',
    description:
      'Free real-time UK Stamp Duty Land Tax (SDLT) calculator. Calculate rates for home movers, first-time buyers & buy-to-let properties in England.',
  },
};

export default function CalculateStampDutyEnglandPage() {
  return (
    <div className="bg-white">
      {/* BREADCRUMB & HERO */}
      <section className="bg-gray-50 border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs sm:text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline text-[#1d70b8]">
                  Home
                </Link>
              </li>
              <li><span>/</span></li>
              <li className="text-gray-800 font-medium">Calculate Stamp Duty England</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-gray-200 text-[#0b0c0c] text-xs sm:text-sm font-bold px-3 py-1 mb-3 rounded">
              HMRC SDLT Guidance & Calculator
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              Calculate Stamp Duty in England (SDLT Calculator)
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Use our free Stamp Duty Land Tax (SDLT) calculator to estimate how much tax you will pay
              when purchasing residential property in England or Northern Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StampDutyCalculator />
      </section>

      {/* EDUCATIONAL & SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-base sm:text-lg">
        {/* WHAT IS SDLT */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          What is Stamp Duty Land Tax (SDLT) in England?
        </h2>
        <p className="mb-4 text-gray-800">
          <strong>Stamp Duty Land Tax (SDLT)</strong> is a tax levied by HM Revenue & Customs (HMRC) on
          the purchase of property or land over a certain valuation threshold in <strong>England and Northern Ireland</strong>.
        </p>
        <p className="mb-6 text-gray-800">
          The amount of Stamp Duty you pay depends on several factors, including the property price,
          whether you are a first-time buyer, whether the property is your replacement main residence or an additional dwelling
          (such as a buy-to-let or holiday home), and your UK tax residency status.
        </p>

        {/* CURRENT SDLT BANDS TABLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Current UK Stamp Duty Rates & Bands (2025/2026)
        </h2>
        <p className="mb-4 text-gray-800">
          SDLT operates on a <strong>tiered progressive band system</strong>. You only pay the tax rate on the portion
          of the property price that falls within each specific price band.
        </p>

        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Property Portion (Price Band)</th>
                <th className="p-3 font-bold">Standard Rate (Main Residence)</th>
                <th className="p-3 font-bold">Additional Property Rate (+5%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">Up to £250,000</td>
                <td className="p-3 text-[#00703c] font-bold">0%</td>
                <td className="p-3 text-red-700 font-bold">5%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">£250,001 to £925,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">5%</td>
                <td className="p-3 text-red-700 font-bold">10%</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">£925,001 to £1,500,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">10%</td>
                <td className="p-3 text-red-700 font-bold">15%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Over £1,500,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">12%</td>
                <td className="p-3 text-red-700 font-bold">17%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FIRST TIME BUYERS RELIEF */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-5 my-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#1d70b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            First-Time Buyer Stamp Duty Relief Rules
          </h3>
          <p className="text-gray-800 text-base mb-3">
            If you are buying your first home and have never owned property anywhere in the world, you qualify for
            <strong> First-Time Buyer Relief</strong>:
          </p>
          <ul className="list-disc pl-5 text-base space-y-1.5 text-gray-800">
            <li><strong>0% Stamp Duty</strong> on property values up to <strong>£425,000</strong>.</li>
            <li><strong>5% Stamp Duty</strong> on the portion between <strong>£425,001 and £625,000</strong>.</li>
            <li>
              If the purchase price is <strong>over £625,000</strong>, First-Time Buyer Relief is lost entirely, and standard SDLT rates apply to the whole amount.
            </li>
          </ul>
        </div>

        {/* ADDITIONAL PROPERTY SURCHARGE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Additional Property Surcharge (Buy-to-Let & Second Homes)
        </h2>
        <p className="mb-4 text-gray-800">
          If you purchase an additional residential property (such as a second home, holiday cottage, or buy-to-let property)
          and you already own a residential property worth £40,000 or more, you must pay a <strong>5% higher rate surcharge</strong> on top of standard rates for each price band.
        </p>

        {/* NON UK RESIDENT SURCHARGE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Non-UK Resident Surcharge (+2%)
        </h2>
        <p className="mb-4 text-gray-800">
          Buyers who are non-UK residents are subject to a <strong>2% surcharge</strong> on top of all existing rates.
          If a non-UK resident buys an additional property, both the 5% additional property surcharge and 2% non-resident surcharge apply (adding a total 7% extra across all bands).
        </p>

        {/* WHEN & HOW TO PAY */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          When and How to Pay Stamp Duty to HMRC
        </h2>
        <p className="mb-4 text-gray-800">
          You must submit a Stamp Duty Land Tax return to HMRC and pay the duty within <strong>14 days of completion</strong> of the property transaction.
        </p>
        <p className="mb-6 text-gray-800">
          In almost all cases, your solicitor or conveyancer will handle the submission of your SDLT return and transfer the tax payable to HMRC on your completion day.
        </p>

        {/* REGIONAL DIFFERENCES */}
        <div className="bg-gray-100 p-6 rounded-xl border border-gray-300 my-8">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
            Regional Differences: Scotland & Wales
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            This calculator is designed for properties in <strong>England and Northern Ireland</strong>.
            If you are purchasing property in:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-700 space-y-1">
            <li><strong>Scotland</strong>: You will pay <em>Land and Buildings Transaction Tax (LBTT)</em>.</li>
            <li><strong>Wales</strong>: You will pay <em>Land Transaction Tax (LTT)</em>.</li>
          </ul>
        </div>

        {/* CROSS-LINKING TO DEED POLL / NAME CHANGE SERVICES */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Updating Land Registry Records After a Name Change?
            </h3>
            <p className="text-sm text-gray-700">
              If you have recently changed your legal name or got married, update your property deeds and logbooks effortlessly with an official UK Deed Poll.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Create Deed Poll Free →
          </Link>
        </div>

        <ShareWidget
          title="Free Stamp Duty Calculator England (SDLT) — Real-Time Rates"
          description="Calculate exact Stamp Duty Land Tax on property in England & Northern Ireland."
          className="my-8"
        />

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-6">
            Frequently Asked Questions — Stamp Duty England
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How much is Stamp Duty on a £350,000 house in England?
              </h3>
              <p className="text-gray-700">
                For a standard home mover (replacing main residence), Stamp Duty on a £350,000 property is <strong>£5,000</strong> (0% on the first £250k + 5% on the remaining £100k). If you are a First-Time Buyer, you pay <strong>£0</strong>.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                Who qualifies as a First-Time Buyer for Stamp Duty relief?
              </h3>
              <p className="text-gray-700">
                To qualify as a First-Time Buyer, an individual must intend to occupy the property as their main residence and must never have held a major interest in a residential property in the UK or anywhere else in the world.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                Can Stamp Duty be added to a mortgage?
              </h3>
              <p className="text-gray-700">
                Yes, many lenders allow buyers to add the cost of Stamp Duty to their mortgage loan, provided it does not exceed loan-to-value limits. However, doing so increases the total interest paid over the mortgage term.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                What happens if I sell my previous main home after buying a new one?
              </h3>
              <p className="text-gray-700">
                If you pay the 5% additional property surcharge when buying a replacement main home before selling your old one, you can claim a refund from HMRC for the surcharge as long as you sell your previous main home within 36 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://deedpolluk.uk/calculate-stamp-duty-england/#webpage',
              url: 'https://deedpolluk.uk/calculate-stamp-duty-england',
              name: 'Calculate Stamp Duty England — Official SDLT Calculator 2025/2026',
              description:
                'Calculate Stamp Duty Land Tax (SDLT) for residential property in England and Northern Ireland.',
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': 'https://deedpolluk.uk/calculate-stamp-duty-england/#calculator',
              name: 'Stamp Duty England Calculator',
              url: 'https://deedpolluk.uk/calculate-stamp-duty-england',
              applicationCategory: 'FinancialApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0.00',
                priceCurrency: 'GBP',
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much is Stamp Duty on a £350,000 house in England?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For a standard home mover, Stamp Duty on a £350,000 home is £5,000. First-time buyers pay £0.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Who qualifies as a First-Time Buyer for Stamp Duty relief?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'An individual who intends to occupy the property as their main residence and has never owned a dwelling anywhere in the world.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When must Stamp Duty be paid to HMRC?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Stamp Duty Land Tax must be filed and paid to HMRC within 14 days of property completion.',
                  },
                },
              ],
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://deedpolluk.uk',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Calculate Stamp Duty England',
                  item: 'https://deedpolluk.uk/calculate-stamp-duty-england',
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
