import type { Metadata } from 'next';
import Link from 'next/link';
import StampDutyCalculator from '@/components/StampDutyCalculator';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

const PAGE_URL = 'https://deedpolluk.uk/calculate-stamp-duty-england';
const PAGE_TITLE = 'Stamp Duty Calculator UK 2026 – How Much SDLT Will I Pay?';
const PAGE_DESCRIPTION =
  'Free stamp duty calculator for England and Northern Ireland. Work out your SDLT in seconds for first-time buyers, home movers, second homes and buy-to-let, using current HMRC rates.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/calculate-stamp-duty-england',
    languages: {
      'en-GB': '/calculate-stamp-duty-england',
      'x-default': '/calculate-stamp-duty-england',
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stamp Duty Calculator UK 2026 (England & NI)',
    description:
      'Find out how much stamp duty you will pay. Current SDLT rates for first-time buyers, home movers, second homes and buy-to-let.',
  },
};

// Worked examples at current rates (from 1 April 2025)
const EXAMPLES = [
  { price: '£200,000', mover: '£1,500', ftb: '£0', additional: '£11,500' },
  { price: '£270,000', mover: '£3,500', ftb: '£0', additional: '£17,000' },
  { price: '£300,000', mover: '£5,000', ftb: '£0', additional: '£20,000' },
  { price: '£350,000', mover: '£7,500', ftb: '£2,500', additional: '£25,000' },
  { price: '£500,000', mover: '£15,000', ftb: '£10,000', additional: '£40,000' },
  { price: '£750,000', mover: '£27,500', ftb: '£27,500', additional: '£65,000' },
  { price: '£1,000,000', mover: '£43,750', ftb: '£43,750', additional: '£93,750' },
];

