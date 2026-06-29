import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "/how-to-change-company-name-uk" },
  title: "How to Change Company Name UK | Deed Poll UK",
  description:
    "Learn how to change company name uk. Guide covers: how to change a company name uk, how to change your business name uk, and more.",
  openGraph: {
    title: "How to Change Company Name UK | Deed Poll UK",
    description: "Learn how to change company name uk. Guide covers: how to change a company name uk, how to change your business name uk, and more.",
    url: "https://deedpolluk.uk/how-to-change-company-name-uk",
  },
  twitter: {
    title: "How to Change Company Name UK | Deed Poll UK",
    description: "Learn how to change company name uk. Guide covers: how to change a company name uk, how to change your business name uk, and more.",
  }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* H1 */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        How to Change a Company Name in the UK
      </h1>

      {/* Lead summary box */}
      <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-6 mb-10">
        <p className="text-xl leading-relaxed">
          <strong>Quick summary:</strong> To change a limited company name, pass a special resolution and file form NM01 with Companies House (fee: <strong>£20 online</strong>). Sole traders and partnerships simply start trading under the new name and update their records. This guide covers every business structure so you take the right steps first time.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 space-y-10">

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Does the Process Depend on Your Business Structure?</h2>
          <p>
            Yes — and this is the most important thing to understand before you start. The UK treats each business structure differently, so the steps for a limited company are not the same as those for a sole trader or a partnership.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="bg-[#1d70b8] text-white">
                  <th className="text-left p-3 font-semibold">Business Structure</th>
                  <th className="text-left p-3 font-semibold">What You Need to Do</th>
                  <th className="text-left p-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Limited company (Ltd / PLC)", "Pass a special resolution, file NM01 with Companies House", "£20 online / £30 by post"],
                  ["Sole trader", "Inform HMRC, update bank and licences", "Free"],
                  ["General partnership", "Update the partnership agreement, inform HMRC", "Free"],
                  ["LLP", "Pass a resolution, file form LL NM01 with Companies House", "£20 online / £30 by post"],
                ].map(([structure, steps, cost], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border-b border-gray-200 font-semibold">{structure}</td>
                    <td className="p-3 border-b border-gray-200">{steps}</td>
                    <td className="p-3 border-b border-gray-200">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 — Ltd step by step */}
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Change a Limited Company Name: Step by Step</h2>
          <p>
            This is the most common scenario. Follow these steps in order to avoid rejection from Companies House.
          </p>
          <ol className="space-y-4 list-none pl-0 mt-4">
            {[
              ["Check the new name is available", "Search the Companies House register to confirm no other company already uses your chosen name. The name must not be too similar to an existing one, contain a sensitive word without approval, or imply a connection to a government body."],
              ["Pass a special resolution", "A special resolution requires at least 75% of shareholder votes in favour. You can do this at a general meeting or via a written resolution circulated to all shareholders. Record the outcome in your company minutes."],
              ["File form NM01 with Companies House", "Submit form NM01 online via the Companies House WebFiling service (£20) or by post (£30). Attach a copy of the special resolution. Companies House typically processes online applications within 24 hours."],
              ["Receive your new certificate of incorporation", "Companies House issues a new certificate of incorporation on change of name. This is your official proof of the new name — keep it safe."],
              ["Update your statutory registers", "Amend your register of members, register of directors, and any other statutory registers to reflect the new company name."],
              ["Update all company documents and materials", "You are legally required to display the new name on your registered office, website, emails, letterheads, invoices, and contracts. Update these as soon as your certificate arrives."],
              ["Notify banks, HMRC, and other organisations", "Contact your business bank, HMRC (for Corporation Tax, VAT, and PAYE), Companies House-registered offices, and any licensing bodies. Most accept a copy of your new certificate of incorporation as proof."],
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

        {/* Section 3 — Sole trader */}
        <section>
          <h2 className="text-2xl font-bold mb-3">How to Change Your Business Name as a Sole Trader</h2>
          <p>
            Sole traders are not registered with Companies House, so the process is simpler. You can trade under a new name at any time — there is no form to file and no fee to pay.
          </p>
          <p>That said, you must still take these practical steps:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Inform HMRC of your new trading name via your Self Assessment account or by calling the HMRC helpline.</li>
            <li>Update your business bank account to reflect the new name.</li>
            <li>Register the new name as a trade mark if you want to protect it — this is optional but recommended.</li>
            <li>Update your website, invoices, contracts, and any licences that reference your trading name.</li>
            <li>If you trade under a name other than your own, you must still display your own name on business documents alongside the trading name.</li>
          </ul>
        </section>

        {/* Section 4 — Name rules */}
        <section>
          <h2 className="text-2xl font-bold mb-3">What Name Rules Does Companies House Enforce?</h2>
          <p>
            Companies House rejects names that break its rules. Before you pass a resolution, check that your new name:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Does not duplicate or closely resemble an existing registered company name.</li>
            <li>Does not include a <em>sensitive word or expression</em> — such as "Royal", "NHS", or "Bank" — without written permission from the relevant body.</li>
            <li>Does not suggest a connection with the UK Government or a local authority unless you qualify.</li>
            <li>Ends in "Limited" or "Ltd" for private companies, or "Public Limited Company" / "PLC" for public ones.</li>
          </ul>
          <p className="mt-3">
            You can check name availability and see the full list of sensitive words on the{" "}
            <a href="https://find-and-update.company-information.service.gov.uk/" className="text-[#1d70b8] underline" target="_blank" rel="noopener noreferrer">
              Companies House name availability checker
            </a>.
          </p>
        </section>

        {/* Section 5 — Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-3">How Long Does a Company Name Change Take?</h2>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Online via WebFiling:</strong> Companies House usually processes the application within 24 hours and emails your new certificate the same day.</li>
            <li><strong>By post:</strong> Allow 5–10 working days for processing.</li>
            <li><strong>Same-day service:</strong> Companies House offers a same-day guaranteed service for an additional fee if you need the certificate urgently.</li>
          </ul>
          <p className="mt-3">
            Once you receive the certificate, the name change is effective immediately. You do not need to wait before using the new name on invoices and correspondence.
          </p>
        </section>

        {/* Section 6 — FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I need a solicitor to change a company name?",
                a: "No. You can file form NM01 directly with Companies House via the WebFiling portal without legal representation. A solicitor can help if your articles of association are complex or if shareholder disputes arise.",
              },
              {
                q: "Can I change a company name without shareholder approval?",
                a: "Not for a limited company. A special resolution — requiring at least 75% of shareholder votes — is a legal requirement under the Companies Act 2006. Check your articles of association too, as they may impose additional conditions.",
              },
              {
                q: "Does changing a company name affect existing contracts?",
                a: "No. A name change does not create a new legal entity. All existing contracts, liabilities, and obligations remain in force under the new name. Notify your counterparties as a matter of good practice, but you do not need to re-sign contracts.",
              },
              {
                q: "What happens to my VAT number after a name change?",
                a: "Your VAT registration number stays the same. Simply notify HMRC of the new name via your VAT online account or by contacting the VAT helpline. HMRC will update your records and reissue your VAT certificate.",
              },
              {
                q: "Can I protect my new business name?",
                a: "Registering with Companies House stops another limited company from using the same name, but it does not give you trade mark rights. To prevent competitors from trading under a similar name, register it as a trade mark with the Intellectual Property Office (IPO).",
              },
            ].map(({ q, a }, idx) => (
              <div key={idx} className="border border-gray-200 rounded p-5">
                <p className="font-semibold text-[#1d70b8] mb-2">{q}</p>
                <p className="text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      
        {/* ══════════════════════════════════════
            H2 — Related Guides
        ══════════════════════════════════════ */}
        <section className="mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <Link href="/how-to-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Change Your Name in the UK</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-change-name-on-birth-certificate-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">Change a Name on a Birth Certificate</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
            <Link href="/how-to-legally-change-your-name-uk" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">How to Legally Change Your Name</h3>
              <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
            </Link>
          </div>
        </section>

        {/* ── CTA */}
      <div className="bg-gray-100 p-8 text-center border-t border-b border-gray-300 mt-14">
        <h2 className="text-2xl font-bold mb-2">Need to change your personal name too?</h2>
        <p className="text-gray-600 mb-6">If a company restructure or rebrand also means updating your own name, create a legally valid deed poll in minutes.</p>
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