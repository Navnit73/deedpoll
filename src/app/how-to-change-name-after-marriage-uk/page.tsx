import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-name-after-marriage-uk" },
  title: "How to Change Your Name After Marriage in the UK | 2026 Guide",
  description:
    "Step-by-step guide to changing your name after marriage in the UK. Which documents to use, what to update first, how long it takes, and when you need a deed poll.",
};

const nameOptions = [
  {
    label: "Most common",
    labelColour: "bg-green-100 text-green-800",
    title: "Take your spouse's surname",
    body: "The most straightforward option. Your marriage certificate is all the evidence you need — no deed poll required. Simply present it to each organisation you want to update.",
  },
  {
    label: "Popular choice",
    labelColour: "bg-blue-100 text-blue-800",
    title: "Double-barrel both surnames",
    body: "Combining your surname with your spouse's (e.g. Smith-Jones) is not covered by a marriage certificate alone. You'll need a deed poll to make this legally recognised.",
  },
  {
    label: "Flexible",
    labelColour: "bg-purple-100 text-purple-800",
    title: "Both partners change to a new surname",
    body: "If you both want to adopt an entirely new surname, both of you need a deed poll. Your marriage certificate won't cover a name neither of you held before.",
  },
  {
    label: "No document needed",
    labelColour: "bg-gray-100 text-gray-700",
    title: "Keep your current name",
    body: "You are under no obligation to change your name after marriage. Many people in the UK choose to keep their existing surname, and this requires no paperwork whatsoever.",
  },
];

const steps = [
  {
    title: "Obtain your marriage certificate",
    body: "You receive this from the register office after your wedding. If you married abroad, you may need a certified translation. Order extra certified copies (usually £12.50 each from the GRO) if you plan to notify multiple organisations simultaneously — some will keep the copy permanently.",
  },
  {
    title: "Update your passport",
    body: "Apply for a passport renewal at GOV.UK, enclosing your marriage certificate and current passport. The standard online service takes up to 10 weeks; the 1-week fast-track service is available at a Passport Office for an additional fee. Once you have your new passport, every other update becomes significantly easier.",
  },
  {
    title: "Update your driving licence",
    body: "Notify the DVLA online at GOV.UK or by post using form D1. Enclose your marriage certificate. Your updated licence typically arrives within two to four weeks. Updating your driving licence is free.",
  },
  {
    title: "Notify HMRC",
    body: "Update your name with HMRC so your tax records, National Insurance record, and any tax credits reflect your new surname. You can do this by phone (0300 200 3300) or by writing to HMRC. Include a copy of your marriage certificate.",
  },
  {
    title: "Update your bank and financial accounts",
    body: "Most banks accept a marriage certificate in branch or by post. Some now accept uploads through their mobile apps. Bring a copy of your updated photo ID (passport or driving licence) alongside your certificate — this speeds the process considerably.",
  },
  {
    title: "Tell your employer",
    body: "Notify your HR or payroll department so your employment records, payslips, pension contributions, and company email are updated. Your employer will typically ask to see your marriage certificate.",
  },
  {
    title: "Work through your remaining accounts",
    body: "Update your GP and NHS records, electoral roll (via your local council), utility providers, insurance policies, loyalty accounts, and any other records. A marriage certificate is accepted by all of these. Keep a log of each submission so nothing slips through.",
  },
];

const timelines = [
  ["Passport (standard online)", "Up to 10 weeks", "£88.50"],
  ["Passport (1-week fast-track)", "Approx. 1 week", "£177.00"],
  ["DVLA driving licence", "2–4 weeks", "Free"],
  ["HMRC / National Insurance", "4–6 weeks", "Free"],
  ["Bank accounts", "Same day – 5 working days", "Free"],
  ["GP / NHS records", "2–4 weeks", "Free"],
  ["Electoral roll", "Up to 12 weeks", "Free"],
  ["Utility providers", "1–5 working days", "Free"],
];

