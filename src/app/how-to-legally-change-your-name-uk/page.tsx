import Link from 'next/link';

const PAGE_URL = "https://deedpolluk.uk/how-to-legally-change-your-name-uk";
const PAGE_TITLE = "How to Legally Change Your Name in the UK: Fast, From £0";
const PAGE_DESCRIPTION =
  "Yes, you can legally change your name in the UK without a solicitor. Every method compared, deed poll steps, cost and a checklist of who to tell.";

export const metadata = {
  alternates: {
    canonical: "/how-to-legally-change-your-name-uk",
    languages: {
      "en-GB": "/how-to-legally-change-your-name-uk",
      "x-default": "/how-to-legally-change-your-name-uk",
    },
  },
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  }
};

const steps = [
  {
    title: "Choose your new name",
    body: "You can change your first name, middle names, surname or your entire name. Pick a name you can say and spell, and avoid anything offensive or misleading. You do not need a court's permission.",
  },
  {
    title: "Create your deed poll",
    body: "A deed poll states your old name, your new name, and that you will use only the new name from now on. You can write your own, use an online service or ask a solicitor. Every route produces an equally valid document.",
  },
  {
    title: "Sign it in front of a witness",
    body: "Sign once in your old name and once in your new name while an independent adult watches. Your witness then signs and adds their full name and address. Choose someone who is not a relative or your partner.",
  },
  {
    title: "Sign extra original copies",
    body: "Organisations usually want to see an original signed deed poll, not a photocopy. Print, sign and witness several copies on the same day so you can contact more than one organisation at once.",
  },
  {
    title: "Update your passport and driving licence first",
    body: "Change your photo ID before anything else. Banks and other organisations accept your new name more readily when your passport or driving licence already shows it.",
  },
  {
    title: "Tell everyone else",
    body: "Work through HMRC, your bank, your employer, your GP, utilities and other accounts. Keep a list of who you have contacted and when. Most organisations update your records within days.",
  },
];

const methods = [
  {
    label: "Most common",
    labelColour: "bg-green-100 text-green-800",
    title: "Deed poll",
    body: "A legal document you sign in front of a witness. HM Passport Office, the DVLA, HMRC, banks and almost every other UK organisation accept it.",
  },
  {
    label: "Formal alternative",
    labelColour: "bg-blue-100 text-blue-800",
    title: "Statutory declaration",
    body: "A written statement you declare in front of a solicitor, commissioner for oaths or magistrate. It has the same legal effect as a deed poll.",
  },
  {
    label: "After marriage",
    labelColour: "bg-purple-100 text-purple-800",
    title: "Marriage or civil partnership certificate",
    body: "Your certificate is enough to take your spouse's surname. You only need a deed poll for a non-standard change, such as a double-barrelled or new surname.",
  },
  {
    label: "After divorce",
    labelColour: "bg-orange-100 text-orange-800",
    title: "Final order (decree absolute)",
    body: "To go back to a previous surname, show your final order with your marriage certificate. Some organisations also ask for your birth certificate.",
  },
];

const nameRules = [
  "It must not be offensive or include swear words.",
  "It must not include numbers or symbols (hyphens and apostrophes are fine).",
  "It must not suggest a title you do not hold, such as “Sir” or “Doctor”.",
  "It must not be impossible to pronounce.",
  "You must not change your name to commit fraud, avoid a debt or deceive anyone.",
];

const costs = [
  ["Write your own deed poll", "Free", "Same day"],
  ["Online deed poll (Deed Poll UK)", "£7.99", "Same day"],
  ["Statutory declaration", "Solicitor's fee, usually from £5", "1–2 days"],
  ["Solicitor-drafted deed poll", "Often £50 or more", "A few days"],
  ["Enrolled deed poll (optional)", "Court fee plus Gazette notice", "Several weeks"],
];

