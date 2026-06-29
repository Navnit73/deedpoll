import Link from 'next/link';

export const metadata = {
  title: "My Deed Poll Was Rejected | What to Do Next | Deed Poll UK",
  description:
    "Deed poll rejected by your bank or another organisation? Follow these six proven steps — from updating your photo ID to invoking your GDPR rights — to get your name change accepted.",
  alternates: {
    canonical: "/my-deed-poll-was-rejected",
    languages: {
      "en-GB": "/my-deed-poll-was-rejected",
      "x-default": "/my-deed-poll-was-rejected",
    },
  },
};

const rejectionSteps = [
  {
    title: "Update your government-issued IDs first",
    content: (
      <>
        <p>
          If you haven't yet had a passport, driving licence, or other government-issued ID updated
          with your new name, start there. It becomes very difficult for any organisation to refuse
          your name change when you can present official photo ID that already carries it.
        </p>
        <p>
          If you're struggling to get even one piece of government ID updated, focus on whichever
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
    title: "Bring a plethora of evidence",
    content: (
      <>
        <p>
          Arrive at your bank (or write to the organisation) armed with everything you would need
          to open a brand-new account: photo ID <em>and</em> proof of address, both in your new
          name. Presented together, this bundle of evidence is hard to argue with.
        </p>
        <p>
          If you're dealing with a bank in person, calmly pointing out that you could now open an
          account with a competitor — and that all your direct debits would follow you automatically
          under the Current Account Switch Service — can prompt a swift change of attitude.
        </p>
      </>
    ),
  },
  {
    title: "Talk with your feet",
    content: (
      <>
        <p>
          If you need a quick resolution and the organisation simply won't budge, switching to a
          competitor is a legitimate option. Changing banks is straightforward these days: the
          Current Account Switch Service moves your payments and direct debits automatically within
          seven working days, and many banks offer cash incentives for switchers.
        </p>
        <p>
          It's not the right answer for everyone — you shouldn't <em>have</em> to switch — but it
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
          Some organisations have a mistaken belief that only a "court-enrolled" deed poll is
          legally valid. This is incorrect: a correctly executed unenrolled deed poll carries full
          legal weight. Politely asking what specific evidence would satisfy them can open the door
          to a practical solution — either by agreeing to provide something they'll accept (such as
          an updated passport) or by educating them about the law.
        </p>
        <p>
          It's worth knowing that following investigative journalism in 2013 exposing overly
          restrictive practices, many organisations revised their policies. Some banks have also
          made out-of-court settlements — including financial payments — after wrongly refusing
          legitimate deed polls. Mentioning that you're aware of this can sharpen minds
          considerably.
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
          nothing, follow up after one week. If you're told someone is "looking into it" and then
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
          The Data Protection Act 2018 — the UK's post-Brexit implementation of GDPR — gives you
          the statutory right to require that any organisation correct inaccurate personal data
          they hold about you. This is known as the <strong>right to rectification</strong>.
        </p>
        <p>
          If you have provided your deed poll, a piece of photo ID in your new name, and proof of
          address in your new name, and the organisation is still refusing, write them a formal
          letter. State clearly that you are making a <em>right to rectification request under the
          UK GDPR / DPA 2018</em>, that they are knowingly continuing to process outdated and
          incorrect personal data despite sufficient evidence of the error, and that you require
          them to correct it within 28 days.
        </p>
        <p>
          Enclose copies of all evidence previously provided. If you receive no satisfactory
          response within 28 days, escalate to the{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/"
            className="text-[#1d70b8] underline underline-offset-2 decoration-2 hover:text-[#003078]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Commissioner's Office (ICO)
          </a>
          . The ICO can impose substantial fines, and most organisations take compliance far more
          seriously the moment they understand you are prepared to escalate.
        </p>
      </>
    ),
  },
];

export default function RejectionPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

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
          My Deed Poll Was Rejected — What Should I Do?
        </h1>

        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026 · 6-minute read</p>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Occasionally an organisation will refuse to update their records after you present a
            deed poll — even a correctly executed one. This is frustrating, but you have clear
            legal rights. The six steps below, taken in order, resolve the vast majority of cases.
          </p>
        </div>

        {/* ── Context paragraphs ── */}
        <div className="text-gray-700 leading-relaxed space-y-4 mb-10 text-base sm:text-lg">
          <p>
            Rejections can happen regardless of who produced your deed poll. The most common
            culprits are high street banks, whose interpretation of anti-fraud rules can be
            overly cautious. But utility providers, insurers, and even some government bodies
            occasionally push back too.
          </p>
          <p>
            The good news: organisations that reject valid deed polls are almost always in the
            wrong, and the law is firmly on your side. Here's how to assert it.
          </p>
        </div>

        {/* ── Quick-jump nav ── */}
        <nav aria-label="Steps on this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
            Six steps to take
          </p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {rejectionSteps.map((step, i) => (
              <li key={i}>
                <a href={`#step-${i + 1}`} className="hover:underline underline-offset-2">
                  {i + 1}. {step.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

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
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h2>
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