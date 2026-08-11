'use client';

import { useState, useMemo } from 'react';

type BuyerType = 'first_time' | 'main_residence' | 'additional';

interface BandResult {
  name: string;
  rangeLabel: string;
  rate: number;
  taxableAmount: number;
  tax: number;
}

interface CalculationResult {
  totalTax: number;
  effectiveRate: number;
  bands: BandResult[];
  notes: string[];
}

export default function StampDutyCalculator() {
  const [priceInput, setPriceInput] = useState<string>('350000');
  const [buyerType, setBuyerType] = useState<BuyerType>('main_residence');
  const [isNonUkResident, setIsNonUkResident] = useState<boolean>(false);

  const price = useMemo(() => {
    const parsed = parseFloat(priceInput.replace(/,/g, ''));
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  }, [priceInput]);

  const result: CalculationResult = useMemo(() => {
    const extraSurcharge = (buyerType === 'additional' ? 5 : 0) + (isNonUkResident ? 2 : 0);
    const notes: string[] = [];

    let bandsConfig: { min: number; max: number; baseRate: number; label: string }[] = [];

    if (buyerType === 'first_time') {
      if (price <= 625000) {
        notes.push('First-Time Buyer Relief applied (0% on up to £425,000; 5% on £425,001–£625,000).');
        bandsConfig = [
          { min: 0, max: 425000, baseRate: 0, label: 'Up to £425,000' },
          { min: 425000, max: 625000, baseRate: 5, label: '£425,001 to £625,000' },
        ];
      } else {
        notes.push('Property price exceeds £625,000 — First-Time Buyer Relief is not available. Standard SDLT rates apply.');
        bandsConfig = [
          { min: 0, max: 250000, baseRate: 0, label: 'Up to £250,000' },
          { min: 250000, max: 925000, baseRate: 5, label: '£250,001 to £925,000' },
          { min: 925000, max: 1500000, baseRate: 10, label: '£925,001 to £1,500,000' },
          { min: 1500000, max: Infinity, baseRate: 12, label: 'Over £1,500,000' },
        ];
      }
    } else {
      bandsConfig = [
        { min: 0, max: 250000, baseRate: 0, label: 'Up to £250,000' },
        { min: 250000, max: 925000, baseRate: 5, label: '£250,001 to £925,000' },
        { min: 925000, max: 1500000, baseRate: 10, label: '£925,001 to £1,500,000' },
        { min: 1500000, max: Infinity, baseRate: 12, label: 'Over £1,500,000' },
      ];
    }

    if (buyerType === 'additional') {
      notes.push('Includes 5% surcharge for additional residential properties (buy-to-let / second home).');
    }
    if (isNonUkResident) {
      notes.push('Includes 2% surcharge for non-UK residents.');
    }

    let totalTax = 0;
    const bands: BandResult[] = [];

    for (const b of bandsConfig) {
      if (price > b.min) {
        const taxableAmount = Math.min(price, b.max) - b.min;
        const totalRate = b.baseRate + extraSurcharge;
        const bandTax = Math.round(taxableAmount * (totalRate / 100));
        totalTax += bandTax;

        bands.push({
          name: b.label,
          rangeLabel: b.max === Infinity ? `Over £${b.min.toLocaleString()}` : `£${b.min.toLocaleString()} - £${b.max.toLocaleString()}`,
          rate: totalRate,
          taxableAmount,
          tax: bandTax,
        });
      }
    }

    const effectiveRate = price > 0 ? (totalTax / price) * 100 : 0;

    return {
      totalTax,
      effectiveRate,
      bands,
      notes,
    };
  }, [price, buyerType, isNonUkResident]);

  const handlePriceChange = (val: string) => {
    // Only allow numbers and commas
    const clean = val.replace(/[^0-9]/g, '');
    if (clean === '') {
      setPriceInput('');
      return;
    }
    const num = parseInt(clean, 10);
    setPriceInput(num.toLocaleString('en-GB'));
  };

  const setPresetPrice = (preset: number) => {
    setPriceInput(preset.toLocaleString('en-GB'));
  };

  return (
    <div className="bg-white border-2 border-[#1d70b8] rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto my-8">
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="inline-block bg-[#1d70b8] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-2 rounded">
          England & Northern Ireland SDLT
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
          Stamp Duty Land Tax (SDLT) Calculator
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Calculate how much stamp duty you will pay when buying a home or investment property in England.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUTS SECTION */}
        <div className="lg:col-span-7 space-y-6">
          {/* Property Price Input */}
          <div>
            <label htmlFor="property-price" className="block text-sm font-bold text-[#0b0c0c] mb-2">
              Property Purchase Price (£)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-bold text-lg">
                £
              </span>
              <input
                type="text"
                id="property-price"
                value={priceInput}
                onChange={(e) => handlePriceChange(e.target.value)}
                placeholder="e.g. 350,000"
                className="w-full pl-9 pr-4 py-3 text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c]"
              />
            </div>
            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs font-semibold text-gray-500 self-center mr-1">Quick Select:</span>
              {[200000, 350000, 500000, 750000, 1000000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setPresetPrice(preset)}
                  className={`text-xs px-2.5 py-1 font-semibold rounded border transition-colors ${
                    price === preset
                      ? 'bg-[#1d70b8] text-white border-[#1d70b8]'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  £{(preset / 1000).toLocaleString()}k
                </button>
              ))}
            </div>
          </div>

          {/* Buyer Type Selection */}
          <div>
            <label className="block text-sm font-bold text-[#0b0c0c] mb-2">
              Buyer Circumstances
            </label>
            <div className="space-y-3">
              {[
                {
                  id: 'first_time',
                  title: 'First-Time Buyer',
                  desc: 'You have never owned a property or land in the UK or abroad.',
                },
                {
                  id: 'main_residence',
                  title: 'Next Home / Main Residence',
                  desc: 'Replacing your main home (you will not own any other residential property).',
                },
                {
                  id: 'additional',
                  title: 'Additional Property / Buy-to-Let',
                  desc: 'Buying a second home, investment property, or buy-to-let (+5% surcharge).',
                },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`flex items-start p-3.5 border-2 rounded-lg cursor-pointer transition-all ${
                    buyerType === option.id
                      ? 'border-[#1d70b8] bg-blue-50/50'
                      : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="buyerType"
                    value={option.id}
                    checked={buyerType === option.id}
                    onChange={() => setBuyerType(option.id as BuyerType)}
                    className="mt-1 h-4 w-4 text-[#1d70b8] focus:ring-[#1d70b8] border-gray-300"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-[#0b0c0c]">{option.title}</span>
                    <span className="block text-xs text-gray-600 mt-0.5">{option.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Non-UK Resident Checkbox */}
          <div className="pt-2">
            <label className="flex items-start cursor-pointer p-3 border border-gray-200 rounded-lg bg-gray-50">
              <input
                type="checkbox"
                checked={isNonUkResident}
                onChange={(e) => setIsNonUkResident(e.target.checked)}
                className="mt-1 h-4 w-4 text-[#1d70b8] focus:ring-[#1d70b8] border-gray-300 rounded"
              />
              <div className="ml-3 text-xs sm:text-sm">
                <span className="font-bold text-[#0b0c0c] block">Non-UK Resident Surcharge (+2%)</span>
                <span className="text-gray-600 block">
                  Check if any buyer has lived outside the UK for 183+ days in the 12 months before purchase.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-[#f3f2f1] border-2 border-gray-300 rounded-xl p-6 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Estimated Stamp Duty Tax
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#00703c] mb-2 tracking-tight">
                £{result.totalTax.toLocaleString('en-GB')}
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-gray-300 text-xs font-bold text-gray-700">
                <span>Effective Tax Rate:</span>
                <span className="text-[#1d70b8] font-extrabold text-sm">
                  {result.effectiveRate.toFixed(2)}%
                </span>
              </div>

              {/* Notes */}
              {result.notes.length > 0 && (
                <div className="mt-4 space-y-2">
                  {result.notes.map((note, idx) => (
                    <div key={idx} className="text-xs text-gray-700 bg-white p-2.5 rounded border border-gray-200 flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#1d70b8] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Total Summary Box */}
            <div className="mt-6 pt-4 border-t border-gray-300 text-xs text-gray-600 space-y-1">
              <div className="flex justify-between font-medium">
                <span>Property Price:</span>
                <span className="font-bold text-[#0b0c0c]">£{price.toLocaleString('en-GB')}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Stamp Duty (SDLT):</span>
                <span className="font-bold text-[#00703c]">£{result.totalTax.toLocaleString('en-GB')}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#0b0c0c] pt-2 border-t border-gray-200 mt-2">
                <span>Total Cost (Price + Tax):</span>
                <span>£{(price + result.totalTax).toLocaleString('en-GB')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BREAKDOWN TABLE */}
      {result.bands.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#0b0c0c] mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1d70b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Stamp Duty Tax Band Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300 text-gray-700 uppercase font-bold">
                  <th className="py-2.5 px-3">Price Band</th>
                  <th className="py-2.5 px-3 text-center">Applied Rate</th>
                  <th className="py-2.5 px-3 text-right">Taxable Portion</th>
                  <th className="py-2.5 px-3 text-right">Tax Payable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {result.bands.map((b, i) => (
                  <tr key={i} className="hover:bg-gray-50 font-medium">
                    <td className="py-3 px-3 text-[#0b0c0c] font-bold">{b.name}</td>
                    <td className="py-3 px-3 text-center text-[#1d70b8] font-bold">{b.rate}%</td>
                    <td className="py-3 px-3 text-right">£{b.taxableAmount.toLocaleString('en-GB')}</td>
                    <td className="py-3 px-3 text-right font-bold text-[#00703c]">£{b.tax.toLocaleString('en-GB')}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t-2 border-gray-300 font-bold text-[#0b0c0c]">
                  <td colSpan={3} className="py-3 px-3 text-right">Total Stamp Duty Due:</td>
                  <td className="py-3 px-3 text-right text-[#00703c] text-base">£{result.totalTax.toLocaleString('en-GB')}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
