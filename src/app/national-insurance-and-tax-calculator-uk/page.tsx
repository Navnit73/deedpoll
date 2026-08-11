import type { Metadata } from 'next';
import Link from 'next/link';
import NationalInsuranceTaxCalculator from '@/components/NationalInsuranceTaxCalculator';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'National Insurance and Tax Calculator UK — Official NI Tax Calculator',
  description:
    'Free national insurance and tax calculator uk. Calculate income tax and national insurance uk contributions for employees & employers for 2025/2026.',
  alternates: {
    canonical: '/national-insurance-and-tax-calculator-uk',
    languages: {
      'en-GB': '/national-insurance-and-tax-calculator-uk',
      'x-default': '/national-insurance-and-tax-calculator-uk',
    },
  },
  openGraph: {
    title: 'National Insurance and Tax Calculator UK — Official NI Tax Calculator',
    description:
      'Use our ni tax calculator uk to calculate uk national insurance calculator contributions, PAYE tax, and employer NI rates.',
    url: 'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'National Insurance and Tax Calculator UK',
    description:
      'Free UK NI contributions calculator. Calculate employee & employer national insurance tax rates in England & UK.',
  },
};

export default function NationalInsuranceTaxCalculatorPage() {
  const niBands = [
    { category: 'Class 1 Employee (Primary)', threshold: '£12,570 to £50,270', rate: '8%', note: 'Deducted via PAYE on monthly earnings over £1,048' },
    { category: 'Class 1 Employee (Upper)', threshold: 'Over £50,270', rate: '2%', note: 'Applies to earnings above £4,189 per month' },
    { category: 'Class 1 Employer (Secondary)', threshold: 'Over £5,000', rate: '15%', note: 'Paid directly by employer on employee earnings' },
    { category: 'Class 2 Self-Employed', threshold: 'Over £12,570', rate: 'Flat rate / Exempt', note: 'Voluntary contributions for qualifying State Pension years' },
    { category: 'Class 4 Self-Employed', threshold: '£12,570 to £50,270', rate: '6%', note: 'Calculated on net self-employed profits' },
  ];

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
              <li className="text-gray-800 font-medium">National Insurance and Tax Calculator UK</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-gray-200 text-[#0b0c0c] text-xs sm:text-sm font-bold px-3 py-1 mb-3 rounded">
              HMRC NI & Income Tax Guidance 2025/2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              National Insurance and Tax Calculator UK
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Use our <strong>national insurance and tax calculator uk</strong> to <strong>calculate income tax and national insurance uk</strong> contributions for both employees and employers.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NationalInsuranceTaxCalculator />
      </section>

      {/* CONTENT & SEO KEYWORD OPTIMIZATION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-base sm:text-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          Understanding UK National Insurance & Tax Deductions
        </h2>
        <p className="mb-4 text-gray-800">
          In the UK, National Insurance (NI) is a fundamental tax paid by workers and employers to fund state benefits, including the <strong>UK State Pension</strong>, statutory maternity pay, and the NHS.
        </p>
        <p className="mb-6 text-gray-800">
          Whether you are looking for a <strong>ni tax calculator uk</strong>, a <strong>uk national insurance calculator</strong>, or an <strong>employer ni calculator uk</strong>, our tool aligns with the latest <strong>gov uk national insurance calculator</strong> rules for 2025/2026.
        </p>

        {/* NI RATES & BANDS TABLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          National Insurance Rates & Bands (2025/2026)
        </h2>
        <p className="mb-4 text-gray-800">
          Here is a breakdown of rates used in our <strong>national insurance tax calculator uk</strong>:
        </p>

        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">NI Class & Type</th>
                <th className="p-3 font-bold">Earnings Threshold</th>
                <th className="p-3 font-bold">Applied Rate</th>
                <th className="p-3 font-bold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {niBands.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="p-3 font-bold text-[#0b0c0c]">{row.category}</td>
                  <td className="p-3 font-medium text-gray-800">{row.threshold}</td>
                  <td className="p-3 font-bold text-[#00703c]">{row.rate}</td>
                  <td className="p-3 text-xs text-gray-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPLOYER NI CALCULATOR UK HIGHLIGHT */}
        <div className="bg-purple-50 border-l-4 border-purple-800 p-5 my-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
            Employer Secondary Class 1 NI Calculator UK
          </h3>
          <p className="text-gray-800 text-base mb-2">
            If you operate a UK business or employ staff, employers pay <strong>Employer Secondary Class 1 National Insurance</strong> on employee earnings above £5,000 per year at a rate of <strong>15%</strong>.
          </p>
          <p className="text-gray-800 text-base">
            Use the "Employer NI" tab in our <strong>ni calculator uk</strong> to calculate the total employment cost (Gross Salary + Employer Secondary NI) for any employee.
          </p>
        </div>

        {/* UK NI CONTRIBUTIONS CALCULATOR GUIDANCE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          How to Check Your UK NI Contributions & State Pension Qualifying Years
        </h2>
        <p className="mb-4 text-gray-800">
          Using a <strong>uk ni contributions calculator</strong> helps you ensure you earn above the Primary Threshold (£12,570) or Lower Earnings Limit (£6,396) so that each tax year counts as a <strong>qualifying year for your UK State Pension</strong>.
        </p>
        <p className="mb-6 text-gray-800">
          To receive the full new UK State Pension, individuals generally need 35 qualifying National Insurance years on their HMRC record.
        </p>

        {/* CROSS-LINK TO DEED POLL / NAME CHANGE SERVICES */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Need to Update Your National Insurance Record After Changing Your Name?
            </h3>
            <p className="text-sm text-gray-700">
              When changing your name by Deed Poll, you must inform HMRC to ensure your National Insurance number and employment tax records remain correctly linked to your new legal name.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Create Deed Poll Free →
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-6">
            Frequently Asked Questions — National Insurance and Tax Calculator UK
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                What is the current Employee National Insurance rate in the UK?
              </h3>
              <p className="text-gray-700">
                For Class 1 employees, National Insurance is charged at 8% on earnings between £12,570 and £50,270 per year (£1,048 to £4,189 per month), and 2% on earnings above £50,270.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How much is Employer National Insurance in 2025/2026?
              </h3>
              <p className="text-gray-700">
                Employers pay 15% Secondary Class 1 National Insurance on employee earnings above £5,000 per year, subject to the Employment Allowance if eligible.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How do I notify HMRC of a name change on my National Insurance record?
              </h3>
              <p className="text-gray-700">
                You can report a name change to HMRC online via your Personal Tax Account or by posting a copy of your signed Deed Poll along with your National Insurance number.
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
              '@id': 'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk/#webpage',
              url: 'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk',
              name: 'National Insurance and Tax Calculator UK — Official NI Tax Calculator',
              description:
                'Calculate Income Tax and National Insurance contributions for UK employees and employers.',
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': 'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk/#calculator',
              name: 'National Insurance and Tax Calculator UK',
              url: 'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk',
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
                  name: 'What is the current Employee National Insurance rate in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Employee NI is 8% between £12,570 and £50,270, and 2% on earnings above £50,270.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much is Employer National Insurance in 2025/2026?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Employers pay 15% Secondary Class 1 NI on employee earnings above £5,000 per year.',
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
                  name: 'National Insurance and Tax Calculator UK',
                  item: 'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk',
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
