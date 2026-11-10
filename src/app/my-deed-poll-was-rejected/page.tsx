import Link from 'next/link';

const PAGE_URL = "https://deedpolluk.uk/my-deed-poll-was-rejected";
const PAGE_TITLE = "Deed Poll Rejected? Do Banks Accept Unenrolled Deed Polls?";
const PAGE_DESCRIPTION =
  "Deed poll rejected by your bank? Unenrolled deed polls are legally valid. Learn why rejections happen, who accepts unenrolled deed polls and six steps to get your name updated.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/my-deed-poll-was-rejected",
    languages: {
      "en-GB": "/my-deed-poll-was-rejected",
      "x-default": "/my-deed-poll-was-rejected",
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const acceptance = [
  ["HM Passport Office", "Yes", "Send the original signed deed poll with your application."],
  ["DVLA", "Yes", "Send it with your licence and application. The change is free."],
  ["HMRC", "Yes", "Update your name in your personal tax account or the HMRC app."],
  ["High street banks", "Usually", "Most accept it. Some branches also want photo ID in your new name."],
  ["GP and NHS", "Yes", "Your GP practice updates your NHS record."],
  ["Employers, councils and utilities", "Yes", "Most accept a copy or want to see the original."],
];

const rejectionReasons = [
  ["You sent a photocopy", "Most organisations want an original signed deed poll. Sign and witness several originals at the same time."],
  ["A signature is missing", "You must sign in both your old and new names. Your witness must sign and add their full name and address."],
  ["The witness was a relative", "Use an independent adult witness who is not related to you and is not your partner."],
  ["The wording is incomplete", "The deed poll must say that you give up your old name and will use only your new name."],
  ["Your ID still shows your old name", "Some banks want photo ID in your new name. Update your passport or driving licence first."],
  ["A child signed their own deed poll", "Children under 16 need a deed poll signed by everyone with parental responsibility."],
];

const faqs = [
  {
    q: "Do banks accept unenrolled deed polls?",
    a: "Yes. Most UK banks and building societies accept an unenrolled deed poll, because it is legally valid. Some branches also ask for photo ID or proof of address in your new name. If a bank refuses, ask what evidence it needs and update your passport or driving licence first.",
  },
  {
    q: "Is an unenrolled deed poll legally valid?",
    a: "Yes. A deed poll is valid as soon as you sign it in front of a witness. Enrolment at the Royal Courts of Justice only puts it on public record; it does not make it more valid. HM Passport Office and the DVLA both accept unenrolled deed polls.",
  },
  {
    q: "Who accepts an unenrolled deed poll?",
    a: "HM Passport Office, the DVLA, HMRC, the NHS, employers, councils, utilities and most banks accept an unenrolled deed poll. A few organisations also ask for ID in your new name.",
  },
  {
    q: "Why was my deed poll rejected?",
    a: "The most common reasons are sending a photocopy instead of an original, a missing signature, a relative acting as witness, or incomplete wording. Some banks also refuse until you can show photo ID in your new name.",
  },
  {
    q: "What is a retrospective deed poll?",
    a: "A retrospective deed poll records that you have already been using your new name since an earlier date. It helps when some of your records already show the new name. It still takes legal effect from the day you sign it.",
  },
  {
    q: "Can I make a bank update my name?",
    a: "Under UK GDPR, you have the right to have inaccurate personal data corrected. If a bank still refuses after you provide your deed poll and ID, send a written rectification request. The bank must respond within one month. If it does not, complain to the Information Commissioner's Office.",
  },
  {
    q: "Should I make a new deed poll if mine was rejected?",
    a: "Only if your deed poll contains a mistake, such as a missing signature or incomplete wording. If it is correct, the problem is usually the organisation's policy, so follow the steps on this page instead.",
  },
];

const rejectionSteps = [
  {
    title: "Update your government-issued IDs first",
    content: (
      <>
        <p>
          If you haven&apos;t yet had a passport, driving licence, or other government-issued ID updated
          with your new name, start there. It becomes very difficult for any organisation to refuse
          your name change when you can present official photo ID that already carries it.
        </p>
        <p>
          If you&apos;re struggling to get even one piece of government ID updated, focus on whichever
          is quickest — usually your driving licence via the DVLA. Once one document reflects your
          new name, the others tend to follow more smoothly, because the issuing body can see that
          another government agency has already accepted the change. Unusually distinctive names
          occasionally require a telephone conversation with the relevant office, but patience and
          persistence will get there.
        </p>
      </>
    ),
  },
  {
    title: "Bring plenty of evidence",
    content: (
      <>
        <p>
          Arrive at your bank (or write to the organisation) armed with everything you would need
          to open a brand-new account: photo ID <em>and</em> proof of address, both in your new
          name. Presented together, this bundle of evidence is hard to argue with.
        </p>
        <p>
          If you&apos;re dealing with a bank in person, calmly pointing out that you could now open an
          account with a competitor — and that all your direct debits would follow you automatically
          under the Current Account Switch Service — can prompt a swift change of attitude.
        </p>
      </>
    ),
  },
  {
    title: "Switch to another provider",
    content: (
      <>
        <p>
          If you need a quick resolution and the organisation simply won&apos;t budge, switching to a
          competitor is a legitimate option. Changing banks is straightforward these days: the
          Current Account Switch Service moves your payments and direct debits automatically within
          seven working days, and many banks offer cash incentives for switchers.
        </p>
        <p>
          It&apos;s not the right answer for everyone — you shouldn&apos;t <em>have</em> to switch — but it
          puts you back in control while you pursue the matter further if you choose to.
        </p>
      </>
    ),
  },
  {
    title: "Ask exactly what evidence they require",
    content: (
      <>
        <p>
          Some organisations wrongly believe that only a court-enrolled deed poll is legally
          valid. This is incorrect: a correctly executed unenrolled deed poll carries full
          legal weight. Politely asking what specific evidence would satisfy them can open the door
          to a practical solution — either by agreeing to provide something they&apos;ll accept (such as
          an updated passport) or by educating them about the law.
        </p>
        <p>
          Ask the organisation to put its policy in writing. A written answer often reaches someone
          more senior, who is more likely to accept a valid deed poll.
        </p>
      </>
    ),
  },
  {
    title: "Be relentless",
    content: (
      <>
        <p>
          Polite persistence is your most powerful tool. If you send a letter or email and hear
          nothing, follow up after one week. If you&apos;re told someone is &ldquo;looking into it&rdquo; and then
          go quiet, follow up again. At every stage, ask whether your case can be escalated to
          someone with the authority to make a decision.
        </p>
        <p>
          Keep a written log of every call, email, and letter: the date, the name of the person
          you spoke to, and what was said. This record will be invaluable if you need to escalate
          to a regulator or ombudsman.
        </p>
      </>
    ),
  },
  {
    title: "Invoke your rights under the DPA 2018 / UK GDPR",
    content: (
      <>
        <p>
          The UK GDPR and the Data Protection Act 2018 give you the legal right to require that any organisation correct inaccurate personal data
          they hold about you. This is known as the <strong>right to rectification</strong>.
        </p>
        <p>
          If you have provided your deed poll, a piece of photo ID in your new name, and proof of
          address in your new name, and the organisation is still refusing, write them a formal
          letter. State clearly that you are making a <em>right to rectification request under the
          UK GDPR / DPA 2018</em>, that they are knowingly continuing to process outdated and
          incorrect personal data despite sufficient evidence of the error, and that you require
          them to correct it. They must respond within one month.
        </p>
        <p>
          Enclose copies of all evidence previously provided. If you receive no satisfactory
          response within one month, escalate to the{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/"
            className="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Commissioner&apos;s Office (ICO)
          </a>
          . Most organisations act quickly once they see you are prepared to escalate.
        </p>
      </>
    ),
  },
];

export default function RejectionPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>

            <li className="text-gray-700 font-medium">My Deed Poll Was Rejected</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          My Deed Poll Was Rejected: What Should I Do?
        </h1>

        <p className="text-sm text-gray-500 mb-8">Last updated: October 2026 · 7-minute read</p>

        {/* ── Quick answer ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            <strong>Quick answer:</strong> A correctly signed and witnessed deed poll is legally valid,
            even if it is not enrolled. If a bank or other organisation rejects it, first check the
            deed poll for mistakes. Then update your photo ID, ask exactly what evidence they need,
            and, if necessary, use your UK GDPR right to have your records corrected.
          </p>
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
            On this page
          </p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#unenrolled", "Is an unenrolled deed poll valid?"],
              ["#banks", "Do banks accept unenrolled deed polls?"],
              ["#reasons", "Why deed polls get rejected"],
              ["#steps", "Six steps to take after a rejection"],
              ["#retrospective", "Retrospective deed polls"],
              ["#faq", "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Unenrolled validity
        ══════════════════════════════════════ */}
        <section id="unenrolled" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Is an Unenrolled Deed Poll Legally Valid?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yes. Your deed poll becomes legally valid the moment you sign it in front of an independent
            witness. Enrolling it at the Royal Courts of Justice is optional. Enrolment only puts the
            change on public record; it does not make the document any more valid.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Most people never enrol their deed poll. Read{" "}
            <Link href="/name-change/enrolled-vs-unenrolled-deed-poll-uk" className="text-[#1d70b8] hover:underline">
              enrolled vs unenrolled deed polls
            </Link>{" "}
            to see when enrolment might help.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Banks & who accepts
        ══════════════════════════════════════ */}
        <section id="banks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Do Banks Accept Unenrolled Deed Polls?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yes, most UK banks and building societies do. Problems usually start in a branch, where
            staff apply anti-fraud checks too strictly. The bank&apos;s head office normally accepts a valid
            unenrolled deed poll, especially when you also show photo ID in your new name.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Who accepts an unenrolled deed poll?</h3>
          <div className="overflow-x-auto border border-gray-200 rounded-lg mb-4">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1d70b8] text-white">
                <tr>
                  <th className="p-3 font-bold">Organisation</th>
                  <th className="p-3 font-bold">Accepts it?</th>
                  <th className="p-3 font-bold">What to know</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {acceptance.map(([org, accepts, note], i) => (
                  <tr key={org} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="p-3 font-medium">{org}</td>
                    <td className="p-3 font-bold text-[#00703c]">{accepts}</td>
                    <td className="p-3 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For bank-specific tips, see{" "}
            <Link href="/name-change/change-name-on-bank-account-uk" className="text-[#1d70b8] hover:underline">
              how to change your name on a bank account
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Reasons
        ══════════════════════════════════════ */}
        <section id="reasons" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Why Deed Polls Get Rejected
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Before you challenge a rejection, check that your deed poll has none of these common
            problems. If it does, sign a corrected one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rejectionReasons.map(([title, body]) => (
              <div key={title} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <h2 id="steps" className="text-2xl sm:text-3xl font-bold mb-3 border-b-2 border-gray-100 pb-3">
          Six Steps to Take If Your Deed Poll Is Rejected
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          If your deed poll is correct and still refused, work through these steps in order. Most cases
          are resolved by step 4.
        </p>

        {/* ── Steps ── */}
        <ol className="space-y-6 mb-14">
          {rejectionSteps.map((step, index) => (
            <li
              key={index}
              id={`step-${index + 1}`}
              className="flex gap-5 sm:gap-6 border-l-4 border-[#1d70b8] bg-[#f3f2f1] rounded-r-lg px-5 py-5 sm:px-6 sm:py-6"
            >
              {/* Step number */}
              <div
                aria-hidden="true"
                className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1d70b8] text-white font-extrabold flex items-center justify-center text-sm mt-0.5"
              >
                {index + 1}
              </div>

              {/* Step body */}
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                  {step.content}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* ── DPA tip box ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 mb-12 text-sm sm:text-base text-amber-900">
          <strong>Keep a paper trail.</strong> Log every interaction — date, name of the person
          you spoke to, and what was agreed. If you later need to involve the ICO or the Financial
          Ombudsman Service, a clear chronology will strengthen your case significantly.
        </div>

        {/* ══════════════════════════════════════
            H2 — Retrospective
        ══════════════════════════════════════ */}
        <section id="retrospective" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            What Is a Retrospective Deed Poll?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A retrospective deed poll records that you have already been using your new name since an
            earlier date. It is useful when some of your records, such as a bank account or payslip,
            already show the new name and an organisation wants to see how long you have used it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It still takes legal effect from the day you sign it. It does not backdate your passport,
            tax or other records.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — FAQ
        ══════════════════════════════════════ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-gray-100 pb-3">
            Rejected Deed Poll FAQs
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
                headline: PAGE_TITLE,
                description: PAGE_DESCRIPTION,
                inLanguage: "en-GB",
                author: { "@type": "Organization", name: "Deed Poll UK Editorial Team" },
                publisher: {
                  "@type": "Organization",
                  name: "Deed Poll UK",
                  logo: { "@type": "ImageObject", url: "https://deedpolluk.uk/og-image.jpg" },
                },
                image: "https://deedpolluk.uk/og-image.jpg",
                dateModified: "2026-10-30T08:00:00+00:00",
                mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://deedpolluk.uk/" },
                  { "@type": "ListItem", position: 2, name: "My Deed Poll Was Rejected", item: PAGE_URL },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map(({ q, a }) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              },
            ]),
          }}
        />

        {/* ── CTA ── */}
        <div className="bg-[#f3f2f1] border border-gray-300 rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">
            Need a new deed poll?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create a fresh deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            If an organisation has asked for a professionally presented document, our service
            generates a correctly formatted, legally valid deed poll you can sign today.
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