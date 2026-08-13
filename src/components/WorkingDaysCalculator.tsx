'use client';

import { useState, useMemo } from 'react';

type CalcMode = 'between' | 'add_subtract';
type Region = 'england_wales' | 'scotland' | 'northern_ireland';

interface BankHoliday {
  date: string; // YYYY-MM-DD
  title: string;
  regions: Region[];
}

// UK Bank Holidays Dataset (2024 - 2028)
const BANK_HOLIDAYS_DATA: BankHoliday[] = [
  // 2024
  { date: '2024-01-01', title: "New Year's Day", regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2024-01-02', title: '2nd January', regions: ['scotland'] },
  { date: '2024-03-17', title: "St Patrick's Day", regions: ['northern_ireland'] },
  { date: '2024-03-18', title: "St Patrick's Day (substitute day)", regions: ['northern_ireland'] },
  { date: '2024-03-29', title: 'Good Friday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2024-04-01', title: 'Easter Monday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2024-05-06', title: 'Early May Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2024-05-27', title: 'Spring Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2024-07-12', title: 'Battle of the Boyne / Orangemen\'s Day', regions: ['northern_ireland'] },
  { date: '2024-08-05', title: 'Summer Bank Holiday (Scotland)', regions: ['scotland'] },
  { date: '2024-08-26', title: 'Summer Bank Holiday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2024-11-30', title: "St Andrew's Day", regions: ['scotland'] },
  { date: '2024-12-02', title: "St Andrew's Day (substitute day)", regions: ['scotland'] },
  { date: '2024-12-25', title: 'Christmas Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2024-12-26', title: 'Boxing Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },

  // 2025
  { date: '2025-01-01', title: "New Year's Day", regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2025-01-02', title: '2nd January', regions: ['scotland'] },
  { date: '2025-03-17', title: "St Patrick's Day", regions: ['northern_ireland'] },
  { date: '2025-04-18', title: 'Good Friday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2025-04-21', title: 'Easter Monday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2025-05-05', title: 'Early May Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2025-05-26', title: 'Spring Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2025-07-14', title: 'Battle of the Boyne (substitute day)', regions: ['northern_ireland'] },
  { date: '2025-08-04', title: 'Summer Bank Holiday (Scotland)', regions: ['scotland'] },
  { date: '2025-08-25', title: 'Summer Bank Holiday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2025-12-01', title: "St Andrew's Day (substitute day)", regions: ['scotland'] },
  { date: '2025-12-25', title: 'Christmas Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2025-12-26', title: 'Boxing Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },

  // 2026
  { date: '2026-01-01', title: "New Year's Day", regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2026-01-02', title: '2nd January', regions: ['scotland'] },
  { date: '2026-03-17', title: "St Patrick's Day", regions: ['northern_ireland'] },
  { date: '2026-04-03', title: 'Good Friday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2026-04-06', title: 'Easter Monday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2026-05-04', title: 'Early May Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2026-05-25', title: 'Spring Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  // One-off national bank holiday, confirmed by Royal Proclamation, marking Scotland's return
  // to the men's football World Cup finals for the first time since 1998.
  { date: '2026-06-15', title: 'World Cup Bank Holiday', regions: ['scotland'] },
  { date: '2026-07-13', title: 'Battle of the Boyne (substitute day)', regions: ['northern_ireland'] },
  { date: '2026-08-03', title: 'Summer Bank Holiday (Scotland)', regions: ['scotland'] },
  { date: '2026-08-31', title: 'Summer Bank Holiday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2026-11-30', title: "St Andrew's Day", regions: ['scotland'] },
  { date: '2026-12-25', title: 'Christmas Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2026-12-28', title: 'Boxing Day (substitute day)', regions: ['england_wales', 'scotland', 'northern_ireland'] },

  // 2027
  { date: '2027-01-01', title: "New Year's Day", regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2027-01-04', title: '2nd January (substitute day)', regions: ['scotland'] },
  { date: '2027-03-17', title: "St Patrick's Day", regions: ['northern_ireland'] },
  { date: '2027-03-26', title: 'Good Friday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2027-03-29', title: 'Easter Monday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2027-05-03', title: 'Early May Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2027-05-31', title: 'Spring Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2027-07-12', title: 'Battle of the Boyne', regions: ['northern_ireland'] },
  { date: '2027-08-02', title: 'Summer Bank Holiday (Scotland)', regions: ['scotland'] },
  { date: '2027-08-30', title: 'Summer Bank Holiday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2027-11-30', title: "St Andrew's Day", regions: ['scotland'] },
  { date: '2027-12-27', title: 'Christmas Day (substitute day)', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2027-12-28', title: 'Boxing Day (substitute day)', regions: ['england_wales', 'scotland', 'northern_ireland'] },

  // 2028
  { date: '2028-01-03', title: "New Year's Day (substitute day)", regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2028-01-04', title: '2nd January (substitute day)', regions: ['scotland'] },
  { date: '2028-03-17', title: "St Patrick's Day", regions: ['northern_ireland'] },
  { date: '2028-04-14', title: 'Good Friday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2028-04-17', title: 'Easter Monday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2028-05-01', title: 'Early May Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2028-05-29', title: 'Spring Bank Holiday', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2028-07-12', title: 'Battle of the Boyne', regions: ['northern_ireland'] },
  { date: '2028-08-07', title: 'Summer Bank Holiday (Scotland)', regions: ['scotland'] },
  { date: '2028-08-28', title: 'Summer Bank Holiday', regions: ['england_wales', 'northern_ireland'] },
  { date: '2028-11-30', title: "St Andrew's Day", regions: ['scotland'] },
  { date: '2028-12-25', title: 'Christmas Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },
  { date: '2028-12-26', title: 'Boxing Day', regions: ['england_wales', 'scotland', 'northern_ireland'] },
];

export default function WorkingDaysCalculator() {
  const [calcMode, setCalcMode] = useState<CalcMode>('between');
  const [region, setRegion] = useState<Region>('england_wales');

  // Dates for 'between' mode
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  const defaultEndStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  }, []);

  const [startDate, setStartDate] = useState<string>(todayStr);
  const [endDate, setEndDate] = useState<string>(defaultEndStr);
  const [includeStartDate, setIncludeStartDate] = useState<boolean>(true);
  const [excludeBankHolidays, setExcludeBankHolidays] = useState<boolean>(true);

  // Inputs for 'add_subtract' mode
  const [daysCount, setDaysCount] = useState<number>(10);
  const [direction, setDirection] = useState<'add' | 'subtract'>('add');

  // Format YYYY-MM-DD string into JS Date (local time midnight)
  const parseLocalDate = (dateStr: string) => {
    const parts = dateStr.split('-');
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  };

  // Format JS Date into YYYY-MM-DD string
  const formatDateStr = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  // Check if date string is a bank holiday for selected region
  const isBankHoliday = (dateStr: string, reg: Region) => {
    const match = BANK_HOLIDAYS_DATA.find((bh) => bh.date === dateStr && bh.regions.includes(reg));
    return match ? match.title : null;
  };

  // Calculation for MODE A: BETWEEN TWO DATES
  const betweenResult = useMemo(() => {
    if (!startDate || !endDate) return null;

    let start = parseLocalDate(startDate);
    let end = parseLocalDate(endDate);

    let isReversed = false;
    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
      isReversed = true;
    }

    let workingDays = 0;
    let calendarDays = 0;
    let weekendDays = 0;
    const bankHolidaysFound: { date: string; title: string }[] = [];

    const curr = new Date(start);
    if (!includeStartDate) {
      curr.setDate(curr.getDate() + 1);
    }

    while (curr <= end) {
      calendarDays++;
      const dayOfWeek = curr.getDay(); // 0 = Sun, 6 = Sat
      const dateStr = formatDateStr(curr);
      const bhTitle = isBankHoliday(dateStr, region);

      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (isWeekend) {
        weekendDays++;
      } else if (bhTitle && excludeBankHolidays) {
        bankHolidaysFound.push({ date: dateStr, title: bhTitle });
      } else {
        workingDays++;
      }

      curr.setDate(curr.getDate() + 1);
    }

    return {
      workingDays,
      calendarDays,
      weekendDays,
      bankHolidaysFound,
      isReversed,
    };
  }, [startDate, endDate, includeStartDate, excludeBankHolidays, region]);

  // Calculation for MODE B: ADD / SUBTRACT WORKING DAYS
  const addSubtractResult = useMemo(() => {
    if (!startDate || daysCount <= 0) return null;

    const curr = parseLocalDate(startDate);
    let addedWorkingDays = 0;
    let calendarDaysPassed = 0;
    let weekendDaysBypassed = 0;
    const bankHolidaysBypassed: { date: string; title: string }[] = [];

    const step = direction === 'add' ? 1 : -1;

    while (addedWorkingDays < daysCount) {
      curr.setDate(curr.getDate() + step);
      calendarDaysPassed++;

      const dayOfWeek = curr.getDay();
      const dateStr = formatDateStr(curr);
      const bhTitle = isBankHoliday(dateStr, region);
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (isWeekend) {
        weekendDaysBypassed++;
      } else if (bhTitle && excludeBankHolidays) {
        bankHolidaysBypassed.push({ date: dateStr, title: bhTitle });
      } else {
        addedWorkingDays++;
      }
    }

    const targetDateFormatted = curr.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return {
      targetDateStr: formatDateStr(curr),
      targetDateFormatted,
      calendarDaysPassed,
      weekendDaysBypassed,
      bankHolidaysBypassed,
    };
  }, [startDate, daysCount, direction, excludeBankHolidays, region]);

  return (
    <div className="bg-white border-2 border-[#1d70b8] rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto my-8">
      {/* HEADER */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="inline-block bg-[#1d70b8] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-2 rounded">
          UK Business Days Calculator
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
          UK Working Days Calculator
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Calculate working days between two dates, or add/subtract business days taking into account UK Bank Holidays.
        </p>
      </div>

      {/* MODE & REGION SELECTOR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Mode Selector */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Calculation Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setCalcMode('between')}
              className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-lg border-2 transition-all ${
                calcMode === 'between'
                  ? 'border-[#1d70b8] bg-blue-50 text-[#1d70b8]'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Days Between Dates
            </button>
            <button
              type="button"
              onClick={() => setCalcMode('add_subtract')}
              className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-lg border-2 transition-all ${
                calcMode === 'add_subtract'
                  ? 'border-[#1d70b8] bg-blue-50 text-[#1d70b8]'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Add / Subtract Days
            </button>
          </div>
        </div>

        {/* Region Selector */}
        <div>
          <label htmlFor="uk-region" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            UK Region (Bank Holidays)
          </label>
          <select
            id="uk-region"
            value={region}
            onChange={(e) => setRegion(e.target.value as Region)}
            className="w-full py-2 px-3 text-sm font-bold border-2 border-gray-300 rounded-lg focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
          >
            <option value="england_wales">England & Wales (8 Bank Holidays)</option>
            <option value="scotland">Scotland (9, or 10 in 2026)</option>
            <option value="northern_ireland">Northern Ireland (10 Bank Holidays)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUTS SECTION */}
        <div className="lg:col-span-7 space-y-6">
          {calcMode === 'between' ? (
            /* MODE A INPUTS */
            <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="text-sm font-bold text-[#0b0c0c] uppercase tracking-wide">
                Select Date Range
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="start-date" className="block text-xs font-bold text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2.5 text-sm font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="end-date" className="block text-xs font-bold text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full p-2.5 text-sm font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <label className="flex items-center space-x-2 text-xs font-semibold text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeStartDate}
                    onChange={(e) => setIncludeStartDate(e.target.checked)}
                    className="h-4 w-4 text-[#1d70b8] focus:ring-[#1d70b8] border-gray-300 rounded"
                  />
                  <span>Include start date in count</span>
                </label>

                <label className="flex items-center space-x-2 text-xs font-semibold text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={excludeBankHolidays}
                    onChange={(e) => setExcludeBankHolidays(e.target.checked)}
                    className="h-4 w-4 text-[#1d70b8] focus:ring-[#1d70b8] border-gray-300 rounded"
                  />
                  <span>Exclude Official UK Bank Holidays</span>
                </label>
              </div>

              {/* BUG FIX: previously the dates were silently swapped with no on-screen indication. */}
              {betweenResult?.isReversed && (
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-300 rounded-lg p-3 text-xs text-amber-900">
                  <span className="font-bold">Note:</span>
                  <span>Your end date is earlier than your start date, so we've calculated the working days between them the other way round.</span>
                </div>
              )}
            </div>
          ) : (
            /* MODE B INPUTS */
            <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="text-sm font-bold text-[#0b0c0c] uppercase tracking-wide">
                Add or Subtract Business Days
              </h3>

              <div>
                <label htmlFor="start-date-b" className="block text-xs font-bold text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  id="start-date-b"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2.5 text-sm font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="days-count" className="block text-xs font-bold text-gray-700 mb-1">
                    Number of Working Days
                  </label>
                  <input
                    type="number"
                    id="days-count"
                    min="1"
                    max="365"
                    value={daysCount}
                    onChange={(e) => setDaysCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full p-2.5 text-sm font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="direction" className="block text-xs font-bold text-gray-700 mb-1">
                    Action
                  </label>
                  <select
                    id="direction"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value as 'add' | 'subtract')}
                    className="w-full p-2.5 text-sm font-bold border border-gray-300 rounded-md focus:border-[#1d70b8] focus:outline-none text-[#0b0c0c] bg-white"
                  >
                    <option value="add">Add (+ Working Days)</option>
                    <option value="subtract">Subtract (- Working Days)</option>
                  </select>
                </div>
              </div>

              {/* Quick Presets */}
              <div>
                <span className="text-xs font-bold text-gray-600 block mb-1.5">Common Presets:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: '5 Days (1 Wk)', count: 5 },
                    { label: '10 Days (2 Wks)', count: 10 },
                    { label: '15 Days (Deed Poll)', count: 15 },
                    { label: '20 Days (Notice)', count: 20 },
                    { label: '30 Days (Invoice)', count: 30 },
                    { label: '60 Days', count: 60 },
                  ].map((p) => (
                    <button
                      key={p.count}
                      type="button"
                      onClick={() => setDaysCount(p.count)}
                      className={`text-xs px-2.5 py-1 font-semibold rounded border transition-colors ${
                        daysCount === p.count
                          ? 'bg-[#1d70b8] text-white border-[#1d70b8]'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <label className="flex items-center space-x-2 text-xs font-semibold text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={excludeBankHolidays}
                    onChange={(e) => setExcludeBankHolidays(e.target.checked)}
                    className="h-4 w-4 text-[#1d70b8] focus:ring-[#1d70b8] border-gray-300 rounded"
                  />
                  <span>Exclude Official UK Bank Holidays</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-[#f3f2f1] border-2 border-gray-300 rounded-xl p-6 flex-1 flex flex-col justify-between space-y-6">
            {calcMode === 'between' ? (
              /* MODE A RESULTS */
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                  Total Working Days
                </span>
                <div className="text-5xl font-extrabold text-[#00703c] tracking-tight mb-2">
                  {betweenResult ? betweenResult.workingDays : 0}{' '}
                  <span className="text-lg font-bold text-gray-600">Working Days</span>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-gray-300">
                  <div className="bg-white p-3 rounded-lg border border-gray-300 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">Calendar Days:</span>
                    <span className="font-bold text-[#0b0c0c]">{betweenResult?.calendarDays || 0}</span>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-gray-300 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">Weekend Days Excluded:</span>
                    <span className="font-bold text-[#0b0c0c]">{betweenResult?.weekendDays || 0}</span>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-gray-300 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">Bank Holidays Excluded:</span>
                    <span className="font-bold text-[#1d70b8]">{betweenResult?.bankHolidaysFound.length || 0}</span>
                  </div>
                </div>

                {/* Bank Holidays List */}
                {betweenResult && betweenResult.bankHolidaysFound.length > 0 && (
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
                    <span className="font-bold text-[#1d70b8] block mb-1">Bank Holidays Bypassed:</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-700">
                      {betweenResult.bankHolidaysFound.map((bh) => (
                        <li key={bh.date}>
                          <strong>{bh.date}:</strong> {bh.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* MODE B RESULTS */
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                  Calculated Target Date
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00703c] tracking-tight mb-2 leading-snug">
                  {addSubtractResult ? addSubtractResult.targetDateFormatted : '---'}
                </div>

                <div className="space-y-2.5 pt-3 border-t border-gray-300">
                  <div className="bg-white p-3 rounded-lg border border-gray-300 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">Calendar Days Duration:</span>
                    <span className="font-bold text-[#0b0c0c]">{addSubtractResult?.calendarDaysPassed || 0} days</span>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-gray-300 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">Weekend Days Bypassed:</span>
                    <span className="font-bold text-[#0b0c0c]">{addSubtractResult?.weekendDaysBypassed || 0}</span>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-gray-300 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">Bank Holidays Bypassed:</span>
                    <span className="font-bold text-[#1d70b8]">{addSubtractResult?.bankHolidaysBypassed.length || 0}</span>
                  </div>
                </div>

                {/* Bank Holidays Bypassed List */}
                {addSubtractResult && addSubtractResult.bankHolidaysBypassed.length > 0 && (
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
                    <span className="font-bold text-[#1d70b8] block mb-1">Bank Holidays Skipped:</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-700">
                      {addSubtractResult.bankHolidaysBypassed.map((bh) => (
                        <li key={bh.date}>
                          <strong>{bh.date}:</strong> {bh.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Note badge */}
            <div className="bg-gray-100 border border-gray-300 p-3 rounded-lg text-xs text-gray-700">
              <strong className="block text-[#0b0c0c]">Regional Accuracy</strong>
              Calculated using official public bank holiday schedules for <strong>{region === 'england_wales' ? 'England & Wales' : region === 'scotland' ? 'Scotland' : 'Northern Ireland'}</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}