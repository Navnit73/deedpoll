'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ShareWidget from '@/components/ShareWidget';
import StructuredData from '@/components/StructuredData';

interface ChecklistItem {
  id: string;
  title: string;
  category: 'government' | 'banking' | 'healthcare' | 'services';
  fee: boolean;
  priority: 'high' | 'medium' | 'low';
  desc: string;
  linkText?: string;
  linkHref?: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'passport',
    title: 'HM Passport Office',
    category: 'government',
    fee: true,
    priority: 'high',
    desc: 'Renew your adult British passport to reflect your new legal name. Essential photo ID to show other institutions.',
    linkText: 'Passport renewal guide →',
    linkHref: '/how-to-change-name-on-passport-uk'
  },
  {
    id: 'dvla-licence',
    title: 'DVLA (Driving Licence)',
    category: 'government',
    fee: false,
    priority: 'high',
    desc: 'Submit a D1 form by post to DVLA Swansea. Completely free of charge. Failure to update carries up to £1,000 fine.',
    linkText: 'DVLA driving licence guide →',
    linkHref: '/change-name-on-driving-licence-dvla-uk'
  },
  {
    id: 'dvla-v5c',
    title: 'DVLA (Vehicle Logbook V5C)',
    category: 'government',
    fee: false,
    priority: 'medium',
    desc: 'Update Section 3 of your vehicle registration certificate (V5C) and post to DVLA Swansea SA99 1BA (free).'
  },
  {
    id: 'bank-accounts',
    title: 'Banks & Building Societies',
    category: 'banking',
    fee: false,
    priority: 'high',
    desc: 'Notify current accounts, savings, and credit cards. Most high street banks accept original deed poll in branch.',
    linkText: 'Generate bank letter →',
    linkHref: '/name-change-letters-generator'
  },
  {
    id: 'hmrc',
    title: 'HMRC & National Insurance',
    category: 'government',
    fee: false,
    priority: 'high',
    desc: 'Update your National Insurance record, PAYE tax code, and personal tax account to ensure your wages and pension match.',
    linkText: 'Generate HMRC letter →',
    linkHref: '/name-change-letters-generator'
  },
  {
    id: 'nhs-gp',
    title: 'NHS GP Surgery & Dentist',
    category: 'healthcare',
    fee: false,
    priority: 'high',
    desc: 'Notify your GP surgery to update your electronic Personal Demographics Service (PDS) record across all NHS hospitals.',
    linkText: 'Generate NHS letter →',
    linkHref: '/name-change-letters-generator'
  },
  {
    id: 'employer',
    title: 'Employer, HR & Payroll',
    category: 'services',
    fee: false,
    priority: 'high',
    desc: 'Ensure your work payroll, P60, pension scheme, workplace email, and security badge match your new legal name.',
    linkText: 'Generate employer letter →',
    linkHref: '/name-change-letters-generator'
  },
  {
    id: 'electoral-roll',
    title: 'Electoral Register (Voter ID)',
    category: 'government',
    fee: false,
    priority: 'medium',
    desc: 'Register to vote with your new legal name. Keeps your credit record updated and allows you to vote with matching ID.'
  },
  {
    id: 'council-tax',
    title: 'Local Council (Council Tax & Benefits)',
    category: 'government',
    fee: false,
    priority: 'medium',
    desc: 'Notify your city or county council to update billing names on Council Tax and any local housing benefits.'
  },
  {
    id: 'mortgage-loans',
    title: 'Mortgage Lender & Personal Loans',
    category: 'banking',
    fee: false,
    priority: 'medium',
    desc: 'Inform your mortgage provider, loan companies, and student finance (SLC) with an original certified deed poll copy.'
  },
  {
    id: 'pensions-investments',
    title: 'Pensions & Investment Accounts',
    category: 'banking',
    fee: false,
    priority: 'medium',
    desc: 'Update workplace pensions, private SIPPs, ISAs, premium bonds, and stockbroker accounts.'
  },
  {
    id: 'insurance-policies',
    title: 'Insurance Providers (Car, Home, Life, Travel)',
    category: 'services',
    fee: false,
    priority: 'high',
    desc: 'Crucial: car and home insurance policies must match your legal name to ensure claims remain valid.'
  },
  {
    id: 'utilities',
    title: 'Utilities (Gas, Electricity, Water)',
    category: 'services',
    fee: false,
    priority: 'low',
    desc: 'Update billing account names with your energy supplier and regional water company.'
  },
  {
    id: 'telecoms',
    title: 'Mobile Phone & Broadband Providers',
    category: 'services',
    fee: false,
    priority: 'low',
    desc: 'Notify your mobile network operator and home internet provider to update billing records.'
  },
  {
    id: 'land-registry',
    title: 'HM Land Registry (Property Owners)',
    category: 'government',
    fee: false,
    priority: 'low',
    desc: 'If you own real estate, update your name on the property title register using Land Registry Form ID1 / AP1.'
  },
  {
    id: 'will-legal',
    title: 'Will & Power of Attorney',
    category: 'services',
    fee: false,
    priority: 'medium',
    desc: 'Ensure your Last Will and Testament, codicil, or Lasting Power of Attorney (LPA) documents reference your new name.'
  }
];

