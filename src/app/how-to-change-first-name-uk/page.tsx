import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-first-name-uk" },
  title: "How to Change Your First Name in the UK | Complete 2026 Guide",
  description:
    "Find out how to change your first name or middle name in the UK by deed poll. What you can change, the exact steps, which documents to update, and answers to common questions.",
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
    body: "A deed poll can also be used to reorder your existing forenames — for example, swapping your first and middle names so that the name you actually use comes first.",
  },
];

const steps = [
  {
    title: "Decide on your new first name",
    body: "Almost any first name is acceptable in the UK. The small number of restrictions covers names that are offensive, contain numbers or symbols, or are intended to cause confusion or defraud. Invented names, unusual spellings, and names from other languages are all fine. Once you've decided, you can proceed immediately.",
  },
  {
    title: "Create your deed poll",
    body: "Your deed poll must state your full current legal name (including all forenames and your surname), your full intended new legal name, and a declaration that you are abandoning the old name and will use the new one exclusively from the date of signing. You can write this yourself, use an online service, or ask a solicitor — the legal validity is identical in all cases.",
  },
  {
    title: "Sign in front of an independent witness",
    body: "Sign the deed poll using both your old full name and your new full name, in front of a witness who is over 18, not a family member, and not your partner. Your witness signs too, providing their full name and address. No notarisation or solicitor attendance is required.",
  },
  {
    title: "Make multiple certified copies",
    body: "Print at least six to eight signed copies. Many organisations keep one permanently, so having plenty to hand avoids delays when updating several accounts at once.",
  },
  {
    title: "Update your passport and driving licence first",
    body: "Start with your photo ID. A passport or driving licence in your new first name makes every subsequent update far smoother, because banks and other bodies are much more willing to accept a first-name change when you can show them official ID that already carries it.",
  },
  {
    title: "Notify all remaining organisations",
    body: "Work through your accounts systematically: HMRC, your bank, employer, GP, utilities, insurance, and any other records. Keep a log of each submission. First-name changes occasionally prompt more scrutiny than surname changes, so be prepared to provide your deed poll alongside updated photo ID.",
  },
];

const firstVsMiddle = [
  {
    type: "First name change",
    examples: "Alex → Jordan, Elizabeth → Beth, adding 'Marie' before an existing name",
    certificate: false,
    deedPoll: true,
    notes: "A deed poll is always required. No other document covers a first-name change.",
  },
  {
    type: "Middle name — add",
    examples: "John Smith → John David Smith",
    certificate: false,
    deedPoll: true,
    notes: "A deed poll is required. Your birth certificate and marriage certificate cannot add middle names.",
  },
  {
    type: "Middle name — remove",
    examples: "Sarah Jane Brown → Sarah Brown",
    certificate: false,
    deedPoll: true,
    notes: "A deed poll is required to formally drop a middle name from your legal name.",
  },
  {
    type: "Reorder forenames",
    examples: "James Michael → Michael James",
    certificate: false,
    deedPoll: true,
    notes: "A deed poll is the only mechanism to reorder existing forenames.",
  },
];

