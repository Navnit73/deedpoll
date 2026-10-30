import type { Metadata } from 'next';
import Link from 'next/link';
import MortgageAffordabilityCalculator from '@/components/MortgageAffordabilityCalculator';
import StructuredData from '@/components/StructuredData';

const PAGE_URL = 'https://deedpolluk.uk/uk-mortgage-affordability-calculator';

export const metadata: Metadata = {
  title: 'Mortgage Affordability Calculator UK 2026 – How Much Can I Borrow?',
  description:
    'Find out how much mortgage you can afford in the UK. See what you can borrow on your salary, monthly budget or deposit, and check eligibility without hurting your credit score.',
  alternates: {
    canonical: '/uk-mortgage-affordability-calculator',
    languages: {
      'en-GB': '/uk-mortgage-affordability-calculator',
      'x-default': '/uk-mortgage-affordability-calculator',
    },
  },
  openGraph: {
    title: 'Mortgage Affordability Calculator UK 2026 – How Much Can I Borrow?',
    description:
      'Free UK mortgage calculator. Estimate your maximum mortgage from your income, debts and deposit, with salary and monthly payment tables.',
    url: PAGE_URL,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Mortgage Can I Afford? Free UK Calculator',
    description:
      'Estimate your maximum UK mortgage from your salary, monthly budget and deposit in under a minute.',
  },
};

const tableOfContents = [
  { id: 'how-much-can-i-borrow', label: 'How much can I borrow?' },
  { id: 'mortgage-by-salary', label: 'Mortgage by salary' },
  { id: 'mortgage-by-monthly-payment', label: 'Mortgage by monthly payment' },
  { id: 'mortgage-with-20000-deposit', label: 'Mortgage with a £20,000 deposit' },
  { id: 'how-lenders-decide', label: 'How lenders decide' },
  { id: 'bank-of-england-rules', label: 'Bank of England affordability rules' },
  { id: 'eligibility-check-soft-search', label: 'Eligibility check (soft search)' },
  { id: 'bad-credit-mortgage', label: 'Mortgages with bad credit' },
  { id: 'mortgage-scotland', label: 'Mortgages in Scotland' },
  { id: 'borrow-more', label: 'How to borrow more' },
  { id: 'faq', label: 'FAQs' },
];

const salaryRows = [
  { salary: 16000, note: 'Joint application usually needed' },
  { salary: 20000, note: 'Shared ownership is a common route' },
  { salary: 22000, note: '' },
  { salary: 25000, note: '' },
  { salary: 28000, note: '' },
  { salary: 30000, note: '' },
  { salary: 40000, note: '' },
  { salary: 50000, note: 'Some lenders offer 5x' },
  { salary: 60000, note: 'Enhanced multiples more widely available' },
  { salary: 70000, note: 'Up to £385,000 at 5.5x' },
  { salary: 100000, note: 'Up to £550,000 at 5.5x; 6x possible' },
];

// Loan sizes a repayment supports, rounded to the nearest £1,000 (capital and interest).
const monthlyPaymentRows = [
  { payment: 500, at45: 90000, at55: 81000, at45Over30: 99000 },
  { payment: 700, at45: 126000, at55: 114000, at45Over30: 138000 },
  { payment: 800, at45: 144000, at55: 130000, at45Over30: 158000 },
  { payment: 1000, at45: 180000, at55: 163000, at45Over30: 197000 },
  { payment: 1500, at45: 270000, at55: 244000, at45Over30: 296000 },
  { payment: 2000, at45: 360000, at55: 326000, at45Over30: 395000 },
];

const depositRows = [
  { ltv: '95%', price: 400000, loan: 380000, income: 84444 },
  { ltv: '90%', price: 200000, loan: 180000, income: 40000 },
  { ltv: '85%', price: 133333, loan: 113333, income: 25185 },
  { ltv: '80%', price: 100000, loan: 80000, income: 17778 },
];

