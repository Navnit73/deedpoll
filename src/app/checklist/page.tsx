import Link from 'next/link';

export const metadata = {
  title: "Deed Poll Checklist | Next Steps | Deed Poll UK",
  description: "A comprehensive checklist of organisations to notify after changing your name.",
  alternates: {
    canonical: "/checklist",
    languages: {
      "en-GB": "/checklist",
      "x-default": "/checklist",
    },
  },
};

export default function Checklist() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Next Steps with your Deed Poll UK</h1>
      <div className="text-gray-800 mb-12 text-lg space-y-4">
        <p>
          Congratulations! You've <Link href="/change-name-in-uk-by-deedpoll" className="text-[#1d70b8] underline underline-offset-4 decoration-2">created your deed poll</Link>; your name has legally been changed!
          What next?
        </p>
        <p>
          There are lots of people you'll need to contact to tell them about your name change. Here's a list to help
          you get started: it's arranged so that some of the most-important are at the top. Probably not all of them will
          apply to you. Those which might involve paying a fee to a government department are marked with: 💷.
        </p>
      </div>

      <div className="space-y-6">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 border border-gray-300 bg-gray-50">
            <div className="pt-1">
              <input type="checkbox" id={`checklist-${index}`} className="w-6 h-6 text-[#1d70b8] border-gray-400 border-2" />
            </div>
            <div>
              <label htmlFor={`checklist-${index}`} className="text-xl font-bold text-[#0b0c0c] cursor-pointer block mb-2">
                {item.title}
              </label>
              {item.desc && (
                <div className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: item.desc }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const checklistItems = [
  {
    title: '💷 Passport Office',
    desc: `If you hold a passport, you'll need to <a href="https://www.gov.uk/renew-adult-passport" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">renew your passport</a> to get it updated with your new name. You'll need to pay the renewal fee, but you may be entitled to carry-over some of the remaining months of validity of your old passport into the lifespan of your new passport. HM Passport Office will need you to send them an original deed poll (not a photocopy), but if you've followed our advice to sign multiple originals in the same sitting, this shouldn't be a problem.<br><br>As a piece of government-issued photo ID, getting your passport updated promptly can be very-helpful in demonstrating your name change to other organisations.`,
  },
  {
    title: 'DVLA (Driving Licence)',
    desc: `If you hold a driving licence, you'll need to renew your driving licence to reflect your new name. You'll need to pay a renewal fee if you <a href="https://www.gov.uk/renew-driving-licence" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">apply online</a> but this is free if you <a href="https://www.gov.uk/dvlaforms" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">use the DVLA D1 paper forms</a>. The DVLA will need you to send them an original deed poll (not a photocopy), but if you've followed our advice to sign multiple originals in the same sitting, this shouldn't be a problem.<br><br>As a piece of government-issued photo ID, getting your driving licence updated promptly can be very-helpful in demonstrating your name change to other organisations.`,
  },
  {
    title: 'Police',
    desc: `Most people do not need to contact the police about their name change. But if you're part of an ongoing investigation or especially if you're a registered sex offender, violent offender, or terrorist offender, it could be a criminal offence to fail to inform your local prescribed police station of the change.`,
  },
  {
    title: 'Other Photo ID',
    desc: `Have other widely-respected photo ID, like a CitizenCard or PASS Card? They're worth getting updated promptly for the same reasons as those above. These agencies will often require sight of an original deed poll, too.`,
  },
  {
    title: 'DVLA (Vehicle Logbooks)',
    desc: `If you own/are the registered keeper of a vehicle, you'll need to <a href="https://www.gov.uk/change-name-v5c" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">get the vehicle log book (V5C) updated</a>. This is free.`,
  },
  {
    title: 'Bank',
    desc: `To ensure that you're able to accept payments in your new name, you'll need to contact your bank. Most people have no problem getting this sorted, but a word of warning: some banks have historically made it difficult for people who've changed their name using what they consider a "home made" deed poll: if you have trouble with your bank, <a href="/my-deed-poll-was-rejected" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">we've got some tips for you</a>.`,
  },
  {
    title: 'Credit Card Providers',
    desc: `If you've got a credit card, let your credit card provider know. Credit card companies tend to be faster and more-cooperative about name changes than banks. They might require sight of an original deed poll.`,
  },
  {
    title: 'Other Financial Providers',
    desc: `If you have a mortgage (other than with your bank), a loan, or any other kind of financial product, you'll need to contact your provider and let them know about the change. They might require sight of an original deed poll.`,
  },
  {
    title: 'State Benefits',
    desc: `If you're in receipt of state benefits, you'll need to contact the relevant agencies to let them know. There are online guides for reporting name changes <a href="https://www.gov.uk/jobseekers-allowance/report-a-change-of-circumstances" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">for Jobseeker's Allowance</a>, <a href="https://www.gov.uk/universal-credit/changes-of-circumstances" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">for Universal Credit</a>, <a href="https://www.gov.uk/carers-allowance-report-change" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">for Carer's Allowance</a>, and <a href="https://www.gov.uk/contact-pension-service/report-changes" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">for the state pension</a>, for example.`,
  },
  {
    title: 'Insurance Companies',
    desc: `Property insurance, car insurance, life insurance, medical insurance, travel insurance, and so on. Having your correct name on file is important if you have to make a claim.`,
  },
  {
    title: 'Employer',
    desc: `If you're employed, you'll need to ensure that your employer has your correct name. Employers are generally pretty-understanding and often it's sufficient to show somebody from HR your deed poll or a photocopy of it. Make sure they update the payroll systems so that - once you've updated your name with your bank - it doesn't ring any alarm bells when your paycheque gets processed!`,
  },
  {
    title: 'HMRC',
    desc: `If you're self-employed, you'll need to <a href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">tell HMRC about your name change</a>. If you're employed and paid via PAYE, your employer may be able to update HMRC for you. If you're not employed, you might need to contact HMRC yourself to ensure that your National Insurance record is correctly updated.`,
  },
  {
    title: 'School, College, or University',
    desc: `If you're in education, make sure you get your name correctly updated with your school, college, or university. Many educators have a policy of not re-issuing qualifications and certificates in a different name, so if you want your new name on your qualification, ensure they're told about it before you sit any exams!`,
  },
  {
    title: 'Utility Companies',
    desc: `If you pay an electricity, gas, water, or broadband bill, you'll need to let your supplier know about the change. So long as you're still paying them, they don't usually mind if they're not high on your priority list. But having a utility bill with your new name on it can provide you with a helpful proof-of-address, should you need one.`,
  },
  {
    title: 'Local Authority',
    desc: `Your local authority is responsible for collecting Council Tax and maintaining the Electoral Roll, both of which benefit from having your correct name. You're likely to have to send a copy of your deed poll.`,
  },
  {
    title: 'Doctor & Dentist',
    desc: `Let your GP and your dentist know about the change. They might need to see a copy of your deed poll. Your GP can update your NHS record, but it can take a while to be reflected everywhere.`,
  },
  {
    title: 'Friends and Family',
    desc: `Often the easiest people to update, but worth remembering, especially if you've made only minor changes to your name (e.g. adding or removing middle names or adjusting the spelling of a name) that you might otherwise fail to mention. These kinds of details can be important if, for example, you're mentioned in a will or other legal document.`,
  },
  {
    title: '💷 Land Registry',
    desc: `If you own land, it's worth making sure that the Land Registry has your correct name, which may be important in the event of a dispute. <a href="https://www.gov.uk/government/publications/change-the-register-ap1" target="_blank" class="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]">There's a form to fill out</a> and a small fee to pay.`,
  },
  {
    title: 'Investments',
    desc: `If you have a private pension, investments, premium bonds or similar, tell them about the change. They'll let you know if they need sight of your deed poll.`,
  },
  {
    title: 'Professional bodies, memberships, clubs, and societies',
    desc: ``,
  },
  {
    title: 'Online Accounts',
    desc: `Time to log in to those e-commerce sites and make sure they put the right name on your parcels.`,
  },
  {
    title: 'Social Media',
    desc: `Most social media platforms make it easy to change your name, but some - especially Facebook and LinkedIn - can require that you provide proof of your name change: this is easiest if you've arranged for your photo ID to be updated first!`,
  },
  {
    title: 'TV Licensing',
    desc: ``,
  },
  {
    title: 'Store Cards and Rewards Schemes',
    desc: `Usually very simple to update, but some supermarkets can be a little fussy about exactly how they want to be told about name changes.`,
  },
];
