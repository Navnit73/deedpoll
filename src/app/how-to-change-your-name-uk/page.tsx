import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  alternates: {
    canonical: "/how-to-change-your-name-uk",
    languages: {
      "en-GB": "/how-to-change-your-name-uk",
      "x-default": "/how-to-change-your-name-uk",
    },
  },
  title: "How to Change Your Name in the UK | Complete 2026 Guide",
  description:
    "Learn how to change your name in the UK quickly and legally. Step-by-step guide covering deed polls, statutory declarations, and every document to update. Start today.",
  openGraph: {
    title: "How to Change Your Name in the UK | Complete 2026 Guide",
    description: "Learn how to change your name in the UK quickly and legally. Step-by-step guide covering deed polls, statutory declarations, and every document to update. Start today.",
    url: "https://deedpolluk.uk/how-to-change-your-name-uk",
  },
  twitter: {
    title: "How to Change Your Name in the UK | Complete 2026 Guide",
    description: "Learn how to change your name in the UK quickly and legally. Step-by-step guide covering deed polls, statutory declarations, and every document to update. Start today.",
  }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ── Page wrapper ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>

            <li className="text-gray-700 font-medium">How to Change Your Name</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your Name in the UK: Complete Step-by-Step Guide
        </h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> June 2026 · 8-minute read</p>
        </div>

        {/* ── Intro callout ── */}
        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Wondering <strong>how to change your name in the UK</strong>? You're not alone — thousands of people do it every year, and the process is far simpler than most expect. Whether you're changing your name after marriage, divorce, or for personal reasons, this guide walks you through every step: choosing the right legal method, enrolling your deed poll if needed, and updating your passport, driving licence, and bank accounts. No solicitor required in most cases, and the whole process can be completed in a matter of days.
          </p>
        </div>

        {/* ── Quick-jump links ── */}
        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            {[
              ["#ways", "Ways You Can Change Your Name"],
              ["#steps", "Step-by-Step: How to Change Your Name Legally"],
              ["#documents", "Which Documents to Update"],
              ["#timeline", "How Long Does It Take?"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline underline-offset-2">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ════════════════════════════════════════════
            H2 — Ways to change name
        ════════════════════════════════════════════ */}
        <section id="ways" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Ways You Can Change Your Name in the UK
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There is no single law that specifies exactly how you must change your name in the UK. What matters is that you can prove your new name consistently. That said, there are three widely accepted methods:
          </p>

          {/* Method cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                badge: "Most common",
                badgeColour: "bg-green-100 text-green-800",
                title: "Deed Poll",
                body: "A legal document that declares you've abandoned your old name and will use your new one exclusively. Accepted by virtually every UK institution including HMRC, the DVLA, and HM Passport Office.",
              },
              {
                badge: "Formal alternative",
                badgeColour: "bg-blue-100 text-blue-800",
                title: "Statutory Declaration",
                body: "A sworn statement made before a solicitor or magistrate. Carries the same legal weight as a deed poll and is sometimes preferred by banks or government bodies.",
              },
              {
                badge: "No document needed",
                badgeColour: "bg-purple-100 text-purple-800",
                title: "Marriage or Divorce",
                body: "After marriage you can use your marriage certificate to update most records. After divorce, a decree absolute (or final order) lets you revert to a previous name.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full ${card.badgeColour}`}>
                  {card.badge}
                </span>
                <h3 className="text-base font-bold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md px-5 py-4 text-sm text-amber-900">
            <strong>Note:</strong> There is no official government register of deed polls in England and Wales. You may choose to have your deed poll &ldquo;enrolled&rdquo; at the <a href="https://www.gov.uk/change-name-deed-poll/enrol-a-deed-poll-with-the-courts" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700">Royal Courts of Justice</a>, which makes it a matter of public record, but this is optional and rarely necessary.
          </div>
        </section>

        {/* ════════════════════════════════════════════
            H2 — Step by step
        ════════════════════════════════════════════ */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Step-by-Step: How to Change Your Name Legally in the UK
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            The steps below cover the most common route — a deed poll — which is how most adults in England, Wales, Scotland, and Northern Ireland change their name officially.
          </p>

          <ol className="space-y-6">
            {[
              {
                n: "1",
                title: "Choose your new name",
                body: "You can generally choose any name you like, with a small number of exceptions (see the FAQ below). Make sure it's a name you're happy with before proceeding — changing your name again later is perfectly legal, but it does mean repeating the process.",
              },
              {
                n: "2",
                title: "Create your deed poll document",
                body: "You can write your own deed poll, use a reputable online service, or ask a solicitor to draft one. The document must state your old name, your new name, your intention to use the new name exclusively, and your intention to abandon the old name. It must be signed, dated, and witnessed.",
              },
              {
                n: "3",
                title: "Sign the deed poll in front of a witness",
                body: "Your witness must be over 18, not a family member, and not a partner. They sign the document using their full name and address. You do not need a solicitor, JP, or notary for this step unless a specific organisation requests it.",
              },
              {
                n: "4",
                title: "Make certified copies",
                body: "Print several copies of your signed deed poll. Most organisations will want to keep a copy, so have at least six to eight on hand. Some online services provide multiple originals — useful if you're updating many accounts simultaneously.",
              },
              {
                n: "5",
                title: "Update your priority documents first",
                body: "Start with your passport and driving licence — organisations that require photo ID will often ask to see one of these bearing your new name before updating their own records. The order matters: updating these two first makes every subsequent change significantly smoother.",
              },
              {
                n: "6",
                title: "Notify all other organisations",
                body: "Work through your list of institutions systematically (see the next section). Keep a log of what you've submitted, to whom, and when. Response times vary — some banks update instantly, others may take several weeks.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1d70b8] text-white font-bold flex items-center justify-center text-sm mt-0.5">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-base text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ════════════════════════════════════════════
            H2 — Documents
        ════════════════════════════════════════════ */}
        <section id="documents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Which Documents Do You Need to Update After a Name Change?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            After changing your name officially in the UK, you'll need to notify a range of organisations. There is no central registry that does this automatically — you must contact each one individually. Here's a prioritised checklist:
          </p>

          {/* Checklist grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { priority: "High", items: [
                <a href="https://www.gov.uk/changing-passport-information" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Passport (HM Passport Office)</a>,
                <a href="https://www.gov.uk/change-name-driving-licence" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">Driving licence (DVLA)</a>,
                <a href="https://www.gov.uk/tell-hmrc-change-of-details" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1d70b8]">National Insurance records (HMRC)</a>,
                "GP and NHS records"
              ] },
              { priority: "High", items: ["Bank and building society accounts", "Employer / payroll records", "Electoral roll (local council)", "State benefits (DWP)"] },
              { priority: "Standard", items: ["Utility providers (gas, electricity, water)", "Broadband and mobile contracts", "Insurance policies", "Pension providers"] },
              { priority: "Standard", items: ["Vehicle registration (V5C logbook)", "Student loans (SLC)", "University or college records", "Loyalty and rewards accounts"] },
            ].map((col, i) => (
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
            Most organisations will accept a certified copy of your deed poll by post or in person. Some banks now accept digital deed polls through their apps — check your provider's requirements before sending documents.
          </p>
        </section>

        {/* ════════════════════════════════════════════
            H2 — Timeline
        ════════════════════════════════════════════ */}
        <section id="timeline" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How Long Does a Name Change Take in the UK?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The deed poll itself can be created and signed on the same day. The time-consuming part is notifying institutions and waiting for them to update their records. Here's a realistic breakdown:
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Organisation</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical timescale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bank account", "Same day – 5 working days"],
                  ["UK passport (standard service)", "Up to 10 weeks"],
                  ["UK passport (fast-track service)", "1 week (fee applies)"],
                  ["DVLA driving licence", "2–4 weeks"],
                  ["HMRC / National Insurance", "4–6 weeks"],
                  ["GP / NHS records", "2–4 weeks"],
                  ["Electoral roll", "Up to 12 weeks (or next update cycle)"],
                  ["Utility providers", "1–5 working days"],
                ].map(([org, time], i) => (
                  <tr
                    key={org}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">{org}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Processing times can vary. HMRC and the Passport Office in particular experience high volumes in spring and summer. If you have travel planned, prioritise your passport renewal well in advance.
          </p>
        </section>

        {/* ════════════════════════════════════════════
            H2 — FAQ
        ════════════════════════════════════════════ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-gray-100 pb-3">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I change my name to anything I want in the UK?",
                a: "Almost. There is no exhaustive list of banned names, but courts and government bodies will refuse a name that is offensive, impossible to pronounce, or contains numbers or symbols. You also cannot change your name with intent to defraud. In practice, the vast majority of names — including invented ones — are perfectly acceptable.",
              },
              {
                q: "Is a deed poll the only way to change my name officially in the UK?",
                a: "No. A deed poll is the most widely used method, but a statutory declaration carries equal legal weight and is sometimes preferred by specific organisations. After marriage, your marriage certificate is sufficient on its own. After divorce, a decree absolute or final order allows you to revert to a previous name without any additional document.",
              },
              {
                q: "Do I need a solicitor to change my name in the UK?",
                a: "No — not in most cases. Adults in England and Wales can create and sign their own deed poll without any legal assistance. A solicitor can add additional credibility if a specific organisation requests a professionally drafted document, but this is uncommon. Statutory declarations, by contrast, do need to be sworn before a solicitor or magistrate.",
              },
            ].map(({ q, a }) => (
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

        
        {/* ══════════════════════════════════════
            H2 — Related Guides
        ══════════════════════════════════════ */}
        <section className="mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link href="/how-to-change-first-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your First Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-name-on-birth-certificate-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Change a Name on a Birth Certificate</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA block ── */}
        <div className="bg-[#f3f2f1] border border-gray-300 rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">Ready to get started?</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Create your deed poll in minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-7 leading-relaxed">
            Our online deed poll service generates a legally recognised document you can sign today and use immediately with your bank, the DVLA, and HM Passport Office.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] active:bg-[#004e2c] text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-base sm:text-lg"
          >
            Create Your Deed Poll Online
          </Link>
          <p className="mt-4 text-xs text-gray-500">No solicitor needed · Accepted by all UK institutions · Instant download</p>
        </div>

        <StructuredData
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How to Change Your Name in the UK: Complete Step-by-Step Guide",
              author: {
                "@type": "Organization",
                name: "Deed Poll UK Editorial Team"
              },
              publisher: {
                "@type": "Organization",
                name: "Deed Poll UK",
                logo: {
                  "@type": "ImageObject",
                  url: "https://deedpolluk.uk/og-image.jpg"
                }
              },
              image: "https://deedpolluk.uk/og-image.jpg",
              datePublished: "2026-06-01T08:00:00+00:00",
              dateModified: "2026-06-01T08:00:00+00:00",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://deedpolluk.uk/how-to-change-your-name-uk"
              },
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["#steps", "#ways"]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://deedpolluk.uk/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "How to Change Your Name",
                  item: "https://deedpolluk.uk/how-to-change-your-name-uk"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can I change my name to anything I want in the UK?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Almost any name is acceptable. Courts will not accept names that are offensive, contain numbers or symbols, or are intended to defraud.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is a deed poll the only way to change my name officially?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. A statutory declaration, marriage certificate, or decree absolute can also be used depending on your circumstances.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a solicitor to change my name in the UK?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Adults in England and Wales can create their own deed poll without legal assistance.",
                  },
                },
              ],
            }
          ]}
        />
      </div>
    </main>
  );
}