const faqs = [
  {
    q: "How do I legally change my name in the UK?",
    a: "Most adults use a deed poll. You write or buy one, sign it in front of an independent adult witness, and show it to each organisation you need to update. There is no central register, so you tell each organisation yourself.",
  },
  {
    q: "What are the laws on changing your name in the UK?",
    a: "No single law controls name changes in England, Wales or Northern Ireland. You can use any name you like, as long as you do not use it to commit fraud or deceive people. Organisations such as HM Passport Office set their own rules on which names they will accept.",
  },
  {
    q: "Can I change my entire name?",
    a: "Yes. A deed poll can change your first name, middle names and surname all at once. You can also add or remove names.",
  },
  {
    q: "How do I legally change my surname?",
    a: "If you are taking your spouse's surname, use your marriage or civil partnership certificate. For any other surname change, including a double-barrelled name or a completely new surname, use a deed poll.",
  },
  {
    q: "Do I need a lawyer to change my name?",
    a: "No. Adults can create and sign their own deed poll without legal help. A solicitor can draft one for you, but it costs more and is no more valid than a deed poll you make yourself.",
  },
  {
    q: "Can I apply for a name change online?",
    a: "There is no government name change form in England, Wales or Northern Ireland. You can create a deed poll online, then print, sign and witness it at home. GOV.UK explains how to update your passport and driving licence once you have it.",
  },
  {
    q: "Is there a change of name certificate in the UK?",
    a: "Your signed deed poll or statutory declaration is your proof of a name change. In Scotland, if you record your change with National Records of Scotland, you can order an official extract of the record.",
  },
  {
    q: "How do I change my name in Scotland?",
    a: "You can use a deed poll or a statutory declaration in Scotland. If you were born or adopted in Scotland, you can also record the change with National Records of Scotland, which updates your birth record.",
  },
  {
    q: "How long does it take to legally change your name?",
    a: "You can make and sign a deed poll on the same day. Updating your records takes longer: allow about three weeks for a passport and up to three weeks for a driving licence. Banks usually take a few days.",
  },
  {
    q: "Is a deed poll legally binding?",
    a: "Yes. A correctly signed and witnessed deed poll is a legal document. You do not need to register it. You can choose to enrol it at the Royal Courts of Justice, which puts it on public record, but this is optional.",
  },
  {
    q: "Can I change my child's name?",
    a: "Yes, but everyone with parental responsibility must agree and sign a child's deed poll. If someone refuses, you need a court order. Young people aged 16 or 17 can sign their own deed poll.",
  },
];