const docsToUpdate = [
  { priority: "High", items: ["Passport (HM Passport Office)", "Driving licence (DVLA)", "National Insurance records (HMRC)", "GP and NHS records"] },
  { priority: "High", items: ["Bank and building society accounts", "Employer / payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
  { priority: "Standard", items: ["Utility providers (gas, electricity, water)", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
  { priority: "Standard", items: ["Vehicle registration (V5C logbook)", "Student Loans Company", "University or college records", "Loyalty and rewards accounts"] },
];

const faqs = [
  {
    q: "Can I change my first name in the UK?",
    a: "Yes. Any adult in the UK can change their first name at any time, for any reason, without needing anyone's permission. A deed poll is the standard legal instrument for doing so. It takes effect on the day you sign it, and all UK institutions — including HM Passport Office, the DVLA, and banks — accept it as proof of your new name.",
  },
  {
    q: "How do I legally change my first name in the UK?",
    a: "Create a deed poll that states your current full legal name and your new full legal name, then sign it in front of an independent adult witness. The deed poll is immediately legally valid. You then present copies to each organisation you need to update, starting with HM Passport Office and the DVLA so you have photo ID in your new name.",
  },
  {
    q: "Is there any restriction on what first name I can choose?",
    a: "Very few. UK law does not maintain an approved list of forenames. The only names likely to be refused are those that are offensive, contain numbers or symbols, are impossible to pronounce, or are chosen with intent to defraud. In practice, invented names, unusual spellings, names from other cultures, and gender-neutral names are all accepted without issue.",
  },
  {
    q: "How do I change my middle name in the UK?",
    a: "The process is identical to changing a first name. A deed poll can be used to add, remove, or alter any middle name, or to reorder your forenames entirely. Simply state your full current legal name and your full intended new legal name in the deed poll document.",
  },
  {
    q: "Do I need a solicitor to change my first name by deed poll?",
    a: "No. Adults in England, Wales, Scotland, and Northern Ireland can create and execute their own deed poll without any legal assistance. A solicitor can draft one if you prefer, but this adds cost without adding legal validity.",
  },
  {
    q: "Will changing my first name affect my credit history?",
    a: "Your credit history is linked to your date of birth and address history as well as your name, so it should carry across when you notify the relevant institutions. Inform your bank and notify the credit reference agencies (Experian, Equifax, and TransUnion) of your name change so your file is updated. Keep your deed poll on hand in case any lender needs to verify the link between your old and new names.",
  },
  {
    q: "Can I change my first name if I'm under 18?",
    a: "Yes, with some age-related rules. Children under 16 need a deed poll created and signed by all holders of parental responsibility — not by the child. Young people aged 16 or 17 can sign their own deed poll without parental consent, in the same way as adults.",
  },
  {
    q: "How long does it take to change your first name in the UK?",
    a: "The deed poll itself can be created and signed on the same day. Updating your records takes longer: banks are usually updated within a few working days, while the DVLA takes two to four weeks and HM Passport Office up to ten weeks on the standard service.",
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

        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026 · 7-minute read</p>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Wondering <strong>how to change your first name in the UK</strong>? Unlike a surname change after marriage, a first-name change always requires a deed poll — but that's not a hurdle. A deed poll can be created and signed in minutes, takes effect immediately, and is accepted by every UK institution. This guide explains exactly what you can change, how to do it, and what to update afterwards.
          </p>
        </div>

        {/* ── Key fact ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 mb-10 text-sm sm:text-base text-amber-900">
          <strong>Important:</strong> Unlike a surname change after marriage, there is no shortcut document for changing a first name. A deed poll is always required — but it's straightforward, inexpensive, and takes effect the same day you sign it.
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
            A deed poll can be used to make any change to any part of your legal name. When it comes to first and middle names specifically, your options include:
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
            <strong>No limit on scope.</strong> A single deed poll can change your first name, middle name, and surname simultaneously. If you want to overhaul your entire legal name in one go, one document covers it all.
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
            The process is the same whether you're changing a first name, a middle name, or both. Follow these steps in order.
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
            Unlike surname changes (which can sometimes use a marriage certificate), any change to a first or middle name requires a deed poll. Here's a quick reference:
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
            A deed poll covers all of these in a single document. If you're changing both a first name and a surname at the same time, one deed poll handles the whole change.
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
            There is no central system — you must notify every organisation individually. Work through the list in priority order. Updating your photo ID first makes everything else significantly faster.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {docsToUpdate.map((col, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${col.priority === "High" ? "text-red-600" : "text-gray-500"}`}>
                  {col.priority} priority
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-[#00703c] font-bold select-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1d70b8] rounded-r-md px-5 py-4 text-sm sm:text-base text-gray-800">
            <strong>First-name changes may attract extra scrutiny.</strong> Some banks and financial institutions apply additional checks for first-name changes compared to surname changes. Having your updated passport or driving licence ready before visiting your bank will reduce delays considerably.
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            }),
          }}
        />

        {/* ── CTA ── */}
        <div className="bg-[#f3f2f1] border border-gray-300 rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">
            Ready to get started?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Change your first name today
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Our online service generates a correctly formatted, legally valid deed poll covering your first name, middle name, surname — or all three at once. Sign it today and start using your new name immediately.
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