import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-legally-change-your-name-uk" },
  title: "How to Legally Change Your Name in the UK | Complete 2026 Guide",
  description:
    "Find out how to legally change your name in the UK — whether after marriage, divorce, or for personal reasons. Step-by-step deed poll guide. Start today.",
  openGraph: {
    title: "How to Legally Change Your Name in the UK | Complete 2026 Guide",
    description: "Find out how to legally change your name in the UK — whether after marriage, divorce, or for personal reasons. Step-by-step deed poll guide. Start today.",
    url: "https://deedpolluk.uk/how-to-legally-change-your-name-uk",
  },
  twitter: {
    title: "How to Legally Change Your Name in the UK | Complete 2026 Guide",
    description: "Find out how to legally change your name in the UK — whether after marriage, divorce, or for personal reasons. Step-by-step deed poll guide. Start today.",
  }
};

const steps = [
  {
    title: "Decide on your new name",
    body: "You can choose almost any name you like. The only restrictions are names that are offensive, contain numbers or symbols, or are intended to mislead. Once you've decided, you won't need a court's permission — just follow the steps below.",
  },
  {
    title: "Create your deed poll",
    body: "A deed poll is the standard legal document for changing your name in the UK. It states your old name, your new name, your intention to use only the new name going forward, and your intention to abandon the old one. You can draft your own, use an online service, or ask a solicitor.",
  },
  {
    title: "Sign it in front of a witness",
    body: "Sign the deed poll using both your old and new names, in the presence of an independent adult witness (not a family member or partner). Your witness also signs, providing their full name and address. No solicitor is required for this step.",
  },
  {
    title: "Make several certified copies",
    body: "Print at least six to eight copies of the signed deed poll. Many organisations will keep one permanently, so having extras avoids delays when notifying multiple institutions at once.",
  },
  {
    title: "Update your passport and driving licence first",
    body: "Start with your photo ID. Once your passport and driving licence reflect your new name, every other update becomes significantly easier — banks and other organisations are far more willing to accept a change when you can show them official ID that already carries it.",
  },
  {
    title: "Notify all other organisations",
    body: "Work through your remaining accounts systematically: HMRC, your bank, your employer, utilities, your GP, and so on. Keep a log of what you've sent, to whom, and when. Most updates complete within days; the Passport Office can take up to ten weeks on the standard service.",
  },
];

const methods = [
  {
    label: "Most common",
    labelColour: "bg-green-100 text-green-800",
    title: "Deed Poll",
    body: "A simple legal document you sign and witness yourself. Accepted by the Passport Office, DVLA, HMRC, banks, and virtually every other UK institution.",
  },
  {
    label: "Formal alternative",
    labelColour: "bg-blue-100 text-blue-800",
    title: "Statutory Declaration",
    body: "A sworn statement made before a solicitor or magistrate. Carries identical legal weight to a deed poll and is sometimes specifically requested by older institutions.",
  },
  {
    label: "After marriage",
    labelColour: "bg-purple-100 text-purple-800",
    title: "Marriage Certificate",
    body: "Your marriage certificate alone is sufficient to update most records after you marry. No deed poll is needed unless you want a non-standard combination of names.",
  },
  {
    label: "After divorce",
    labelColour: "bg-orange-100 text-orange-800",
    title: "Decree Absolute / Final Order",
    body: "To revert to a previous name after divorce, your decree absolute (or final order) is all you need. Again, no deed poll is required for a straightforward reversion.",
  },
];

const faqs = [
  {
    q: "How do you change your name legally in the UK?",
    a: "The most common route is a deed poll — a document you sign in front of a witness that declares your new name and your intention to use it exclusively. Once signed, you present it to each organisation you need to update. There is no central registry; you notify institutions individually.",
  },
  {
    q: "How do you legally change your name after marriage in the UK?",
    a: "After marriage you can simply use your marriage certificate to update your records — no deed poll is required. Send a certified copy of the certificate to your bank, the DVLA, HMRC, and HM Passport Office. If you want a non-standard combination of your and your partner's names, a deed poll covers that too.",
  },
  {
    q: "Do I need a solicitor to legally change my name?",
    a: "No. Adults in England, Wales, Scotland, and Northern Ireland can create and sign their own deed poll without any legal help. A solicitor can draft one for you if you prefer, but it is not a legal requirement and adds cost without adding validity.",
  },
  {
    q: "How long does it take to legally change your name in the UK?",
    a: "The deed poll itself can be created and signed on the same day. Updating your records takes longer: banks typically process changes within five working days, the DVLA within two to four weeks, and HM Passport Office up to ten weeks on the standard service (one week on the fast-track service).",
  },
  {
    q: "Is a deed poll legally binding in the UK?",
    a: "Yes. A correctly executed deed poll is a legally binding document. You do not need to register or enrol it anywhere for it to be valid — though you may optionally enrol it at the Royal Courts of Justice if you want it to become a matter of public record.",
  },
];