export default function ChecklistPage() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('deedpoll_checklist_completed');
      if (saved) {
        setCheckedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoaded(true);
  }, []);

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('deedpoll_checklist_completed', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const handleReset = () => {
    if (window.confirm('Reset all checklist progress?')) {
      setCheckedIds([]);
      try {
        localStorage.removeItem('deedpoll_checklist_completed');
      } catch (e) {}
    }
  };

  const completedCount = checkedIds.length;
  const totalCount = CHECKLIST_ITEMS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filteredItems = activeCategory === 'all'
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter(item => item.category === activeCategory);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HowTo",
              "name": "UK Name Change Checklist & Action Plan",
              "description": "Complete checklist of all 16 organisations to notify after executing a UK Deed Poll.",
              "step": CHECKLIST_ITEMS.map((item, idx) => ({
                "@type": "HowToStep",
                "position": idx + 1,
                "name": `Notify ${item.title}`,
                "text": item.desc
              }))
            }
          ]
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#1d70b8] underline">Home</Link></li>
            <li>›</li>
            <li className="text-gray-900 font-semibold">Name Change Checklist</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="border-b-2 border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-blue-100 text-[#1d70b8] font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
            Interactive Tracking Tool
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight">
            UK Name Change Checklist: Who to Notify
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Track your progress across all 16 UK organisations. Your ticked items are automatically saved in your browser so you can return anytime.
          </p>
        </div>

        {/* Live Progress Bar Widget */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#1d70b8] rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Progress:</span>
              <h2 className="text-2xl font-extrabold text-[#0b0c0c]">
                {completedCount} of {totalCount} completed ({progressPercent}%)
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-xs px-3.5 py-2 rounded-lg transition-all shadow-sm"
              >
                🖨️ Print / PDF
              </button>
              {completedCount > 0 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-red-600 hover:underline font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Visual Progress Track */}
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="bg-[#00703c] h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {completedCount === totalCount && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded-lg text-sm text-green-900 font-bold text-center">
              🎉 Congratulations! You have updated your name with all UK organisations!
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'all', label: 'All Items (16)' },
            { id: 'government', label: 'Government & ID (6)' },
            { id: 'banking', label: 'Banking & Finance (3)' },
            { id: 'healthcare', label: 'Healthcare (1)' },
            { id: 'services', label: 'Work & Utilities (6)' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1d70b8] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Checklist List */}
        <div className="space-y-4 mb-12">
          {filteredItems.map(item => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                  isChecked
                    ? 'bg-green-50/60 border-green-500 shadow-sm'
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // handled by parent div onClick
                    className="w-6 h-6 text-[#00703c] rounded border-gray-400 focus:ring-[#00703c] cursor-pointer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className={`text-lg font-bold ${isChecked ? 'line-through text-gray-500' : 'text-[#0b0c0c]'}`}>
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {item.fee ? (
                        <span className="text-[11px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">
                          💷 Gov Renewal Fee
                        </span>
                      ) : (
                        <span className="text-[11px] bg-green-100 text-green-900 font-bold px-2 py-0.5 rounded">
                          Free Update
                        </span>
                      )}
                    </div>
                  </div>
                  <p className={`text-sm ${isChecked ? 'text-gray-400' : 'text-gray-700'}`}>
                    {item.desc}
                  </p>
                  {item.linkHref && (
                    <div className="mt-2" onClick={e => e.stopPropagation()}>
                      <Link
                        href={item.linkHref}
                        className="text-xs font-bold text-[#1d70b8] hover:underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        {item.linkText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Letter Generator Callout */}
        <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#0b0c0c]">Need cover letters for your envelope?</h3>
            <p className="text-sm text-gray-700 mt-1 max-w-lg">
              Use our free Name Change Letter Generator to create official cover letters for DVLA, Passport Office, Banks, HMRC, and employers in 1 click.
            </p>
          </div>
          <Link
            href="/name-change-letters-generator"
            className="whitespace-nowrap bg-[#1d70b8] hover:bg-[#003078] text-white font-bold px-5 py-3 rounded-lg text-sm transition-transform active:scale-95 shadow-sm"
          >
            Open Letter Generator →
          </Link>
        </div>

        {/* Share Widget */}
        <ShareWidget
          title="Interactive UK Name Change Checklist — Who to Notify"
          description="Interactive tracker with all 16 UK organisations to notify after changing your name."
        />

      </div>
    </div>
  );
}
