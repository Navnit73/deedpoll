'use client';

import { useState } from 'react';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

interface LetterOrg {
  id: string;
  name: string;
  category: 'government' | 'banking' | 'healthcare' | 'services';
  recipientAddress: string;
  subject: string;
  referenceLabel: string;
  referencePlaceholder: string;
  defaultRef: string;
  enclosures: string[];
  notes: string;
  generateBody: (data: {
    oldName: string;
    newName: string;
    address: string;
    date: string;
    refNumber: string;
    orgName?: string;
  }) => string;
}

const ORGANISATIONS: LetterOrg[] = [
  {
    id: 'dvla',
    name: 'DVLA (Driving Licence)',
    category: 'government',
    recipientAddress: 'Driver and Vehicle Licensing Agency (DVLA)\nSwansea\nSA99 1BN',
    subject: 'Notification of Legal Change of Name — Driving Licence Application',
    referenceLabel: 'Driving Licence Number',
    referencePlaceholder: 'e.g. SMIT950123AB9IJ',
    defaultRef: '',
    enclosures: [
      'Original Deed Poll document',
      'Current Photocard Driving Licence (both photocard and paper counterpart if applicable)',
      'Completed D1 Application Form (available from Post Office or DVLA website)'
    ],
    notes: 'Updating your name on your driving licence by post using a D1 form is completely free of charge.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To Driver and Vehicle Licensing Agency (DVLA),
Swansea, SA99 1BN

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Sir / Madam,

RE: NOTIFICATION OF LEGAL NAME CHANGE — DRIVING LICENCE ${refNumber ? `(Ref: ${refNumber})` : ''}

I am writing to formally inform you that I have legally changed my name from:

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}

I have enclosed my original Deed Poll as legal proof of this name change, along with my completed D1 application form and existing driving licence.

Please update your records and issue my new photocard driving licence bearing my new legal name.

Thank you for your prompt assistance.

Yours faithfully,

_____________________________
${newName || '[Your New Signature]'}
(Formerly known as ${oldName || '[Your Former Full Name]'})`
  },
  {
    id: 'passport',
    name: 'HM Passport Office',
    category: 'government',
    recipientAddress: 'HM Passport Office\nCustomer Services\nPO Box 767\nSouthport\nPR8 9PW',
    subject: 'UK Passport Renewal / Name Change Application',
    referenceLabel: 'Old Passport Number (Optional)',
    referencePlaceholder: 'e.g. 543219876',
    defaultRef: '',
    enclosures: [
      'Original Unenrolled Deed Poll',
      'Existing British Passport',
      'Two compliant passport photos (or online digital photo code)',
      'Supporting proof of name in use (e.g. updated bank statement or driving licence)'
    ],
    notes: 'HM Passport Office requires an original signed deed poll and proof of new name in use if changing both first name and surname.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To HM Passport Office,
PO Box 767, Southport, PR8 9PW

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Passport Examiner,

RE: LEGAL CHANGE OF NAME ON BRITISH PASSPORT ${refNumber ? `(Current Passport No: ${refNumber})` : ''}

I am writing to submit my formal application to renew and update my British Passport following my legal change of name.

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}

I have enclosed:
1. My original legal Deed Poll evidencing the abandonment of my previous name.
2. My current passport.
3. Relevant supporting documents and application reference.

Please issue my replacement passport showing my new legal name as stated above.

Yours faithfully,

_____________________________
${newName || '[Your New Signature]'}`
  },
  {
    id: 'bank',
    name: 'Bank / Building Society',
    category: 'banking',
    recipientAddress: '[Your Bank Name]\nCustomer Services / Account Changes Department\n[Bank Branch / Head Office Address]',
    subject: 'Notification of Legal Name Change — Account Details Update',
    referenceLabel: 'Account Number & Sort Code',
    referencePlaceholder: 'e.g. Sort Code: 20-00-00, Acc: 12345678',
    defaultRef: '',
    enclosures: [
      'Original Deed Poll or Certified Copy',
      'Updated Government Photo ID (e.g. new driving licence or passport)',
      'Current bank debit card for replacement'
    ],
    notes: 'Most high street banks allow in-branch or secure postal submission. They will issue you a new debit card in your new name.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To The Branch Manager / Customer Services,
[Bank / Building Society Name]

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Sir / Madam,

RE: UPDATE OF NAME ON ACCOUNT(S) ${refNumber ? `— REF: ${refNumber}` : ''}

I am writing to notify you that I have legally changed my name and request that you update all records associated with my accounts.

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}
Account / Sort Code: ${refNumber || '[Insert Account Details]'}

