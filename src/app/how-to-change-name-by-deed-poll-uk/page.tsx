import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

const PAGE_URL = "https://deedpolluk.uk/how-to-change-name-by-deed-poll-uk";
const PAGE_TITLE = "How to Change Your Name by Deed Poll UK (2026): Free & Online Options";
const PAGE_DESCRIPTION =
  "Change your name by deed poll in the UK in 4 steps. Learn the wording, witness rules, unenrolled vs enrolled deed polls, costs, and how to update your passport and records.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/how-to-change-name-by-deed-poll-uk",
    languages: {
      "en-GB": "/how-to-change-name-by-deed-poll-uk",
      "x-default": "/how-to-change-name-by-deed-poll-uk",
    },
  },
  title: PAGE_TITLE,
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
    title: "How to Change Your Name by Deed Poll in the UK",
    description: PAGE_DESCRIPTION,
  },
};

const tableOfContents = [
  ["#what-is-a-deed-poll", "What is a deed poll?"],
  ["#how-to-change-your-name", "How to change your name by deed poll"],
  ["#unenrolled-vs-enrolled", "Unenrolled vs enrolled deed poll"],
  ["#cost", "How much a deed poll costs"],
  ["#wording", "What a deed poll must include"],
  ["#enrol", "How to enrol a deed poll"],
  ["#after", "What to do after your deed poll"],
  ["#apostille", "Deed poll apostille"],
  ["#scotland", "Change of name deed in Scotland"],
  ["#restrictions", "Names you cannot choose"],
  ["#faq", "FAQs"],
];

const steps = [
  {
    title: "Choose your new name",
    body: "Decide on your full new name, including any first, middle and last names. You can change one part or all of it.",
  },
  {
    title: "Create your deed poll",
    body: "Write your own using the correct wording, or use an online deed poll service to generate a correctly worded document.",
  },
  {
    title: "Sign it in front of 2 witnesses",
    body: "Sign in your old and new names while 2 adult witnesses watch. Each witness then signs and adds their full name and address.",
  },
  {
    title: "Update your records",
    body: "Send your deed poll to the Passport Office, DVLA, your bank, employer, GP and other organisations to switch your records to your new name.",
  },
];

const comparison = [
  ["What it is", "A private document you sign and keep", "A deed poll registered with the High Court"],
  ["Cost", "Free to £30", "£53.05 court fee, plus the deed poll"],
  ["Time", "Same day", "Several months"],
  ["Public record?", "No", "Yes, published in The Gazette"],
  ["Accepted by HMPO, DVLA and banks?", "Yes", "Yes"],
  ["Best for", "Most adults", "People who want a court-held public record"],
];

const costs = [
  ["DIY deed poll from a template", "Free", "You print and check the wording yourself"],
  ["Online deed poll service", "From £7.99", "Correct wording, formatted PDF, ready to sign"],
  ["Solicitor", "£50 to £200+", "Useful for complex cases, but not required"],
  ["High Court enrolment", "£53.05", "Optional; adds the change to the public record"],
];