const docsToUpdate = [
  { priority: "High", items: [<a href="https://www.gov.uk/changing-passport-information" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Passport (HM Passport Office)</a>, <a href="https://www.gov.uk/change-name-driving-licence" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Driving licence (DVLA)</a>, <a href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">National Insurance records (HMRC)</a>, "GP and NHS records"] },
  { priority: "High", items: ["Bank and building society accounts", "Employer / payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
  { priority: "Standard", items: ["Utility providers (gas, electricity, water)", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
  { priority: "Standard", items: ["Vehicle registration (V5C logbook)", "Student Loans Company", "University or college records", "Loyalty and rewards accounts"] },
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

            <li className="text-gray-700 font-medium">How to Legally Change Your Name</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Legally Change Your Name in the UK: Complete 2026 Guide
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> June 2026 · 7-minute read</p>
        </div>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Wondering <strong>how to legally change your name in the UK</strong>? The process is simpler than most people expect. Whether you're changing your name after marriage, following a divorce, or for entirely personal reasons, this guide covers every legal method, the exact steps to follow, and every document you'll need to update — no solicitor required in most cases.
          </p>
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#methods", "Legal methods for changing your name"],
              ["#steps", "Step-by-step: how to change your legal name"],
              ["#marriage", "Changing your name after marriage"],
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
            H2 — Legal methods
        ══════════════════════════════════════ */}
        <section id="methods" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Legal Methods for Changing Your Name in the UK
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There is no single law dictating exactly how you must change your name. What the law requires is that you use your new name consistently and without intent to defraud. In practice, there are four recognised methods:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {methods.map((m) => (
              <div key={m.title} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full ${m.labelColour}`}>
                  {m.label}
                </span>
                <h3 className="text-base font-bold text-gray-900">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm text-amber-900">
            <strong>Enrolment is optional.</strong> There is no requirement to enrol your deed poll at the Royal Courts of Justice. An unenrolled deed poll is fully legally valid and accepted by all UK institutions.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: How to Change Your Legal Name in the UK
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            The steps below apply to the deed poll route — the method used by the vast majority of adults in England, Wales, Scotland, and Northern Ireland.
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
            How to Legally Change Your Name After Marriage in the UK
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Changing your name after marriage is the most straightforward case: your marriage certificate acts as the proof of name change, and no deed poll is needed. Here's the typical process:
          </p>

          <ol className="space-y-4 mb-6">
            {[
              ["Obtain your marriage certificate", "You'll receive this from the register office shortly after your wedding. Order additional certified copies if you need to notify multiple organisations simultaneously."],
              ["Update your passport", "Submit your marriage certificate with your passport renewal application. HM Passport Office accepts this as sufficient proof of your new surname."],
              ["Update your driving licence", "Notify the DVLA online or by post, enclosing your marriage certificate. Your new licence typically arrives within two to four weeks."],
              ["Notify your bank, employer, and HMRC", "Most accept a marriage certificate directly. Some banks may ask to see your updated passport or driving licence alongside it."],
              ["Work through the rest of your list", "Utilities, insurance policies, your GP, and any other accounts can all be updated using your marriage certificate as evidence."],
            ].map(([title, body], i) => (
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

          <div className="bg-blue-50 border border-[#1d70b8] border-l-4 rounded-r-md px-5 py-4 text-sm sm:text-base text-gray-800">
            <strong>Want a different combination of names?</strong> If you'd like to combine your surname with your partner's (for example, a double-barrelled name), or use a completely different surname, a deed poll is the right tool — your marriage certificate alone won't cover non-standard changes.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Documents
        ══════════════════════════════════════ */}
        <section id="documents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Documents to Update After a Legal Name Change
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There is no central system that updates your records automatically. You must notify each organisation individually. Work through this checklist in priority order:
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
            Most organisations accept a certified copy of your deed poll (or marriage certificate) by post or in person. Some banks now accept digital uploads through their mobile apps.
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
              "headline": "How to Legally Change Your Name in the UK: Complete 2026 Guide",
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
                "@id": "https://deedpolluk.uk/how-to-legally-change-your-name-uk"
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
                  "name": "How to Legally Change Your Name",
                  "item": "https://deedpolluk.uk/how-to-legally-change-your-name-uk"
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
            
            <Link href="/how-to-change-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-much-does-it-cost-to-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Cost to Change Your Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-name-on-passport-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Name on a Passport</h3>
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
            Create your deed poll in minutes
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