Enclosed with this letter is my original legal Deed Poll document along with identification demonstrating my identity.

Please update my customer profile, issue replacement cards and chequebooks in my new name, and confirm once this change has been executed.

Yours sincerely,

_____________________________
${newName || '[Your New Signature]'}
(Formerly: ${oldName || '[Your Former Full Name]'})`
  },
  {
    id: 'hmrc',
    name: 'HMRC & National Insurance',
    category: 'government',
    recipientAddress: 'HM Revenue and Customs (HMRC)\nNational Insurance Contributions and Employers Office\nHM Revenue and Customs\nBX9 1AN',
    subject: 'Change of Personal Details — National Insurance & Income Tax Records',
    referenceLabel: 'National Insurance (NI) Number',
    referencePlaceholder: 'e.g. QQ 12 34 56 A',
    defaultRef: '',
    enclosures: [
      'Copy of Deed Poll',
      'Proof of National Insurance Number (P60 or payslip)'
    ],
    notes: 'You can also notify HMRC online via your Personal Tax Account, but a letter is recommended if you do not have digital ID verification.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To HM Revenue and Customs (HMRC),
National Insurance Contributions & Income Tax,
BX9 1AN

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Sir / Madam,

RE: NOTIFICATION OF NAME CHANGE — NATIONAL INSURANCE NO: ${refNumber || '[Your NI Number]'}

Please be advised that I have legally changed my name. Please update my National Insurance and Income Tax records accordingly.

Previous Legal Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}
Date of Birth: [Your Date of Birth]
National Insurance Number: ${refNumber || '[Your NI Number]'}

I have enclosed a copy of my legal Deed Poll as verification of this change.

Please ensure my tax code and PAYE records reflect my new name so my employer's payroll aligns correctly.

Yours faithfully,

_____________________________
${newName || '[Your New Signature]'}`
  },
  {
    id: 'nhs',
    name: 'NHS GP Surgery & Healthcare',
    category: 'healthcare',
    recipientAddress: 'The Practice Manager\n[Your GP Surgery / Health Centre Name]\n[Surgery Address & Postcode]',
    subject: 'Update Patient Records — Legal Name Change',
    referenceLabel: 'NHS Number (if known)',
    referencePlaceholder: 'e.g. 485 777 3456',
    defaultRef: '',
    enclosures: [
      'Copy of Deed Poll document',
      'Proof of ID / Address'
    ],
    notes: 'Your GP surgery will update your Personal Demographics Service (PDS) record, which automatically syncs across the NHS, hospitals, and pharmacies.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To The Practice Manager,
[Name of GP Practice / Surgery]
[Surgery Address]

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Practice Manager,

RE: PATIENT RECORD UPDATE — LEGAL CHANGE OF NAME ${refNumber ? `(NHS No: ${refNumber})` : ''}

I am a registered patient at your practice and am writing to request that you update my medical and electronic records to reflect my new legal name.

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}
Date of Birth: [Your Date of Birth]
NHS Number: ${refNumber || '[Insert if known]'}

I have enclosed a copy of my Deed Poll verifying this legal change. Please update my NHS Personal Demographics Service (PDS) record so that hospital appointments, prescriptions, and test results are correctly issued.

Yours sincerely,