const docsToUpdate = [
  { priority: "High", items: [<a key="passport" href="https://www.gov.uk/changing-passport-information" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Passport (HM Passport Office)</a>, <a key="dvla" href="https://www.gov.uk/change-name-driving-licence" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Driving licence (DVLA)</a>, <a key="hmrc" href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">National Insurance records (HMRC)</a>, "GP and NHS records"] },
  { priority: "High", items: ["Bank and building society accounts", "Employer and payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
  { priority: "Standard", items: ["Gas, electricity and water", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
  { priority: "Standard", items: ["Vehicle logbook (V5C)", "Student Loans Company", "University or college records", "Property deeds (HM Land Registry)"] },
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
          How to Legally Change Your Name in the UK
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> October 2026 · 8-minute read</p>
        </div>

        {/* ── Quick answer ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-3">
            <strong>Quick answer:</strong> To legally change your name in the UK, most adults:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-base text-gray-800">
            <li>Create a deed poll that states their old and new names.</li>
            <li>Sign it in front of an independent adult witness.</li>
            <li>Use it to update their passport, driving licence, bank and other records.</li>
          </ol>
          <p className="text-base text-gray-800 mt-3">
            You do not need a solicitor or a court, and you can do it the same day.
          </p>
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#laws", "UK name change laws"],
              ["#methods", "Ways to legally change your name"],
              ["#steps", "How to change your name by deed poll"],
              ["#surname", "How to change your surname"],
              ["#first-name", "How to change your first name"],
              ["#children", "Changing a child's name"],
              ["#scotland", "How to change your name in Scotland"],
              ["#online", "Can you change your name online?"],
              ["#cost", "Cost and timescales"],
              ["#checklist", "Name change checklist"],
              ["#faq", "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Laws
        ══════════════════════════════════════ */}
        <section id="laws" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            UK Name Change Laws: What You Need to Know
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In England, Wales and Northern Ireland, no single law controls how you change your name. You can
            use any name you like, provided you do not use it to commit fraud or deceive others. The deed poll
            gives you written proof of the change, which organisations need before they update your records.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Can I legally change my name?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yes. Any adult aged 18 or over can change their name. Young people aged 16 or 17 can also sign
            their own deed poll. Children under 16 need the consent of everyone with parental responsibility.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">What names are not allowed?</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            HM Passport Office and other organisations can refuse a name that breaks these rules:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4">
            {nameRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Read our guide to{" "}
            <Link href="/can-i-change-my-name-to-anything-uk" className="text-[#1d70b8] hover:underline">
              whether you can change your name to anything
            </Link>{" "}
            for more examples.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">What is your legal name?</h3>
          <p className="text-gray-700 leading-relaxed">
            Your legal name is the name you use consistently and that appears on your official documents.
            Learn more in{" "}
            <Link href="/what-is-a-legal-name-uk" className="text-[#1d70b8] hover:underline">
              what is a legal name in the UK
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Legal methods
        ══════════════════════════════════════ */}
        <section id="methods" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Ways to Legally Change Your Name in the UK
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Four documents prove a legal name change. The right one depends on why you are changing your name.
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

          <p className="text-gray-700 mb-6 leading-relaxed">
            Not sure which to use? Compare them in{" "}
            <Link href="/deed-poll-vs-statutory-declaration-uk" className="text-[#1d70b8] hover:underline">
              deed poll vs statutory declaration
            </Link>.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm text-amber-900">
            <strong>Enrolment is optional.</strong> You do not need to enrol your deed poll at the Royal Courts of Justice. An unenrolled deed poll is fully valid, and UK organisations accept it.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your Name by Deed Poll: Step by Step
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Most adults in England, Wales and Northern Ireland follow these six steps.
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
            H2 — Surname
        ══════════════════════════════════════ */}
        <section id="surname" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Legally Change Your Surname
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The evidence you need depends on why you are changing your last name.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">After marriage or civil partnership</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Your marriage or civil partnership certificate proves the change, so you do not need a deed poll
            to take your spouse&apos;s surname.
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-gray-700 mb-4">
            <li>Order extra certified copies of your certificate from the register office.</li>
            <li>Update your passport, sending the certificate with your application.</li>
            <li>Tell the DVLA, enclosing the certificate.</li>
            <li>Update your bank, employer, HMRC and other accounts.</li>
          </ol>
          <p className="text-gray-700 mb-4 leading-relaxed">
            See our full guide to{" "}
            <Link href="/how-to-change-name-after-marriage-uk" className="text-[#1d70b8] hover:underline">
              changing your name after marriage
            </Link>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">After divorce</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To return to your previous surname, show your final order (decree absolute) with your marriage
            certificate. Some organisations also ask for your birth certificate. If they refuse, a deed poll
            solves the problem.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Double-barrelled or brand-new surname</h3>
          <p className="text-gray-700 leading-relaxed">
            A marriage certificate does not cover a combined, double-barrelled or completely new surname. Use a
            deed poll instead. Read more in{" "}
            <Link href="/how-to-change-last-name-uk" className="text-[#1d70b8] hover:underline">
              how to change your last name
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — First name
        ══════════════════════════════════════ */}
        <section id="first-name" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Legally Change Your First Name
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You change a first name, middle name or your entire name with a deed poll, using the same six steps
            above. You can also add or remove middle names in the same document. Find out more in{" "}
            <Link href="/how-to-change-first-name-uk" className="text-[#1d70b8] hover:underline">
              how to change your first name
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Children
        ══════════════════════════════════════ */}
        <section id="children" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Changing a Child&apos;s Name
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4">
            <li><strong>Under 16:</strong> everyone with parental responsibility must agree and sign a child&apos;s deed poll.</li>
            <li><strong>Parent refuses:</strong> you must apply to the family court for a specific issue order.</li>
            <li><strong>Aged 16 or 17:</strong> the young person can sign their own adult-style deed poll.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Read our{" "}
            <Link href="/child-deed-poll-uk" className="text-[#1d70b8] hover:underline">
              child deed poll guide
            </Link>{" "}
            for the full process.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Scotland
        ══════════════════════════════════════ */}
        <section id="scotland" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your Name in Scotland
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Scotland uses different rules. You can change your name with a deed poll or a statutory
            declaration, just as in the rest of the UK.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you were born or adopted in Scotland, you can also record the change with{" "}
            <a
              href="https://www.nrscotland.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d70b8] hover:underline"
            >
              National Records of Scotland
            </a>. This updates your birth record, and you can order an official extract as proof. NRS charges a
            fee and limits how often you can record a change.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Online / lawyer
        ══════════════════════════════════════ */}
        <section id="online" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Can You Change Your Name Online?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            There is no government name change form or GOV.UK application. Instead, you create a deed poll,
            either online or on paper, then print it, sign it and have it witnessed. Once you have it, you
            update your passport and driving licence through GOV.UK.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Do I need a lawyer to change my name?</h3>
          <p className="text-gray-700 leading-relaxed">
            No. Adults can make their own deed poll without a solicitor. A solicitor-drafted deed poll costs
            more but carries no extra legal weight. You only need legal help for a disputed child name change.
            See{" "}
            <Link href="/name-change-solicitor-uk" className="text-[#1d70b8] hover:underline">
              do you need a solicitor to change your name
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Cost
        ══════════════════════════════════════ */}
        <section id="cost" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How Much Does It Cost and How Long Does It Take?
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg mb-4">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1d70b8] text-white">
                <tr>
                  <th className="p-3 font-bold">Method</th>
                  <th className="p-3 font-bold">Typical cost</th>
                  <th className="p-3 font-bold">Time to get it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costs.map(([method, cost, time], i) => (
                  <tr key={method} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="p-3 font-medium">{method}</td>
                    <td className="p-3">{cost}</td>
                    <td className="p-3">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            After that, allow about three weeks for a new passport and up to three weeks for a driving licence.
            The DVLA does not charge to change the name on your licence. For a full breakdown, read{" "}
            <Link href="/how-much-does-it-cost-to-change-your-name-uk" className="text-[#1d70b8] hover:underline">
              how much it costs to change your name
            </Link>{" "}
            and{" "}
            <Link href="/how-long-does-it-take-to-change-your-name-uk" className="text-[#1d70b8] hover:underline">
              how long it takes
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Documents
        ══════════════════════════════════════ */}
        <section id="checklist" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Name Change Checklist: Who to Tell
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            No central system updates your records for you. Tell each organisation yourself, starting with the
            high-priority ones.
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
            Most organisations ask to see your original deed poll or certificate and return it to you. Some banks
            accept a photo upload in their app. Get the{" "}
            <Link href="/checklist" className="text-[#1d70b8] hover:underline">full name change checklist</Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — FAQ
        ══════════════════════════════════════ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-gray-100 pb-3">
            Legal Name Change FAQs
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
              "headline": PAGE_TITLE,
              "description": PAGE_DESCRIPTION,
              "inLanguage": "en-GB",
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
              "dateModified": "2026-10-30T08:00:00+00:00",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": PAGE_URL
              }
            },
              {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to legally change your name in the UK by deed poll",
              "step": steps.map((step, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: step.title,
                text: step.body,
              })),
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
                  "item": PAGE_URL
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
            <Link href="/documents-needed-for-name-change-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Documents Needed for a Name Change</h3>
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
            Ready to change your name?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Answer a few questions and download a correctly formatted deed poll for £7.99. Sign it today and use it with your bank, the DVLA and HM Passport Office.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">
            No solicitor needed · Accepted by UK organisations · Instant download
          </p>
        </div>

      </div>
    </main>
  );
}
