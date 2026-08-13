import type { Metadata } from 'next';
import Link from 'next/link';
import MortgageAffordabilityCalculator from '@/components/MortgageAffordabilityCalculator';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'UK Mortgage Affordability Calculator 2026 — How Much Can I Borrow?',
  description:
    'Work out how much mortgage you could borrow in the UK based on income multiples, monthly debts, deposit size and how lenders stress-test affordability today.',
  alternates: {
    canonical: '/uk-mortgage-affordability-calculator',
    languages: {
      'en-GB': '/uk-mortgage-affordability-calculator',
      'x-default': '/uk-mortgage-affordability-calculator',
    },
  },
  openGraph: {
    title: 'UK Mortgage Affordability Calculator 2026 — How Much Can I Borrow?',
    description:
      'Free UK mortgage borrowing calculator. Estimate your maximum borrowing, monthly repayments, stress-tested repayments and loan-to-value.',
    url: 'https://deedpolluk.uk/uk-mortgage-affordability-calculator',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Mortgage Affordability Calculator — Estimate Your Borrowing Capacity',
    description:
      'Free UK mortgage affordability calculator. See how income, debts and dependents affect your maximum mortgage.',
  },
};

export default function UkMortgageAffordabilityCalculatorPage() {
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
              <li className="text-gray-800 font-medium">UK Mortgage Affordability Calculator</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-gray-200 text-[#0b0c0c] text-xs sm:text-sm font-bold px-3 py-1 mb-3 rounded">
              UK Home Buyers & Refinance Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              UK Mortgage Affordability Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Find out roughly how much you could borrow for a UK mortgage. Enter your income, your
              regular outgoings and your deposit, and the calculator applies the same income multiples
              and stress-testing logic that UK lenders use.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MortgageAffordabilityCalculator />
      </section>

      {/* EDUCATIONAL & SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-base sm:text-lg">
        {/* HOW UK MORTGAGE AFFORDABILITY WORKS */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          How Do UK Lenders Actually Decide What You Can Borrow?
        </h2>
        <p className="mb-4 text-gray-800">
          Every mortgage application comes down to one question: could you keep making the payments if
          life got a bit harder? UK lenders answer that by combining an income multiple with a close
          look at what you already spend each month, then checking the result against rules set by the
          Financial Conduct Authority (FCA) and the Bank of England.
        </p>
        <p className="mb-6 text-gray-800">
          The income multiple gets most of the attention, and for good reason. Multiply your gross
          annual income by a set figure and you get a rough ceiling on what you can borrow. But that
          multiple is only the starting point. Your committed monthly spending, the number of people who
          depend on your income, and how much deposit you bring to the table all move the final number
          up or down, sometimes by tens of thousands of pounds.
        </p>

        {/* KEY FACTORS AFFECTING BORROWING */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Four Factors That Shape Your Borrowing Limit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h3 className="font-bold text-[#1d70b8] text-lg mb-2">1. Gross Annual Income</h3>
            <p className="text-sm text-gray-700">
              This covers basic salary plus any guaranteed bonuses, regular overtime and pension income
              a lender will count. Joint applicants add their incomes together before the multiple is
              applied.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h3 className="font-bold text-[#1d70b8] text-lg mb-2">2. Monthly Credit Commitments</h3>
            <p className="text-sm text-gray-700">
              Personal loans, car finance, credit card balances and buy-now-pay-later agreements all eat
              into the income a lender treats as available for a mortgage payment, which pulls your
              maximum loan down.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h3 className="font-bold text-[#1d70b8] text-lg mb-2">3. Dependents & Childcare Costs</h3>
            <p className="text-sm text-gray-700">
              Lenders build in an assumed living cost for children or other dependents. Nursery fees and
              school fees are added on top and reduce what you can borrow further still.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h3 className="font-bold text-[#1d70b8] text-lg mb-2">4. Deposit & Loan-to-Value (LTV)</h3>
            <p className="text-sm text-gray-700">
              A bigger deposit lowers your LTV, which usually unlocks cheaper interest rates and can make
              a lender more comfortable lending closer to their maximum multiple.
            </p>
          </div>
        </div>

        {/* INCOME MULTIPLE RULE */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-5 my-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
            The Income Multiple, Explained Properly
          </h3>
          <p className="text-gray-800 text-base mb-3">
            The Bank of England limits how much of a lender's new mortgage lending can go out above 4.5
            times a borrower's income, capping it at 15% of new loans. That is a rule for lenders' overall
            books, not a hard ceiling for every individual borrower, which is why the multiple you are
            offered can vary quite a lot between lenders.
          </p>
          <ul className="list-disc pl-5 text-base space-y-1.5 text-gray-800">
            <li><strong>Standard high-street lending:</strong> typically 4.0x to 4.5x gross income.</li>
            <li><strong>Enhanced multiples:</strong> 5.0x to 5.5x, generally for household incomes above roughly £60,000–£75,000 with a clean credit profile.</li>
            <li><strong>Specialist lending:</strong> up to 6x or more for qualifying professionals or high earners, through specialist and private-bank lenders.</li>
          </ul>
        </div>

        {/* STRESS TEST SECTION */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          What Actually Happens in a Mortgage Stress Test Today
        </h2>
        <p className="mb-4 text-gray-800">
          For years, UK lenders were required to check that you could still afford your mortgage if
          interest rates rose by a flat 3 percentage points. The Bank of England withdrew that mandatory
          rule in August 2022, judging that its existing loan-to-income limit already provided enough
          protection alongside the FCA's own affordability rules.
        </p>
        <p className="mb-6 text-gray-800">
          Lenders still have to stress-test affordability, though. Under FCA rule MCOB 11.6.18R, each
          lender now sets its own margin above its reversion rate, most commonly somewhere between 1 and
          2 percentage points, rather than following one fixed national figure. That margin can move with
          the wider interest rate environment, so it is worth treating any stress-test result as an
          estimate rather than a guarantee of what a specific lender will offer.
        </p>

        {/* HOW TO INCREASE AFFORDABILITY */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          How to Improve Your UK Mortgage Borrowing Capacity
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li><strong>Clear small debts first.</strong> Paying off credit cards and personal loans before applying frees up income a lender will count toward affordability.</li>
          <li><strong>Consider a longer term.</strong> Stretching to a 30 or 35-year mortgage lowers your monthly payment and can help you pass a lender's affordability check, though you will pay more interest overall.</li>
          <li><strong>Grow your deposit.</strong> Moving into a lower LTV band, such as 80% or 75%, typically brings access to cheaper rates.</li>
          <li><strong>Tidy up your paperwork.</strong> Make sure your name and address match across the Electoral Roll, your credit file and your bank statements, since mismatches slow down or complicate underwriting.</li>
        </ul>

        {/* CROSS-LINKING TO DEED POLL */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Applying for a Mortgage After a Name Change?
            </h3>
            <p className="text-sm text-gray-700">
              Lenders need official documentation if your ID, passport or bank statements show a
              different legal name. You can get an official UK Deed Poll online in minutes.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Get Deed Poll Free →
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-6">
            Frequently Asked Questions — UK Mortgage Affordability
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How much mortgage can I get on a £50,000 salary in the UK?
              </h3>
              <p className="text-gray-700">
                With no significant monthly debts, a standard 4.5x multiple on a £50,000 gross salary
                works out at roughly <strong>£225,000</strong>. Applicants who qualify for an enhanced
                multiple through certain lenders could see this rise toward <strong>£275,000</strong> at
                5.5x, though existing debts and dependents will reduce both figures.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                Do student loans affect UK mortgage affordability?
              </h3>
              <p className="text-gray-700">
                Your outstanding student loan balance is not treated the same way as commercial debt, so
                it does not directly shrink your borrowing cap. Monthly student loan deductions still
                reduce your net take-home pay, though, which lenders factor into their wider budget
                checks.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                What is the mortgage stress test, and does it still apply?
              </h3>
              <p className="text-gray-700">
                Yes, lenders still stress-test affordability, but the rules changed. The Bank of England's
                mandatory 3-percentage-point stress test ended in August 2022. Lenders now set their own
                margin above their reversion rate, typically 1 to 2 percentage points, under FCA rule MCOB
                11.6.18R.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                Can I get a 5.5x or 6x salary mortgage in the UK?
              </h3>
              <p className="text-gray-700">
                Yes. A number of UK lenders offer enhanced multiples of 5.0x to 5.5x for household incomes
                above roughly £60,000–£75,000, and specialist or private-bank lenders can go up to 6x or
                higher for qualifying professionals and high earners with a strong financial profile.
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
              '@id': 'https://deedpolluk.uk/uk-mortgage-affordability-calculator/#webpage',
              url: 'https://deedpolluk.uk/uk-mortgage-affordability-calculator',
              name: 'UK Mortgage Affordability Calculator 2026',
              description:
                'Free UK mortgage affordability calculator based on lender income multiples (4.0x–5.5x), current stress-testing rules, and monthly debt commitments.',
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': 'https://deedpolluk.uk/uk-mortgage-affordability-calculator/#calculator',
              name: 'UK Mortgage Affordability Calculator',
              url: 'https://deedpolluk.uk/uk-mortgage-affordability-calculator',
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
                  name: 'How much mortgage can I get on a £50,000 salary in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'With no significant monthly debts, a standard 4.5x multiple on a £50,000 gross salary works out at roughly £225,000. An enhanced 5.5x multiple could push this toward £275,000, subject to lender criteria.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do student loans affect UK mortgage affordability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The outstanding student loan balance does not reduce your maximum borrowing cap directly, but the monthly deduction reduces your net income, which lenders include in affordability checks.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the mortgage stress test, and does it still apply?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Bank of England withdrew its mandatory 3-percentage-point stress test in August 2022. Lenders now set their own margin above their reversion rate, typically 1 to 2 percentage points, under FCA rule MCOB 11.6.18R.',
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
                  name: 'UK Mortgage Affordability Calculator',
                  item: 'https://deedpolluk.uk/uk-mortgage-affordability-calculator',
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}