const FAQS = [
  {
    q: 'How much stamp duty will I pay?',
    a: 'Your stamp duty depends on the purchase price and your buyer status. A home mover pays 0% on the first £125,000, 2% on the next £125,000, 5% up to £925,000, 10% up to £1.5 million and 12% above that. First-time buyers pay nothing up to £300,000. Enter your price in the calculator above to see your exact figure.',
  },
  {
    q: 'How much stamp duty will I pay on £270k?',
    a: 'A home mover pays £3,500 on a £270,000 property: £0 on the first £125,000, £2,500 on the next £125,000 and £1,000 on the final £20,000. A first-time buyer pays £0. If the home is an additional property, the bill rises to £17,000.',
  },
  {
    q: 'How much is stamp duty on a £350,000 house in England?',
    a: 'A home mover pays £7,500 on a £350,000 house. A first-time buyer pays £2,500 (5% on the £50,000 above £300,000). A buyer of a second home or buy-to-let pays £25,000.',
  },
  {
    q: 'Is stamp duty different in London?',
    a: 'No. London uses the same Stamp Duty Land Tax rates as the rest of England. Buyers in London often pay more simply because property prices are higher, so more of the price falls into the 5% and 10% bands.',
  },
  {
    q: 'How much stamp duty do I pay on a second home?',
    a: 'You pay the standard rates plus a 5% surcharge on every band. The surcharge applies if the property costs £40,000 or more and you will own more than one home at the end of the day of purchase. On a £300,000 second home, the total is £20,000.',
  },
  {
    q: 'How much stamp duty do I pay on land?',
    a: 'Residential land, such as a garden sold with a house, uses residential rates. Non-residential or mixed-use land, such as farmland or a commercial plot, uses lower rates: 0% up to £150,000, 2% from £150,001 to £250,000 and 5% above £250,000.',
  },
  {
    q: 'Who qualifies as a first-time buyer for stamp duty relief?',
    a: 'You qualify if you have never owned a home in the UK or anywhere else in the world, and you will live in the property as your main residence. In a joint purchase, every buyer must be a first-time buyer. The price must not exceed £500,000.',
  },
  {
    q: 'When do I pay stamp duty?',
    a: 'You must file an SDLT return and pay HMRC within 14 days of completion. Your solicitor or conveyancer normally files the return and pays the tax for you on completion day.',
  },
  {
    q: 'Can I add stamp duty to my mortgage?',
    a: 'Some lenders let you borrow extra to cover stamp duty, as long as you stay within their loan-to-value limits. Borrowing it means you pay interest on it for the full mortgage term, so paying it from savings usually costs less.',
  },
  {
    q: 'Can I get the second home surcharge refunded?',
    a: 'Yes. If you buy a new main home before selling your old one, you pay the 5% surcharge at first. Sell your previous main home within 36 months and you can claim the surcharge back from HMRC.',
  },
  {
    q: 'How much was stamp duty in 2018?',
    a: 'In 2018, home movers paid 0% up to £125,000, 2% up to £250,000, 5% up to £925,000, 10% up to £1.5 million and 12% above. First-time buyers paid 0% up to £300,000 and 5% up to £500,000. The surcharge on additional homes was 3% at the time, not today’s 5%.',
  },
];

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
              <li className="text-gray-800 font-medium">Stamp Duty Calculator</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-gray-200 text-[#0b0c0c] text-xs sm:text-sm font-bold px-3 py-1 mb-3 rounded">
              Updated for 2026/27 · England & Northern Ireland
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              Stamp Duty Calculator UK: How Much Stamp Duty Will I Pay?
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Enter the property price to see your Stamp Duty Land Tax (SDLT) bill in seconds. The calculator
              covers first-time buyers, home movers, second homes, buy-to-let and non-UK residents in England
              and Northern Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StampDutyCalculator />
      </section>

      {/* EDUCATIONAL & SEO CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-base sm:text-lg">
        {/* QUICK ANSWER */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-5 mb-10 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#0b0c0c] mb-2">Stamp duty at a glance</h2>
          <ul className="list-disc pl-5 text-base space-y-1.5 text-gray-800">
            <li>Home movers pay <strong>nothing on the first £125,000</strong>.</li>
            <li>First-time buyers pay <strong>nothing up to £300,000</strong> (on homes costing up to £500,000).</li>
            <li>Second homes and buy-to-let attract a <strong>5% surcharge</strong> on every band.</li>
            <li>Non-UK residents pay an extra <strong>2%</strong>.</li>
            <li>You must pay HMRC <strong>within 14 days</strong> of completion.</li>
          </ul>
        </div>

        {/* WHAT IS SDLT */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          What Is Stamp Duty Land Tax (SDLT)?
        </h2>
        <p className="mb-4 text-gray-800">
          <strong>Stamp Duty Land Tax (SDLT)</strong> is the tax you pay when you buy property or land above a
          set price in <strong>England and Northern Ireland</strong>. HM Revenue & Customs (HMRC) collects it.
        </p>
        <p className="mb-6 text-gray-800">
          Four things decide how much you pay: the purchase price, whether you are a first-time buyer, whether
          you will own more than one home, and whether you are a UK resident for SDLT purposes.
        </p>

        {/* CURRENT SDLT BANDS TABLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Stamp Duty Rates in England (2026/27)
        </h2>
        <p className="mb-4 text-gray-800">
          These rates have applied since <strong>1 April 2025</strong>. SDLT is a <strong>tiered tax</strong>:
          you pay each rate only on the part of the price that falls inside that band, not on the whole price.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-3 mt-6">
          Home movers, second homes and buy-to-let
        </h3>
        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Portion of the price</th>
                <th className="p-3 font-bold">Main home rate</th>
                <th className="p-3 font-bold">Additional property rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">Up to £125,000</td>
                <td className="p-3 text-[#00703c] font-bold">0%</td>
                <td className="p-3 text-red-700 font-bold">5%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">£125,001 to £250,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">2%</td>
                <td className="p-3 text-red-700 font-bold">7%</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">£250,001 to £925,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">5%</td>
                <td className="p-3 text-red-700 font-bold">10%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">£925,001 to £1,500,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">10%</td>
                <td className="p-3 text-red-700 font-bold">15%</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Over £1,500,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">12%</td>
                <td className="p-3 text-red-700 font-bold">17%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-3 mt-6">First-time buyers</h3>
        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Portion of the price</th>
                <th className="p-3 font-bold">First-time buyer rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">Up to £300,000</td>
                <td className="p-3 text-[#00703c] font-bold">0%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">£300,001 to £500,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">5%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-gray-800">
          If the price is <strong>over £500,000</strong>, you lose first-time buyer relief entirely and pay the
          standard home mover rates on the whole price.
        </p>

        {/* HOW TO CALCULATE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          How to Calculate Stamp Duty Land Tax
        </h2>
        <p className="mb-4 text-gray-800">
          Our calculator does the maths for you, but you can work out stamp duty by hand in four steps.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Step 1: Choose the right rate table</h3>
        <p className="mb-4 text-gray-800">
          Decide whether you are a first-time buyer, a home mover or buying an additional property. Non-UK
          residents add 2% to every band.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Step 2: Split the price into bands</h3>
        <p className="mb-4 text-gray-800">
          Divide the purchase price across the bands. For example, a £400,000 home splits into £125,000,
          £125,000 and £150,000.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Step 3: Apply each band&apos;s rate</h3>
        <p className="mb-4 text-gray-800">
          Multiply each slice by its rate. For a home mover buying at £400,000, that gives £0 + £2,500 + £7,500.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Step 4: Add the slices together</h3>
        <p className="mb-6 text-gray-800">
          The total is your stamp duty bill. In this example, a home mover pays <strong>£10,000</strong>.
        </p>

        {/* WORKED EXAMPLES */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          How Much Stamp Duty Will I Pay? Worked Examples
        </h2>
        <p className="mb-4 text-gray-800">
          This table shows the stamp duty due at common prices for UK residents. Use the calculator above for
          any other amount.
        </p>
        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Property price</th>
                <th className="p-3 font-bold">Home mover</th>
                <th className="p-3 font-bold">First-time buyer</th>
                <th className="p-3 font-bold">Second home / buy-to-let</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {EXAMPLES.map((row, i) => (
                <tr key={row.price} className={i % 2 === 1 ? 'bg-gray-50' : undefined}>
                  <td className="p-3 font-medium">{row.price}</td>
                  <td className="p-3">{row.mover}</td>
                  <td className="p-3 text-[#00703c] font-bold">{row.ftb}</td>
                  <td className="p-3 text-red-700">{row.additional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LONDON */}
        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Stamp duty in London</h3>
        <p className="mb-6 text-gray-800">
          London has no separate stamp duty rates. You use the same calculator and bands as the rest of
          England. Because London prices are higher, more of your purchase usually falls into the 5% and 10%
          bands, so the bill is larger.
        </p>

        {/* ADDITIONAL PROPERTY SURCHARGE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Stamp Duty on Second Homes and Buy-to-Let
        </h2>
        <p className="mb-4 text-gray-800">
          You pay a <strong>5% surcharge</strong> on top of every standard band when you buy an additional
          residential property, such as a second home, holiday let or buy-to-let.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">When the surcharge applies</h3>
        <ul className="list-disc pl-5 mb-4 space-y-1.5 text-gray-800">
          <li>The property costs <strong>£40,000 or more</strong>.</li>
          <li>You will own <strong>more than one home</strong> at the end of the day of purchase.</li>
          <li>You are not replacing your main residence.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Claiming the surcharge back</h3>
        <p className="mb-6 text-gray-800">
          If you buy your new main home before you sell the old one, you pay the surcharge upfront. Sell your
          previous main home <strong>within 36 months</strong> and you can claim a refund from HMRC.
        </p>

        {/* NON UK RESIDENT SURCHARGE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Non-UK Resident Surcharge (2%)
        </h2>
        <p className="mb-6 text-gray-800">
          Non-UK residents pay an extra <strong>2%</strong> on every band. If a non-resident buys an additional
          property, both surcharges apply, adding <strong>7% in total</strong> to each band.
        </p>

        {/* LAND */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          How Much Stamp Duty Do I Pay on Land?
        </h2>
        <p className="mb-4 text-gray-800">
          The rate depends on what the land is used for. Residential land, such as a garden bought with a house,
          uses the residential rates above. Non-residential and mixed-use land uses these rates:
        </p>
        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Portion of the price</th>
                <th className="p-3 font-bold">Non-residential rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">Up to £150,000</td>
                <td className="p-3 text-[#00703c] font-bold">0%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">£150,001 to £250,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">2%</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Over £250,000</td>
                <td className="p-3 text-[#1d70b8] font-bold">5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* WHEN & HOW TO PAY */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          When and How to Pay Stamp Duty
        </h2>
        <p className="mb-4 text-gray-800">
          You must send an SDLT return to HMRC and pay the tax <strong>within 14 days of completion</strong>.
          Miss the deadline and HMRC can charge penalties and interest.
        </p>
        <p className="mb-6 text-gray-800">
          In most purchases, your solicitor or conveyancer files the return and pays HMRC for you on completion
          day. They add the amount to your completion statement, so make sure the funds are ready in advance.
        </p>

        {/* PAST RATES */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          How Much Stamp Duty Did I Pay? Past Rates
        </h2>
        <p className="mb-4 text-gray-800">
          The calculator uses today&apos;s rates. If you want to check a past purchase, use the rates in force on
          your completion date:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-1.5 text-gray-800">
          <li>
            <strong>22 Nov 2017 to 7 Jul 2020 (including 2018):</strong> 0% up to £125,000, 2% to £250,000, 5% to
            £925,000. First-time buyers paid 0% up to £300,000. Additional homes paid a 3% surcharge.
          </li>
          <li>
            <strong>23 Sep 2022 to 31 Mar 2025:</strong> 0% up to £250,000. First-time buyers paid 0% up to
            £425,000, on homes up to £625,000.
          </li>
          <li>
            <strong>From 31 Oct 2024:</strong> the additional property surcharge rose from 3% to 5%.
          </li>
          <li>
            <strong>From 1 Apr 2025:</strong> the current rates shown on this page.
          </li>
        </ul>

        {/* REGIONAL DIFFERENCES */}
        <div className="bg-gray-100 p-6 rounded-xl border border-gray-300 my-8">
          <h2 className="text-xl font-bold text-[#0b0c0c] mb-2">
            Buying in Scotland or Wales?
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Stamp Duty Land Tax applies only in <strong>England and Northern Ireland</strong>. Scotland and Wales
            run their own property taxes:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-700 space-y-1">
            <li><strong>Scotland</strong>: Land and Buildings Transaction Tax (LBTT).</li>
            <li><strong>Wales</strong>: Land Transaction Tax (LTT).</li>
          </ul>
        </div>

        {/* CROSS-LINKING TO DEED POLL / NAME CHANGE SERVICES */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Changed Your Name Before Buying?
            </h2>
            <p className="text-sm text-gray-700">
              Your name on the property deeds must match your ID. If you have married or changed your name, a deed
              poll lets you update HM Land Registry, your mortgage and your bank.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Create Your Deed Poll →
          </Link>
        </div>

        <ShareWidget
          title="Stamp Duty Calculator UK 2026 – How Much SDLT Will I Pay?"
          description="Work out your Stamp Duty Land Tax for property in England and Northern Ireland."
          className="my-8"
        />

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-6">
            Stamp Duty FAQs
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          This calculator gives an estimate based on HMRC rates for residential freehold purchases. Leases,
          company purchases and linked transactions can change the amount due. Check{' '}
          <a
            href="https://www.gov.uk/stamp-duty-land-tax"
            className="text-[#1d70b8] hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            GOV.UK
          </a>{' '}
          or ask your conveyancer before you complete.
        </p>
      </section>

      {/* STRUCTURED DATA */}
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': `${PAGE_URL}/#webpage`,
              url: PAGE_URL,
              name: PAGE_TITLE,
              description: PAGE_DESCRIPTION,
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': `${PAGE_URL}/#calculator`,
              name: 'Stamp Duty Calculator (England & Northern Ireland)',
              url: PAGE_URL,
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0.00',
                priceCurrency: 'GBP',
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
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
                  name: 'Stamp Duty Calculator',
                  item: PAGE_URL,
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
