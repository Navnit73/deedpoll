import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: "/how-to-change-first-name-uk",
    languages: {
      "en-GB": "/how-to-change-first-name-uk",
      "x-default": "/how-to-change-first-name-uk",
    },
  },
  title: "How to Change Your First Name in the UK | Complete 2026 Guide",
  description:
    "Find out how to change your first name or middle name in the UK by deed poll. What you can change, the exact steps, which documents to update, and answers to common questions.",
  openGraph: {
    title: "How to Change Your First Name in the UK | Complete 2026 Guide",
    description: "Find out how to change your first name or middle name in the UK by deed poll. What you can change, the exact steps, which documents to update, and answers to common questions.",
    url: "https://deedpolluk.uk/how-to-change-first-name-uk",
  },
  twitter: {
    title: "How to Change Your First Name in the UK | Complete 2026 Guide",
    description: "Find out how to change your first name or middle name in the UK by deed poll. What you can change, the exact steps, which documents to update, and answers to common questions.",
  }
};

const whatYouCanChange = [
  {
    label: "Replace entirely",
    labelColour: "bg-green-100 text-green-800",
    title: "Change to a completely different first name",
    body: "You can adopt an entirely new forename at any time, for any reason. No one's permission is required, and there is no waiting period.",
  },
  {
    label: "Add",
    labelColour: "bg-blue-100 text-blue-800",
    title: "Add a new first or middle name",
    body: "A deed poll can add extra forenames or middle names to your existing full name. This is common for people adopting a name with cultural, religious, or personal significance.",
  },
  {
    label: "Remove",
    labelColour: "bg-purple-100 text-purple-800",
    title: "Remove a middle name",
    body: "You can drop one or more middle names entirely using a deed poll. Many people do this to simplify their legal name or distance themselves from a name they dislike.",
  },
  {
    label: "Reorder",
    labelColour: "bg-orange-100 text-orange-800",
    title: "Change the order of your names",
    body: "A deed poll can also reorder your existing forenames — for example, swapping your first and middle names so that the name you actually use comes first.",
  },
];

const steps = [
  {
    title: "Decide on your new first name",
    body: "Almost any first name is acceptable in the UK. The only restrictions cover names that are offensive, contain numbers or symbols, or are chosen with intent to defraud. Invented names, unusual spellings, gender-neutral names, and names from other cultures are all fine. Once you have decided, you can proceed immediately — there is no approval process to wait for.",
  },
  {
    title: "Create your deed poll",
    body: "Your deed poll must state your full current legal name (including all forenames and your surname), your full intended new legal name, and a declaration that you are abandoning the old name and will use the new one exclusively from the date of signing. You can write one yourself, use an online service, or instruct a solicitor — the legal validity is identical in all three cases.",
  },
  {
    title: "Sign in front of an independent witness",
    body: "Sign the deed poll using both your old full name and your new full name, in the presence of a witness who is over 18, not a family member, and not your partner. Your witness also signs, providing their full name and address. No notarisation or solicitor attendance is required.",
  },
  {
    title: "Print multiple certified copies",
    body: "Print at least six to eight signed copies before you send anything off. Many organisations keep the copy you submit permanently, so having several to hand lets you update multiple accounts at the same time rather than waiting for each one to return.",
  },
  {
    title: "Update your passport and driving licence first",
    body: "Start with your photo ID. Once HM Passport Office and the DVLA have your new first name on record, every subsequent update becomes much simpler. Banks and other institutions are significantly more willing to process a first-name change when you can show them official photo ID that already carries it.",
  },
  {
    title: "Work through your remaining records systematically",
    body: "Notify HMRC, your bank, your employer, your GP, utility providers, insurers, and any other organisations that hold your name. Keep a running log of each submission — first-name changes occasionally prompt more questions than surname changes, so tracking your progress helps you follow up quickly if needed.",
  },
];

const firstVsMiddle = [
  {
    type: "First name change",
    examples: "Alex → Jordan, Elizabeth → Beth, adding 'Marie' before an existing name",
    notes: "A deed poll is always required. No other document covers a first-name change.",
  },
  {
    type: "Middle name — add",
    examples: "John Smith → John David Smith",
    notes: "A deed poll is required. Birth and marriage certificates cannot add middle names.",
  },
  {
    type: "Middle name — remove",
    examples: "Sarah Jane Brown → Sarah Brown",
    notes: "A deed poll is required to formally drop a middle name from your legal name.",
  },
  {
    type: "Reorder forenames",
    examples: "James Michael → Michael James",
    notes: "A deed poll is the only mechanism to reorder existing forenames.",
  },
];

