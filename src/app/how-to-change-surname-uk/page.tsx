import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: "/how-to-change-surname-uk",
    languages: {
      "en-GB": "/how-to-change-surname-uk",
      "x-default": "/how-to-change-surname-uk",
    },
  },
  title: "How to Change Your Surname in the UK | Complete 2026 Guide",
  description:
    "Find out how to change your surname in the UK — legally and quickly. Covers deed polls, marriage, divorce, and every document to update. No solicitor needed.",
  openGraph: {
    title: "How to Change Your Surname in the UK | Complete 2026 Guide",
    description: "Find out how to change your surname in the UK — legally and quickly. Covers deed polls, marriage, divorce, and every document to update. No solicitor needed.",
    url: "https://deedpolluk.uk/how-to-change-surname-uk",
  },
  twitter: {
    title: "How to Change Your Surname in the UK | Complete 2026 Guide",
    description: "Find out how to change your surname in the UK — legally and quickly. Covers deed polls, marriage, divorce, and every document to update. No solicitor needed.",
  }
};

const reasons = [
  { title: "After marriage", body: "Your marriage certificate is all you need to change your surname. No deed poll required unless you want a double-barrelled or non-standard combination." },
  { title: "After divorce", body: "Your decree absolute or final order lets you revert to a previous surname without any additional document." },
  { title: "Personal choice", body: "You can change your surname to almost anything at any time using a deed poll — no reason or court approval needed." },
  { title: "Double-barrelled or combined names", body: "If you want to combine your surname with a partner's, or create an entirely new one, a deed poll covers any variation a marriage certificate cannot." },
];

const steps = [
  {
    title: "Choose your new surname",
    body: "There are very few restrictions. Surnames containing offensive language, numbers, or symbols are unlikely to be accepted, but almost any other choice is fine. Once you've decided, you can proceed immediately — no waiting period applies.",
  },
  {
    title: "Create your deed poll",
    body: "Draft a deed poll document that states your full current name, your intended new surname, and your commitment to use the new name exclusively and abandon the old one. You can do this yourself, use an online service, or instruct a solicitor — the legal validity is the same either way.",
  },
  {
    title: "Sign in front of an independent witness",
    body: "Sign the deed poll using both your old and new full names in the presence of a witness who is over 18, not a family member, and not your partner. Your witness signs too, including their full name and address. No notarisation or solicitor is required.",
  },
  {
    title: "Make multiple certified copies",
    body: "Print at least six to eight signed copies. Many organisations keep a copy permanently, so having spares avoids stalling when notifying several institutions at once.",
  },
  {
    title: "Update your passport and driving licence first",
    body: "Photo ID updated with your new surname makes every subsequent step easier. Banks, employers, and other bodies are far more willing to accept a surname change when you can show them a valid passport or driving licence that already carries it.",
  },
  {
    title: "Notify all remaining organisations",
    body: "Work through your accounts and records systematically: HMRC, your bank, employer, GP, utilities, and so on. Keep a log of each submission so nothing slips through.",
  },
];

const afterMarriageSteps = [
  ["Collect your marriage certificate", "You receive this from the register office after your wedding. Order extra certified copies if you need to notify several organisations at once."],
  ["Update your passport", "HM Passport Office accepts your marriage certificate as proof of your new surname. Apply online or by post."],
  ["Update your driving licence", "Notify the DVLA online at GOV.UK or by post. Your updated licence usually arrives within two to four weeks."],
  ["Tell your bank and employer", "Most accept a marriage certificate directly. Some banks may also ask to see your updated photo ID."],
  ["Work through the rest of your list", "Utilities, insurance, your GP, pension providers — all can be updated using your marriage certificate."],
];