const faqs = [
  {
    q: "How do I change my name after marriage in the UK?",
    a: "Your marriage certificate is your proof of name change. Present a certified copy to each organisation you want to update — starting with HM Passport Office and the DVLA for photo ID, then your bank, HMRC, and employer. No deed poll is required for a straightforward surname change after marriage.",
  },
  {
    q: "How long does it take to change your name after marriage in the UK?",
    a: "The process starts immediately after your wedding. Most records can be updated within a few weeks. The slowest step is usually your passport, which takes up to 10 weeks on the standard service. Your bank and driving licence are typically updated within days.",
  },
  {
    q: "Do I need a deed poll to change my name after marriage?",
    a: "Only if you want a name your marriage certificate doesn't cover — such as a double-barrelled surname, a combination name, or an entirely new surname. For a straightforward adoption of your spouse's surname, your marriage certificate is sufficient on its own.",
  },
  {
    q: "How do I change my name after marriage if I married abroad?",
    a: "If your marriage certificate is in a foreign language, you'll need a certified translation before UK organisations will accept it. Once translated, the process is identical to a UK marriage. Some organisations may also ask to see the original foreign certificate alongside the translation.",
  },
  {
    q: "Can my spouse and I both keep our surnames and create a new double-barrelled name?",
    a: "Yes. If you both want to use a hyphenated combination of your existing surnames, both of you will need a deed poll — your marriage certificate only covers the adoption of one partner's existing surname by the other. A deed poll for each of you makes the double-barrelled name legally recognised.",
  },
  {
    q: "Do I have to change my name after marriage in the UK?",
    a: "No. There is no legal requirement to change your name after marriage in the UK. You can continue using your current surname indefinitely, and you can change your name at any future point if you change your mind. Many married people in the UK choose to keep their existing surname.",
  },
  {
    q: "What's the best order to change my name after getting married?",
    a: "Update your passport first (or driving licence if travel isn't imminent), since other organisations often ask to see updated photo ID before making changes. Then notify your bank and HMRC, followed by your employer. Work through utilities, insurance, and other accounts last.",
  },
  {
    q: "How do I change my name after a civil partnership in the UK?",
    a: "The process is identical to changing your name after marriage. Your civil partnership certificate serves as proof of name change in exactly the same way a marriage certificate does, and is accepted by all UK institutions.",
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

            <li className="text-gray-700 font-medium">Change Name After Marriage</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your Name After Marriage in the UK: Complete 2026 Guide
        </h1>

        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026 · 8-minute read</p>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Wondering <strong>how to change your name after marriage in the UK</strong>? For most people, your marriage certificate is all you need — no deed poll, no solicitor, no court. This guide explains your name options, the order to tackle each update, and exactly when a deed poll becomes necessary.
          </p>
        </div>

        {/* ── Key fact ── */}
        <div className="bg-green-50 border border-green-200 rounded-md px-5 py-4 mb-10 text-sm sm:text-base text-green-900">
          <strong>Good news:</strong> For a straightforward surname change after marriage, your marriage certificate is your proof of name change. You can start notifying organisations the day after your wedding.
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#options",   "Your name options after marriage"],
              ["#steps",     "Step-by-step name change checklist"],
              ["#timelines", "How long each update takes"],
              ["#deed-poll", "When you need a deed poll"],
              ["#faq",       "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Options
        ══════════════════════════════════════ */}
        <section id="options" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Your Name Options After Marriage
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You have several options after getting married, and there's no obligation to change anything. The method you'll need depends on which route you choose:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {nameOptions.map((opt) => (
              <div key={opt.title} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full ${opt.labelColour}`}>
                  {opt.label}
                </span>
                <h3 className="text-base font-bold text-gray-900">{opt.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{opt.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: How to Change Your Name After Marriage
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Follow these steps in order. Updating your photo ID first makes every subsequent notification significantly faster, because most organisations ask to see it before making changes.
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
            H2 — Timelines table
        ══════════════════════════════════════ */}
        <section id="timelines" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How Long Does Each Update Take?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Processing times vary widely. Most updates are free; the main cost is your passport renewal.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-5">
            <table className="w-full text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Organisation</th>
                  <th className="text-left px-4 py-3 font-semibold">Timescale</th>
                  <th className="text-left px-4 py-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {timelines.map(([org, time, cost], i) => (
                  <tr key={org} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">{org}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{time}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500">
            Passport fees are correct as of June 2026. Always confirm the latest fees at GOV.UK before applying. If you have travel booked within 10 weeks, apply for the fast-track service.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — When deed poll needed
        ══════════════════════════════════════ */}
        <section id="deed-poll" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            When Do You Need a Deed Poll After Marriage?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A marriage certificate covers one specific scenario: one partner adopting the other's existing surname. For anything beyond that, a deed poll is required:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { need: true,  text: "Taking your spouse's existing surname exactly as it appears" },
              { need: false, text: "Double-barrelling your surname with your spouse's (e.g. Jones-Smith)" },
              { need: false, text: "Creating a new combined surname that neither of you currently holds" },
              { need: false, text: "Adding or dropping a middle name at the same time" },
              { need: false, text: "Both partners adopting an entirely new surname" },
              { need: false, text: "Changing your first name as well as your surname" },
            ].map(({ need, text }) => (
              <div
                key={text}
                className={`flex items-start gap-3 px-4 py-3 rounded-lg border text-sm sm:text-base ${
                  need
                    ? "bg-green-50 border-green-200 text-green-900"
                    : "bg-gray-50 border-gray-200 text-gray-700"
                }`}
              >
                <span className={`flex-shrink-0 font-bold mt-0.5 ${need ? "text-green-600" : "text-[#1d70b8]"}`}>
                  {need ? "✓ Certificate" : "→ Deed poll"}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm sm:text-base text-amber-900">
            <strong>Both options can be used together.</strong> Some couples use a marriage certificate to update most records under one name, then create a deed poll later to formalise a double-barrelled or hyphenated variant. You can switch approach at any point.
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
            Want a double-barrelled or combined name?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            If your marriage certificate doesn't cover the name you want, our online service generates a correctly formatted deed poll you can sign today and use immediately with your bank, the DVLA, and HM Passport Office.
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