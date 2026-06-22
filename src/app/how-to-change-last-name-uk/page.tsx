import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  alternates: { canonical: "/how-to-change-last-name-uk" },
  title: "How to Change Your Last Name in the UK | Complete 2026 Guide",
  description:
    "Learn how to change your last name in the UK — whether by deed poll, after marriage, or to revert to your maiden name after divorce or separation. Step-by-step guide.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li><Link href="/guides" className="hover:text-[#1d70b8] underline underline-offset-2">Guides</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-gray-700 font-medium">How to Change Your Last Name</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          How to Change Your Last Name in the UK
        </h1>

        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026 · 6-minute read</p>

        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-8 rounded-r-md">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            In the UK, your "last name" and your "surname" are exactly the same thing —
            and the legal process for changing either is identical. Whether you're
            getting married, reverting to your maiden name after a divorce, or simply
            want a fresh start, this guide walks you through every step.
          </p>
        </div>

        <p className="text-gray-700 mb-10 leading-relaxed text-lg">
          Knowing <strong>how to change your last name in the UK</strong> can feel
          daunting, but it's actually one of the more straightforward legal processes
          available to UK residents. There's no court appearance, no judge, and no
          lengthy waiting period. In most cases, all you need is a deed poll and a
          little patience while your records are updated.
        </p>

        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8]">
            <li><a href="#deed-poll" className="hover:underline underline-offset-2">By Deed Poll</a></li>
            <li><a href="#after-marriage" className="hover:underline underline-offset-2">After Marriage</a></li>
            <li><a href="#maiden-name" className="hover:underline underline-offset-2">Reverting to Your Maiden Name</a></li>
            <li><a href="#full-process" className="hover:underline underline-offset-2">Full Process</a></li>
            <li><a href="#documents" className="hover:underline underline-offset-2">Documents to Update</a></li>
            <li><a href="#faq" className="hover:underline underline-offset-2">Frequently Asked Questions</a></li>
          </ol>
        </nav>

        <section id="deed-poll" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your Last Name by Deed Poll
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p>
              A deed poll is the standard legal document used to change your name in the
              UK. It's a written declaration that you're abandoning your old name and
              adopting a new one. Once signed and witnessed, it's legally binding and
              accepted by almost every official body — from HMRC to the DVLA.
            </p>
            <p>
              You have two options: an <strong>unenrolled deed poll</strong> (created
              privately) or an <strong>enrolled deed poll</strong> (registered with the
              Royal Courts of Justice). The vast majority of people use the unenrolled
              route — it's faster, cheaper, and equally valid for updating your
              passport, driving licence, and bank accounts.
            </p>
            <p>
              To create a deed poll, you'll need to:
            </p>
            <ol>
              <li>
                Draft or generate your deed poll document, clearly stating your current
                name, your new name, and your intention to use the new name exclusively
                going forward.
              </li>
              <li>
                Sign it in the presence of an independent adult witness (someone who
                isn't a family member and doesn't share your address).
              </li>
              <li>
                Have your witness sign and provide their full name and address.
              </li>
            </ol>
            <p>
              That's it. Your deed poll is now a valid legal document. Print several
              copies — you'll need them when notifying different organisations.
            </p>
          </div>
        </section>

        <section id="after-marriage" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Change Your Last Name After Marriage
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p>
              If you've recently married and want to take your spouse's surname (or
              double-barrel both names), you <em>don't</em> need a deed poll at all.
              Your marriage certificate is sufficient proof of your new name.
            </p>
            <p>
              Simply present your original marriage certificate — or a certified copy —
              to each organisation you need to update. Most will accept it alongside a
              covering letter and a copy of your current photo ID.
            </p>
            <p>
              Common organisations to notify after marriage include:
            </p>
            <ul>
              <li>His Majesty's Passport Office (allow 6–10 weeks)</li>
              <li>DVLA for your driving licence</li>
              <li>Your employer and pension provider</li>
              <li>Banks, building societies, and credit card providers</li>
              <li>HMRC and the Department for Work and Pensions</li>
              <li>Your GP, dentist, and any other healthcare providers</li>
              <li>Electoral roll (update online via Gov.uk)</li>
              <li>Utility companies and subscriptions</li>
            </ul>
            <p>
              If you'd prefer to double-barrel your surname rather than take your
              spouse's name outright, you will need a deed poll — a marriage certificate
              only covers the straightforward name swap.
            </p>
          </div>
        </section>

        <section id="maiden-name" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Revert to Your Maiden Name (After Divorce or Separation)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p>
              Going back to your maiden name after a divorce or separation is entirely
              your right — and it's often simpler than people expect.
            </p>
            <p>
              If your divorce is finalised, you can use your <strong>decree absolute</strong>{' '}
              (or, for divorces after April 2022, your <strong>final order</strong>)
              together with your original marriage certificate to revert to your maiden
              name. Most organisations will accept these two documents without requiring
              anything further.
            </p>
            <p>
              If you'd prefer not to share your divorce paperwork — which is entirely
              understandable — or if you separated without divorcing, a deed poll is the
              cleaner option. It gives you a single, self-contained document to present
              everywhere, with no need to explain your personal circumstances.
            </p>
            <p>
              Either way, there's no legal requirement to wait until the divorce is
              finalised. You can change your name by deed poll at any point during or
              after a separation.
            </p>
          </div>
        </section>

        <section id="full-process" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            How to Legally Change Your Last Name — Full Process
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Here's the complete process for anyone asking <em>how do I change my last
            name in the UK</em> from scratch:
          </p>

          <ol className="space-y-6">
            {[
              {
                n: "1",
                title: "Prepare your deed poll",
                body: "Use an online service to generate a professionally worded document, or draft one yourself using the correct legal wording.",
              },
              {
                n: "2",
                title: "Sign in front of a witness",
                body: "Your witness must be over 18, independent, and present when you sign. Both of you must sign and date the document.",
              },
              {
                n: "3",
                title: "Make certified copies",
                body: "Print multiple copies of the signed deed poll. Some organisations may ask to keep a copy.",
              },
              {
                n: "4",
                title: "Update your passport first",
                body: "A passport in your new name makes everything else easier, as it becomes your primary photo ID. Apply via the Gov.uk passport service.",
              },
              {
                n: "5",
                title: "Update your driving licence",
                body: "Notify the DVLA online or by post. There's no fee for a name change.",
              },
              {
                n: "6",
                title: "Notify financial institutions",
                body: "Contact each bank, building society, and insurer individually — they each have their own process.",
              },
              {
                n: "7",
                title: "Inform HMRC",
                body: "Update your name for tax purposes online or by phone. Your National Insurance number stays the same.",
              },
              {
                n: "8",
                title: "Update everything else",
                body: "Work through the full list of organisations, starting with the most important and working down.",
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
          <p className="text-gray-700 mt-6 leading-relaxed">
            There's no legal time limit on when you must complete these updates, but
            it's sensible to work through the list methodically over the weeks
            following your name change to avoid inconsistencies on official records.
          </p>
        </section>

        <section id="documents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">
            Documents to Update After Changing Your Last Name
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Once your deed poll is signed, work through this checklist. Tackle the
            items in roughly this order — a passport or driving licence in your new
            name makes it much easier to satisfy ID checks elsewhere.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
            <table className="w-full text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Document / Organisation</th>
                  <th className="text-left px-4 py-3 font-semibold">How to Update</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical Timescale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Passport', 'Apply online via Gov.uk', '6–10 weeks'],
                  ['Driving licence', 'DVLA online or by post (D1 form)', '2–4 weeks'],
                  ['Bank accounts', 'In branch or by post with deed poll', '1–2 weeks'],
                  ['HMRC', 'Phone or online self-assessment account', '2–5 working days'],
                  ['Electoral roll', 'Register to vote online via Gov.uk', 'Immediate'],
                  ['GP / dentist', 'Contact the practice directly', 'Varies'],
                  ['Employer / payroll', 'HR department', 'Next payroll run'],
                  ['Pension provider', 'Contact provider directly', '1–4 weeks'],
                  ['Utility companies', 'Phone or online account', '1–5 working days'],
                  ['Subscriptions & loyalty cards', 'Online account settings', 'Immediate'],
                ].map(([doc, how, time], i) => (
                  <tr key={doc} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">{doc}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{how}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500">
            Keep a copy of your deed poll with each letter or application. Some
            organisations will return the original; others may keep a copy. Print at
            least six copies to avoid delays.
          </p>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-gray-100 pb-3">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How do I change back to my maiden name in the UK?",
                a: "You can revert to your maiden name using your decree absolute (or final order) and original marriage certificate — no deed poll needed if your divorce is finalised. If you'd prefer a single document or haven't divorced, a deed poll works just as well and keeps your personal circumstances private.",
              },
              {
                q: "Is a deed poll legally binding in the UK?",
                a: "Yes. A correctly executed deed poll — signed and witnessed — is recognised as legal evidence of a name change by all UK government departments, banks, and most other institutions. You don't need to register it with a court unless you specifically want a public record.",
              },
              {
                q: "How much does it cost to change your last name in the UK?",
                a: "There's no government fee to change your name by deed poll. The cost of updating your passport (around £82.50 for a standard adult renewal) and your driving licence (free for a name change) are the main expenses. Any deed poll service fees vary by provider.",
              },
              {
                q: "Can I change my child's last name in the UK?",
                a: "Yes, but all individuals with parental responsibility must consent. For children under 16, a parent or guardian applies for the deed poll on their behalf. Children aged 16 and 17 can apply for their own deed poll but may still need parental consent depending on the circumstances.",
              },
              {
                q: "Do I need to change my name on my passport straight away?",
                a: "Technically, you can continue to travel on a passport in your old name as long as it remains valid, but it's strongly advised to update it as soon as possible — especially if the name on your ticket or booking differs from your passport. Many airlines and border agencies require them to match exactly.",
              },
              {
                q: "How long does it take to change your last name in the UK?",
                a: "The deed poll itself can be created and signed within a single day. Updating all your official documents typically takes between one and three months, depending on passport processing times and how many organisations you need to contact.",
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
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I change back to my maiden name in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can revert to your maiden name using your decree absolute (or final order) and original marriage certificate — no deed poll needed if your divorce is finalised.",
                },
              },
              {
                "@type": "Question",
                name: "Is a deed poll legally binding in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A correctly executed deed poll — signed and witnessed — is recognised as legal evidence of a name change by all UK government departments.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to change your last name in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There's no government fee to change your name by deed poll. The cost of updating your passport and your driving licence are the main expenses.",
                },
              },
            ],
          }}
        />

      </div>
    </main>
  );
}