const docsToUpdate = [
  { priority: "High", items: [<a href="https://www.gov.uk/changing-passport-information" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Passport (HM Passport Office)</a>, <a href="https://www.gov.uk/change-name-driving-licence" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Driving licence (DVLA)</a>, <a href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">National Insurance records (HMRC)</a>, "GP and NHS records"] },
  { priority: "High", items: ["Bank and building society accounts", "Employer / payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
  { priority: "Standard", items: ["Utility providers (gas, electricity, water)", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
  { priority: "Standard", items: ["Vehicle registration (V5C logbook)", "Student Loans Company", "University or college records", "Loyalty and rewards accounts"] },
];

const faqs = [
  {
    q: "How do I change my surname in the UK?",
    a: "The most common method is a deed poll — a document you sign in front of an independent witness stating your old and new surnames and your intention to use the new one exclusively. Once signed, you present it to each organisation you need to update. If you've recently married, your marriage certificate is sufficient on its own.",
  },
  {
    q: "How do I change my surname legally in the UK?",
    a: "A deed poll is the standard legal instrument. It doesn't need to be registered or enrolled anywhere to be valid — an unenrolled, correctly witnessed deed poll is fully accepted by the Passport Office, DVLA, HMRC, and banks. Alternatively, a statutory declaration sworn before a solicitor carries identical legal weight.",
  },
  {
    q: "How do I change my second name (middle name) in the UK?",
    a: "The process is identical to changing a surname. A deed poll can be used to add, remove, or alter any part of your name — first name, middle name, surname, or any combination. Simply state your full current name and your full intended new name in the document.",
  },
  {
    q: "How do I change my surname after marriage without a deed poll?",
    a: "Your marriage certificate is all you need. Present a certified copy to HM Passport Office, the DVLA, your bank, HMRC, and any other organisation. A deed poll is only required if you want a name combination that goes beyond the straightforward adoption of your spouse's surname.",
  },
  {
    q: "Can I change my surname to anything I want in the UK?",
    a: "Almost. There is no approved list of surnames, and you don't need anyone's permission. The only surnames unlikely to be accepted are those that are offensive, contain numbers or symbols, or are chosen with intent to defraud. In practice, the vast majority of surname choices — including invented ones — are perfectly acceptable.",
  },
  {
    q: "Do I need a solicitor to change my surname in the UK?",
    a: "No. Adults in England, Wales, Scotland, and Northern Ireland can create and execute their own deed poll without any legal help. A solicitor can draft one if you prefer, but it adds cost without adding legal validity.",
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

            <li className="text-gray-700 font-medium">How to Change Your Surname</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your Surname in the UK: Complete 2026 Guide
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> June 2026 · 7-minute read</p>
        </div>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Wondering <strong>how to change your surname in the UK</strong>? Whether you're changing your surname after marriage, following a divorce, or simply want a fresh start, the process is straightforward and in most cases takes just a few days. This guide covers every legal route, the exact steps to follow, and a full checklist of documents to update.
          </p>
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#reasons", "Reasons for changing your surname"],
              ["#steps", "Step-by-step: how to change your surname"],
              ["#marriage", "Changing your surname after marriage"],
              ["#documents", "Documents to update"],
              ["#faq", "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Reasons
        ══════════════════════════════════════ */}
        <section id="reasons" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Reasons for Changing Your Surname in the UK
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            People change their surnames for all sorts of reasons, and UK law doesn't require you to justify your decision to anyone. The method you use will depend on your circumstances:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {reasons.map((r) => (
              <div key={r.title} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm text-amber-900">
            <strong>No court approval needed.</strong> Unlike some countries, the UK does not require a judge or court order to change your surname. A correctly executed deed poll is all that is needed for most circumstances.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: How to Change Your Surname in the UK
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            The following steps apply to the deed poll route — the method used by the vast majority of people changing their surname in England, Wales, Scotland, and Northern Ireland.
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
            H2 — After marriage
        ══════════════════════════════════════ */}
        <section id="marriage" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your Surname After Marriage
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Changing your surname after marriage is the simplest case: your marriage certificate serves as proof of the change, and no deed poll is required. Follow these steps:
          </p>

          <ol className="space-y-5 mb-6">
            {afterMarriageSteps.map(([title, body], i) => (
              <li key={i} className="flex gap-5">
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1d70b8] text-white font-bold flex items-center justify-center text-sm mt-0.5"
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-base text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-blue-50 border-l-4 border-[#1d70b8] rounded-r-md px-5 py-4 text-sm sm:text-base text-gray-800">
            <strong>Want to hyphenate or combine surnames?</strong> A marriage certificate only covers the straightforward adoption of a spouse's surname. For double-barrelled names, combined names, or any other variation, you'll need a deed poll — and we can help with that in minutes.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Documents
        ══════════════════════════════════════ */}
        <section id="documents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Documents to Update After Changing Your Surname
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There is no automatic central update — you must notify every organisation individually. Work through this checklist in priority order, starting with photo ID:
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

          <p className="text-sm text-gray-500">
            Most organisations accept a certified copy of your deed poll or marriage certificate. Some banks now accept uploads through their mobile apps — check your provider's requirements before posting documents.
          </p>
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
              "headline": "How to Change Your Surname in the UK: Complete 2026 Guide",
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
                "@id": "https://deedpolluk.uk/how-to-change-surname-uk"
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
                  "name": "How to Change Your Surname",
                  "item": "https://deedpolluk.uk/how-to-change-surname-uk"
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
            
            <Link href="/how-to-change-name-on-passport-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Name on a Passport</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-company-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change a Company Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-childs-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change a Child's Surname</h3>
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
            Change your surname today
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Our online service generates a correctly formatted, legally valid deed poll you can sign today and use immediately with your bank, the DVLA, and HM Passport Office.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">
            No solicitor needed · Accepted by all UK institutions · Instant download
          </p>
        </div>

      </div>
    </main>
  );
}