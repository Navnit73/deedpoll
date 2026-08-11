'use client';

import { useState, useMemo } from 'react';

type Mode = 'employee' | 'employer' | 'both';

interface NiTaxResult {
  grossSalary: number;
  personalAllowance: number;
  taxableIncome: number;
  incomeTax: number;
  employeeNi: number;
  employerNi: number;
  totalEmployeeDeductions: number;
  netTakeHome: number;
  totalEmployerCost: number;
  effectiveEmployeeTaxRate: number;
  effectiveEmployerRate: number;
}

export default function NationalInsuranceTaxCalculator() {
  const [salaryInput, setSalaryInput] = useState<string>('40000');
  const [viewMode, setViewMode] = useState<Mode>('both');
  const [pensionPercent, setPensionPercent] = useState<number>(0);
  const [period, setPeriod] = useState<'yearly' | 'monthly' | 'weekly'>('yearly');

  const grossSalary = useMemo(() => {
    const parsed = parseFloat(salaryInput.replace(/,/g, ''));
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  }, [salaryInput]);

  const calc: NiTaxResult = useMemo(() => {
    // Pension deduction
    const pensionContribution = Math.round(grossSalary * (pensionPercent / 100));
    const salaryAfterPension = Math.max(0, grossSalary - pensionContribution);

    // Personal Allowance tapering over £100k
    let baseAllowance = 12570;
    if (salaryAfterPension > 100000) {
      const reduction = Math.min(12570, Math.floor((salaryAfterPension - 100000) / 2));
      baseAllowance = Math.max(0, baseAllowance - reduction);
    }
    const personalAllowance = baseAllowance;
    const taxableIncome = Math.max(0, salaryAfterPension - personalAllowance);

    // Income Tax calculation
    let incomeTax = 0;
    if (taxableIncome > 0) {
      const basicBandMax = 37700;
      const higherBandMax = 112570;

      const basicTaxable = Math.min(taxableIncome, basicBandMax);
      const higherTaxable = Math.min(Math.max(0, taxableIncome - basicBandMax), higherBandMax - basicBandMax);
      const additionalTaxable = Math.max(0, taxableIncome - higherBandMax);

      incomeTax = Math.round(
        basicTaxable * 0.20 +
        higherTaxable * 0.40 +
        additionalTaxable * 0.45
      );
    }

    // Employee Class 1 NI (8% between £12,570 & £50,270; 2% above £50,270)
    let employeeNi = 0;
    const primaryThreshold = 12570;
    const uel = 50270;

    if (grossSalary > primaryThreshold) {
      const mainTaxable = Math.min(grossSalary, uel) - primaryThreshold;
      const upperTaxable = Math.max(0, grossSalary - uel);
      employeeNi = Math.round(mainTaxable * 0.08 + upperTaxable * 0.02);
    }

    // Employer Secondary Class 1 NI (15% above £5,000 threshold)
    let employerNi = 0;
    const secondaryThreshold = 5000;
    if (grossSalary > secondaryThreshold) {
      employerNi = Math.round((grossSalary - secondaryThreshold) * 0.15);
    }

    const totalEmployeeDeductions = incomeTax + employeeNi + pensionContribution;
    const netTakeHome = Math.max(0, grossSalary - totalEmployeeDeductions);
    const totalEmployerCost = grossSalary + employerNi;

    const effectiveEmployeeTaxRate = grossSalary > 0 ? (totalEmployeeDeductions / grossSalary) * 100 : 0;
    const effectiveEmployerRate = grossSalary > 0 ? (employerNi / grossSalary) * 100 : 0;

    return {
      grossSalary,
      personalAllowance,
      taxableIncome,
      incomeTax,
      employeeNi,
      employerNi,
      totalEmployeeDeductions,
      netTakeHome,
      totalEmployerCost,
      effectiveEmployeeTaxRate,
      effectiveEmployerRate,
    };
  }, [grossSalary, pensionPercent]);

  const handleSalaryChange = (val: string) => {
    const clean = val.replace(/[^0-9]/g, '');
    if (clean === '') {
      setSalaryInput('');
      return;
    }
    const num = parseInt(clean, 10);
    setSalaryInput(num.toLocaleString('en-GB'));
  };

  const formatVal = (valYearly: number) => {
    let div = 1;
    if (period === 'monthly') div = 12;
    if (period === 'weekly') div = 52;
    return Math.round(valYearly / div).toLocaleString('en-GB');
  };

  return (
    <div className="bg-white border-2 border-[#1d70b8] rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto my-8">
      {/* TITLE */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="inline-block bg-[#1d70b8] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-2 rounded">
          UK HMRC NI & Tax 2025/2026
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
          National Insurance and Tax Calculator UK
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Calculate your National Insurance contributions (Employee & Employer) alongside UK Income Tax.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUT CONTROL PANEL */}
        <div className="lg:col-span-6 space-y-6">
          {/* Salary Input */}
          <div>
            <label htmlFor="ni-gross-salary" className="block text-sm font-bold text-[#0b0c0c] mb-2">
              Gross Annual Salary (£)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-bold text-lg">
                £
              </span>
              <input
                type="text"
                id="ni-gross-salary"
                value={salaryInput}
                onChange={(e) => handleSalaryChange(e.target.value)}
                placeholder="e.g. 40,000"
                className="w-full pl-9 pr-4 py-3 text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c]"
              />
            </div>
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-xs font-semibold text-gray-500 self-center mr-1">Select Salary:</span>
              {[20000, 30000, 40000, 50000, 60000, 75000, 100000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setSalaryInput(preset.toLocaleString('en-GB'))}
                  className={`text-xs px-2.5 py-1 font-semibold rounded border transition-colors ${
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

          {/* Calculator View Mode Selection */}
          <div>
            <label className="block text-sm font-bold text-[#0b0c0c] mb-2">
              Calculation Focus
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'both', label: 'All-in-One' },
                { id: 'employee', label: 'Employee NI & Tax' },
                { id: 'employer', label: 'Employer NI' },
              ].map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setViewMode(mode.id as Mode)}
                  className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-lg border-2 transition-colors text-center ${
                    viewMode === mode.id
                      ? 'bg-[#1d70b8] text-white border-[#1d70b8]'
                      : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pension Slider */}
          <div>
            <label htmlFor="ni-pension-percent" className="block text-sm font-bold text-[#0b0c0c] mb-1">
              Pension Salary Sacrifice (%)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                id="ni-pension-percent"
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
          </div>
        </div>

        {/* RESULTS CARD */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="bg-[#f3f2f1] border-2 border-gray-300 rounded-xl p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Breakdown ({period})
                </span>
                <div className="inline-flex rounded-md border border-gray-300 p-0.5 bg-white">
                  {(['yearly', 'monthly', 'weekly'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriod(p)}
                      className={`px-2.5 py-1 text-xs font-bold capitalize rounded transition-colors ${
                        period === p
                          ? 'bg-[#1d70b8] text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* MAIN STAT HIGHLIGHT */}
              {(viewMode === 'employee' || viewMode === 'both') && (
                <div className="mb-4">
                  <span className="text-xs text-gray-600 font-bold block uppercase">Net Take-Home Salary:</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#00703c]">
                    £{formatVal(calc.netTakeHome)}{' '}
                    <span className="text-sm font-normal text-gray-500">/ {period}</span>
                  </div>
                </div>
              )}

              {/* ITEMIZED NI & TAX BREAKDOWN TABLE */}
              <div className="space-y-2 text-xs sm:text-sm border-t border-gray-300 pt-3">
                <div className="flex justify-between font-semibold text-[#0b0c0c] py-1">
                  <span>Gross Salary:</span>
                  <span>£{formatVal(calc.grossSalary)}</span>
                </div>

                <div className="flex justify-between text-blue-800 font-medium py-1">
                  <span>National Insurance (Employee 8%/2%):</span>
                  <span className="font-bold">£{formatVal(calc.employeeNi)}</span>
                </div>

                <div className="flex justify-between text-red-700 font-medium py-1">
                  <span>Income Tax (PAYE):</span>
                  <span className="font-bold">£{formatVal(calc.incomeTax)}</span>
                </div>

                {(viewMode === 'employer' || viewMode === 'both') && (
                  <div className="flex justify-between text-purple-800 font-medium py-1 bg-purple-50 p-2 rounded border border-purple-200">
                    <span>Employer Secondary Class 1 NI (15%):</span>
                    <span className="font-bold">£{formatVal(calc.employerNi)}</span>
                  </div>
                )}

                <div className="flex justify-between font-extrabold text-[#00703c] text-sm pt-2 border-t border-gray-300">
                  <span>Net Take-Home Pay:</span>
                  <span>£{formatVal(calc.netTakeHome)}</span>
                </div>
              </div>
            </div>

            {/* EMPLOYER TOTAL COST FOOTER */}
            {(viewMode === 'employer' || viewMode === 'both') && (
              <div className="mt-4 pt-3 border-t border-gray-300 text-xs text-gray-700 flex justify-between items-center font-bold bg-white p-2.5 rounded border border-gray-200">
                <span>Total Cost to Employer:</span>
                <span className="text-purple-900 text-sm">£{formatVal(calc.totalEmployerCost)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
