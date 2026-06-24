import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-name-on-birth-certificate-uk" },
  title: "How to Change Name on Birth Certificate UK | 2026 Guide",
  description:
    "Can you change your name on a UK birth certificate? Find out what's actually possible, when a deed poll is the right answer, and how to update your records legally.",
};

const scenarios = [
  {
    label: "Child's forename error",
    labelColour: "bg-green-100 text-green-800",
    title: "Correcting a registration error",
    body: "If the name on a birth certificate was recorded incorrectly at the time of registration, you can apply to the General Register Office (GRO) to correct the error. This is a factual correction, not a name change.",
  },
  {
    label: "Child under 12 months",
    labelColour: "bg-blue-100 text-blue-800",
    title: "Re-registration within 12 months",
    body: "In England and Wales, parents can change a child's forename by re-registering the birth within 12 months of registration, provided the original name was formally given. This must be done in person at a register office.",
  },
  {
    label: "Child or adult",
    labelColour: "bg-purple-100 text-purple-800",
    title: "Changing a name by deed poll",
    body: "For anyone over 12 months old — child or adult — a deed poll is the correct legal instrument. It doesn't alter the birth certificate, but it creates an authoritative legal record of your new name that all UK institutions accept.",
  },
  {
    label: "Parental details",
    labelColour: "bg-orange-100 text-orange-800",
    title: "Re-registration to add a father",
    body: "If a father's details were not included at the time of birth, parents can apply to re-register the birth jointly. This can also result in the child's surname being changed at the same time.",
  },
];

const deedPollSteps = [
  {
    title: "Decide on the new name",
    body: "For a child's deed poll, both parents (or those with parental responsibility) must agree on the new name. For adults, you choose freely — almost any name is acceptable under UK law.",
  },
  {
    title: "Create the deed poll",
    body: "An adult can create their own deed poll. For a child under 16, the deed poll must be created and signed by everyone who holds parental responsibility — not by the child. For a young person aged 16 or 17, they sign it themselves.",
  },
  {
    title: "Sign in front of a witness",
    body: "The deed poll must be signed by the person changing their name (or by those with parental responsibility, for a child under 16) in the presence of an independent adult witness who is not a family member or partner.",
  },
  {
    title: "Make certified copies",
    body: "Print at least six to eight signed copies. Organisations such as schools, GPs, and banks will each want to retain a copy, so having extras avoids delays.",
  },
  {
    title: "Update records using the deed poll",
    body: "Present the deed poll to each organisation in turn. Start with HMRC and your GP, then move on to schools, banks, and other accounts. The deed poll is your legal evidence of the new name — the birth certificate does not need to change for these updates to take effect.",
  },
];

