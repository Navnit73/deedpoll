import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = "https://deedpolluk.uk/how-to-change-name-on-passport-uk";
const PAGE_TITLE = "Change Name on UK Passport (2026): Documents, Fee & Time";
const PAGE_DESCRIPTION =
  "Name changed? See exactly which documents HM Passport Office accepts (marriage certificate, deed poll, divorce), the £102 fee and how long it takes. Step-by-step.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/how-to-change-name-on-passport-uk",
    languages: {
      "en-GB": "/how-to-change-name-on-passport-uk",
      "x-default": "/how-to-change-name-on-passport-uk",
    },
  },
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Passport Name Change: Requirements, Cost and Time",
    description: PAGE_DESCRIPTION,
  },
};

const tableOfContents = [
  ["#do-you-need-a-new-passport", "Do you need a new passport?"],
  ["#requirements", "UK passport name change requirements"],
  ["#steps", "How to change your name on your passport"],
  ["#cost", "How much it costs"],
  ["#time", "How long it takes"],
  ["#online", "Changing your name on your passport online"],
  ["#address", "Changing the address on your passport"],
  ["#mistakes", "Mistakes that delay your application"],
  ["#faq", "FAQs"],
];

const requirements = [
  {
    id: "marriage",
    label: "Most common",
    labelColour: "bg-green-100 text-green-800",
    title: "After Marriage or Civil Partnership",
    intro: "Use your marriage or civil partnership certificate as proof. You do not need a deed poll for a standard married name.",
    documents: [
      "Your marriage or civil partnership certificate",
      "Your current passport",
    ],
  },
  {
    id: "divorce",
    label: "Returning to a previous name",
    labelColour: "bg-purple-100 text-purple-800",
    title: "After Divorce or Separation",
    intro: "If you are going back to a previous surname, such as your maiden name, send all of the following:",
    documents: [
      "Your birth certificate",
      "A signed statement saying you have returned to your previous surname for all purposes",
      "A document showing you are using the name, such as a bank statement",
      "Your marriage or civil partnership certificate showing both names",
    ],
  },
  {
    id: "deed-poll",
    label: "Any other change",
    labelColour: "bg-blue-100 text-blue-800",
    title: "After a Deed Poll",
    intro: "For any other change of name, including double-barrelled or new first names, send your deed poll with:",
    documents: [
      "Your signed and witnessed deed poll",
      "Proof of any previous name changes",
      "Evidence that you use your new name, such as a payslip or a council letter",
    ],
  },
  {
    id: "gender",
    label: "Gender change",
    labelColour: "bg-orange-100 text-orange-800",
    title: "After a Change of Gender",
    intro: "Send one of the following, plus your deed poll if your name has also changed:",
    documents: [
      "A Gender Recognition Certificate",
      "A new birth or adoption certificate showing your acquired gender",
      "A letter from your doctor or consultant confirming the change is likely to be permanent",
    ],
  },
];

const steps = [
  {
    title: "Gather your supporting documents",
    body: "Collect the evidence that matches your reason for changing your name (see the requirements above). HM Passport Office needs originals and returns them separately from your new passport.",
  },
  {
    title: "Start your application",
    body: "Apply online through GOV.UK. To use a paper form instead, pick one up from a Post Office that offers Check and Send, or call the Passport Adviceline. You cannot download the paper form.",
  },
  {
    title: "Enter your new name exactly",
    body: "Fill in and sign the application in the name you want printed on your passport. Spell it exactly as it appears on your marriage certificate or deed poll.",
  },
  {
    title: "Add a new passport photo",
    body: "Upload a digital photo for an online application, or include 2 printed photos with a paper form. You do not need a countersignature just because your name has changed.",
  },
  {
    title: "Pay the fee",
    body: "An adult passport costs £102 online or £115.50 by post. Time left on your old passport does not carry over to the new one.",
  },
  {
    title: "Post your old passport and documents",
    body: "Send your current passport and supporting documents to HM Passport Office. Use a tracked service such as Royal Mail Special Delivery.",
  },
];

const fees = [
  ["Adult (16+) online", "£102.00", "£116.00"],
  ["Adult (16+) paper form", "£115.50", "£129.50"],
  ["Child (under 16) online", "£66.50", "£80.50"],
  ["Child (under 16) paper form", "£80.00", "£94.00"],
  ["1 Week Fast Track (adult)", "£192.00", "£206.00"],
  ["1 Day Premium (adult renewal)", "£239.50", "£253.50"],
];

