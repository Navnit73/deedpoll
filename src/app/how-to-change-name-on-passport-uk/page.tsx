import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-name-on-passport-uk" },
  title: "How to Change Your Name on a Passport in the UK | 2026 Guide",
  description:
    "Find out how to change your name on your UK passport — after marriage, deed poll, or divorce. Fees, timescales, and what documents to send. Step-by-step guide.",
};

const reasons = [
  {
    label: "Most common",
    labelColour: "bg-green-100 text-green-800",
    title: "After marriage",
    body: "Your marriage certificate is sufficient. No deed poll is needed unless you want a non-standard name combination.",
  },
  {
    label: "Personal change",
    labelColour: "bg-blue-100 text-blue-800",
    title: "After a deed poll",
    body: "If you've changed your name for personal reasons, your signed deed poll is the evidence HM Passport Office requires.",
  },
  {
    label: "After separation",
    labelColour: "bg-purple-100 text-purple-800",
    title: "After divorce",
    body: "Your decree absolute or final order lets you revert to a previous name. No deed poll needed for a straightforward reversion.",
  },
  {
    label: "Gender recognition",
    labelColour: "bg-orange-100 text-orange-800",
    title: "Gender recognition",
    body: "A Gender Recognition Certificate allows you to update both your name and your passport's gender marker at the same time.",
  },
];

const steps = [
  {
    title: "Gather your supporting documents",
    body: "Depending on your reason for changing your name, you'll need one of the following: your marriage certificate, your decree absolute or final order, your deed poll (signed and witnessed), or a Gender Recognition Certificate. Have certified copies ready — HM Passport Office will keep them.",
  },
  {
    title: "Complete the passport application form",
    body: "Apply online at GOV.UK or download a paper form (form C1 for adults). If you're renewing at the same time — which is the most common approach — complete a renewal application. If your current passport was issued fewer than 9 months ago and you're only changing your name (not renewing), you may be able to apply for a free replacement.",
  },
  {
    title: "Provide a new passport photo",
    body: "You'll need a new photo that meets the current HM Passport Office specifications: plain light grey or cream background, taken within the last month, no glasses, and no headwear except for religious reasons. Many post offices and pharmacies offer compliant passport photos.",
  },
  {
    title: "Send your current passport",
    body: "You must include your existing passport with your application — it will be cancelled and returned to you once your new one is issued. Use a tracked postal service; HM Passport Office recommends Special Delivery.",
  },
  {
    title: "Pay the application fee",
    body: "A standard adult passport renewal costs £88.50 online or £100 by post (2026 rates). If your previous passport was issued fewer than 9 months ago, a name-change replacement may be free — check GOV.UK for current eligibility.",
  },
  {
    title: "Wait for your new passport",
    body: "The standard online service typically takes up to 10 weeks. If you have imminent travel, the 1-week fast-track service (in-person appointment at a Passport Office) is available for an additional fee. Check current availability at GOV.UK.",
  },
];

const timelines = [
  ["Standard online service", "Up to 10 weeks", "£88.50"],
  ["Standard postal (paper form)", "Up to 10 weeks", "£100.00"],
  ["1-week fast-track (appointment)", "Approx. 1 week", "£177.00"],
  ["Name change under 9 months old", "Up to 10 weeks", "Free"],
];

