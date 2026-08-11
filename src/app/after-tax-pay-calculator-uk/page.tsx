import type { Metadata } from 'next';
import Link from 'next/link';
import AfterTaxPayCalculator from '@/components/AfterTaxPayCalculator';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'After Tax Pay Calculator UK — Calculate UK Salary After Tax',
  description:
    'Free after tax pay calculator UK. Calculate your uk after tax salary, monthly wages, income tax, and national insurance deductions for 2025/2026.',
  alternates: {
    canonical: '/after-tax-pay-calculator-uk',
    languages: {
      'en-GB': '/after-tax-pay-calculator-uk',
      'x-default': '/after-tax-pay-calculator-uk',
    },
  },
  openGraph: {
    title: 'After Tax Pay Calculator UK — Calculate UK Salary After Tax',
    description:
      'Calculate earnings after tax calculator UK. Free interactive tool to calculate wages after tax UK including Income Tax, NI, student loans, and pension.',
    url: 'https://deedpolluk.uk/after-tax-pay-calculator-uk',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After Tax Pay Calculator UK — Take-Home Salary Calculator',
    description:
      'Find out your exact after tax income calculator UK results. Calculate 50k, 60k, 70k, 80k after tax UK take-home pay.',
  },
};

export default function AfterTaxPayCalculatorPage() {
  const salaryBenchmarks = [
    { gross: 30000, label: '£30k after tax UK', netYearly: 24784, netMonthly: 2065, totalTaxNi: 5216, rate: '17.4%' },
    { gross: 40000, label: '£40k after tax UK', netYearly: 31784, netMonthly: 2649, totalTaxNi: 8216, rate: '20.5%' },
    { gross: 50000, label: '50000 after tax uk (50k after tax uk)', netYearly: 38784, netMonthly: 3232, totalTaxNi: 11216, rate: '22.4%' },
    { gross: 55000, label: '55000 after tax uk (55k after tax uk)', netYearly: 42165, netMonthly: 3514, totalTaxNi: 12835, rate: '23.3%' },
    { gross: 60000, label: '60000 after tax uk (60k after tax uk)', netYearly: 45065, netMonthly: 3755, totalTaxNi: 14935, rate: '24.9%' },
    { gross: 65000, label: '65000 after tax uk (65k after tax uk)', netYearly: 47965, netMonthly: 3997, totalTaxNi: 17035, rate: '26.2%' },
    { gross: 70000, label: '70000 after tax uk (70k after tax uk)', netYearly: 50865, netMonthly: 4239, totalTaxNi: 19135, rate: '27.3%' },
    { gross: 80000, label: '80000 after tax uk (80k after tax uk)', netYearly: 56665, netMonthly: 4722, totalTaxNi: 23335, rate: '29.2%' },
    { gross: 100000, label: '£100k after tax UK', netYearly: 68265, netMonthly: 5689, totalTaxNi: 31735, rate: '31.7%' },
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
              <li className="text-gray-800 font-medium">After Tax Pay Calculator UK</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-gray-200 text-[#0b0c0c] text-xs sm:text-sm font-bold px-3 py-1 mb-3 rounded">
              HMRC Income Tax & NI Guide (2025/2026)
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              After Tax Pay Calculator UK — Calculate UK Salary After Tax
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Use our accurate <strong>after tax calculator uk</strong> to <strong>calculate uk salary after tax</strong>, National Insurance, pension contributions, and student loan repayments.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR COMPONENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AfterTaxPayCalculator />
      </section>

      {/* CONTENT & SEO KEYWORD OPTIMIZATION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-base sm:text-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          How to Calculate Wages After Tax in the UK
        </h2>
        <p className="mb-4 text-gray-800">
          When reviewing a new job offer or planning your personal finances, knowing your exact <strong>uk after tax salary</strong> is essential. Your gross annual wage listed on an employment contract does not reflect what arrives in your bank account every payday.
        </p>
        <p className="mb-6 text-gray-800">
          With our <strong>after tax pay calculator uk</strong>, you can quickly <strong>calculate wages after tax uk</strong> to see your exact take-home pay broken down by year, month, week, or hour.
        </p>

        {/* UK TAX BANDS BREAKDOWN */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          UK Income Tax Rates & Personal Allowance (2025/2026)
        </h2>
        <p className="mb-4 text-gray-800">
          Your <strong>earnings after tax calculator uk</strong> results are determined by HMRC's progressive tax bands:
        </p>

        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Tax Band</th>
                <th className="p-3 font-bold">Taxable Income Threshold</th>
                <th className="p-3 font-bold">Income Tax Rate</th>
                <th className="p-3 font-bold">National Insurance Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">Personal Allowance</td>
                <td className="p-3 font-medium">Up to £12,570</td>
                <td className="p-3 text-[#00703c] font-bold">0%</td>
                <td className="p-3 text-[#00703c] font-bold">0%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Basic Rate</td>
                <td className="p-3 font-medium">£12,571 to £50,270</td>
                <td className="p-3 text-[#1d70b8] font-bold">20%</td>
                <td className="p-3 font-bold">8%</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Higher Rate</td>
                <td className="p-3 font-medium">£50,271 to £125,140</td>
                <td className="p-3 text-red-700 font-bold">40%</td>
                <td className="p-3 font-bold">2%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Additional Rate</td>
                <td className="p-3 font-medium">Over £125,140</td>
                <td className="p-3 text-red-700 font-bold">45%</td>
                <td className="p-3 font-bold">2%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BENCHMARK SALARIES TABLE (KEYWORDS 50k, 55k, 60k, 65k, 70k, 80k after tax uk) */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Popular UK Salaries After Tax Breakdown (£50k to £100k)
        </h2>
        <p className="mb-4 text-gray-800">
          Compare common UK gross salaries using our <strong>salary after tax uk calculator</strong> benchmark guide below (based on standard tax allowance without pension/student loans):
        </p>

        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0b0c0c] text-white">
              <tr>
                <th className="p-3 font-bold">Gross Salary</th>
                <th className="p-3 font-bold">Net Yearly Pay</th>
                <th className="p-3 font-bold">Net Monthly Pay</th>
                <th className="p-3 font-bold">Total Deductions (Tax + NI)</th>
                <th className="p-3 font-bold">Effective Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {salaryBenchmarks.map((b, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="p-3 font-bold text-[#1d70b8]">{b.label}</td>
                  <td className="p-3 font-bold text-[#00703c]">£{b.netYearly.toLocaleString('en-GB')}</td>
                  <td className="p-3 font-bold text-[#00703c]">£{b.netMonthly.toLocaleString('en-GB')}</td>
                  <td className="p-3 text-gray-700">£{b.totalTaxNi.toLocaleString('en-GB')}</td>
                  <td className="p-3 font-semibold text-gray-600">{b.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SPECIFIC SALARY HIGHLIGHTS */}
        <div className="space-y-6 my-8">
          <div className="bg-gray-50 border-l-4 border-[#1d70b8] p-5 rounded-r-lg">
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
              50,000 After Tax UK (50k After Tax UK)
            </h3>
            <p className="text-gray-800 text-base">
              If your gross wage is <strong>£50,000</strong>, your <strong>50000 after tax uk</strong> salary yields approximately <strong>£38,784 per year</strong> or <strong>£3,232 per month</strong> in net take-home pay. You pay £7,486 in Income Tax and £2,994 in Class 1 National Insurance.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-[#1d70b8] p-5 rounded-r-lg">
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
              55,000 After Tax UK (55k After Tax UK)
            </h3>
            <p className="text-gray-800 text-base">
              A gross salary of <strong>55000 after tax uk</strong> gives you roughly <strong>£42,165 per year</strong> (£3,514 per month). Income above £50,270 enters the 40% Higher Rate tax band.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-[#1d70b8] p-5 rounded-r-lg">
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
              60,000 & 65,000 After Tax UK (60k & 65k After Tax UK)
            </h3>
            <p className="text-gray-800 text-base">
              Earning <strong>60k after tax uk</strong> yields <strong>£45,065 per year</strong> (£3,755 per month). Step up to <strong>65000 after tax uk (65k after tax uk)</strong> and your take-home pay increases to <strong>£47,965 per year</strong> (£3,997 per month).
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-[#1d70b8] p-5 rounded-r-lg">
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
              70,000 & 80,000 After Tax UK (70k & 80k After Tax UK)
            </h3>
            <p className="text-gray-800 text-base">
              For <strong>70000 after tax uk (70k after tax uk)</strong>, your net earnings equal <strong>£50,865 per year</strong> (£4,239 per month). On an <strong>80000 after tax uk (80k after tax uk)</strong> salary, your take-home pay reaches <strong>£56,665 per year</strong> (£4,722 per month).
            </p>
          </div>
        </div>

        {/* CROSS-LINK TO NAME CHANGE / LEGAL DOCUMENTS */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Updating HMRC & Employer Records After Changing Your Name?
            </h3>
            <p className="text-sm text-gray-700">
              When changing your name, ensure HMRC, your employer, and bank accounts receive your official Deed Poll so your tax codes and salary payments remain uninterrupted.
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
            Frequently Asked Questions — UK Salary After Tax
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How does pension contribution affect my after tax uk calculator results?
              </h3>
              <p className="text-gray-700">
                Most workplace pension contributions in the UK are deducted before tax (via Salary Sacrifice or Net Pay arrangements). This lowers your taxable income, reducing the amount of Income Tax and National Insurance you pay.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                What happens to Personal Allowance over £100,000?
              </h3>
              <p className="text-gray-700">
                If your adjusted net income exceeds £100,000, your tax-free Personal Allowance (£12,570) is reduced by £1 for every £2 of income above £100,000. At £125,140 or more, your Personal Allowance is zero, resulting in an effective 60% marginal tax rate between £100k and £125k.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How are student loans deducted from wages after tax UK?
              </h3>
              <p className="text-gray-700">
                Student loan repayments are calculated on earnings above your specific plan threshold (e.g. Plan 2 is 9% on income above £27,295). It is deducted alongside Income Tax and NI by your employer via PAYE.
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
              '@id': 'https://deedpolluk.uk/after-tax-pay-calculator-uk/#webpage',
              url: 'https://deedpolluk.uk/after-tax-pay-calculator-uk',
              name: 'After Tax Pay Calculator UK — Calculate UK Salary After Tax',
              description:
                'Calculate your after tax income calculator UK results, including Income Tax, NI, student loans, and pension.',
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': 'https://deedpolluk.uk/after-tax-pay-calculator-uk/#calculator',
              name: 'After Tax Pay Calculator UK',
              url: 'https://deedpolluk.uk/after-tax-pay-calculator-uk',
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
                  name: 'How much is 50k after tax in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A gross salary of £50,000 yields approximately £38,784 per year or £3,232 per month after Income Tax and National Insurance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much is 60k after tax in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A gross salary of £60,000 yields approximately £45,065 per year or £3,755 per month after tax.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much is 80k after tax in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A gross salary of £80,000 yields approximately £56,665 per year or £4,722 per month after tax.',
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
                  name: 'After-Tax Pay Calculator UK',
                  item: 'https://deedpolluk.uk/after-tax-pay-calculator-uk',
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