_____________________________
${newName || '[Your New Signature]'}`
  },
  {
    id: 'employer',
    name: 'Employer / HR & Payroll',
    category: 'services',
    recipientAddress: 'Human Resources & Payroll Department\n[Your Employer / Company Name]\n[Company Address]',
    subject: 'Employee Record & Payroll Update — Legal Name Change',
    referenceLabel: 'Employee / Staff ID Number',
    referencePlaceholder: 'e.g. EMP-98214',
    defaultRef: '',
    enclosures: [
      'Copy of Deed Poll'
    ],
    notes: 'Your employer must update your payroll to prevent tax issues and issue updated email addresses, badges, and pension records.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To Human Resources & Payroll,
[Company / Employer Name]

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear HR Team,

RE: FORMAL NOTIFICATION OF LEGAL NAME CHANGE ${refNumber ? `(Employee ID: ${refNumber})` : ''}

I am writing to notify you that I have legally changed my name and request that my personnel file, payroll, pension scheme, and internal directories be updated.

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}
Employee ID: ${refNumber || '[Insert Staff ID]'}

I have attached a copy of my legal Deed Poll for verification.

Please let me know if you require any additional documentation to update my P60 records and workplace benefits.

Yours sincerely,

_____________________________
${newName || '[Your New Signature]'}`
  },
  {
    id: 'council',
    name: 'Council Tax & Electoral Register',
    category: 'government',
    recipientAddress: 'Revenues & Electoral Registration Officer\n[Your Local Council Name]\n[Council Office Address]',
    subject: 'Council Tax Account & Electoral Register Name Change',
    referenceLabel: 'Council Tax Account Number',
    referencePlaceholder: 'e.g. CT-8841920',
    defaultRef: '',
    enclosures: [
      'Copy of Deed Poll'
    ],
    notes: 'Updating the electoral register ensures your credit score is not impacted and allows you to vote with your new ID.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To The Revenues & Electoral Registration Team,
[Your Local City / Borough / County Council]

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Council Team,

RE: UPDATE OF COUNCIL TAX & ELECTORAL REGISTER — LEGAL NAME CHANGE

I am writing to notify you that I have legally changed my name and wish to update my Council Tax billing account and the Electoral Register.

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}
Property Address: ${address || '[Your Current Address]'}
Council Tax Ref: ${refNumber || '[Your Council Tax Ref]'}

I enclose a copy of my legal Deed Poll as proof of name change.

Please update the account, issue an amended Council Tax bill in my new name, and update the Register of Electors.

Yours faithfully,

_____________________________
${newName || '[Your New Signature]'}`
  },
  {
    id: 'utilities',
    name: 'Utilities, Broadband & Insurance',
    category: 'services',
    recipientAddress: 'Customer Accounts\n[Utility / Energy / Telecom Provider Name]\n[Provider Address]',
    subject: 'Notification of Change of Account Holder Name',
    referenceLabel: 'Customer Account / Policy Number',
    referencePlaceholder: 'e.g. POL-9923841',
    defaultRef: '',
    enclosures: [
      'Copy of Deed Poll'
    ],
    notes: 'Energy providers, water suppliers, broadband companies, and car/home insurers need your correct legal name on record.',
    generateBody: ({ oldName, newName, address, date, refNumber }) => `Date: ${date || '[Date]'}

To Customer Support / Account Administration,
[Company Name]

From:
${newName || '[Your New Full Name]'}
${address || '[Your Current Address]'}

Dear Customer Support,

RE: CHANGE OF ACCOUNT HOLDER NAME — REF / POLICY: ${refNumber || '[Your Account / Policy Number]'}

Please be advised that I have legally changed my name. I would be grateful if you could update my billing details and policy documents accordingly.

Former Name: ${oldName || '[Your Former Full Name]'}
New Legal Name: ${newName || '[Your New Full Name]'}
Account / Policy No: ${refNumber || '[Your Account Number]'}
Service Address: ${address || '[Your Address]'}

A copy of my official Deed Poll is enclosed.

Please send confirmation once my customer profile has been updated.

Yours faithfully,