const faqs = [
  {
    q: "How do I change my name on my UK passport?",
    a: "Apply for a new passport online at GOV.UK in your new name. Then post your current passport and your proof of name change, such as a marriage certificate or deed poll, to HM Passport Office. An adult application costs £102 online.",
  },
  {
    q: "How much does it cost to change your name on a UK passport?",
    a: "A name change costs the same as a new passport: £102 online or £115.50 by post for an adult, and £66.50 online for a child. The 1 Week Fast Track service costs £192. There is no free or reduced fee for a name change.",
  },
  {
    q: "How long does a UK passport name change take?",
    a: "HM Passport Office advises allowing 3 weeks for most applications from the UK. A name change can take longer because you post supporting documents. If you need to travel urgently, book the 1 Week Fast Track service.",
  },
  {
    q: "What are the UK passport name change requirements?",
    a: "You need your current passport, a new photo and proof of your name change. That means a marriage or civil partnership certificate, a deed poll with evidence you use the new name, or divorce documents with a signed statement, depending on your reason.",
  },
  {
    q: "How do I change my name on my passport after marriage?",
    a: "Apply for a new passport in your married name and send your marriage certificate as proof. You do not need a deed poll. You can even apply up to 3 months before your wedding using the ‘passports for newly weds and civil partners’ form, signed by your registrar or minister.",
  },
  {
    q: "Do I have to change my passport after getting married?",
    a: "No. If you keep your name after marriage, your passport stays valid. You only need a new passport if you start using a new name, and the name on your passport must match your travel bookings.",
  },
  {
    q: "Can I change my name on my passport online?",
    a: "Yes. You can apply online at GOV.UK, which is cheaper and faster than applying by post. You still need to post your old passport and supporting documents after you submit the online application.",
  },
  {
    q: "Do I need a deed poll to change my name on my passport?",
    a: "Only if your new name does not come from a marriage, civil partnership or divorce. A marriage certificate covers a standard married name or a double-barrelled surname. For any other change, you need a deed poll plus evidence you use your new name.",
  },
  {
    q: "Do I need to update the address on my passport?",
    a: "No. UK passports do not show your address, so you do not need a new passport when you move. Just enter your current address next time you apply.",
  },
  {
    q: "Can I travel while my passport name change is being processed?",
    a: "No. Once you post your passport, you cannot travel on it. Do not book travel until your new passport arrives, because the passport number will change and your booking name must match your passport.",
  },
];