const faqs = [
  {
    q: "How do I change my name on my UK passport?",
    a: "Apply for a passport renewal at GOV.UK, enclosing your evidence of name change — either a marriage certificate, decree absolute, or signed deed poll — along with a new passport photo and your current passport. The standard service takes up to 10 weeks.",
  },
  {
    q: "How do I change my name on my passport after marriage in the UK?",
    a: "Include your marriage certificate with a standard passport renewal application. HM Passport Office accepts a marriage certificate as sufficient proof — no deed poll is required. Apply online at GOV.UK for the fastest processing.",
  },
  {
    q: "Can I travel while waiting for my new passport after a name change?",
    a: "No. Once you submit your current passport with your application, you cannot use it to travel. If you have upcoming travel, apply for the 1-week fast-track service (subject to appointment availability) or delay your name-change application until after you return.",
  },
  {
    q: "How much does it cost to change your name on a UK passport?",
    a: "The standard online adult renewal costs £88.50; by post it is £100. The 1-week fast-track service costs £177. If your passport was issued fewer than 9 months ago and you are only changing your name (not renewing), a replacement may be issued free of charge.",
  },
  {
    q: "Do I need a deed poll to change my name on my UK passport?",
    a: "Only if you changed your name by deed poll. If you changed your name through marriage, your marriage certificate is sufficient. If you're reverting to a previous name after divorce, your decree absolute or final order is sufficient. A deed poll is required only when none of those documents apply.",
  },
  {
    q: "What if HM Passport Office rejects my deed poll?",
    a: "This is rare with a correctly executed deed poll. If it happens, first ensure your deed poll is signed by both you and an independent adult witness, and that it clearly states your old name, new name, and your intention to use the new name exclusively. If you still encounter problems, contact the Passport Adviceline on 0300 222 0000.",
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

            <li className="text-gray-700 font-medium">Change Name on Passport</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your Name on a UK Passport: Complete 2026 Guide
        </h1>

        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026 · 7-minute read</p>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Need to <strong>change your name on your UK passport</strong>? Whether you've recently married, changed your name by deed poll, or reverted to a previous name after divorce, you'll need to apply to HM Passport Office for a new passport. This guide explains exactly what to send, what it costs, and how long it takes — so you don't have to guess.
          </p>
        </div>

        {/* ── Important notice ── */}
        <div className="bg-red-50 border border-red-200 rounded-md px-5 py-4 mb-8 text-sm sm:text-base text-red-900">
          <strong>Planning to travel soon?</strong> Once you submit your current passport, you cannot use it to travel until your new one arrives. If you have upcoming trips, apply well in advance or book a fast-track appointment.
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#reasons", "Reasons for changing your passport name"],
              ["#steps",   "Step-by-step application guide"],
              ["#fees",    "Fees and processing times"],
              ["#faq",     "Frequently asked questions"],
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
            Reasons for Changing Your Name on a UK Passport
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            HM Passport Office accepts several different documents as evidence of a name change. The document you'll need depends on why your name has changed:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {reasons.map((r) => (
              <div key={r.title} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full ${r.labelColour}`}>
                  {r.label}
                </span>
                <h3 className="text-base font-bold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm text-amber-900">
            <strong>Haven't changed your name yet?</strong> If you need a deed poll before you can update your passport, our service lets you create a legally valid deed poll in minutes — then come back to this guide.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: How to Change Your Name on a UK Passport
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Follow these six steps to apply for a new passport in your changed name. The process is the same whether you apply online or by post — online is faster and cheaper.
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
            H2 — Fees & timeline table
        ══════════════════════════════════════ */}
        <section id="fees" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            UK Passport Name Change: Fees and Processing Times
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Processing times and fees vary depending on the service you choose. All fees are current as of June 2026 — always confirm the latest fees at GOV.UK before applying.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
            <table className="w-full text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Service</th>
                  <th className="text-left px-4 py-3 font-semibold">Timescale</th>
                  <th className="text-left px-4 py-3 font-semibold">Fee (adult)</th>
                </tr>
              </thead>
              <tbody>
                {timelines.map(([service, time, fee], i) => (
                  <tr key={service} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">{service}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{time}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📬", label: "Apply online", body: "Fastest and cheapest. Apply at GOV.UK and track your application in real time." },
              { icon: "📮", label: "Apply by post", body: "Download form C1, include all documents, and send via Royal Mail Special Delivery." },
              { icon: "🏢", label: "Fast-track in person", body: "Book an appointment at a Passport Office. Available for urgent travel needs." },
            ].map((card) => (
              <div key={card.label} className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{card.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
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
            Need a deed poll first?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Before you can update your passport, you need a valid deed poll. Our online service generates a correctly formatted document you can sign today and submit to HM Passport Office immediately.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">
            No solicitor needed · Accepted by HM Passport Office · Instant download
          </p>
        </div>

      </div>
    </main>
  );
}