_____________________________
${newName || '[Your New Signature]'}`
  }
];

export default function LetterGeneratorPage() {
  const [formData, setFormData] = useState({
    oldName: '',
    newName: '',
    address: '',
    date: new Date().toISOString().split('T')[0],
    refNumbers: {} as Record<string, string>,
  });

  const [selectedOrgId, setSelectedOrgId] = useState<string>('dvla');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedOrg = ORGANISATIONS.find(o => o.id === selectedOrgId) || ORGANISATIONS[0];

  const handleRefChange = (orgId: string, val: string) => {
    setFormData(prev => ({
      ...prev,
      refNumbers: {
        ...prev.refNumbers,
        [orgId]: val
      }
    }));
  };

  const letterText = selectedOrg.generateBody({
    oldName: formData.oldName,
    newName: formData.newName,
    address: formData.address,
    date: formData.date,
    refNumber: formData.refNumbers[selectedOrg.id] || '',
  });

  const copyToClipboard = async (text: string, orgId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(orgId);
      setTimeout(() => setCopiedId(null), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  const printLetter = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${selectedOrg.name} - Name Change Notification Letter</title>
          <style>
            body { font-family: 'Times New Roman', Times, serif; line-height: 1.6; font-size: 12pt; padding: 40px; color: #000; }
            pre { font-family: inherit; white-space: pre-wrap; word-wrap: break-word; }
            .enclosures { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 15px; font-size: 10pt; }
          </style>
        </head>
        <body>
          <pre>${letterText}</pre>
          <div class="enclosures">
            <strong>Enclosed Documents:</strong>
            <ul>
              ${selectedOrg.enclosures.map(enc => `<li>${enc}</li>`).join('')}
            </ul>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "UK Name Change Letter Generator",
              "operatingSystem": "All",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "GBP"
              },
              "description": "Free tool to generate official name change notification letters for DVLA, Passport Office, Banks, HMRC, NHS, and Employers in the UK."
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I notify organisations after changing my name by deed poll?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Send a formal written notification letter enclosing your original deed poll and existing ID to each organisation such as DVLA, HM Passport Office, HMRC, and your bank."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a fee to change name on my UK driving licence?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Changing your name on a UK driving licence with DVLA by postal D1 form is completely free."
                  }
                }
              ]
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#1d70b8] underline">Home</Link></li>
            <li>›</li>
            <li className="text-gray-900 font-semibold">Name Change Letter Generator</li>
          </ol>
        </nav>

        {/* Title Header */}
        <div className="border-b-2 border-gray-200 pb-8 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#00703c] font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
            ✓ 100% Free Interactive Legal Utility
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight">
            UK Name Change Notification Letter Generator
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-700 max-w-3xl">
            Enter your details once below to generate tailored, legally worded cover letters for the <strong>DVLA, Passport Office, Banks, HMRC, NHS, and Employers</strong>. Copy, print, or download instantly.
          </p>
        </div>

        {/* Main 2-Column App Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Details (5 cols) */}
          <div className="lg:col-span-5 bg-gray-50 border-2 border-gray-300 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#0b0c0c] mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-sm font-bold">1</span>
              Your Details
            </h2>
            <p className="text-xs text-gray-600 mb-6">
              These details automatically populate across all generated letters.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#0b0c0c] mb-1">
                  Former / Old Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Robert Smith"
                  value={formData.oldName}
                  onChange={e => setFormData({ ...formData, oldName: e.target.value })}
                  className="w-full border-2 border-gray-300 p-2.5 rounded text-sm focus:border-[#1d70b8] focus:ring-2 focus:ring-blue-100 outline-none bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0b0c0c] mb-1">
                  New Legal Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Robert Williams"
                  value={formData.newName}
                  onChange={e => setFormData({ ...formData, newName: e.target.value })}
                  className="w-full border-2 border-gray-300 p-2.5 rounded text-sm focus:border-[#1d70b8] focus:ring-2 focus:ring-blue-100 outline-none bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0b0c0c] mb-1">
                  Current Residential Address & Postcode
                </label>
                <textarea
                  rows={3}
                  placeholder="12 High Street, Flat 4B&#10;Manchester&#10;M1 4BT"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border-2 border-gray-300 p-2.5 rounded text-sm focus:border-[#1d70b8] focus:ring-2 focus:ring-blue-100 outline-none bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0b0c0c] mb-1">
                  Date on Letter
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border-2 border-gray-300 p-2.5 rounded text-sm focus:border-[#1d70b8] focus:ring-2 focus:ring-blue-100 outline-none bg-white font-medium"
                />
              </div>

              <hr className="my-4 border-gray-200" />

              <div>
                <label className="block text-sm font-bold text-[#0b0c0c] mb-1">
                  {selectedOrg.referenceLabel} <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder={selectedOrg.referencePlaceholder}
                  value={formData.refNumbers[selectedOrg.id] || ''}
                  onChange={e => handleRefChange(selectedOrg.id, e.target.value)}
                  className="w-full border-2 border-[#1d70b8]/40 p-2.5 rounded text-sm focus:border-[#1d70b8] focus:ring-2 focus:ring-blue-100 outline-none bg-white font-medium"
                />
                <p className="text-[11px] text-gray-500 mt-1">
                  Personalizes the selected letter for {selectedOrg.name}.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-blue-100/60 border border-blue-300 rounded-lg p-4 text-xs text-gray-800">
              <p className="font-bold mb-1">💡 Need a Free Deed Poll first?</p>
              <p className="mb-2">If you haven't generated your legal deed poll yet, you can create and download the official PDF in 2 minutes.</p>
              <Link
                href="/change-name-in-uk-by-deedpoll"
                className="inline-block font-bold text-[#1d70b8] hover:underline underline-offset-2"
              >
                Create Free Deed Poll PDF →
              </Link>
            </div>
          </div>

          {/* Right Column: Organisation Selector & Live Letter Preview (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Organisation Selector Tabs */}
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Select Recipient Organisation:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ORGANISATIONS.map(org => {
                  const isActive = org.id === selectedOrg.id;
                  return (
                    <button
                      key={org.id}
                      onClick={() => setSelectedOrgId(org.id)}
                      className={`p-2.5 text-xs font-bold rounded-lg border text-left transition-all flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#1d70b8] text-white border-[#1d70b8] shadow-sm'
                          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <span>{org.name}</span>
                      <span className={`text-[10px] capitalize mt-1 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                        {org.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Letter Preview Box */}
            <div className="bg-white border-2 border-gray-400 rounded-xl overflow-hidden shadow-md">
              {/* Box Action Header */}
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="font-bold text-sm text-[#0b0c0c]">
                    {selectedOrg.name} — Cover Letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(letterText, selectedOrg.id)}
                    className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-[#0b0c0c] font-bold text-xs px-3 py-1.5 rounded transition-all active:scale-95"
                  >
                    {copiedId === selectedOrg.id ? (
                      <>
                        <span className="text-[#00703c]">✓ Copied</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={printLetter}
                    className="inline-flex items-center gap-1.5 bg-[#00703c] hover:bg-[#005a30] text-white font-bold text-xs px-3 py-1.5 rounded transition-all active:scale-95"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>Print / Save PDF</span>
                  </button>
                </div>
              </div>

              {/* Letter Preview Content */}
              <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm text-gray-900 bg-white whitespace-pre-wrap leading-relaxed border-b border-gray-200 select-all overflow-x-auto">
                {letterText}
              </div>

              {/* Enclosures & Helpful Notes */}
              <div className="bg-gray-50 p-5 text-xs text-gray-800 space-y-3">
                <div>
                  <strong className="text-[#0b0c0c] uppercase tracking-wider text-[11px] block mb-1.5">
                    📎 What to enclose in the envelope for {selectedOrg.name}:
                  </strong>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {selectedOrg.enclosures.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {selectedOrg.notes && (
                  <div className="border-t border-gray-200 pt-2 text-gray-600 italic">
                    ℹ️ <strong>Tip:</strong> {selectedOrg.notes}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Share widget */}
        <ShareWidget
          title="Free UK Name Change Letter Generator — Instant DVLA, Bank & Passport Cover Letters"
          description="Generate tailored notification letters for DVLA, Passport Office, Banks, HMRC, NHS, and employers in 1 click."
        />

        {/* Informational SEO Guide & FAQ */}
        <div className="mt-16 max-w-4xl mx-auto text-gray-800 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] border-b-2 border-gray-100 pb-3">
            How to Use This Name Change Letter Generator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <span className="font-bold text-[#1d70b8] text-lg block mb-1">Step 1</span>
              <h3 className="font-bold text-base mb-2">Fill in your names</h3>
              <p>Type your old legal name, chosen new name, and address into the form. They automatically format into standard UK legal correspondence.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <span className="font-bold text-[#1d70b8] text-lg block mb-1">Step 2</span>
              <h3 className="font-bold text-base mb-2">Select organisations</h3>
              <p>Click between DVLA, Passport Office, Banks, HMRC, and NHS to preview each custom tailored letter and required enclosures.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <span className="font-bold text-[#1d70b8] text-lg block mb-1">Step 3</span>
              <h3 className="font-bold text-base mb-2">Print & send with deed poll</h3>
              <p>Print or copy the letter. Enclose your signed deed poll and existing ID, then post or present at your local branch.</p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] pt-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm sm:text-base">
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="font-bold text-lg mb-2 text-[#0b0c0c]">Do all organisations require a cover letter?</h3>
              <p className="text-gray-700">While some bodies like banks have counter forms, including a formal cover letter provides clear written instruction, states your old and new names unambiguously, and ensures your documents are processed faster without administrative delays.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="font-bold text-lg mb-2 text-[#0b0c0c]">Should I send original deed polls or photocopies?</h3>
              <p className="text-gray-700">Government bodies (HM Passport Office, DVLA) and major banks insist on receiving an original signed deed poll. Because you can execute multiple original copies when signing, keep one safe at home and send the others to official bodies.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="font-bold text-lg mb-2 text-[#0b0c0c]">Which organisation should I update first?</h3>
              <p className="text-gray-700">We recommend updating the <strong>DVLA (Driving Licence)</strong> or <strong>HM Passport Office</strong> first. Having updated official government photo ID makes updating your banks, mortgage providers, and employers seamless.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
