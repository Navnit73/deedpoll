'use client';

import { useState, useMemo } from 'react';

type ApplicantMode = 'single' | 'joint';

interface CalculationResult {
  totalGrossIncome: number;
  maxBorrowingStandard: number; // 4.5x multiplier adjusted for debts
  maxBorrowingStretch: number;  // 5.5x multiplier adjusted for debts
  maxPropertyValue: number;     // Borrowing + Deposit
  monthlyRepayment: number;
  stressTestedRepayment: number; // repayment at product rate + stress margin
  ltvRatio: number;
  totalMonthlyCommitments: number;
}

const STANDARD_MULTIPLE = 4.5;
const STRETCH_MULTIPLE = 5.5;

export default function MortgageAffordabilityCalculator() {
  const [applicantMode, setApplicantMode] = useState<ApplicantMode>('single');
  const [income1Input, setIncome1Input] = useState<string>('45000');
  const [income2Input, setIncome2Input] = useState<string>('35000');
  const [additionalIncomeInput, setAdditionalIncomeInput] = useState<string>('0');

  const [monthlyDebtsInput, setMonthlyDebtsInput] = useState<string>('250');
  const [monthlyChildcareInput, setMonthlyChildcareInput] = useState<string>('0');
  const [dependents, setDependents] = useState<number>(0);

  const [depositInput, setDepositInput] = useState<string>('30000');
  const [termYears, setTermYears] = useState<number>(25);
  // Default reflects the August 2026 UK average for a 2-5 year fixed rate mortgage (Moneyfacts/Rightmove).
  const [interestRate, setInterestRate] = useState<number>(5.5);
  // Since the Bank of England withdrew the mandatory +3% affordability stress test in August 2022,
  // each lender now sets its own margin above its reversion rate under FCA rule MCOB 11.6.18R.
  // 1-2 percentage points is typical, so we default to 2% and let the user adjust it.
  const [stressMarginInput, setStressMarginInput] = useState<number>(2.0);

  // Helper parser for currency inputs
  const parseNum = (val: string) => {
    const parsed = parseFloat(val.replace(/,/g, ''));
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  };

  const income1 = useMemo(() => parseNum(income1Input), [income1Input]);
  const income2 = useMemo(() => (applicantMode === 'joint' ? parseNum(income2Input) : 0), [applicantMode, income2Input]);
  const additionalIncome = useMemo(() => parseNum(additionalIncomeInput), [additionalIncomeInput]);

  const monthlyDebts = useMemo(() => parseNum(monthlyDebtsInput), [monthlyDebtsInput]);
  const monthlyChildcare = useMemo(() => parseNum(monthlyChildcareInput), [monthlyChildcareInput]);
  const deposit = useMemo(() => parseNum(depositInput), [depositInput]);
  const stressMargin = useMemo(() => {
    const val = Number(stressMarginInput);
    return isNaN(val) || val < 0 ? 0 : Math.min(val, 6);
  }, [stressMarginInput]);

  const calc: CalculationResult = useMemo(() => {
    const totalGrossIncome = income1 + income2 + additionalIncome;

    // Committed monthly outgoings that reduce disposable income.
    const totalMonthlyCommitments = monthlyDebts + monthlyChildcare + dependents * 150;
    const annualCommitments = totalMonthlyCommitments * 12;

    // BUG FIX: the deduction for committed spending must scale with the same multiple
    // that's being applied to income. Previously both the standard and stretch figures
    // were reduced using the 4.5x deduction, which understated the stretch amount.
    const maxBorrowingStandard = Math.max(
      0,
      Math.round(totalGrossIncome * STANDARD_MULTIPLE - annualCommitments * STANDARD_MULTIPLE)
    );
    const maxBorrowingStretch = Math.max(
      0,
      Math.round(totalGrossIncome * STRETCH_MULTIPLE - annualCommitments * STRETCH_MULTIPLE)
    );

    const maxPropertyValue = maxBorrowingStandard + deposit;

    // Mortgage Monthly Repayment Formula: P * [r(1+r)^n] / [(1+r)^n - 1]
    const calculateRepayment = (principal: number, ratePercent: number, years: number) => {
      if (principal <= 0 || years <= 0) return 0;
      const monthlyRate = ratePercent / 100 / 12;
      const totalPayments = years * 12;
      if (monthlyRate === 0) return principal / totalPayments;
      const monthlyPayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
      return Math.round(monthlyPayment);
    };

    const monthlyRepayment = calculateRepayment(maxBorrowingStandard, interestRate, termYears);
    const stressTestedRepayment = calculateRepayment(maxBorrowingStandard, interestRate + stressMargin, termYears);

    const ltvRatio = maxPropertyValue > 0 ? (maxBorrowingStandard / maxPropertyValue) * 100 : 0;

    return {
      totalGrossIncome,
      maxBorrowingStandard,
      maxBorrowingStretch,
      maxPropertyValue,
      monthlyRepayment,
      stressTestedRepayment,
      ltvRatio,
      totalMonthlyCommitments,
    };
  }, [income1, income2, additionalIncome, monthlyDebts, monthlyChildcare, dependents, deposit, termYears, interestRate, stressMargin]);

  const handleInputChange = (val: string, setter: (v: string) => void) => {
    const clean = val.replace(/[^0-9]/g, '');
    if (clean === '') {
      setter('');
      return;
    }
    const num = parseInt(clean, 10);
    setter(num.toLocaleString('en-GB'));
  };

  return (
    <div className="bg-white border-2 border-[#1d70b8] rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto my-8">
      {/* HEADER BADGE */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="inline-block bg-[#1d70b8] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-2 rounded">
          UK Mortgage Affordability 2026
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
          UK Mortgage Affordability Calculator
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Estimate how much you could borrow based on lender income multiples (4.5x–5.5x) and your monthly commitments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUT SECTION */}
        <div className="lg:col-span-7 space-y-6">
          {/* Applicant Mode Selector */}
          <div>
            <label className="block text-sm font-bold text-[#0b0c0c] mb-2">
              Application Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setApplicantMode('single')}
                className={`py-2.5 px-4 text-sm font-bold rounded-lg border-2 transition-all ${
                  applicantMode === 'single'
                    ? 'border-[#1d70b8] bg-blue-50 text-[#1d70b8]'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Single Applicant
              </button>
              <button
                type="button"
                onClick={() => setApplicantMode('joint')}
                className={`py-2.5 px-4 text-sm font-bold rounded-lg border-2 transition-all ${
                  applicantMode === 'joint'
                    ? 'border-[#1d70b8] bg-blue-50 text-[#1d70b8]'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Joint Application
              </button>
            </div>
          </div>

          {/* Income Inputs */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-bold text-[#0b0c0c] uppercase tracking-wide">
              Annual Income Details (£)
            </h3>

            <div>
              <label htmlFor="income-1" className="block text-xs font-bold text-gray-700 mb-1">
                {applicantMode === 'joint' ? 'Applicant 1 Annual Gross Income (£)' : 'Your Annual Gross Income (£)'}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">£</span>
                <input
                  type="text"
                  id="income-1"
                  value={income1Input}
                  onChange={(e) => handleInputChange(e.target.value, setIncome1Input)}
                  placeholder="e.g. 45,000"
                  className="w-full pl-8 pr-3 py-2 text-base font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-xs text-gray-500 self-center">Presets:</span>
                {[30000, 45000, 65000, 85000, 110000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setIncome1Input(val.toLocaleString('en-GB'))}
                    className="text-xs px-2 py-0.5 rounded border border-gray-300 bg-white hover:bg-gray-100 font-medium text-gray-700"
                  >
                    £{(val / 1000).toLocaleString()}k
                  </button>
                ))}
              </div>
            </div>

            {applicantMode === 'joint' && (
              <div>
                <label htmlFor="income-2" className="block text-xs font-bold text-gray-700 mb-1">
                  Applicant 2 Annual Gross Income (£)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">£</span>
                  <input
                    type="text"
                    id="income-2"
                    value={income2Input}
                    onChange={(e) => handleInputChange(e.target.value, setIncome2Input)}
                    placeholder="e.g. 35,000"
                    className="w-full pl-8 pr-3 py-2 text-base font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="additional-income" className="block text-xs font-bold text-gray-700 mb-1">
                Other Annual Income (£) <span className="font-normal text-gray-500">(Overtime, Bonuses, Pension, Commissions)</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">£</span>
                <input
                  type="text"
                  id="additional-income"
                  value={additionalIncomeInput}
                  onChange={(e) => handleInputChange(e.target.value, setAdditionalIncomeInput)}
                  placeholder="e.g. 5,000"
                  className="w-full pl-8 pr-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                />
              </div>
            </div>
          </div>

          {/* Outgoings & Financial Commitments */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-bold text-[#0b0c0c] uppercase tracking-wide">
              Monthly Outgoings & Commitments (£)
            </h3>

            <div>
              <label htmlFor="monthly-debts" className="block text-xs font-bold text-gray-700 mb-1">
                Monthly Credit Commitments (£) <span className="font-normal text-gray-500">(Car finance, credit cards, loans)</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">£</span>
                <input
                  type="text"
                  id="monthly-debts"
                  value={monthlyDebtsInput}
                  onChange={(e) => handleInputChange(e.target.value, setMonthlyDebtsInput)}
                  placeholder="e.g. 250"
                  className="w-full pl-8 pr-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="monthly-childcare" className="block text-xs font-bold text-gray-700 mb-1">
                Monthly Childcare & School Fees (£)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">£</span>
                <input
                  type="text"
                  id="monthly-childcare"
                  value={monthlyChildcareInput}
                  onChange={(e) => handleInputChange(e.target.value, setMonthlyChildcareInput)}
                  placeholder="e.g. 400"
                  className="w-full pl-8 pr-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dependents" className="block text-xs font-bold text-gray-700 mb-1">
                Number of Financial Dependents
              </label>
              <select
                id="dependents"
                value={dependents}
                onChange={(e) => setDependents(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white font-medium"
              >
                <option value={0}>0 Dependents</option>
                <option value={1}>1 Dependent</option>
                <option value={2}>2 Dependents</option>
                <option value={3}>3 Dependents</option>
                <option value={4}>4+ Dependents</option>
              </select>
            </div>
          </div>

          {/* Deposit & Mortgage Preferences */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-bold text-[#0b0c0c] uppercase tracking-wide">
              Deposit & Term Preferences
            </h3>

            <div>
              <label htmlFor="deposit" className="block text-xs font-bold text-gray-700 mb-1">
                Deposit Saved (£)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold">£</span>
                <input
                  type="text"
                  id="deposit"
                  value={depositInput}
                  onChange={(e) => handleInputChange(e.target.value, setDepositInput)}
                  placeholder="e.g. 30,000"
                  className="w-full pl-8 pr-3 py-2 text-base font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="term-years" className="block text-xs font-bold text-gray-700 mb-1">
                  Mortgage Term (Years)
                </label>
                <select
                  id="term-years"
                  value={termYears}
                  onChange={(e) => setTermYears(parseInt(e.target.value, 10))}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white font-bold"
                >
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={25}>25 Years</option>
                  <option value={30}>30 Years</option>
                  <option value={35}>35 Years</option>
                  <option value={40}>40 Years</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest-rate" className="block text-xs font-bold text-gray-700 mb-1">
                  Est. Interest Rate (%)
                </label>
                <input
                  type="number"
                  id="interest-rate"
                  step="0.1"
                  min="0.5"
                  max="15"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white font-bold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="stress-margin" className="block text-xs font-bold text-gray-700 mb-1">
                Affordability Stress Margin (%) <span className="font-normal text-gray-500">(Lender's buffer above your rate — typically 1–2%)</span>
              </label>
              <input
                type="number"
                id="stress-margin"
                step="0.1"
                min="0"
                max="6"
                value={stressMarginInput}
                onChange={(e) => setStressMarginInput(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white font-bold"
              />
            </div>
          </div>
        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-[#f3f2f1] border-2 border-gray-300 rounded-xl p-6 flex-1 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                Estimated Maximum Borrowing
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#00703c] tracking-tight mb-1">
                £{calc.maxBorrowingStandard.toLocaleString('en-GB')}
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Based on a standard {STANDARD_MULTIPLE}x gross annual household income (£{calc.totalGrossIncome.toLocaleString('en-GB')}) adjusted for outgoings.
              </p>

              {/* Stretch Cap Note */}
              <div className="bg-white p-3 rounded-lg border border-gray-300 text-xs mb-4">
                <span className="font-bold text-[#1d70b8] block">Enhanced / Specialist Income Multiple ({STRETCH_MULTIPLE}x):</span>
                <span className="text-gray-700">
                  Up to <strong>£{calc.maxBorrowingStretch.toLocaleString('en-GB')}</strong> with lenders offering enhanced multiples to higher earners or strong joint applications. Some specialist lenders go up to 6x for income above roughly £60,000.
                </span>
              </div>

              {/* Summary Cards */}
              <div className="space-y-3 pt-2">
                <div className="bg-white p-3.5 rounded-lg border border-gray-300 flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase">Max Property Value</span>
                    <span className="text-xs text-gray-600">(Borrowing + Deposit)</span>
                  </div>
                  <span className="text-xl font-bold text-[#0b0c0c]">
                    £{calc.maxPropertyValue.toLocaleString('en-GB')}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-gray-300 flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase">Est. Monthly Repayment</span>
                    <span className="text-xs text-gray-600">({interestRate}% over {termYears} yrs)</span>
                  </div>
                  <span className="text-xl font-bold text-[#00703c]">
                    £{calc.monthlyRepayment.toLocaleString('en-GB')}<span className="text-xs font-normal text-gray-500">/mo</span>
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-gray-300 flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase">Stress-Tested Repayment</span>
                    <span className="text-xs text-gray-600">(Rate + {stressMargin.toFixed(1)}% margin = {(interestRate + stressMargin).toFixed(1)}%)</span>
                  </div>
                  <span className="text-lg font-bold text-amber-800">
                    £{calc.stressTestedRepayment.toLocaleString('en-GB')}<span className="text-xs font-normal text-gray-500">/mo</span>
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-gray-300 flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase">Estimated Loan-to-Value (LTV)</span>
                  </div>
                  <span className="inline-block px-2.5 py-1 text-xs font-extrabold rounded bg-blue-100 text-[#1d70b8]">
                    {calc.ltvRatio > 0 ? `${calc.ltvRatio.toFixed(1)}% LTV` : '0%'}
                  </span>
                </div>
              </div>
            </div>

            {/* Lender Guidance Alert */}
            <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-4 rounded-r-lg text-xs text-gray-800">
              <strong className="font-bold text-[#0b0c0c] block mb-1">UK Lender Assessment Notice</strong>
              Lenders check your credit history, employment status, utility bills, and bank statements, and each sets its own affordability stress margin. Reducing credit card balances and loan commitments before you apply directly increases your maximum borrowing capacity.
            </div>

            <p className="text-[11px] text-gray-500 leading-snug">
              This calculator gives an indicative estimate only. It is not a mortgage offer, a mortgage in principle, or financial advice. Actual borrowing limits depend on full underwriting by an individual lender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}