const faqs = [
  {
    question: 'How much can I borrow for a mortgage in the UK?',
    answer:
      'Most UK lenders let you borrow 4 to 4.5 times your gross annual income. Some lenders stretch to 5 or 5.5 times for higher earners, and specialist lenders can reach 6 times. Your debts, dependants, credit history and deposit all raise or lower the final figure.',
  },
  {
    question: 'How much mortgage can I get on a £25,000 salary?',
    answer:
      'On a £25,000 salary, you can typically borrow between £100,000 and £112,500 at 4 to 4.5 times income. On a £20,000 salary, the range is £80,000 to £90,000, and on £30,000 it is £120,000 to £135,000. A joint application adds your partner’s income and raises the limit.',
  },
  {
    question: 'What mortgage can I get for £700 a month?',
    answer:
      'A £700 monthly repayment supports a mortgage of roughly £126,000 at 4.5% over 25 years, or around £114,000 at 5.5%. Stretch the term to 30 years and the same payment covers about £138,000 at 4.5%.',
  },
  {
    question: 'How much mortgage can I get on a £70,000 salary?',
    answer:
      'With a £70,000 salary, you can usually borrow £280,000 to £315,000 at 4 to 4.5 times income. Many lenders offer enhanced multiples at this level, which can push your borrowing to £350,000 at 5x or £385,000 at 5.5x.',
  },
  {
    question: 'What is the maximum mortgage I can get?',
    answer:
      'Most borrowers top out at 4.5 times income. Lenders offering enhanced multiples go to 5 or 5.5 times for strong applicants, and specialist or private banks can lend 6 times or more to qualifying professionals and high earners.',
  },
  {
    question: 'Does checking my mortgage eligibility affect my credit score?',
    answer:
      'No, not if the checker uses a soft search. A soft search shows up only to you, so it has no effect on your credit score. A full mortgage application uses a hard search, which other lenders can see. Always confirm the search type before you apply.',
  },
  {
    question: 'How do I get pre-approved for a mortgage in the UK?',
    answer:
      'In the UK, pre-approval is called an agreement in principle (AIP), decision in principle (DIP) or mortgage in principle (MIP). The lender checks your income and credit file and confirms how much it would likely lend. Most AIPs last 30 to 90 days, and many use a soft search.',
  },
  {
    question: 'Do student loans affect mortgage affordability?',
    answer:
      'Your outstanding student loan balance does not count as debt in the same way as a credit card or car loan. The monthly repayment does reduce your take-home pay, though, and lenders include that in their affordability checks.',
  },
  {
    question: 'Can I get a mortgage with bad credit?',
    answer:
      'Yes. Specialist lenders accept applicants with missed payments, defaults or County Court Judgments (CCJs). Expect a lower income multiple, a higher interest rate and a larger deposit, often 10% to 15% or more. A whole-of-market broker can match you with the right lender.',
  },
  {
    question: 'Is the mortgage stress test still used in the UK?',
    answer:
      'Yes, but the rules changed. The Bank of England scrapped its fixed 3-percentage-point stress test in August 2022. Lenders now set their own buffer above their reversion rate, usually 1 to 2 percentage points, under FCA rule MCOB 11.6.18R.',
  },
  {
    question: 'How much mortgage can I get in Scotland?',
    answer:
      'Scottish lenders follow the same UK-wide rules, so you can usually borrow 4 to 4.5 times your income. The main differences are the buying process and the tax: you pay Land and Buildings Transaction Tax (LBTT) instead of Stamp Duty, and sellers must provide a Home Report.',
  },
  {
    question: 'How accurate is a mortgage affordability calculator?',
    answer:
      'A calculator gives you a reliable estimate, not a guaranteed offer. Each lender uses its own income multiples, stress buffers and spending assumptions, so real offers can vary by tens of thousands of pounds. Use the result as a starting point, then get an agreement in principle.',
  },
];