const faqs = [
  {
    q: "How do I change my name by deed poll in the UK?",
    a: "Create a deed poll with the correct wording, sign it in your old and new names in front of 2 adult witnesses, and have them sign it too. Your deed poll takes effect straight away. Then use it to update your passport, driving licence, bank and other records.",
  },
  {
    q: "Can I get a free deed poll in the UK?",
    a: "Yes. You can write your own unenrolled deed poll at no cost, as long as it uses the correct legal wording and you sign it in front of 2 witnesses. Some organisations prefer a professionally formatted document, so many people use a low-cost online service instead.",
  },
  {
    q: "What is an unenrolled deed poll on GOV.UK?",
    a: "An unenrolled deed poll is a deed poll you make yourself and do not register with the court. GOV.UK confirms you can make one if you are 16 or over. HM Passport Office, the DVLA and most banks accept it as proof of your new name.",
  },
  {
    q: "Is a change of name deed the same as a deed poll?",
    a: "Yes. ‘Change of name deed’, ‘deed of change of name’ and ‘deed poll’ all describe the same legal document. ‘Deed of change of name’ is also the usual term in Scotland.",
  },
  {
    q: "Do I need a solicitor to change my name by deed poll?",
    a: "No. UK law does not require a solicitor. You can make your own deed poll or use an online service, and it carries the same legal weight. You only need a solicitor to sign some of the forms if you choose to enrol your deed poll with the High Court.",
  },
  {
    q: "Who can witness a deed poll?",
    a: "You need 2 witnesses aged 18 or over. Choose people who are not close relatives and do not live at your address, because some organisations reject deed polls witnessed by family members. A friend, colleague or neighbour is fine.",
  },
  {
    q: "What is an enrolled deed poll?",
    a: "An enrolled deed poll is registered with the High Court and published in The Gazette, which puts your name change on the public record. It costs £53.05 and can take several months. Most people do not need one.",
  },
  {
    q: "How do I change the name on the deeds of my house?",
    a: "Send form AP1 to HM Land Registry with a copy of your deed poll or marriage certificate. Changing your name on the property register is free. HM Land Registry may also ask you to prove your identity when the change is by deed poll.",
  },
  {
    q: "Can I get an apostille on my deed poll?",
    a: "Yes. If you need to use your deed poll abroad, get a solicitor or notary to certify it first, then apply for an apostille from the FCDO Legalisation Office. The standard paper service costs £45 per document.",
  },
  {
    q: "Is ‘depol’ the same as a deed poll?",
    a: "Yes. ‘Depol’, ‘de poll’ and ‘deed pole’ are common misspellings of ‘deed poll’. They all refer to the same legal name change document.",
  },
];

