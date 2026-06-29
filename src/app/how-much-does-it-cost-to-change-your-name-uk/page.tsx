import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-much-does-it-cost-to-change-your-name-uk" },
  title: "How Much Does It Cost to Change Your Name UK | Deed Poll UK",
  description:
    "Learn how much does it cost to change your name uk. Guide covers: how much does a name change cost uk, how much is it to change your name uk, and more.",
  openGraph: {
    title: "How Much Does It Cost to Change Your Name UK | Deed Poll UK",
    description: "Learn how much does it cost to change your name uk. Guide covers: how much does a name change cost uk, how much is it to change your name uk, and more.",
    url: "https://deedpolluk.uk/how-much-does-it-cost-to-change-your-name-uk",
  },
  twitter: {
    title: "How Much Does It Cost to Change Your Name UK | Deed Poll UK",
    description: "Learn how much does it cost to change your name uk. Guide covers: how much does a name change cost uk, how much is it to change your name uk, and more.",
  }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* H1 */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        How Much Does It Cost to Change Your Name in the UK?
      </h1>

      {/* Lead summary box */}
      <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mb-10">
        <p className="text-xl leading-relaxed">
          <strong>Short answer:</strong> You can change your name in the UK for as little as <strong>£0</strong> if you write a deed poll yourself, or pay a small fee to use an online service. Updating your documents afterwards — passport, driving licence, bank accounts — is the part that costs more. This guide breaks down every cost so you know exactly what to expect.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 space-y-10">

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">What Is a Deed Poll and Why Do You Need One?</h2>
          <p>
            A deed poll is a legal document that records your decision to give up your old name and adopt a new one. 
            Banks, the DVLA, HM Passport Office, and most other organisations accept a deed poll as proof of your new name. 
            Without one, you cannot update your official records.
          </p>
          <p>
            You do not need a solicitor, a court order, or Government approval to change your name in the UK. 
            A correctly worded and witnessed deed poll is all the law requires.
          </p>
        </section>

        {/* Section 2 — cost table */}
        <section>
          <h2 className="text-2xl font-bold mb-3">How Much Does a Name Change Cost in the UK?</h2>
          <p>
            The cost depends on how you obtain your deed poll and which documents you update afterwards. 
            Here is a plain breakdown:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left p-3 font-semibold">What You're Paying For</th>
                  <th className="text-left p-3 font-semibold">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Deed poll (DIY, printed at home)", "Free"],
                  ["Deed poll via an online service", "£5 – £36"],
                  ["Deed poll enrolled at the Royal Courts of Justice", "£44.50"],
                  ["Adult UK passport renewal", "£88.50"],
                  ["Provisional / full driving licence update (DVLA)", "Free"],
                  ["Bank account name change", "Free"],
                  ["HMRC, NHS, and council records update", "Free"],
                ].map(([item, cost], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border-b border-gray-200">{item}</td>
                    <td className="p-3 border-b border-gray-200 font-semibold">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">Figures correct as of 2025. Passport fees change periodically — check GOV.UK before you apply.</p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Do You Need to Enrol Your Deed Poll?</h2>
          <p>
            No. Enrolment at the Royal Courts of Justice is optional. It makes your deed poll part of the public record, 
            which some people prefer for peace of mind, but the vast majority of name changes in the UK use an <em>unenrolled</em> deed poll — 
            and it is accepted everywhere.
          </p>
          <p>
            Enrolment costs <strong>£44.50</strong> and adds several weeks to the process. 
            Unless you have a specific reason to enrol, an unenrolled deed poll is quicker and cheaper.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">How Much Does It Cost to Change Your Surname Specifically?</h2>
          <p>
            The process and cost are identical whether you change your first name, surname, or both. 
            There is no separate fee for a surname-only change. 
            One deed poll covers your entire name, and you use that same document to update every organisation on your list.
          </p>
        </section>

        {/* Section 5 — skimmable steps */}
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Change Your Name: Step by Step</h2>
          <ol className="space-y-4 list-none pl-0">
            {[
              ["1. Create your deed poll", "Use an online service or write one yourself. You must sign it in front of an adult witness who is not a family member."],
              ["2. Print several certified copies", "Most banks and government offices keep the copy you send them. Print at least six."],
              ["3. Update your passport first", "HM Passport Office is the most important document to update. All other organisations generally accept a new passport as proof of your name."],
              ["4. Update your driving licence", "Notify the DVLA online or by post. This is free and usually takes around two weeks."],
              ["5. Notify your bank and employer", "Take or post your deed poll to your bank. Inform your employer so your payslips and tax records match your new name."],
              ["6. Update remaining records", "Work through HMRC, the NHS, your local council, utilities, and any subscriptions. Most accept a scanned copy of your deed poll by email."],
            ].map(([step, detail], idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </span>
                <div>
                  <p className="font-semibold mb-1">{step}</p>
                  <p className="text-gray-700">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">How Long Does the Whole Process Take?</h2>
          <p>
            You can create and sign a deed poll in under ten minutes. 
            Updating your documents takes longer because each organisation works to its own timeline:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Passport:</strong> 3–6 weeks (online applications) or up to 10 weeks (postal)</li>
            <li><strong>Driving licence:</strong> Around 2 weeks</li>
            <li><strong>Bank accounts:</strong> Same day to 5 working days</li>
            <li><strong>HMRC:</strong> Up to 4 weeks</li>
          </ul>
          <p className="mt-3">
            Plan for 6–8 weeks from the day you sign your deed poll to the day every record reflects your new name.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Can You Change Your Name for Free?</h2>
          <p>
            Yes. A deed poll has no minimum cost. You can write one yourself using the correct legal wording, 
            print it at home, sign it in front of a witness, and it carries exactly the same legal weight as one produced by a solicitor or online service. 
            The document update fees (mainly the passport) are unavoidable, but the deed poll itself is free if you take the DIY route.
          </p>
          <p>
            Most people choose an online service because it guarantees the wording is correct the first time, 
            which avoids the risk of a bank or government office rejecting a poorly worded document.
          </p>
        </section>

        {/* Section 8 — FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Answers to Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How much is it to legally change your name in the UK?",
                a: "The deed poll itself costs nothing to create yourself, or between £5 and £36 via an online service. The main expense is renewing your passport (£88.50 for adults). All other record updates are free.",
              },
              {
                q: "Do I need a solicitor to change my name?",
                a: "No. Solicitors can produce a deed poll, but it is not required. An unenrolled deed poll that you create yourself is fully legal.",
              },
              {
                q: "Is it harder to change your name after marriage or divorce?",
                a: "No — it is actually simpler. After marriage you can use your marriage certificate instead of a deed poll to update most records. After divorce, you can use your decree absolute or final order.",
              },
              {
                q: "Can children change their name?",
                a: "Yes, but all people with parental responsibility must give their consent. The process costs the same as for an adult.",
              },
            ].map(({ q, a }, idx) => (
              <div key={idx} className="border border-gray-200 rounded p-5">
                <p className="font-semibold text-[#1d70b8] mb-2">{q}</p>
                <p className="text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>{/* end prose */}

      
        {/* ══════════════════════════════════════
            H2 — Related Guides
        ══════════════════════════════════════ */}
        <section className="mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link href="/how-to-change-name-on-birth-certificate-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Change a Name on a Birth Certificate</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-last-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Last Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-surname-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Surname</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA */}
      <div className="bg-gray-100 p-8 text-center border-t border-b border-gray-300 mt-14">
        <h2 className="text-2xl font-bold mb-2">Ready to change your name today?</h2>
        <p className="text-gray-600 mb-6">Create a legally valid deed poll in minutes — no solicitor needed.</p>
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