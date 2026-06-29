import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-childs-surname-uk" },
  title: "How to Change a Child's Surname UK | Deed Poll UK",
  description:
    "Learn how to change a child's surname in the UK. Step-by-step guide covering parental consent, deed poll process, enrolled deed polls, and what to do when the other parent disagrees.",
  openGraph: {
    title: "How to Change a Child's Surname UK | Deed Poll UK",
    description: "Learn how to change a child's surname in the UK. Step-by-step guide covering parental consent, deed poll process, enrolled deed polls, and what to do when the other parent disagrees.",
    url: "https://deedpolluk.uk/how-to-change-childs-surname-uk",
  },
  twitter: {
    title: "How to Change a Child's Surname UK | Deed Poll UK",
    description: "Learn how to change a child's surname in the UK. Step-by-step guide covering parental consent, deed poll process, enrolled deed polls, and what to do when the other parent disagrees.",
  }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        How to Change a Child's Surname in the UK
      </h1>

      {/* Intro callout */}
      <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mb-10">
        <p className="text-xl leading-relaxed">
          You can legally change a child's surname in the UK using a <strong>deed poll</strong>. The process is straightforward when everyone with parental responsibility agrees — but there are important legal rules you need to follow first.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800">

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mt-2 mb-3">What Is a Deed Poll?</h2>
        <p>
          A deed poll is a legally recognised document that proves a change of name. Once you complete one for your child, you can use it to update official records — including their passport, NHS file, and school register. It overrides the name on the birth certificate, though the birth certificate itself remains valid as an identity document when presented alongside the deed poll.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Do You Need the Other Parent's Permission?</h2>
        <p>
          In most cases, <strong>yes</strong>. Before you change a child's surname in the UK, you must have the written consent of every person who holds <strong>parental responsibility (PR)</strong>.
        </p>
        <p>The following people usually hold parental responsibility:</p>

        <div className="bg-gray-50 border border-gray-200 rounded p-5 my-4 space-y-2">
          <p><strong>Mothers</strong> — automatically at birth.</p>
          <p><strong>Fathers</strong> — if they were married to the mother at birth, or are named on the birth certificate (after 1 December 2003 in England and Wales).</p>
          <p><strong>Step-parents or guardians</strong> — only if they have acquired PR through a court order or parental responsibility agreement.</p>
        </div>

        <p>
          If you are the sole holder of parental responsibility, you can change the child's surname without consent — but the other parent can still challenge this in court.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Two Ways to Change a Child's Surname</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Unenrolled Deed Poll (Most Common)</h3>
        <p>
          This is the quickest and most widely used route. You use a specialist deed poll service (like ours) or a solicitor to produce the document. All parties with parental responsibility sign it, and you then send certified copies to relevant organisations to update the child's records.
        </p>
        <p>
          Bear in mind that some banks, mobile phone providers, or energy companies only accept an <em>enrolled</em> deed poll — so it is worth checking with individual organisations first.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Enrolled Deed Poll (Official Court Record)</h3>
        <p>
          Enrolling a deed poll with the High Court puts the name change on the public record. It costs <strong>£53.05</strong> and you can apply online or by post. The new name is published in <em>The Gazette</em>, although you can request that only limited details appear if you have a good reason.
        </p>
        <p>
          Processing takes up to 16 weeks. You will need to complete four official forms (LOC022, LOC023, LOC024, and LOC028) and have them witnessed and signed in front of a solicitor.
        </p>
        <p>Documents you will need to supply include:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The child's full birth certificate</li>
          <li>Adoption papers (if applicable)</li>
          <li>Your decree absolute or final order (if divorced)</li>
          <li>Your marriage or civil partnership certificate (if your surname differs from the one on the birth certificate)</li>
          <li>A letter of consent from any new partner, if relevant</li>
        </ul>
        <p className="mt-3">
          If your child is 16 or 17, they must also submit a signed letter confirming they agree to the name change, witnessed by an adult who is not a family member.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold mt-10 mb-3">What If the Other Parent Refuses?</h2>
        <p>
          If another person with parental responsibility will not agree, you cannot simply go ahead — doing so may leave the name change unrecognised by official bodies such as the Passport Office.
        </p>
        <p>
          Your only option is to apply to the Family Court for a <strong>Specific Issue Order</strong> under the Children Act 1989. The court will decide based solely on the child's best interests. It will weigh up factors such as:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>How long the child has carried their current surname</li>
          <li>Whether the change could affect the child's sense of identity</li>
          <li>The child's own wishes (particularly for older children)</li>
          <li>The impact on the child's relationship with the other parent</li>
        </ul>
        <p className="mt-3">
          A Specific Issue Order costs <strong>£263</strong> to apply for. Fee remission may be available if you are on a low income or receiving certain benefits.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Can a Child Change Their Own Name?</h2>
        <p>
          Children aged <strong>16 or 17</strong> in England and Wales can legally apply for their own unenrolled deed poll without needing parental consent. If they are married or in a civil partnership, they must enrol as an adult instead.
        </p>
        <p>
          For children under 16, the decision rests with those holding parental responsibility. Courts can consider the views of older children who are mature enough to form their own opinion — a principle known as being <em>Gillick competent</em>.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold mt-10 mb-3">What You Cannot Change a Child's Name To</h2>
        <p>
          The deed poll service will reject an application if the proposed name is impossible to pronounce, contains numbers or symbols, is considered offensive or vulgar, or could suggest a title, rank, or honour the child has not been granted. The new name must also include at least one forename and one surname.
        </p>

        {/* Quick summary box */}
        <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mt-10">
          <h2 className="text-xl font-bold mb-3">Quick Summary</h2>
          <ul className="space-y-2">
            <li>✅ Get written consent from everyone with parental responsibility</li>
            <li>✅ Use a deed poll — unenrolled (fast) or enrolled with the High Court (£53.05)</li>
            <li>✅ Send certified copies to update passports, school records, and the NHS</li>
            <li>⚠️ No agreement? Apply for a Specific Issue Order in the Family Court (£263)</li>
            <li>✅ Children aged 16–17 can apply for their own deed poll</li>
          </ul>
        </div>

      </div>

      
        {/* ══════════════════════════════════════
            H2 — Related Guides
        ══════════════════════════════════════ */}
        <section className="mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link href="/how-to-change-last-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Last Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Name in the UK</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA */}
      <div className="bg-gray-100 p-8 text-center border-t border-b border-gray-300 mt-12">
        <h2 className="text-2xl font-bold mb-2">Ready to change your child's surname?</h2>
        <p className="text-gray-600 mb-6">Create a legally recognised deed poll in minutes — accepted by the Passport Office, schools, and banks.</p>
        <Link
          href="/change-name-in-uk-by-deedpoll"
          className="inline-block bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-8 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all text-xl"
        >
          Create Your Deed Poll Online
        </Link>
      </div>

    </div>
  );
}