const sectionHeading = "scroll-mt-24 text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3";

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
          How to Change Your Name on a UK Passport (2026 Guide)
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Updated</strong> October 2026 · 8-minute read · Fees checked against GOV.UK</p>
        </div>

        {/* ── Quick answer ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="font-bold text-gray-900 mb-2">Quick answer</p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            To <strong>change your name on a UK passport</strong>, apply for a new passport in your new
            name at GOV.UK and send proof of the change, such as a marriage certificate or deed poll. It
            costs <strong>£102 online</strong> (£115.50 by post), and you should allow at least{' '}
            <strong>3 weeks</strong>, or longer while HM Passport Office checks your documents.
          </p>
        </div>

        {/* ── Important notice ── */}
        <div className="bg-red-50 border border-red-200 rounded-md px-5 py-4 mb-8 text-sm sm:text-base text-red-900">
          <strong>Travelling soon?</strong> You cannot travel once you post your passport. Your new
          passport also has a new number, so do not book travel until it arrives. If you need it
          urgently, book the 1 Week Fast Track service.
        </div>

        {/* ── On-page nav ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8] list-decimal pl-5">
            {tableOfContents.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            H2 — Do you need a new passport?
        ══════════════════════════════════════ */}
        <section id="do-you-need-a-new-passport" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            Do You Need a New Passport After a Name Change?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yes. If you start using a new name, you need a new passport to travel or to prove your
            identity. The name on your passport must match the name on your plane tickets and bookings.
          </p>
          <p className="text-gray-700 mb-3 leading-relaxed">You <strong>do not</strong> need a new passport if you:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li>get married or divorced but keep your current name</li>
            <li>move house or change your contact details</li>
            <li>add or change a title, such as Dr or Mrs</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Your new passport lasts 10 years. Any time left on your old passport does not carry over.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Requirements
        ══════════════════════════════════════ */}
        <section id="requirements" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            UK Passport Name Change Requirements
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every application needs your current passport and a new photo. The proof of name change
            depends on why your name changed.
          </p>

          <div className="space-y-5 mb-6">
            {requirements.map((r) => (
              <div key={r.id} id={r.id} className="scroll-mt-24 border border-gray-200 rounded-lg p-5">
                <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 ${r.labelColour}`}>
                  {r.label}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">{r.intro}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700">
                  {r.documents.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>

                {r.id === "marriage" && (
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h4 className="font-bold text-gray-900 mb-1">Applying Before Your Wedding</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      You can apply for a passport in your married name up to <strong>3 months
                      before</strong> your ceremony. Send the “passports for newly weds and civil
                      partners” form, signed by the registrar or minister who will marry you. You
                      cannot use the new passport until the day of your wedding.
                    </p>
                  </div>
                )}

                {r.id === "deed-poll" && (
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h4 className="font-bold text-gray-900 mb-1">What Counts as Evidence of Use?</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Update a couple of records first, then send one as proof. A payslip, bank
                      statement, council letter or updated driving licence all show you use your new
                      name.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">Small Changes, Such as Spelling or Middle Names</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To correct a spelling or add or remove a middle name, send 2 documents that show you use
            the new version, such as a driving licence and a bank statement.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm text-amber-900">
            <strong>Not married or divorced?</strong> You need a deed poll before HM Passport Office
            will change your name.{' '}
            <Link href="/change-name-in-uk-by-deedpoll" className="underline font-semibold">
              Create your deed poll online
            </Link>{' '}
            in minutes, then come back to this guide.
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Steps
        ══════════════════════════════════════ */}
        <section id="steps" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            How to Change Your Name on Your Passport: Step by Step
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Follow these 6 steps whether you are renewing your passport and changing your name together,
            or updating a passport that still has years left on it.
          </p>

          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
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
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-6">
            <strong>Getting your photo right:</strong> photos are one of the most common reasons
            passport applications are delayed. Check yours against the{" "}
            <a href="https://www.pixpassport.com/uk-passport-photo-requirements-tool" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">
              UK passport photo requirements tool
            </a>{" "}
            before you apply, or create a compliant digital photo with this{" "}
            <a href="https://pixpassport.uk/tool/uk-passport-photo" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">
              UK passport photo maker
            </a>.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Cost
        ══════════════════════════════════════ */}
        <section id="cost" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            How Much Does a Passport Name Change Cost?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A name change costs the same as any new passport. There is no free or discounted fee for
            changing your name, even after marriage. These are the current GOV.UK fees.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
            <table className="w-full text-sm sm:text-base border-collapse">
              <caption className="sr-only">UK passport name change fees</caption>
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Service</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Standard 34 pages</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Frequent traveller 54 pages</th>
                </tr>
              </thead>
              <tbody>
                {fees.map(([service, standard, frequent], i) => (
                  <tr key={service} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="text-left px-4 py-3 border-b border-gray-100 font-medium text-gray-800">{service}</th>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{standard}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{frequent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Fees checked October 2026. Always confirm the latest fees on GOV.UK before you apply.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-2">Cost of Changing Your Name on a Passport After Marriage</h3>
          <p className="text-gray-700 leading-relaxed">
            After marriage, you pay the standard fee: £102 online or £115.50 by post. Your marriage
            certificate is free to use as evidence, so you do not need to pay for a deed poll.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Time
        ══════════════════════════════════════ */}
        <section id="time" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            How Long Does a UK Passport Name Change Take?
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-2">Standard Service</h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            HM Passport Office advises allowing <strong>3 weeks</strong> for most UK applications.
            Name changes can take longer because staff need to receive and check your posted
            documents. Paper applications take longer than online ones.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Urgent Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-1">1 Week Fast Track – £192</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Attend an appointment at a passport office, which can be as soon as the next day. A
                courier delivers your passport within 1 week. This works for name changes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-1">1 Day Premium – £239.50</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Collect your passport 4 hours after your appointment. This service covers adult
                renewals only, so check you are eligible before booking.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            H2 — Online
        ══════════════════════════════════════ */}
        <section id="online" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            Can You Change Your Name on Your Passport Online?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yes. Applying online at GOV.UK is the cheapest and fastest way to change your name on a
            British passport. You fill in the form, upload a digital photo and pay online.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You still post your old passport and original documents afterwards. HM Passport Office
            tells you where to send them when you finish the application.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Address
        ══════════════════════════════════════ */}
        <section id="address" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            Do You Need to Change the Address on Your Passport?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            No. UK passports do not show your address, so moving house does not affect your passport.
            You do not need to tell HM Passport Office. Just enter your current address next time you
            renew or change your name.
          </p>
        </section>

        {/* ══════════════════════════════════════
            H2 — Mistakes
        ══════════════════════════════════════ */}
        <section id="mistakes" className="scroll-mt-24 mb-12">
          <h2 className={sectionHeading}>
            Common Mistakes That Delay a Passport Name Change
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Booking travel too early.</strong> Your passport number changes, and your ticket name must match your passport.</li>
            <li><strong>Sending a deed poll without evidence of use.</strong> Include a payslip, bank statement or council letter in your new name.</li>
            <li><strong>Mismatched spelling.</strong> Make sure your application matches your certificate or deed poll exactly.</li>
            <li><strong>An unsigned or unwitnessed deed poll.</strong> You and 2 adult witnesses must all sign it.</li>
            <li><strong>Forgetting visas.</strong> Unexpired visas in your old passport may stop being valid, so check with the embassy.</li>
          </ul>
        </section>

        {/* ══════════════════════════════════════
            H2 — FAQ
        ══════════════════════════════════════ */}
        <section id="faq" className="scroll-mt-24 mb-14">
          <h2 className={sectionHeading}>
            Passport Name Change FAQs
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
              "headline": "How to Change Your Name on a UK Passport (2026 Guide)",
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
              "name": "How to change your name on a UK passport",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "GBP",
                "value": "102"
              },
              step: steps.map((step, i) => ({
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
                  "name": "Change Name on Passport",
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

            <Link href="/how-to-change-company-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change a Company Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-childs-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change a Child&apos;s Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-much-does-it-cost-to-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Cost to Change Your Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-[#f3f2f1] border border-gray-300 rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">
            Need a deed poll first?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Changing your name for any reason other than marriage or divorce? HM Passport Office needs
            a deed poll. Create a correctly worded deed poll online, sign it today and start your
            passport application.
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
