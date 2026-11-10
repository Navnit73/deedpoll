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

const FAQS = [
  {
    q: 'What is a cover letter for a name change?',
    a: 'A name change cover letter is a short letter you send with your deed poll or marriage certificate. It tells an organisation your old name, your new name and your account or reference number, and asks it to update its records.',
  },
  {
    q: 'Do I need a cover letter for a name change?',
    a: 'It is not a legal requirement, but it speeds things up. A clear letter tells staff exactly what to change and where to send your documents back, so your request is less likely to be delayed or lost.',
  },
  {
    q: 'What should a name change letter include?',
    a: 'Include the date, your new name and address, your old name, your account or reference number, a clear request to update your records, a list of enclosed documents and your signature in your new name.',
  },
  {
    q: 'Should I send an original deed poll or a photocopy?',
    a: 'HM Passport Office, the DVLA and most banks want an original signed deed poll. Sign and witness several originals at the same time, keep one safe, and send the others with your letters.',
  },
  {
    q: 'Which organisation should I write to first?',
    a: 'Start with HM Passport Office or the DVLA. Once you have photo ID in your new name, banks, employers and other organisations update your records more readily.',
  },
  {
    q: 'Is it free to change the name on my driving licence?',
    a: 'Yes. The DVLA does not charge to change the name on your driving licence.',
  },
  {
    q: 'Is this a deed poll template?',
    a: 'No. This tool creates the cover letters you send with your deed poll. To make the deed poll itself, use our free deed poll template or create one online.',
  },
  {
    q: 'Can I use this for a company name change notification letter?',
    a: 'This generator is for personal name changes. To rename a limited company, you file a change with Companies House and then write to customers and suppliers. See our guide to changing a company name.',
  },
];

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

const PAGE_URL = 'https://deedpolluk.uk/name-change-letters-generator';