const gbp = (value: number) => `£${value.toLocaleString('en-GB')}`;

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
              Free UK Mortgage Calculator · Updated 2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              Mortgage Affordability Calculator UK: How Much Can I Borrow?
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Enter your income, monthly outgoings and deposit to see how much mortgage you can afford.
              The calculator uses the same income multiples and stress tests that UK lenders use, and it
              never touches your credit file.
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
        {/* QUICK ANSWER */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-5 mb-8 rounded-r-lg">
          <p className="font-bold text-[#0b0c0c] mb-2">Quick answer</p>
          <p className="text-gray-800 text-base">
            Most UK lenders let you borrow <strong>4 to 4.5 times your gross annual income</strong>. On a
            £30,000 salary, that means roughly <strong>£120,000 to £135,000</strong>. Higher earners with
            clean credit can reach 5 to 5.5 times, and specialist lenders can go to 6 times or more.
          </p>
        </div>

        {/* TABLE OF CONTENTS */}
        <nav aria-label="On this page" className="border border-gray-300 rounded-xl p-5 mb-10">
          <p className="font-bold text-[#0b0c0c] mb-3">On this page</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 list-decimal pl-5 text-base">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-[#1d70b8] hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* HOW MUCH CAN I BORROW */}
        <h2 id="how-much-can-i-borrow" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          How Much Can I Borrow for a Mortgage?
        </h2>
        <p className="mb-4 text-gray-800">
          UK lenders work out your maximum mortgage in two steps. First, they multiply your income by a
          set figure, called the <strong>income multiple</strong>. Second, they check your monthly
          spending to make sure you can still afford the repayments if interest rates rise.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-3 mt-6">The Quick Formula</h3>
        <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl mb-4">
          <p className="font-mono text-sm sm:text-base text-[#0b0c0c]">
            Gross annual income × 4.5 = typical maximum mortgage
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
          <li><strong>Single applicant:</strong> use your own salary plus any guaranteed bonus or regular overtime.</li>
          <li><strong>Joint applicants:</strong> add both incomes together, then apply the multiple.</li>
          <li><strong>Then subtract:</strong> loans, car finance, credit cards and childcare all reduce the result.</li>
        </ul>

        {/* MORTGAGE BY SALARY */}
        <h2 id="mortgage-by-salary" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          How Much Mortgage Can I Get on My Salary?
        </h2>
        <p className="mb-4 text-gray-800">
          Use this table to see what you could borrow on your income. The figures assume a single
          applicant with no major debts or dependants.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm sm:text-base border border-gray-300">
            <caption className="sr-only">Maximum UK mortgage by salary and income multiple</caption>
            <thead className="bg-[#0b0c0c] text-white">
              <tr>
                <th scope="col" className="p-3">Salary</th>
                <th scope="col" className="p-3">4x income</th>
                <th scope="col" className="p-3">4.5x income</th>
                <th scope="col" className="p-3">5x income</th>
                <th scope="col" className="p-3 hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {salaryRows.map((row) => (
                <tr key={row.salary} className="border-t border-gray-200 even:bg-gray-50">
                  <th scope="row" className="p-3 font-bold">{gbp(row.salary)}</th>
                  <td className="p-3">{gbp(row.salary * 4)}</td>
                  <td className="p-3">{gbp(row.salary * 4.5)}</td>
                  <td className="p-3">{gbp(row.salary * 5)}</td>
                  <td className="p-3 text-gray-600 hidden sm:table-cell">{row.note || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">
          What Mortgage Can I Get on £16,000 to £30,000?
        </h3>
        <p className="mb-4 text-gray-800">
          On a lower salary, the income multiple sets a firm ceiling. If you earn <strong>£16,000</strong>,
          expect around £64,000 to £72,000. On <strong>£20,000</strong>, the range is £80,000 to £90,000,
          and on <strong>£22,000</strong> it is £88,000 to £99,000. A <strong>£25,000</strong> salary
          supports £100,000 to £112,500, <strong>£28,000</strong> supports £112,000 to £126,000, and{' '}
          <strong>£30,000</strong> supports £120,000 to £135,000.
        </p>
        <p className="mb-4 text-gray-800">
          To boost these figures, apply jointly, look at shared ownership, or check whether you qualify
          for a government-backed scheme in your area.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">
          How Much Mortgage Can I Get on £50,000?
        </h3>
        <p className="mb-4 text-gray-800">
          A £50,000 salary typically gets you <strong>£200,000 to £225,000</strong>. Some lenders offer 5x
          at this income, which lifts your limit to <strong>£250,000</strong>.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">
          How Much Mortgage Can I Get on £70,000?
        </h3>
        <p className="mb-4 text-gray-800">
          On £70,000, standard lending gives you <strong>£280,000 to £315,000</strong>. Many lenders
          offer enhanced multiples at this level, so you could reach <strong>£350,000</strong> at 5x or{' '}
          <strong>£385,000</strong> at 5.5x.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">
          How Much Mortgage Can I Afford on £100,000?
        </h3>
        <p className="mb-4 text-gray-800">
          A £100,000 income supports <strong>£400,000 to £450,000</strong> on standard terms and up to{' '}
          <strong>£550,000</strong> at 5.5x. Private banks and professional mortgage schemes can lend 6x
          or more to doctors, lawyers, accountants and other qualifying professionals.
        </p>

        {/* MORTGAGE BY MONTHLY PAYMENT */}
        <h2 id="mortgage-by-monthly-payment" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          What Mortgage Can I Get for My Monthly Budget?
        </h2>
        <p className="mb-4 text-gray-800">
          Already know what you can pay each month? This table shows how big a mortgage that payment
          covers on a capital-and-interest (repayment) basis.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm sm:text-base border border-gray-300">
            <caption className="sr-only">Mortgage size supported by monthly repayment</caption>
            <thead className="bg-[#0b0c0c] text-white">
              <tr>
                <th scope="col" className="p-3">Monthly payment</th>
                <th scope="col" className="p-3">4.5% over 25 yrs</th>
                <th scope="col" className="p-3">5.5% over 25 yrs</th>
                <th scope="col" className="p-3">4.5% over 30 yrs</th>
              </tr>
            </thead>
            <tbody>
              {monthlyPaymentRows.map((row) => (
                <tr key={row.payment} className="border-t border-gray-200 even:bg-gray-50">
                  <th scope="row" className="p-3 font-bold">{gbp(row.payment)} a month</th>
                  <td className="p-3">{gbp(row.at45)}</td>
                  <td className="p-3">{gbp(row.at55)}</td>
                  <td className="p-3">{gbp(row.at45Over30)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Figures are rounded to the nearest £1,000 and are for illustration only. Your lender still
          needs your income to support the loan.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">
          Mortgage for £500, £700, £800 or £1,500 a Month
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
          <li><strong>£500 a month</strong> covers roughly £81,000 to £99,000.</li>
          <li><strong>£700 a month</strong> covers roughly £114,000 to £138,000.</li>
          <li><strong>£800 a month</strong> covers roughly £130,000 to £158,000.</li>
          <li><strong>£1,500 a month</strong> covers roughly £244,000 to £296,000.</li>
        </ul>

        {/* MORTGAGE WITH 20K DEPOSIT */}
        <h2 id="mortgage-with-20000-deposit" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          What Mortgage Can I Get With a £20,000 Deposit?
        </h2>
        <p className="mb-4 text-gray-800">
          Your deposit sets your <strong>loan-to-value (LTV)</strong>, the share of the property price you
          borrow. Your income still caps the loan, so you need both to line up.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm sm:text-base border border-gray-300">
            <caption className="sr-only">Property price and income needed with a £20,000 deposit</caption>
            <thead className="bg-[#0b0c0c] text-white">
              <tr>
                <th scope="col" className="p-3">LTV</th>
                <th scope="col" className="p-3">Max property price</th>
                <th scope="col" className="p-3">Mortgage</th>
                <th scope="col" className="p-3">Income needed at 4.5x</th>
              </tr>
            </thead>
            <tbody>
              {depositRows.map((row) => (
                <tr key={row.ltv} className="border-t border-gray-200 even:bg-gray-50">
                  <th scope="row" className="p-3 font-bold">{row.ltv}</th>
                  <td className="p-3">{gbp(row.price)}</td>
                  <td className="p-3">{gbp(row.loan)}</td>
                  <td className="p-3">{gbp(row.income)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-gray-800">
          For example, a £20,000 deposit on a £200,000 home gives you a 90% LTV mortgage of £180,000.
          To borrow that at 4.5x, you need a household income of about £40,000.
        </p>

        {/* HOW LENDERS DECIDE */}
        <h2 id="how-lenders-decide" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          How UK Lenders Decide How Much You Can Borrow
        </h2>
        <p className="mb-6 text-gray-800">
          Every lender asks one question: could you keep paying if life got harder? To answer it, they
          look at five things.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">1. Your Income Multiple</h3>
        <p className="mb-4 text-gray-800">
          Lenders count your basic salary, plus guaranteed bonuses, regular overtime, self-employed
          profits and pension income. The multiple they apply depends on your income and profile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h4 className="font-bold text-[#1d70b8] mb-2">Standard: 4x to 4.5x</h4>
            <p className="text-sm text-gray-700">Offered by most high-street banks and building societies.</p>
          </div>
          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h4 className="font-bold text-[#1d70b8] mb-2">Enhanced: 5x to 5.5x</h4>
            <p className="text-sm text-gray-700">Usually for incomes above £50,000 to £75,000 with clean credit.</p>
          </div>
          <div className="bg-gray-50 border border-gray-300 p-5 rounded-xl">
            <h4 className="font-bold text-[#1d70b8] mb-2">Specialist: 6x or more</h4>
            <p className="text-sm text-gray-700">For qualifying professionals and high earners via private banks.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">2. Your Monthly Outgoings</h3>
        <p className="mb-4 text-gray-800">
          Personal loans, car finance, credit card balances and buy now, pay later plans all reduce the
          income a lender treats as spare. Childcare, school fees and the number of dependants you
          support lower your limit further.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">3. The Stress Test</h3>
        <p className="mb-4 text-gray-800">
          Lenders check that you could still afford your repayments at a higher interest rate. The
          calculator above shows both your normal and your stress-tested monthly payment.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">4. Your Credit History</h3>
        <p className="mb-4 text-gray-800">
          Lenders review your credit file for missed payments, defaults and high balances. A strong
          history unlocks better rates and higher multiples.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-8">5. Your Deposit and LTV</h3>
        <p className="mb-6 text-gray-800">
          A bigger deposit lowers your LTV. Lower LTV bands, such as 75% or 60%, give you access to
          cheaper rates, which reduces your monthly payment and helps you pass affordability checks.
        </p>

        {/* BANK OF ENGLAND RULES */}
        <h2 id="bank-of-england-rules" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          Bank of England Mortgage Affordability Rules
        </h2>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">The 4.5x Loan-to-Income Limit</h3>
        <p className="mb-4 text-gray-800">
          The Bank of England limits the share of new mortgages that lenders can issue at 4.5 times
          income or more to 15% of their lending. This rule applies to lenders’ overall books, not to
          each borrower. That is why some lenders still offer 5x or 5.5x to selected applicants.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">The Stress Test Since 2022</h3>
        <p className="mb-6 text-gray-800">
          The Bank of England withdrew its fixed 3-percentage-point stress test in August 2022. Under
          FCA rule MCOB 11.6.18R, each lender now sets its own buffer above its reversion rate, usually
          1 to 2 percentage points. Because each lender picks its own buffer, two lenders can offer you
          very different amounts.
        </p>

        {/* ELIGIBILITY CHECK */}
        <h2 id="eligibility-check-soft-search" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          Check Your Mortgage Eligibility Without Affecting Your Credit Score
        </h2>
        <p className="mb-4 text-gray-800">
          This calculator does not run any credit check, so you can use it as often as you like. When
          you move on to lenders, choose eligibility checkers that use a <strong>soft search</strong>.
        </p>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">Soft Search vs Hard Search</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm sm:text-base border border-gray-300">
            <caption className="sr-only">Difference between a soft and a hard credit search</caption>
            <thead className="bg-[#0b0c0c] text-white">
              <tr>
                <th scope="col" className="p-3"></th>
                <th scope="col" className="p-3">Soft search</th>
                <th scope="col" className="p-3">Hard search</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <th scope="row" className="p-3 font-bold">Who sees it?</th>
                <td className="p-3">Only you</td>
                <td className="p-3">You and other lenders</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <th scope="row" className="p-3 font-bold">Affects your score?</th>
                <td className="p-3">No</td>
                <td className="p-3">Can, briefly</td>
              </tr>
              <tr className="border-t border-gray-200">
                <th scope="row" className="p-3 font-bold">Used for</th>
                <td className="p-3">Eligibility checks and many AIPs</td>
                <td className="p-3">Full mortgage applications</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">
          Getting a Mortgage in Principle (Pre-Approval)
        </h3>
        <p className="mb-4 text-gray-800">
          An <strong>agreement in principle (AIP)</strong> is the UK version of mortgage pre-approval.
          The lender checks your income and credit file, then states how much it would likely lend.
          Estate agents often ask for one before they accept your offer.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
          <li>Most AIPs last 30 to 90 days.</li>
          <li>Many lenders and brokers use a soft search for AIPs, but always ask first.</li>
          <li>An AIP is not a guaranteed offer. The lender still values the property and checks your documents.</li>
        </ul>

        {/* BAD CREDIT */}
        <h2 id="bad-credit-mortgage" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          How Much Can I Borrow With Bad Credit?
        </h2>
        <p className="mb-4 text-gray-800">
          You can still get a mortgage with missed payments, defaults or a County Court Judgment (CCJ).
          Specialist lenders handle these cases, but the terms usually change:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
          <li><strong>Lower multiples:</strong> often 3.5x to 4.5x rather than 5x or more.</li>
          <li><strong>Bigger deposits:</strong> typically 10% to 15%, sometimes more.</li>
          <li><strong>Higher rates:</strong> recent or serious issues mean higher interest costs.</li>
          <li><strong>Time helps:</strong> lenders worry less about problems that are older and settled.</li>
        </ul>

        {/* SCOTLAND */}
        <h2 id="mortgage-scotland" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          How Much Mortgage Can I Get in Scotland?
        </h2>
        <p className="mb-4 text-gray-800">
          Lenders apply the same UK-wide affordability rules in Scotland, so the 4x to 4.5x guide still
          holds. A few things differ:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
          <li><strong>Tax:</strong> you pay Land and Buildings Transaction Tax (LBTT), not Stamp Duty.</li>
          <li><strong>Home Report:</strong> sellers provide a survey and valuation upfront, and lenders often lend on that valuation.</li>
          <li><strong>Offers:</strong> many homes sell at “offers over”, so budget above the asking price.</li>
        </ul>

        {/* HOW TO BORROW MORE */}
        <h2 id="borrow-more" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-12">
          How to Increase How Much You Can Borrow
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-6">
          <li><strong>Clear small debts.</strong> Paying off credit cards and loans frees up income for affordability.</li>
          <li><strong>Apply jointly.</strong> Combining two incomes can raise your limit sharply.</li>
          <li><strong>Choose a longer term.</strong> A 30- or 35-year term lowers your monthly payment, though you pay more interest overall.</li>
          <li><strong>Grow your deposit.</strong> Moving into a lower LTV band brings cheaper rates.</li>
          <li><strong>Use a whole-of-market broker.</strong> Brokers know which lenders offer enhanced multiples.</li>
          <li><strong>Get on the electoral roll.</strong> Make sure your name and address match on your credit file, ID and bank statements.</li>
        </ol>

        <h3 className="text-xl font-bold text-[#0b0c0c] mb-2 mt-6">How Much Mortgage Can I Really Afford?</h3>
        <p className="mb-6 text-gray-800">
          Your maximum mortgage and a comfortable mortgage are not the same thing. Before you borrow the
          full amount, add up your bills, travel, food and savings goals. Then check that the
          stress-tested payment from the calculator still leaves you room to breathe.
        </p>

        {/* CROSS-LINKING TO DEED POLL */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Applying for a Mortgage After a Name Change?
            </h2>
            <p className="text-sm text-gray-700">
              Lenders need proof if your passport, ID or bank statements show a different name. Get an
              official UK deed poll online in minutes.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Create Your Deed Poll →
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 id="faq" className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-6">
            Mortgage Affordability FAQs
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-600">
          This calculator gives estimates only and is not financial advice. Lenders set their own
          criteria, so speak to a qualified mortgage adviser before you apply.
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
              name: 'Mortgage Affordability Calculator UK 2026 – How Much Can I Borrow?',
              description:
                'Free UK mortgage affordability calculator with salary, monthly payment and deposit tables, based on lender income multiples and current stress-testing rules.',
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': `${PAGE_URL}/#calculator`,
              name: 'UK Mortgage Affordability Calculator',
              url: PAGE_URL,
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
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
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
                  name: 'UK Mortgage Affordability Calculator',
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