const h2 = "scroll-mt-24 text-3xl font-bold mt-12 mb-4";
const h3 = "text-xl font-bold mt-8 mb-2";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li><Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">Home</Link></li>
          <li aria-hidden="true" className="select-none">›</li>
          <li className="text-gray-700 font-medium">Change Name by Deed Poll</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        How to Change Your Name by Deed Poll in the UK
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        <strong>Updated</strong> October 2026 · Fees checked against GOV.UK · 9-minute read
      </p>

      {/* Quick answer */}
      <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mb-8">
        <p className="font-bold mb-2">Quick answer</p>
        <p className="text-lg">
          To <strong>change your name by deed poll</strong> in the UK, create a deed poll with the correct
          legal wording, then sign it in front of <strong>2 adult witnesses</strong>. It takes effect the
          moment you sign. You do not need a solicitor or a court, and you can make one for free.
        </p>
      </div>

      {/* On this page */}
      <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 list-decimal pl-5 text-[#1d70b8]">
          {tableOfContents.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:underline underline-offset-2">{label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="prose prose-lg max-w-none text-gray-800">

        {/* ── What is a deed poll ── */}
        <h2 id="what-is-a-deed-poll" className={h2}>What Is a Deed Poll?</h2>
        <p>
          A deed poll is a legal document that proves you have changed your name. In it, you declare that
          you give up your old name and will use your new name for all purposes.
        </p>
        <p>
          You may also see it called a <strong>change of name deed</strong> or a <strong>deed of change of
          name</strong>. All three terms mean the same thing. HM Passport Office, the DVLA, HMRC and UK banks
          all accept a correctly made deed poll.
        </p>

        <h3 className={h3}>When Do You Need a Deed Poll?</h3>
        <p>You need a deed poll for most name changes, including when you want to:</p>
        <ul>
          <li>change your first name, middle name or surname</li>
          <li>add, remove or reorder names</li>
          <li>create a double-barrelled surname that does not come from marriage</li>
          <li>change your name after divorce without your birth and marriage certificates</li>
        </ul>
        <p>
          You do <strong>not</strong> need one to take your spouse’s surname after marriage. Your marriage
          certificate covers that. Read our{' '}
          <Link href="/how-to-change-name-after-marriage-uk">guide to changing your name after marriage</Link>.
        </p>

        {/* ── Steps ── */}
        <h2 id="how-to-change-your-name" className={h2}>How to Change Your Name by Deed Poll: 4 Steps</h2>
        <ol className="not-prose space-y-5 my-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1d70b8] text-white font-bold flex items-center justify-center text-sm"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-700">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p>
          Print several copies or keep a PDF, because some organisations ask for an original or a certified
          copy.
        </p>

        {/* ── Unenrolled vs enrolled ── */}
        <h2 id="unenrolled-vs-enrolled" className={h2}>Unenrolled vs Enrolled Deed Poll: What&apos;s the Difference?</h2>
        <p>
          The UK has two types of deed poll. Most people only ever need an unenrolled one.
        </p>

        <div className="not-prose overflow-x-auto rounded-lg border border-gray-200 my-6">
          <table className="w-full text-sm sm:text-base border-collapse">
            <caption className="sr-only">Unenrolled vs enrolled deed poll comparison</caption>
            <thead>
              <tr className="bg-[#1d70b8] text-white">
                <th scope="col" className="text-left px-4 py-3"></th>
                <th scope="col" className="text-left px-4 py-3">Unenrolled</th>
                <th scope="col" className="text-left px-4 py-3">Enrolled</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, unenrolled, enrolled], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <th scope="row" className="text-left px-4 py-3 border-b border-gray-100 font-semibold">{label}</th>
                  <td className="px-4 py-3 border-b border-gray-100">{unenrolled}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{enrolled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={h3}>Unenrolled Deed Poll</h3>
        <p>
          You make an unenrolled deed poll yourself and keep it. GOV.UK confirms anyone aged 16 or over can
          make one. It is not on any public register, which also makes it the private choice if you are
          changing your name for safety reasons.
        </p>

        <h3 className={h3}>Enrolled Deed Poll</h3>
        <p>
          An enrolled deed poll is registered with the High Court and published in The Gazette. It gives
          you an official court record, but it costs more, takes months and makes your name change public.
        </p>

        {/* ── Cost ── */}
        <h2 id="cost" className={h2}>How Much Does a Deed Poll Cost?</h2>
        <p>
          A deed poll can cost nothing at all. You pay only for convenience, professional formatting or
          enrolment.
        </p>
        <div className="not-prose overflow-x-auto rounded-lg border border-gray-200 my-6">
          <table className="w-full text-sm sm:text-base border-collapse">
            <caption className="sr-only">UK deed poll costs by option</caption>
            <thead>
              <tr className="bg-[#1d70b8] text-white">
                <th scope="col" className="text-left px-4 py-3">Option</th>
                <th scope="col" className="text-left px-4 py-3">Cost</th>
                <th scope="col" className="text-left px-4 py-3">What you get</th>
              </tr>
            </thead>
            <tbody>
              {costs.map(([option, cost, detail], i) => (
                <tr key={option} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <th scope="row" className="text-left px-4 py-3 border-b border-gray-100 font-semibold">{option}</th>
                  <td className="px-4 py-3 border-b border-gray-100">{cost}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={h3}>Free Deed Poll vs Online Deed Poll</h3>
        <p>
          A free DIY deed poll is just as legal as a paid one. The risk is a wording or witness mistake,
          which can lead to a rejection. An online service removes that risk and gives you a clean,
          professional PDF. Start with our{' '}
          <Link href="/free-deed-poll-template-uk">free deed poll template</Link> if you want to do it yourself.
        </p>

        <h3 className={h3}>Do You Need a Change of Name Deed Solicitor?</h3>
        <p>
          No. A solicitor can prepare your deed poll, but the law does not require one, and the document has
          the same legal weight either way. Consider a solicitor only for complex cases, such as a
          contested child name change. See our <Link href="/name-change-solicitor-uk">name change solicitor
          guide</Link>.
        </p>

        {/* ── Wording ── */}
        <h2 id="wording" className={h2}>What Must a Deed Poll Include?</h2>
        <p>Your deed poll must contain:</p>
        <ul>
          <li>your old full name and your new full name</li>
          <li>a statement that you give up your old name and adopt your new name for all purposes</li>
          <li>a statement that you will use only your new name from now on</li>
          <li>a request that everyone addresses you by your new name</li>
          <li>the date, and your signature in both your old and new names</li>
          <li>the signatures, full names and addresses of 2 witnesses</li>
        </ul>

        <h3 className={h3}>Witness Rules</h3>
        <ul>
          <li>You need <strong>2 witnesses</strong>, each aged 18 or over.</li>
          <li>Avoid close relatives and anyone who lives at your address. Some organisations reject them.</li>
          <li>Witnesses must watch you sign. They do not need any legal qualification.</li>
        </ul>

        <h3 className={h3}>Change of Name Deed Template</h3>
        <p>
          Use our <Link href="/free-deed-poll-template-uk">free change of name deed template</Link> for the
          correct wording. If a deed poll has already been turned down, read{' '}
          <Link href="/my-deed-poll-was-rejected">why deed polls get rejected</Link>.
        </p>

        {/* ── Mid-page CTA ── */}
        <div className="bg-gray-100 p-8 text-center border-t border-b border-gray-300 my-12 not-prose">
          <h2 className="text-2xl font-bold mb-4">Create your deed poll online in minutes</h2>
          <p className="text-gray-700 mb-6">
            Correct legal wording, accepted by the Passport Office, DVLA and UK banks. Preview it free.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-8 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all text-xl"
          >
            Create Your Deed Poll Online
          </Link>
        </div>

        {/* ── Enrol ── */}
        <h2 id="enrol" className={h2}>How to Enrol a Deed Poll</h2>
        <p>
          Enrolment is optional. If you want a court-held public record, apply to the High Court:
        </p>
        <ol>
          <li>Fill in forms <strong>LOC020</strong>, <strong>LOC021</strong> and <strong>LOC027</strong>. You sign LOC020 in front of 2 witnesses, and LOC021 and LOC027 in front of a solicitor or another authorised witness.</li>
          <li>Include your birth certificate, valid passport or certificate of naturalisation.</li>
          <li>Pay the <strong>£53.05</strong> enrolment fee.</li>
          <li>Send your application to the High Court, as GOV.UK directs.</li>
        </ol>

        <h3 className={h3}>How Long Does Enrolment Take?</h3>
        <p>
          It can take several months. GOV.UK suggests asking for an update only after 6 months. Once
          enrolled, your name change and address appear in The Gazette, although you can ask a judge to
          withhold details if you have a strong reason.
        </p>

        <h3 className={h3}>Enrolling a Child&apos;s Deed Poll</h3>
        <p>
          For a child, you use forms LOC022, LOC023, LOC024 and LOC028, and everyone with parental
          responsibility must agree, or you need a court order. Read our{' '}
          <Link href="/child-deed-poll-uk">child deed poll guide</Link>.
        </p>

        {/* ── After ── */}
        <h2 id="after" className={h2}>What to Do After Changing Your Name by Deed Poll</h2>
        <p>
          Your deed poll proves your new name, but you still need to update each record yourself. Start
          with the documents other organisations ask for as ID.
        </p>

        <h3 className={h3}>Update Your ID First</h3>
        <ul>
          <li><Link href="/how-to-change-name-on-passport-uk">Passport</Link>: send your deed poll plus evidence that you use your new name.</li>
          <li><Link href="/change-name-on-driving-licence-dvla-uk">Driving licence</Link>: update your name with the DVLA for free.</li>
        </ul>

        <h3 className={h3}>Then Update Everything Else</h3>
        <ul>
          <li>banks, building societies and credit cards</li>
          <li>your employer, HMRC and pension providers</li>
          <li>your GP, dentist and the electoral roll</li>
          <li>utilities, council tax and insurance</li>
        </ul>

        <h3 className={h3}>Changing the Name on the Deeds of Your House</h3>
        <p>
          To update the name on your property title, send <strong>form AP1</strong> to HM Land Registry with
          a copy of your deed poll. This is <strong>free</strong>. For deed poll changes, HM Land Registry
          may also ask you to verify your identity.
        </p>
        <p>
          See the full <Link href="/documents-needed-for-name-change-uk">list of documents to update</Link>.
        </p>

        {/* ── Apostille ── */}
        <h2 id="apostille" className={h2}>Deed Poll Apostille: Using Your Deed Poll Abroad</h2>
        <p>
          Some countries ask for an apostille before they accept a UK deed poll. An apostille confirms that a
          UK signature or seal is genuine.
        </p>
        <ol>
          <li>Ask a UK solicitor or notary to certify your deed poll.</li>
          <li>Apply to the FCDO Legalisation Office for an apostille.</li>
          <li>Pay <strong>£45</strong> per document for the standard paper service (usually up to 25 working days), or <strong>£35</strong> for an e-Apostille.</li>
        </ol>
        <p>Always check with the foreign organisation first, as requirements vary by country.</p>

        {/* ── Scotland ── */}
        <h2 id="scotland" className={h2}>Change of Name Deed in Scotland</h2>
        <p>
          Scotland has different rules. People often call the document a <strong>deed of change of
          name</strong>, and it must use wording that suits Scots law. If you were born or adopted in
          Scotland, you can also record your change of name with National Records of Scotland.
        </p>

        {/* ── Restrictions ── */}
        <h2 id="restrictions" className={h2}>What Names Can&apos;t You Choose?</h2>
        <p>You have wide freedom, but organisations can refuse a name that:</p>
        <ul>
          <li>is offensive or promotes hatred or crime</li>
          <li>uses numbers or symbols that cannot be pronounced</li>
          <li>includes a title you do not hold, such as “Doctor” or “Sir”</li>
          <li>is chosen to deceive or impersonate someone</li>
        </ul>
        <p>
          Unusual, invented and single-word names are usually fine. Read{' '}
          <Link href="/can-i-change-my-name-to-anything-uk">can I change my name to anything?</Link>
        </p>

        {/* ── FAQ ── */}
        <h2 id="faq" className={h2}>Deed Poll Name Change FAQs</h2>
        <div className="space-y-8">
          {faqs.map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-xl font-bold mb-2">{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            H2 — Related Guides
        ══════════════════════════════════════ */}
        <section className="not-prose mt-14 mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/free-deed-poll-template-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Free Deed Poll Template</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-name-on-passport-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Name on a Passport</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/deed-poll-vs-statutory-declaration-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Deed Poll vs Statutory Declaration</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* Closing CTA */}
        <div className="not-prose bg-[#f3f2f1] border-l-[8px] border-[#00703c] p-6 mt-12">
          <p className="text-lg font-semibold mb-2">Ready to change your name?</p>
          <p className="mb-4 text-gray-800">
            Create a correctly worded deed poll in minutes. Preview it free, then download your PDF for a
            one-off £7.99, with no subscription.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-block bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-8 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all text-lg"
          >
            Create Your Deed Poll Online
          </Link>
        </div>
      </div>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'How to Change Your Name by Deed Poll in the UK',
              description: PAGE_DESCRIPTION,
              inLanguage: 'en-GB',
              author: { '@type': 'Organization', name: 'Deed Poll UK Editorial Team' },
              publisher: {
                '@type': 'Organization',
                name: 'Deed Poll UK',
                logo: { '@type': 'ImageObject', url: 'https://deedpolluk.uk/og-image.jpg' },
              },
              image: 'https://deedpolluk.uk/og-image.jpg',
              dateModified: '2026-10-30T08:00:00+00:00',
              mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
            },
            {
              '@type': 'HowTo',
              name: 'How to change your name by deed poll in the UK',
              step: steps.map((step, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: step.title,
                text: step.body,
              })),
            },
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deedpolluk.uk/' },
                { '@type': 'ListItem', position: 2, name: 'Change Name by Deed Poll', item: PAGE_URL },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