// The date input gives YYYY-MM-DD; UK letters use "31 October 2026".
function formatLetterDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return '';
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const inputClass =
  'w-full border-2 border-gray-300 px-3 py-2 rounded text-base focus:border-[#1d70b8] focus:ring-2 focus:ring-blue-100 outline-none bg-white';

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
    date: formatLetterDate(formData.date),
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
          <title>${escapeHtml(selectedOrg.name)} - Name Change Notification Letter</title>
          <style>
            body { font-family: 'Times New Roman', Times, serif; line-height: 1.6; font-size: 12pt; padding: 40px; color: #000; }
            pre { font-family: inherit; white-space: pre-wrap; word-wrap: break-word; }
            .enclosures { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 15px; font-size: 10pt; }
          </style>
        </head>
        <body>
          <pre>${escapeHtml(letterText)}</pre>
          <div class="enclosures">
            <strong>Enclosed Documents:</strong>
            <ul>
              ${selectedOrg.enclosures.map(enc => `<li>${escapeHtml(enc)}</li>`).join('')}
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
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "UK Name Change Letter Generator",
              "url": PAGE_URL,
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
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://deedpolluk.uk/" },
                { "@type": "ListItem", "position": 2, "name": "Name Change Letter Generator", "item": PAGE_URL }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS.map(({ q, a }) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": { "@type": "Answer", "text": a }
              }))
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#1d70b8] underline">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-900 font-semibold" aria-current="page">Name Change Letter Generator</li>
          </ol>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b0c0c] tracking-tight">
            Name Change Letter Generator
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl">
            <span className="inline-block bg-green-100 text-[#00703c] font-bold text-xs uppercase px-2 py-0.5 rounded mr-2 align-middle">Free · No sign-up</span>
            Free cover letters to send with your deed poll to the <strong>DVLA, HM Passport Office, banks, HMRC, the NHS and your employer</strong>.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Step 1: details. Sticky on desktop so the form stays beside the letter. */}
          <section aria-labelledby="details-heading" className="lg:col-span-4 lg:sticky lg:top-24 bg-gray-50 border border-gray-300 rounded-lg p-4 sm:p-5">
            <h2 id="details-heading" className="text-lg font-bold text-[#0b0c0c] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-xs font-bold" aria-hidden="true">1</span>
              Your details
            </h2>

            <div className="space-y-3">
              <div>
                <label htmlFor="old-name" className="block text-sm font-bold text-[#0b0c0c] mb-1">Old full name</label>
                <input
                  id="old-name"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. John Robert Smith"
                  value={formData.oldName}
                  onChange={e => setFormData({ ...formData, oldName: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="new-name" className="block text-sm font-bold text-[#0b0c0c] mb-1">New full name</label>
                <input
                  id="new-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. John Robert Williams"
                  value={formData.newName}
                  onChange={e => setFormData({ ...formData, newName: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-bold text-[#0b0c0c] mb-1">Address and postcode</label>
                <textarea
                  id="address"
                  rows={3}
                  autoComplete="street-address"
                  placeholder={'12 High Street\nManchester\nM1 4BT'}
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="letter-date" className="block text-sm font-bold text-[#0b0c0c] mb-1">Date on letter</label>
                <input
                  id="letter-date"
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-700">
              No deed poll yet?{" "}
              <Link href="/change-name-in-uk-by-deedpoll" className="font-bold text-[#1d70b8] underline underline-offset-2">
                Create one with a free preview
              </Link>
            </p>
          </section>

          {/* Steps 2 and 3: choose organisation, then the letter */}
          <div className="lg:col-span-8 space-y-4 min-w-0">
            <section aria-labelledby="org-heading">
              <h2 id="org-heading" className="text-lg font-bold text-[#0b0c0c] mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-xs font-bold" aria-hidden="true">2</span>
                Who are you writing to?
              </h2>
              <div className="flex flex-wrap gap-2">
                {ORGANISATIONS.map(org => {
                  const isActive = org.id === selectedOrg.id;
                  return (
                    <button
                      key={org.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelectedOrgId(org.id)}
                      className={`px-3 py-2 text-sm font-bold rounded-full border transition-colors ${
                        isActive
                          ? 'bg-[#1d70b8] text-white border-[#1d70b8]'
                          : 'bg-white text-gray-800 border-gray-300 hover:border-[#1d70b8] hover:text-[#1d70b8]'
                      }`}
                    >
                      {org.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 max-w-md">
                <label htmlFor="ref-number" className="block text-sm font-bold text-[#0b0c0c] mb-1">
                  {selectedOrg.referenceLabel.replace(/\s*\(Optional\)/i, '')} <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  id="ref-number"
                  type="text"
                  autoComplete="off"
                  placeholder={selectedOrg.referencePlaceholder}
                  value={formData.refNumbers[selectedOrg.id] || ''}
                  onChange={e => handleRefChange(selectedOrg.id, e.target.value)}
                  className={inputClass}
                />
              </div>
            </section>

            <section aria-labelledby="letter-heading" className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 id="letter-heading" className="text-lg font-bold text-[#0b0c0c] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1d70b8] text-white flex items-center justify-center text-xs font-bold" aria-hidden="true">3</span>
                  Your letter to {selectedOrg.name}
                </h2>
                <div className="grid grid-cols-2 sm:flex gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(letterText, selectedOrg.id)}
                    className="inline-flex items-center justify-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-[#0b0c0c] font-bold text-sm px-4 py-2 rounded transition-colors"
                  >
                    {copiedId === selectedOrg.id ? (
                      <span className="text-[#00703c]">✓ Copied</span>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={printLetter}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#00703c] hover:bg-[#005a30] text-white font-bold text-sm px-4 py-2 rounded transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>Print / PDF</span>
                  </button>
                </div>
              </div>

              <div className="bg-gray-200/60 p-3 sm:p-6">
                <div className="bg-white shadow max-w-2xl mx-auto px-5 py-6 sm:px-10 sm:py-10 font-serif text-[15px] sm:text-base text-gray-900 whitespace-pre-wrap break-words leading-relaxed">
                  {letterText}
                </div>
              </div>

              <div className="bg-gray-50 border-t border-gray-300 p-4 text-sm text-gray-800 grid gap-3 sm:grid-cols-2">
                <div>
                  <h3 className="font-bold text-[#0b0c0c] mb-1">What to enclose</h3>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-700">
                    {selectedOrg.enclosures.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {selectedOrg.notes && (
                  <div>
                    <h3 className="font-bold text-[#0b0c0c] mb-1">Tip</h3>
                    <p className="text-gray-700">{selectedOrg.notes}</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        <ShareWidget
          title="Free UK Name Change Letter Generator — Instant DVLA, Bank & Passport Cover Letters"
          description="Generate tailored notification letters for DVLA, Passport Office, Banks, HMRC, NHS, and employers in 1 click."
        />

        {/* Informational SEO Guide & FAQ */}
        <article className="mt-12 max-w-6xl mx-auto text-gray-800 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] border-b-2 border-gray-100 pb-3">
            How to Write a Name Change Letter in 3 Steps
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-[#1d70b8] block mb-1">Step 1</span>
              <h3 className="font-bold text-base mb-1">Fill in your names</h3>
              <p>Type your old legal name, chosen new name, and address into the form. They automatically format into standard UK legal correspondence.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-[#1d70b8] block mb-1">Step 2</span>
              <h3 className="font-bold text-base mb-1">Select organisations</h3>
              <p>Click between DVLA, Passport Office, Banks, HMRC, and NHS to preview each custom tailored letter and required enclosures.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-[#1d70b8] block mb-1">Step 3</span>
              <h3 className="font-bold text-base mb-1">Print & send with deed poll</h3>
              <p>Print or copy the letter. Enclose your signed deed poll and existing ID, then post or present at your local branch.</p>
            </li>
          </ol>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] border-b-2 border-gray-100 pb-3 pt-4">
            What Is a Name Change Cover Letter?
          </h2>
          <p className="text-base sm:text-lg">
            A name change cover letter is a short, formal letter you send with your deed poll or marriage certificate. It tells an organisation who you were, who you are now and which account to update. A clear letter means staff know exactly what to do, so your records change faster and your documents come back to you.
          </p>

          <h3 className="text-xl font-bold text-[#0b0c0c]">What to include in a name change letter</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-base">
            <li>The date and your new name and address</li>
            <li>Your old name, exactly as it appears on the account</li>
            <li>Your account, customer or reference number</li>
            <li>A clear request to update your records</li>
            <li>A list of the documents you have enclosed</li>
            <li>A request to return your original documents</li>
            <li>Your signature in your new name</li>
          </ul>
          <p className="text-base">
            Our generator fills in all of these for you and adds the right enclosures for each organisation.
          </p>

          <h3 className="text-xl font-bold text-[#0b0c0c]">Which organisations the generator covers</h3>
          <p className="text-base">
            You can create a tailored letter for the DVLA, HM Passport Office, banks and building societies, HMRC, your GP, your employer, your council and your utility and insurance providers. For a full list of who to tell, see our{" "}
            <Link href="/checklist" className="text-[#1d70b8] underline underline-offset-2">name change checklist</Link>.
          </p>

          <h3 className="text-xl font-bold text-[#0b0c0c]">Need the deed poll itself?</h3>
          <p className="text-base">
            These letters go with your deed poll; they do not replace it. To make one, use our{" "}
            <Link href="/free-deed-poll-template-uk" className="text-[#1d70b8] underline underline-offset-2">free deed poll template</Link>{" "}
            or{" "}
            <Link href="/change-name-in-uk-by-deedpoll" className="text-[#1d70b8] underline underline-offset-2">create your deed poll online</Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] pt-4">
            Name Change Letter FAQs
          </h2>
          <div className="space-y-3 text-sm sm:text-base">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-lg mb-1 text-[#0b0c0c]">{q}</h3>
                <p className="text-gray-700">{a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Renaming a business instead? Read{" "}
            <Link href="/how-to-change-company-name-uk" className="text-[#1d70b8] underline underline-offset-2">how to change a company name in the UK</Link>.
          </p>
        </article>

      </div>
    </div>
  );
}