const faqs = [
  {
    q: "Can you change a name on a birth certificate in the UK?",
    a: "Not in most cases. In England and Wales, a birth certificate is a permanent historical record of the facts at the time of birth. You cannot simply amend it because you prefer a different name. The main exceptions are correcting a genuine registration error, re-registering a birth within 12 months, or re-registering to add a father's details. For all other situations, a deed poll is the correct solution.",
  },
  {
    q: "How do I change my child's surname on their birth certificate in the UK?",
    a: "In most cases you cannot. If you want your child to use a different surname going forward, a deed poll signed by all holders of parental responsibility is the correct approach. The birth certificate will continue to show the original surname as a historical record, while the deed poll serves as legal evidence of the new name for schools, the NHS, passports, and all other institutions.",
  },
  {
    q: "Can I change my name on my birth certificate after a deed poll?",
    a: "No. A deed poll does not alter your birth certificate, and HM Passport Office and other institutions do not expect it to. Your birth certificate records your name at birth; your deed poll records your chosen name from the date it was signed. Both documents can coexist without any conflict.",
  },
  {
    q: "How do I change my child's name if the parents are not together?",
    a: "All people who hold parental responsibility must consent to a child's name change. If one parent refuses and the other believes the change is in the child's best interests, the matter may need to be resolved through the family courts, which can grant a Specific Issue Order permitting the change.",
  },
  {
    q: "Does a child need to consent to a name change?",
    a: "There is no fixed legal age of consent for a name change in the UK, but courts and registrars increasingly take the views of older children into account. A child aged 16 or 17 can create and sign their own deed poll without parental consent. For younger children, parental responsibility holders sign on their behalf.",
  },
  {
    q: "What is the difference between a deed poll and re-registering a birth?",
    a: "Re-registration is a formal process handled by the General Register Office that actually amends the birth register — it is only available in specific, limited circumstances. A deed poll does not change the birth register at all; instead it creates a separate legal document evidencing a name change. For day-to-day purposes such as passports, driving licences, schools, and banks, a deed poll is just as effective.",
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

            <li className="text-gray-700 font-medium">Change Name on Birth Certificate</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your Name on a UK Birth Certificate: What's Actually Possible
        </h1>

        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026 · 7-minute read</p>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Many people search for how to <strong>change their name on a birth certificate in the UK</strong> — but in most cases, it isn't possible to alter the birth certificate itself. The good news: you don't need to. A deed poll creates a legal record of your new name that every UK institution accepts, without touching the birth certificate at all. This guide explains your options clearly.
          </p>
        </div>

        {/* ── Key fact banner ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 mb-10 text-sm sm:text-base text-amber-900">
          <strong>Key fact:</strong> In England and Wales, a birth certificate is a permanent historical record. It cannot be amended simply because you prefer a different name. A deed poll is the correct legal solution for the vast majority of name changes.
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#scenarios", "When can the birth certificate be changed?"],
              ["#deed-poll", "Why a deed poll is usually the answer"],
              ["#steps",     "Step-by-step: changing a name by deed poll"],
              ["#children",  "Changing a child's name"],
              ["#faq",       "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Scenarios
        ══════════════════════════════════════ */}
        <section id="scenarios" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            When Can the Birth Certificate Actually Be Changed?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There are a small number of circumstances in which the birth register can be amended or a birth re-registered. Outside of these, the birth certificate remains as issued.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {scenarios.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full ${s.labelColour}`}>
                  {s.label}
                </span>
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1d70b8] rounded-r-md px-5 py-4 text-sm sm:text-base text-gray-800">
            <strong>Applying to the GRO:</strong> Corrections to registration errors and re-registrations must be handled through the{" "}
            <a
              href="https://www.gov.uk/general-register-office"
              className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]"
              target="_blank"
              rel="noopener noreferrer"
            >
              General Register Office
            </a>
            . Processing times and fees vary — check GOV.UK for current requirements before applying.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Why deed poll
        ══════════════════════════════════════ */}
        <section id="deed-poll" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Why a Deed Poll Is Usually the Answer
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed">
            For the vast majority of people who want to use a different name — whether that's a new forename, a different surname, or a complete change — a deed poll achieves everything a birth certificate amendment would, without needing to go through the GRO.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "✅", title: "Legally binding", body: "A correctly executed deed poll is a legal document accepted by all UK institutions — from HM Passport Office to high street banks." },
              { icon: "⚡", title: "Immediate effect", body: "Once signed and witnessed, your deed poll takes effect on the same day. You can start using your new name immediately." },
              { icon: "📄", title: "No court needed", body: "You do not need a solicitor, a judge, or any court approval. Adults can create their own deed poll at any time." },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-sm sm:text-base text-gray-700">
            <strong>Your birth certificate isn't invalidated.</strong> Having a deed poll doesn't cancel or conflict with your birth certificate. Institutions understand that both can coexist — the certificate records your name at birth, the deed poll records your chosen name from that point forward.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: Changing Your Name by Deed Poll
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Whether you're changing your own name or a child's, the deed poll process follows these steps. See the section below for rules specific to children.
          </p>

          <ol className="space-y-6">
            {deedPollSteps.map((step, i) => (
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
            H2 — Children
        ══════════════════════════════════════ */}
        <section id="children" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Changing a Child's Name in the UK
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Changing a child's name — including their surname — follows specific rules depending on the child's age and the family's circumstances.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                age: "Under 12 months",
                colour: "border-green-300 bg-green-50",
                badgeColour: "bg-green-100 text-green-800",
                body: "Re-registration at a register office is possible within 12 months of the original registration. This is the only route that actually amends the birth certificate. After 12 months, a deed poll is required.",
              },
              {
                age: "1–15 years",
                colour: "border-blue-300 bg-blue-50",
                badgeColour: "bg-blue-100 text-blue-800",
                body: "A deed poll signed by all holders of parental responsibility is required. All parties with parental responsibility must consent — if one refuses, the matter may need to go to the family courts.",
              },
              {
                age: "16–17 years",
                colour: "border-purple-300 bg-purple-50",
                badgeColour: "bg-purple-100 text-purple-800",
                body: "Young people aged 16 and 17 can create and sign their own deed poll without parental consent. They are treated similarly to adults for this purpose.",
              },
              {
                age: "18 and over",
                colour: "border-gray-300 bg-gray-50",
                badgeColour: "bg-gray-200 text-gray-700",
                body: "Adults can change their name by deed poll at any time, for any reason, without anyone's permission. A solicitor is not required.",
              },
            ].map((row) => (
              <div key={row.age} className={`border rounded-lg px-5 py-4 flex gap-4 items-start ${row.colour}`}>
                <span className={`flex-shrink-0 self-start text-xs font-bold px-2 py-1 rounded-full mt-0.5 ${row.badgeColour}`}>
                  {row.age}
                </span>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{row.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-md px-5 py-4 text-sm sm:text-base text-red-900">
            <strong>Parental dispute?</strong> If one parent refuses to consent to a child's name change and the other believes the change is in the child's best interests, the matter can be referred to the family courts. A Specific Issue Order can grant permission for the name change to proceed.
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
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            You don't need to change your birth certificate. A correctly executed deed poll is accepted by every UK institution — schools, the NHS, banks, HM Passport Office, and more.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">
            No solicitor needed · Works for adults and children · Instant download
          </p>
        </div>

      </div>
    </main>
  );
}