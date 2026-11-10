import Link from 'next/link';

const PAGE_URL = "https://deedpolluk.uk/how-to-change-first-name-uk";
const PAGE_TITLE = "How to Change Your First Name in the UK (2026 Guide)";
const PAGE_DESCRIPTION =
  "Learn how to legally change your first or middle name in the UK by deed poll. See what you can change, the six steps to follow, the cost and who to tell.";

export const metadata = {
  alternates: {
    canonical: "/how-to-change-first-name-uk",
    languages: {
      "en-GB": "/how-to-change-first-name-uk",
      "x-default": "/how-to-change-first-name-uk",
    },
  },
  title: PAGE_TITLE,
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

const whatYouCanChange = [
  {
    label: "Replace",
    labelColour: "bg-green-100 text-green-800",
    title: "Choose a completely new first name",
    body: "You can adopt a new first name at any time and for any reason. You do not need anyone's permission, and there is no waiting period.",
  },
  {
    label: "Add",
    labelColour: "bg-blue-100 text-blue-800",
    title: "Add a first or middle name",
    body: "A deed poll can add extra names to your current name. Many people add a name with family, cultural or religious meaning.",
  },
  {
    label: "Remove",
    labelColour: "bg-purple-100 text-purple-800",
    title: "Remove a middle name",
    body: "You can drop one or more middle names to simplify your legal name or remove a name you dislike.",
  },
  {
    label: "Reorder",
    labelColour: "bg-orange-100 text-orange-800",
    title: "Swap the order of your names",
    body: "You can reorder your names, for example, to put the middle name you actually use first.",
  },
];

const steps = [
  {
    title: "Choose your new first name",
    body: "Almost any first name is acceptable. Invented names, unusual spellings, gender-neutral names and names from other cultures are all fine. Avoid names that are offensive, include numbers or symbols, or are meant to deceive.",
  },
  {
    title: "Create your deed poll",
    body: "Your deed poll must show your full current name, your full new name, and a statement that you will use only the new name from now on. You can write your own, use an online service or ask a solicitor. All three are equally valid.",
  },
  {
    title: "Sign it in front of a witness",
    body: "Sign once in your old name and once in your new name while an independent adult watches. Your witness then signs and adds their full name and address. Choose someone over 18 who is not a relative or your partner.",
  },
  {
    title: "Sign extra original copies",
    body: "Organisations usually want to see an original signed deed poll, not a photocopy. Print, sign and witness several copies on the same day so you can update more than one account at once.",
  },
  {
    title: "Update your passport and driving licence first",
    body: "Change your photo ID before anything else. Banks and other organisations accept a new first name more readily when your passport or driving licence already shows it.",
  },
  {
    title: "Tell everyone else",
    body: "Contact HMRC, your bank, your employer, your GP, utilities and insurers. Keep a list of who you have contacted and when, so you can follow up quickly.",
  },
];

const changeTypes = [
  { type: "Change your first name", example: "Alex Smith → Jordan Smith" },
  { type: "Add a middle name", example: "John Smith → John David Smith" },
  { type: "Remove a middle name", example: "Sarah Jane Brown → Sarah Brown" },
  { type: "Swap first and middle names", example: "James Michael Lee → Michael James Lee" },
  { type: "Change first and last name", example: "Emma Jones → Ava Clarke" },
];

const docsToUpdate = [
  { priority: "High", items: [<a key="passport" href="https://www.gov.uk/changing-passport-information" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Passport (HM Passport Office)</a>, <a key="dvla" href="https://www.gov.uk/change-name-driving-licence" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Driving licence (DVLA)</a>, <a key="hmrc" href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">National Insurance records (HMRC)</a>, "GP and NHS records"] },
  { priority: "High", items: ["Bank and building society accounts", "Employer and payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
  { priority: "Standard", items: ["Gas, electricity and water", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
  { priority: "Standard", items: ["Vehicle logbook (V5C)", "Student Loans Company", "University or college records", "Loyalty and rewards accounts"] },
];

const risks = [
  {
    icon: "✈️",
    title: "Travel problems",
    body: "Airlines check that your ticket matches your passport. If you book in your new name but your passport shows the old one, the airline can refuse to let you board.",
  },
  {
    icon: "🏦",
    title: "Banking and credit issues",
    body: "Lenders check your name against your credit file. A mismatch can trigger fraud checks, block payments or delay a mortgage application.",
  },
  {
    icon: "💼",
    title: "Tax and payroll errors",
    body: "Your employer reports your name to HMRC. If payroll and HMRC hold different names, you risk duplicate tax records or gaps in your National Insurance history.",
  },
  {
    icon: "🏥",
    title: "Medical record confusion",
    body: "The NHS matches records by name and date of birth. An old first name on your GP record can cause delays with referrals and prescriptions.",
  },
];

const faqs = [
  {
    q: "Can you change your first name in the UK?",
    a: "Yes. Any adult in the UK can change their first name at any time and for any reason. You use a deed poll, which takes effect on the day you sign it. HM Passport Office, the DVLA and banks all accept it.",
  },
  {
    q: "How do I legally change my first name?",
    a: "Create a deed poll that states your full current name and your full new name. Sign it in front of an independent adult witness. Then show it to each organisation, starting with HM Passport Office and the DVLA.",
  },
  {
    q: "How do I change my middle name?",
    a: "Use a deed poll, just as you would for a first name. It can add, remove or change a middle name, or swap the order of your names. Write your full current name and your full new name in the document.",
  },
  {
    q: "How do I add a middle name in the UK?",
    a: "Make a deed poll that shows your current name and your new name with the added middle name. Sign it in front of a witness, then update your passport, driving licence and other records.",
  },
  {
    q: "Can I change my first and last name at the same time?",
    a: "Yes. One deed poll can change your first name, middle names and surname together. You do not need a separate document for each part.",
  },
  {
    q: "Are there any first names I cannot choose?",
    a: "Very few. The UK has no approved list of first names. HM Passport Office may refuse a name that is offensive, includes numbers or symbols, suggests a title you do not hold, or is impossible to pronounce.",
  },
  {
    q: "How much does it cost to change your first name?",
    a: "Writing your own deed poll is free. Our online deed poll costs £7.99. Changing the name on your driving licence is free, but you pay the normal fee for a new passport.",
  },
  {
    q: "Do I need a solicitor to change my first name?",
    a: "No. Adults can create and sign their own deed poll. A solicitor can draft one for you, but it costs more and is no more valid.",
  },
  {
    q: "Can I change my first name if I am under 18?",
    a: "Yes. Children under 16 need a deed poll signed by everyone with parental responsibility. Young people aged 16 or 17 can sign their own deed poll.",
  },
  {
    q: "How long does it take to change your first name?",
    a: "You can make and sign a deed poll on the same day. Allow about three weeks for a new passport and up to three weeks for a driving licence. Banks usually update your name within a few days.",
  },
  {
    q: "What if my name is just spelt wrongly on a document?",
    a: "That is a name correction, not a name change. Ask the organisation to fix it and show your birth certificate or passport as proof of the correct spelling. You do not need a deed poll.",
  },
  {
    q: "Will changing my first name affect my credit history?",
    a: "No, as long as you tell your bank and lenders. Your credit file also links to your date of birth and address history. Contact Experian, Equifax and TransUnion to make sure your file shows your new name.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-gray-700 font-medium">Change Your First Name</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your First Name in the UK
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> October 2026 · 7-minute read</p>
        </div>

        {/* ── Quick answer ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-3">
            <strong>Quick answer:</strong> To legally change your first name in the UK:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-base text-gray-800">
            <li>Create a deed poll showing your old and new names.</li>
            <li>Sign it in front of an independent adult witness.</li>
            <li>Use it to update your passport, driving licence, bank and other records.</li>
          </ol>
          <p className="text-base text-gray-800 mt-3">
            It works the same way for middle names, and you can do it today without a solicitor.
          </p>
        </div>

        {/* ── Key fact ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 mb-10 text-sm sm:text-base text-amber-900">
          <strong>Key fact:</strong> A marriage certificate can change a surname, but nothing except a deed poll (or statutory declaration) changes a first or middle name.
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#can-you", "Can you change your first name?"],
              ["#what-you-can-change", "What you can change"],
              ["#steps", "How to change your first name: 6 steps"],
              ["#middle-name", "How to change your middle name"],
              ["#cost", "Cost and timescales"],
              ["#documents", "Who to tell"],
              ["#risks", "Risks of mismatched records"],
              ["#faq", "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Can you change your first name
        ══════════════════════════════════════ */}
        <section id="can-you" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Can You Legally Change Your First Name in the UK?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yes. UK law lets you use any name you like, provided you do not use it to deceive anyone or commit
            fraud. You do not need a court&apos;s permission or a reason.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You do need proof of the change, because organisations will not update your records without it. For a
            first name, that proof is a <strong>deed poll</strong>. A statutory declaration also works but costs
            more and takes longer.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Who can change their first name?</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li><strong>Adults (18+):</strong> sign their own deed poll.</li>
            <li><strong>Aged 16 or 17:</strong> can sign their own deed poll too.</li>
            <li>
              <strong>Under 16:</strong> everyone with parental responsibility must sign a{" "}
              <Link href="/child-deed-poll-uk" className="text-[#1d70b8] hover:underline">child deed poll</Link>.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════
            H2 — What you can change
        ══════════════════════════════════════ */}
        <section id="what-you-can-change" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            What You Can Change with a Deed Poll
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A deed poll can change any part of your name. For first and middle names, you have four options:
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

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Change</th>
                  <th className="text-left px-4 py-3 font-semibold">Example</th>
                  <th className="text-left px-4 py-3 font-semibold">Document needed</th>
                </tr>
              </thead>
              <tbody>
                {changeTypes.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800 align-top">{row.type}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-500 align-top italic">{row.example}</td>
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
            One deed poll covers every change in a single document, including your first and last name together.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your First Name: 6 Steps
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Follow these steps in order. They work for a first name, a middle name or both.
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
            H2 — Middle name
        ══════════════════════════════════════ */}
        <section id="middle-name" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your Middle Name
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You change a middle name in exactly the same way as a first name: with a deed poll. Write your full
            current name and your full new name, sign it in front of a witness, and update your records.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Adding a middle name</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Many people add a middle name to honour a relative or to reflect their heritage. Your deed poll should
            show the new middle name in its correct position within your full name.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Removing or swapping a middle name</h3>
          <p className="text-gray-700 leading-relaxed">
            You can drop a middle name or move it to become your first name. For more examples, read{" "}
            <Link href="/how-to-change-middle-name-uk" className="text-[#1d70b8] hover:underline">
              how to change your middle name
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
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4">
            <li><strong>DIY deed poll:</strong> free, ready the same day.</li>
            <li><strong>Our online deed poll:</strong> £7.99, ready the same day.</li>
            <li><strong>Driving licence update:</strong> free, usually up to three weeks.</li>
            <li><strong>New passport:</strong> the standard passport fee, allow about three weeks.</li>
            <li><strong>Bank accounts:</strong> free, usually a few days.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            See the full breakdown in{" "}
            <Link href="/how-much-does-it-cost-to-change-your-name-uk" className="text-[#1d70b8] hover:underline">
              how much it costs to change your name
            </Link>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Documents to update
        ══════════════════════════════════════ */}
        <section id="documents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Who to Tell After Changing Your First Name
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            No central system updates your records for you. Tell each organisation yourself, starting with your
            photo ID.
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
            <strong>Expect extra checks.</strong> Some banks check a first-name change more closely than a surname change. Update your passport or driving licence before you contact your bank to avoid delays. Use our{" "}
            <Link href="/checklist" className="text-[#1d70b8] hover:underline">name change checklist</Link> to track progress.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Risks of leaving records mismatched
        ══════════════════════════════════════ */}
        <section id="risks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            What Happens If Your Records Do Not Match?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Some people sign a deed poll and start using their new first name but never update their documents.
            That causes real problems:
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
            <strong>The fix is simple.</strong> Show your deed poll to each organisation in the priority order above. Most updates are free and finish within a few weeks.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — FAQ
        ══════════════════════════════════════ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-gray-100 pb-3">
            First Name Change FAQs
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
              "name": "How to change your first name in the UK",
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
                  "name": "Change Your First Name",
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
            <Link href="/change-name-without-deed-poll-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Change Your Name Without a Deed Poll</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/deed-poll-scotland-northern-ireland" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Scotland & Northern Ireland Name Change</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-fill-in-d1-form-change-name" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Fill In the D1 Form</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>

            <Link href="/how-to-legally-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Legally Change Your Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-middle-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Middle Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-[#f3f2f1] border border-gray-300 rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">
            Ready to change your first name?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Change your first name, middle name, surname or all three in one document for £7.99. Sign it today and start using your new name straight away.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">
            No solicitor needed · Covers first, middle and last names · Instant download
          </p>
        </div>

      </div>
    </main>
  );
}
