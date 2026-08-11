'use client';

import { useState, useMemo } from 'react';

type StudentLoanPlan = 'none' | 'plan1' | 'plan2' | 'plan4' | 'plan5' | 'postgrad';

interface CalculationSummary {
  gross: number;
  personalAllowance: number;
  taxableIncome: number;
  incomeTax: number;
  nationalInsurance: number;
  pensionContribution: number;
  studentLoanDeduction: number;
  totalDeductions: number;
  netPay: number;
  effectiveTaxRate: number;
}

export default function AfterTaxPayCalculator() {
  const [salaryInput, setSalaryInput] = useState<string>('50000');
  const [pensionPercent, setPensionPercent] = useState<number>(5);
  const [studentLoan, setStudentLoan] = useState<StudentLoanPlan>('none');
  const [timeframe, setTimeframe] = useState<'yearly' | 'monthly' | 'weekly'>('monthly');

  const grossSalary = useMemo(() => {
    const parsed = parseFloat(salaryInput.replace(/,/g, ''));
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  }, [salaryInput]);

  const calc: CalculationSummary = useMemo(() => {
    // 1. Pension
    const pensionContribution = Math.round(grossSalary * (pensionPercent / 100));
    const salaryAfterPension = Math.max(0, grossSalary - pensionContribution);

    // 2. Personal Allowance with tapering over £100,000
    let baseAllowance = 12570;
    if (salaryAfterPension > 100000) {
      const reduction = Math.min(12570, Math.floor((salaryAfterPension - 100000) / 2));
      baseAllowance = Math.max(0, baseAllowance - reduction);
    }
    const personalAllowance = baseAllowance;
    const taxableIncome = Math.max(0, salaryAfterPension - personalAllowance);

    // 3. Income Tax calculation
    let incomeTax = 0;
    if (taxableIncome > 0) {
      const basicBandMax = 37700; // £12,571 to £50,270
      const higherBandMax = 112570; // £50,271 to £125,140

      const basicTaxable = Math.min(taxableIncome, basicBandMax);
      const higherTaxable = Math.min(Math.max(0, taxableIncome - basicBandMax), higherBandMax - basicBandMax);
      const additionalTaxable = Math.max(0, taxableIncome - higherBandMax);

      incomeTax = Math.round(
        basicTaxable * 0.20 +
        higherTaxable * 0.40 +
        additionalTaxable * 0.45
      );
    }

    // 4. National Insurance (Employee Class 1)
    let nationalInsurance = 0;
    const niThreshold = 12570;
    const niUpperLimit = 50270;

    if (grossSalary > niThreshold) {
      const mainNiTaxable = Math.min(grossSalary, niUpperLimit) - niThreshold;
      const upperNiTaxable = Math.max(0, grossSalary - niUpperLimit);
      nationalInsurance = Math.round(mainNiTaxable * 0.08 + upperNiTaxable * 0.02);
    }

    // 5. Student Loan Deductions
    let studentLoanDeduction = 0;
    let slThreshold = 0;
    let slRate = 0.09;

    switch (studentLoan) {
      case 'plan1':
        slThreshold = 24990;
        break;
      case 'plan2':
        slThreshold = 27295;
        break;
      case 'plan4':
        slThreshold = 31395;
        break;
      case 'plan5':
        slThreshold = 25000;
        break;
      case 'postgrad':
        slThreshold = 21000;
        slRate = 0.06;
        break;
      default:
        slThreshold = 0;
    }

    if (studentLoan !== 'none' && grossSalary > slThreshold) {
      studentLoanDeduction = Math.round((grossSalary - slThreshold) * slRate);
    }

    const totalDeductions = incomeTax + nationalInsurance + pensionContribution + studentLoanDeduction;
    const netPay = Math.max(0, grossSalary - totalDeductions);
    const effectiveTaxRate = grossSalary > 0 ? (totalDeductions / grossSalary) * 100 : 0;

    return {
      gross: grossSalary,
      personalAllowance,
      taxableIncome,
      incomeTax,
      nationalInsurance,
      pensionContribution,
      studentLoanDeduction,
      totalDeductions,
      netPay,
      effectiveTaxRate,
    };
  }, [grossSalary, pensionPercent, studentLoan]);

  const handleSalaryChange = (val: string) => {
    const clean = val.replace(/[^0-9]/g, '');
    if (clean === '') {
      setSalaryInput('');
      return;
    }
    const num = parseInt(clean, 10);
    setSalaryInput(num.toLocaleString('en-GB'));
  };

  const formatPeriod = (valYearly: number) => {
    let divisor = 1;
    if (timeframe === 'monthly') divisor = 12;
    if (timeframe === 'weekly') divisor = 52;
    return Math.round(valYearly / divisor).toLocaleString('en-GB');
  };

  return (
    <div className="bg-white border-2 border-[#1d70b8] rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto my-8">
      {/* HEADER */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="inline-block bg-[#1d70b8] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-2 rounded">
          UK Income Tax & NI 2025/2026
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
          After-Tax Pay Calculator UK (Take-Home Salary Calculator)
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Calculate your exact net income after Income Tax, National Insurance, pension contributions, and student loan deductions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUTS SECTION */}
        <div className="lg:col-span-6 space-y-6">
          {/* Gross Salary Input */}
          <div>
            <label htmlFor="gross-salary" className="block text-sm font-bold text-[#0b0c0c] mb-2">
              Gross Annual Salary (£)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-bold text-lg">
                £
              </span>
              <input
                type="text"
                id="gross-salary"
                value={salaryInput}
                onChange={(e) => handleSalaryChange(e.target.value)}
                placeholder="e.g. 50,000"
                className="w-full pl-9 pr-4 py-3 text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c]"
              />
            </div>

            {/* Quick Benchmark Buttons */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-xs font-semibold text-gray-500 self-center mr-1">Popular Salaries:</span>
              {[30000, 40000, 50000, 55000, 60000, 65000, 70000, 80000, 100000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setSalaryInput(preset.toLocaleString('en-GB'))}
                  className={`text-xs px-2 py-1 font-semibold rounded border transition-colors ${
                    grossSalary === preset
                      ? 'bg-[#1d70b8] text-white border-[#1d70b8]'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  £{(preset / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Pension Contribution % */}
          <div>
            <label htmlFor="pension-percent" className="block text-sm font-bold text-[#0b0c0c] mb-1">
              Pension Contribution (%)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                id="pension-percent"
                min="0"
                max="20"
                value={pensionPercent}
                onChange={(e) => setPensionPercent(parseInt(e.target.value, 10))}
                className="w-full accent-[#1d70b8] cursor-pointer"
              />
              <span className="font-bold text-[#1d70b8] text-lg w-12 text-right">
                {pensionPercent}%
              </span>
            </div>
            <span className="text-xs text-gray-500">Auto-enrolment standard employee minimum is 5%.</span>
          </div>

          {/* Student Loan Selector */}
          <div>
            <label htmlFor="student-loan" className="block text-sm font-bold text-[#0b0c0c] mb-1">
              Student Loan Plan
            </label>
            <select
              id="student-loan"
              value={studentLoan}
              onChange={(e) => setStudentLoan(e.target.value as StudentLoanPlan)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#1d70b8] focus:outline-none text-sm font-medium bg-white"
            >
              <option value="none">No Student Loan Repayment</option>
              <option value="plan1">Plan 1 (Pre-2012 / Northern Ireland) - 9% over £24,990</option>
              <option value="plan2">Plan 2 (Post-2012 England & Wales) - 9% over £27,295</option>
              <option value="plan4">Plan 4 (Scotland) - 9% over £31,395</option>
              <option value="plan5">Plan 5 (Started Aug 2023 onwards) - 9% over £25,000</option>
              <option value="postgrad">Postgraduate Loan - 6% over £21,000</option>
            </select>
          </div>
        </div>

        {/* RESULTS SUMMARY CARD */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="bg-[#f3f2f1] border-2 border-gray-300 rounded-xl p-6 flex-1 flex flex-col justify-between">
            <div>
              {/* Timeframe Toggle Tabs */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Take-Home Pay Summary
                </span>
                <div className="inline-flex rounded-md border border-gray-300 p-0.5 bg-white">
                  {(['monthly', 'yearly', 'weekly'] as const).map((tf) => (
                    <button
                      key={tf}
                      type="button"
                      onClick={() => setTimeframe(tf)}
                      className={`px-2.5 py-1 text-xs font-bold capitalize rounded transition-colors ${
                        timeframe === tf
                          ? 'bg-[#1d70b8] text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* NET SALARY HIGHLIGHT */}
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00703c] mb-1 tracking-tight">
                £{formatPeriod(calc.netPay)}{' '}
                <span className="text-sm font-bold text-gray-500 font-normal capitalize">
                  / {timeframe} net
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded border border-gray-300 text-xs font-bold text-gray-700 mt-1">
                <span>Effective Tax & Deductions:</span>
                <span className="text-[#1d70b8] font-extrabold">{calc.effectiveTaxRate.toFixed(1)}%</span>
              </div>

              {/* DEDUCTION ITEMIZATION TABLE */}
              <div className="mt-5 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-gray-300 font-semibold text-[#0b0c0c]">
                  <span>Gross Income:</span>
                  <span>£{formatPeriod(calc.gross)}</span>
                </div>
                <div className="flex justify-between py-1 text-red-700 font-medium">
                  <span>Income Tax:</span>
                  <span>- £{formatPeriod(calc.incomeTax)}</span>
                </div>
                <div className="flex justify-between py-1 text-red-700 font-medium">
                  <span>National Insurance (NI):</span>
                  <span>- £{formatPeriod(calc.nationalInsurance)}</span>
                </div>
                {calc.pensionContribution > 0 && (
                  <div className="flex justify-between py-1 text-amber-700 font-medium">
                    <span>Pension ({pensionPercent}%):</span>
                    <span>- £{formatPeriod(calc.pensionContribution)}</span>
                  </div>
                )}
                {calc.studentLoanDeduction > 0 && (
                  <div className="flex justify-between py-1 text-purple-700 font-medium">
                    <span>Student Loan:</span>
                    <span>- £{formatPeriod(calc.studentLoanDeduction)}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-t-2 border-gray-400 font-extrabold text-[#00703c] text-sm sm:text-base pt-2">
                  <span>Net Take-Home Pay:</span>
                  <span>£{formatPeriod(calc.netPay)}</span>
                </div>
              </div>
            </div>

            {/* TAXABLE ALLOWANCE NOTE */}
            <div className="mt-4 pt-3 border-t border-gray-300 text-xs text-gray-600">
              Tax-Free Personal Allowance: <strong>£{calc.personalAllowance.toLocaleString('en-GB')}</strong>
              {calc.gross > 100000 && (
                <span className="text-amber-800 block mt-0.5 font-medium">
                  ⚠️ Personal Allowance is reduced by £1 for every £2 earned above £100,000.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
