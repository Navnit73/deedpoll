import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 text-xs sm:text-sm font-bold text-[#0b0c0c]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              Legally Valid UK Deed Poll
            </span>
            <span className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 text-xs sm:text-sm font-bold text-[#0b0c0c]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Instant PDF Delivery
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Change Your Name Legally — <span className="text-[#1d70b8]">deed poll</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-800">
            Get your official, legally recognised Deed Poll in minutes. Accepted by
            the Passport Office, DVLA, HMRC, and all major UK banks.
          </p>
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-3 text-sm md:text-base font-bold text-[#0b0c0c]">
              <span className="flex items-center gap-2">
                <svg className="text-[#00703c] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M16.707 8.293a1 1 0 00-1.414 0L10 13.586 7.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/></svg>
                Legally Compliant
              </span>
              <span className="flex items-center gap-2">
                <svg className="text-[#00703c] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M16.707 8.293a1 1 0 00-1.414 0L10 13.586 7.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/></svg>
                Instant PDF
              </span>
              <span className="flex items-center gap-2">
                <svg className="text-[#00703c] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M16.707 8.293a1 1 0 00-1.414 0L10 13.586 7.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/></svg>
                No Solicitor Needed
              </span>
            </div>
            
            <div>
               <Link href="/change-name-in-uk-by-deedpoll" className="inline-flex flex-col sm:flex-row w-full sm:w-auto rounded-lg  active:translate-y-1 transition-all overflow-hidden group border border-[#d8d8d8] sm:border-0 hover:opacity-95">
                 <div className="bg-[#00703c] group-hover:bg-[#005a30] transition-colors text-white font-bold py-3 px-6 text-xl sm:text-lg flex items-center justify-center">
                   Get Your Deed Poll
                 </div>
                 <div className="bg-[#efeee9] sm:border-y sm:border-r border-[#d8d8d8] py-2 px-6 flex flex-col justify-center items-center text-[#0b0c0c] min-w-[160px]">
                   <span className="font-bold text-3xl leading-none tracking-tight text-[#0b0c0c]">£12.99</span>
                   <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">One-time payment</span>
                 </div>
               </Link>
               <div className="text-gray-500 text-sm flex items-center gap-2 mt-4 font-medium">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> 
                 Secure checkout. No account required.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#1d70b8] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="flex flex-col">
              <strong className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">50,000+</strong>
              <span className="text-xs sm:text-sm md:text-base">Happy Customers</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">£12.99</strong>
              <span className="text-xs sm:text-sm md:text-base">One-Off Price</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">2 Min</strong>
              <span className="text-xs sm:text-sm md:text-base">To Complete</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">Instant</strong>
              <span className="text-xs sm:text-sm md:text-base">PDF Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <span className="text-[#1d70b8] font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider">How it works</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Three Simple Steps to Your New Name</h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-12 max-w-3xl">No solicitor, no court visit, no hassle. Fill in our form, download your document, and start using your new name today.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1d70b8] text-white flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6">1</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fill In Your Details</h3>
            <p className="text-base sm:text-lg">Enter your current name, your chosen new name, and your date of birth in our secure online form. The whole process takes under 2 minutes.</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1d70b8] text-white flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6">2</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Download Your Deed Poll</h3>
            <p className="text-base sm:text-lg">Your legally worded Deed Poll is generated instantly and delivered as a professionally formatted PDF directly to your inbox.</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1d70b8] text-white flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6">3</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sign, Witness & Use It</h3>
            <p className="text-base sm:text-lg">Print it, sign in front of one witness, then send copies to the DVLA, HMRC, your bank, and the Passport Office. You can use your new name straight away.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#1d70b8] font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider">Why choose us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">Everything Included. Nothing Hidden.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Fully Legally Valid",
                desc: "Accepted by the Passport Office, DVLA, HMRC, NHS, all major banks, and thousands of other UK organisations."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Instant Delivery",
                desc: "No waiting. Your deed poll PDF is ready within seconds, available 24 hours a day, 7 days a week."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
                title: "Just £12.99 — No Extras",
                desc: "One flat fee. No subscriptions, no hidden charges. Compare that to solicitor fees of £100–£200+."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: "No Solicitor Needed",
                desc: "UK law allows any adult to change their name by deed poll without legal help. Our document handles everything."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
                title: "256-Bit SSL Encrypted",
                desc: "Your personal details are protected with bank-grade encryption throughout the entire payment and form process."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />,
                title: "Re-Download Anytime",
                desc: "Your deed poll is saved to your account. Need extra copies later? Download them at any time, for free."
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-5 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-[#1d70b8]">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{icon}</svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">{title}</h4>
                <p className="text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-base sm:text-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What Is a Deed Poll?</h2>
        <p className="mb-4">A <strong>Deed Poll</strong> is a legal document that proves you have officially abandoned your old name and adopted a new one. In England, Wales, and Scotland, it is the standard, widely accepted method for changing your name. Whether you are changing your name after marriage, following a divorce, during gender transition, or simply because you prefer a different name — a deed poll makes the change official in the eyes of the law, your bank, the government, and every other organisation you deal with.</p>
        <p className="mb-6 sm:mb-8">Unlike many countries, the UK does not require you to attend court or hire a solicitor. You simply create a deed poll, sign it in front of one witness, and send certified copies to the relevant organisations. Our service generates a professionally formatted, legally correct document — all you need to do is print, sign, and post.</p>

        <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-4 sm:p-6 mb-6 sm:mb-8">
          <p className="m-0 text-sm sm:text-base"><strong>Did you know?</strong> A deed poll does not need to be registered anywhere. It becomes legally valid the moment you sign it in front of a witness — no approval required.</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Who Can Change Their Name by Deed Poll?</h2>
        <p className="mb-4">Any British citizen aged 16 or over can change their name using a deed poll. If you are changing the name of a child under 16, a parent or legal guardian must complete the deed poll on the child's behalf, and all people with parental responsibility must give their consent.</p>
        <p className="mb-6 sm:mb-8">There are very few restrictions on your new name. It cannot include numbers, symbols, or punctuation other than hyphens. It must not be obscene, impossible to pronounce, or an impersonation of another person. Beyond those limits, you are free to choose almost any name you like — a new first name, a different middle name, a new surname, or all three at once.</p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Common Reasons People Change Their Name</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
          <li><strong>Marriage or civil partnership</strong> — taking a spouse's surname, double-barrelling, or creating an entirely new shared name.</li>
          <li><strong>Divorce or separation</strong> — reverting to a previous surname or adopting a fresh new name.</li>
          <li><strong>Gender transition</strong> — aligning your name with your gender identity. A deed poll is the most widely accepted document for this purpose.</li>
          <li><strong>Personal preference</strong> — you need no special reason. Simply disliking your name is perfectly valid.</li>
          <li><strong>Religious or cultural reasons</strong> — adopting a name that reflects your faith, heritage, or cultural background.</li>
          <li><strong>Simplifying a difficult name</strong> — anglicising or shortening a name that is routinely misspelled or mispronounced.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Is a Deed Poll Legally Binding?</h2>
        <p className="mb-4">Yes. Both an <strong>enrolled</strong> deed poll (registered with the Royal Courts of Justice) and an <strong>unenrolled</strong> deed poll are fully legally valid in the UK. Our service produces an unenrolled deed poll — the type used by the vast majority of people, including those renewing passports and updating driving licences. Enrolment is an optional, rarely necessary step that adds cost and weeks of waiting without any practical advantage for most people.</p>
        <p className="mb-6 sm:mb-8">Our deed polls are correctly worded in line with established UK legal conventions and are accepted by the UK Passport Office, DVLA, HMRC, all major banks, the NHS, and thousands of other organisations every year.</p>
      </section>

      {/* WHERE TO USE */}
      <section className="bg-[#1d70b8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider text-blue-200">Where to use it</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Update Your Records Everywhere</h2>
          <p className="text-base sm:text-xl mb-8 sm:mb-12 max-w-3xl">
            Once signed, your deed poll is accepted by all of these organisations. Every order includes our full{" "}
            <Link href="/checklist" className="underline underline-offset-4 decoration-2 hover:text-blue-200">name change checklist</Link>.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {['HM Passport Office', 'DVLA', 'HMRC', 'Your Bank', 'NHS & GP Surgery', 'Your Employer', 'Electoral Roll', 'Insurance Providers'].map(org => (
              <div key={org} className="bg-white text-[#0b0c0c] font-bold py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-lg">{org}</div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <span className="text-[#1d70b8] font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider">Customer reviews</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">Trusted by Thousands Across the UK</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { initials: "ST", name: "Sarah T.", location: "London", quote: "Incredibly simple. I had my deed poll downloaded, printed and signed within 15 minutes. My passport was updated within three weeks." },
            { initials: "JR", name: "James R.", location: "Manchester", quote: "So much cheaper than a solicitor. The document looks completely professional and my bank accepted it straight away — no questions asked." },
            { initials: "EW", name: "Emma W.", location: "Birmingham", quote: "Made the whole process stress-free. The included checklist is brilliant — I didn't miss a single organisation." },
          ].map(({ initials, name, location, quote }) => (
            <div key={initials} className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
              <div className="text-[#1d70b8] text-xl sm:text-2xl tracking-widest mb-3 sm:mb-4">★★★★★</div>
              <p className="text-base sm:text-lg italic mb-4 sm:mb-6">"{quote}"</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 flex items-center justify-center font-bold text-gray-700 text-sm sm:text-base flex-shrink-0">{initials}</div>
                <div><strong className="text-sm sm:text-base">{name}</strong><br/><span className="text-gray-600 text-xs sm:text-sm">{location}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#1d70b8] font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider">Common questions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-sm sm:text-lg">
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Do I need a solicitor?</h4>
              <p>No. In England, Wales, and Scotland you do not need a solicitor or legal professional to change your name. Our service produces a fully valid document you use yourself.</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">How long does it take?</h4>
              <p>Your deed poll is generated instantly after completing the form. You can have a signed, valid deed poll ready to use the same day — usually within 15 minutes.</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Will the Passport Office accept it?</h4>
              <p>Yes. The UK Passport Office accepts unenrolled deed polls as proof of name change. Thousands of our customers have successfully renewed their passports with ours.</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Can I change my name for free?</h4>
              <p>You can write your own deed poll by hand, but our professionally formatted document at £12.99 guarantees correct wording and avoids the risk of rejection by official bodies.</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Can I change a child's name?</h4>
              <p>Yes, but everyone with parental responsibility must consent and sign. See our <Link href="/faq" className="text-[#1d70b8] underline underline-offset-4 hover:text-[#003078]">full FAQ</Link> for a step-by-step guide to changing a child's name.</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Do I need to register it anywhere?</h4>
              <p>No registration is required. Your deed poll becomes legally valid the moment you sign it in front of a witness. Simply notify relevant organisations directly.</p>
            </div>
          </div>
          <p className="text-center">
            <Link href="/faq" className="text-base sm:text-xl font-bold text-[#1d70b8] underline underline-offset-4 decoration-2 hover:text-[#003078]">View all frequently asked questions →</Link>
          </p>
        </div>
      </section>

      {/* BLOG / GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-gray-300">
        <span className="text-[#1d70b8] font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider">Helpful Guides</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Blog & Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { href: "/how-to-change-your-name-uk", label: "How to Change Your Name UK" },
            { href: "/how-to-legally-change-your-name-uk", label: "How to Legally Change Your Name UK" },
            { href: "/how-to-change-name-after-marriage-uk", label: "How to Change Name After Marriage UK" },
            { href: "/how-to-change-surname-uk", label: "How to Change Surname UK" },
            { href: "/how-much-does-it-cost-to-change-your-name-uk", label: "Cost to Change Your Name UK" },
            { href: "/how-to-change-childs-surname-uk", label: "How to Change a Childs Surname UK" },
            { href: "/how-to-change-name-on-passport-uk", label: "How to Change Name on Passport UK" },
            { href: "/how-to-change-name-on-birth-certificate-uk", label: "Change Name on Birth Certificate UK" },
            { href: "/how-to-change-company-name-uk", label: "How to Change Company Name UK" },
            { href: "/how-to-change-first-name-uk", label: "How to Change Your First Name UK" },
            { href: "/how-to-change-last-name-uk", label: "How to Change Your Last Name UK" },
            { href: "/how-to-change-name-by-deed-poll-uk", label: "Change Your Name by Deed Poll UK" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-base sm:text-xl font-bold text-[#1d70b8] hover:underline underline-offset-4 decoration-2">{label}</Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center mt-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Change Your Name?</h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-10">Join over 50,000 British citizens who've changed their name quickly, easily, and affordably — all from home.</p>
        <div className="flex flex-col items-center gap-5 mt-2">
            <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base font-bold text-[#0b0c0c]">
              <span className="flex items-center gap-2">
                <svg className="text-[#00703c] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M16.707 8.293a1 1 0 00-1.414 0L10 13.586 7.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/></svg>
                Legally Compliant
              </span>
              <span className="flex items-center gap-2">
                <svg className="text-[#00703c] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M16.707 8.293a1 1 0 00-1.414 0L10 13.586 7.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/></svg>
                Instant PDF
              </span>
              <span className="flex items-center gap-2">
                <svg className="text-[#00703c] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M16.707 8.293a1 1 0 00-1.414 0L10 13.586 7.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/></svg>
                No Solicitor Needed
              </span>
            </div>
            
            <div className="flex flex-col items-center">
               <Link href="/change-name-in-uk-by-deedpoll" className="inline-flex flex-col sm:flex-row w-full sm:w-auto rounded-lg  active:translate-y-1 transition-all overflow-hidden group border border-[#d8d8d8] sm:border-0 hover:opacity-95">
                 <div className="bg-[#00703c] group-hover:bg-[#005a30] transition-colors text-white font-bold py-4 px-8 text-xl sm:text-2xl flex items-center justify-center">
                   Get Your Deed Poll
                 </div>
                 <div className="bg-[#efeee9] sm:border-y sm:border-r border-[#d8d8d8] py-3 px-8 flex flex-col justify-center items-center text-[#0b0c0c] min-w-[160px]">
                   <span className="font-bold text-3xl leading-none tracking-tight text-[#0b0c0c]">£12.99</span>
                   <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">One-time payment</span>
                 </div>
               </Link>
               <div className="text-gray-500 text-sm flex items-center justify-center gap-2 mt-4 font-medium">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> 
                 Secure checkout. No account required.
               </div>
               <Link
                 href="/faq"
                 className="mt-6 text-[#1d70b8] font-bold text-lg underline underline-offset-4 decoration-2 hover:text-[#003078]"
               >
                 Or read the FAQ first →
               </Link>
             </div>
        </div>
      </section>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.deedpolluk.co.uk/#organization",
              "name": "Deed Poll UK",
              "url": "https://www.deedpolluk.co.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.deedpolluk.co.uk/logo.png"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://www.deedpolluk.co.uk/#website",
              "url": "https://www.deedpolluk.co.uk",
              "name": "Deed Poll UK",
              "publisher": {
                "@id": "https://www.deedpolluk.co.uk/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.deedpolluk.co.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        }}
      />
    </div>
  );
}