const docsToUpdate = [
  { priority: "High", items: [<a href="https://www.gov.uk/changing-passport-information" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Passport (HM Passport Office)</a>, <a href="https://www.gov.uk/change-name-driving-licence" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Driving licence (DVLA)</a>, <a href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">National Insurance records (HMRC)</a>, "GP and NHS records"] },
  { priority: "High", items: ["Bank and building society accounts", "Employer and payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
  { priority: "Standard", items: ["Utility providers (gas, electricity, water)", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
  { priority: "Standard", items: ["Vehicle registration (V5C logbook)", "Student Loans Company", "University or college records", "Loyalty and rewards accounts"] },
];

const risks = [
  {
    icon: "✈️",
    title: "Travel disruption",
    body: "Airlines and border agencies match your ticket name to your passport. If your passport still carries your old first name after you have been using your new one, you risk being denied boarding or delayed at immigration.",
  },
  {
    icon: "🏦",
    title: "Financial mismatches",
    body: "Banks and lenders cross-reference your name against credit files. A mismatch between your account name and your legal name can trigger fraud alerts, block transactions, or complicate mortgage and credit applications.",
  },
  {
    icon: "💼",
    title: "Employment complications",
    body: "Your employer must report your legal name to HMRC for tax and National Insurance purposes. If your payroll name differs from your deed poll name, you may end up with duplicate tax records or gaps in your National Insurance history.",
  },
  {
    icon: "🏥",
    title: "Medical records confusion",
    body: "NHS records are linked by name and date of birth. An outdated first name on your GP record can cause confusion when you are referred to specialists, receive prescriptions, or access your health records online.",
  },
];

const faqs = [
  {
    q: "Can I change my first name in the UK?",
    a: "Yes. Any adult in the UK can change their first name at any time, for any reason, without needing anyone's permission. A deed poll is the standard legal instrument for doing so. It takes effect on the day you sign it, and all UK institutions — including HM Passport Office, the DVLA, and banks — accept it as proof of your new name.",
  },
  {
    q: "How do I legally change my first name in the UK?",
    a: "Create a deed poll that states your current full legal name and your new full legal name, then sign it in front of an independent adult witness. The deed poll is immediately legally valid. Present copies to each organisation you need to update, starting with HM Passport Office and the DVLA so you have photo ID in your new name as quickly as possible.",
  },
  {
    q: "Is there any restriction on what first name I can choose?",
    a: "Very few. UK law does not maintain an approved list of forenames. The only names that are likely to be refused are those that are offensive, contain numbers or symbols, are impossible to pronounce, or are chosen with intent to defraud. In practice, invented names, unusual spellings, names from other cultures, and gender-neutral names are all accepted without issue.",
  },
  {
    q: "How do I change my middle name in the UK?",
    a: "The process is identical to changing a first name. A deed poll can add, remove, or alter any middle name, or reorder your forenames entirely. Simply state your full current legal name and your full intended new legal name in the deed poll document.",
  },
  {
    q: "Do I need a solicitor to change my first name by deed poll?",
    a: "No. Adults in England, Wales, Scotland, and Northern Ireland can create and execute their own deed poll without any legal assistance. A solicitor can draft one if you prefer, but this adds cost without adding legal validity.",
  },
  {
    q: "Will changing my first name affect my credit history?",
    a: "Your credit history links to your date of birth and address history as well as your name, so it should carry across when you notify the relevant institutions. Inform your bank and contact the three main credit reference agencies — Experian, Equifax, and TransUnion — so your file updates correctly. Keep your deed poll on hand in case any lender needs to verify the link between your old and new names.",
  },
  {
    q: "Can I change my first name if I'm under 18?",
    a: "Yes, with age-related rules. Children under 16 need a deed poll created and signed by all holders of parental responsibility — not by the child. Young people aged 16 or 17 can sign their own deed poll without parental consent, in the same way as adults.",
  },
  {
    q: "How long does it take to change your first name in the UK?",
    a: "The deed poll itself can be created and signed on the same day. Updating your records takes longer: banks usually complete the change within a few working days, while the DVLA takes two to four weeks and HM Passport Office takes up to ten weeks on the standard service.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li><Link href="/guides" className="hover:text-[#1d70b8] underline underline-offset-2">Guides</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-gray-700 font-medium">Change First Name UK</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your First Name in the UK: Complete 2026 Guide
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> June 2026 · 8-minute read</p>
        </div>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Wondering <strong>how to change your first name in the UK</strong>? Unlike a surname change after marriage, a first-name change always requires a deed poll — but that is not a hurdle. You can create a deed poll and sign it today, and it takes legal effect immediately. This guide explains what you can change, how to do it step by step, what to update afterwards, and what happens if you leave your records mismatched.
          </p>
        </div>

        {/* ── Key fact ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 mb-10 text-sm sm:text-base text-amber-900">
          <strong>Key fact:</strong> There is no shortcut document for changing a first name. A deed poll is always required — but it is straightforward, inexpensive, and takes effect the same day you sign it.
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#what-you-can-change", "What you can change"],
              ["#steps",              "Step-by-step guide"],
              ["#first-vs-middle",    "First names vs middle names"],
              ["#documents",          "Documents to update"],
              ["#risks",              "Risks of leaving records mismatched"],
              ["#faq",                "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — What you can change
        ══════════════════════════════════════ */}
        <section id="what-you-can-change" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            What You Can Change with a Deed Poll
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A deed poll can change any part of your legal name. When it comes to first and middle names, you have four options:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {whatYouCanChange.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full ${item.labelColour}`}>
                  {item.label}
                </span>
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-sm sm:text-base text-gray-700">
            <strong>No limit on scope.</strong> A single deed poll can change your first name, middle name, and surname at the same time. If you want to overhaul your entire legal name in one go, one document covers it all.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: How to Change Your First Name in the UK
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            The process is the same whether you are changing a first name, a middle name, or both. Follow these steps in order.
          </p>

          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-5">
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1d70b8] text-white font-bold flex items-center justify-center text-sm mt-0.5"
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-base text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ══════════════════════════════════════
            H2 — First vs middle name table
        ══════════════════════════════════════ */}
        <section id="first-vs-middle" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            First Names vs Middle Names: What Requires a Deed Poll?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Unlike surname changes — which can sometimes use a marriage certificate — any change to a first or middle name always requires a deed poll. Here is a quick reference:
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Change type</th>
                  <th className="text-left px-4 py-3 font-semibold">Example</th>
                  <th className="text-left px-4 py-3 font-semibold">Document needed</th>
                </tr>
              </thead>
              <tbody>
                {firstVsMiddle.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800 align-top">{row.type}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-500 align-top italic">{row.examples}</td>
                    <td className="px-4 py-3 border-b border-gray-100 align-top">
                      <span className="inline-block bg-[#1d70b8] text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Deed poll
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500">
            A single deed poll covers all of these changes. If you are changing a first name and a surname at the same time, one document handles the whole thing.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Documents to update
        ══════════════════════════════════════ */}
        <section id="documents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Documents to Update After Changing Your First Name
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There is no central update system — you must notify every organisation individually. Work through the list in priority order. Updating your photo ID first makes every subsequent step significantly faster.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {docsToUpdate.map((col, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${col.priority === "High" ? "text-red-600" : "text-gray-500"}`}>
                  {col.priority} priority
                </p>
                <ul className="space-y-2">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-[#00703c] font-bold select-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1d70b8] rounded-r-md px-5 py-4 text-sm sm:text-base text-gray-800">
            <strong>First-name changes may attract extra scrutiny.</strong> Some banks and financial institutions apply additional checks for first-name changes compared with surname changes. Having your updated passport or driving licence ready before you contact your bank will reduce delays considerably.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Risks of leaving records mismatched
        ══════════════════════════════════════ */}
        <section id="risks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            What Happens If You Leave Your Records Mismatched?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Some people sign a deed poll and start using their new first name without updating their official documents — either because the process feels daunting or because they intend to "get round to it later". This creates real, practical problems. Here is what a mismatch can cause:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {risks.map((risk) => (
              <div key={risk.title} className="border border-gray-200 rounded-lg p-5">
                <div className="text-2xl mb-3">{risk.icon}</div>
                <h3 className="font-semibold text-base text-gray-900 mb-2">{risk.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{risk.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm sm:text-base text-amber-900">
            <strong>The fix is straightforward.</strong> Once you have your deed poll, send certified copies to each organisation in the priority order above. Most updates are free, and the majority complete within a few weeks.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — FAQ
        ══════════════════════════════════════ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-gray-100 pb-3">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-5 py-4">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">{q}</h3>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Change Your First Name in the UK: Complete 2026 Guide",
              "author": {
                "@type": "Organization",
                "name": "Deed Poll UK Editorial Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Deed Poll UK",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://deedpolluk.uk/og-image.jpg"
                }
              },
              "image": "https://deedpolluk.uk/og-image.jpg",
              "datePublished": "2026-06-01T08:00:00+00:00",
              "dateModified": "2026-06-01T08:00:00+00:00",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://deedpolluk.uk/how-to-change-first-name-uk"
              }
            },
              {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://deedpolluk.uk/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Change First Name UK",
                  "item": "https://deedpolluk.uk/how-to-change-first-name-uk"
                }
              ]
            },
              {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            }
            ]),
          }}
        />

        
        {/* ══════════════════════════════════════
            H2 — Related Guides
        ══════════════════════════════════════ */}
        <section className="mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link href="/how-to-legally-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Legally Change Your Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-childs-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change a Child's Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-name-on-birth-certificate-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Change a Name on a Birth Certificate</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-[#f3f2f1] border border-gray-300 rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">
            Ready to get started?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Change your first name today
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Our online service generates a correctly formatted, legally valid deed poll that covers your first name, middle name, surname — or all three at once. Sign it today and start using your new name immediately.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">
            No solicitor needed · Covers first names, middle names, and surnames · Instant download
          </p>
        </div>

      </div>
    </main>
  );
}