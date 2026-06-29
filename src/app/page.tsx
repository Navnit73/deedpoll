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
            Change Your Name Legally in Minutes —{" "}
            <span className="text-[#1d70b8]">UK Deed Poll Service</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-800">
            Complete our 2-minute form, download your deed poll instantly, and start
            using your new name today. Accepted by the Passport Office, DVLA, HMRC,
            and all major UK banks.
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
              <Link
                href="/change-name-in-uk-by-deedpoll"
                className="inline-flex flex-col sm:flex-row w-full sm:w-auto rounded-lg active:translate-y-1 transition-all overflow-hidden group border border-[#d8d8d8] sm:border-0 hover:opacity-95"
              >
                <div className="bg-[#00703c] group-hover:bg-[#005a30] transition-colors text-white font-bold py-3 px-6 text-xl sm:text-lg flex items-center justify-center">
                  Get Your Deed Poll
                </div>
                <div className="bg-[#efeee9] sm:border-y sm:border-r border-[#d8d8d8] py-2 px-6 flex flex-col justify-center items-center text-[#0b0c0c] min-w-[160px]">
                  <span className="font-bold text-3xl leading-none tracking-tight text-[#0b0c0c]">£14.99</span>
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
              <strong className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">£14.99</strong>
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Get Your New Name in Three Steps</h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-12 max-w-3xl">
          No solicitor. No court. No waiting. Fill in the form, download your deed poll,
          and start updating your records today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1d70b8] text-white flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6">1</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Enter Your Details</h3>
            <p className="text-base sm:text-lg">
              Type your current name, your new name, and your date of birth into our
              secure online form. It takes under 2 minutes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1d70b8] text-white flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6">2</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Download Your Deed Poll</h3>
            <p className="text-base sm:text-lg">
              We generate your legally worded deed poll instantly and send a
              professionally formatted PDF straight to your inbox.
            </p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1d70b8] text-white flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-6">3</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sign, Witness, and Use It</h3>
            <p className="text-base sm:text-lg">
              Print it out, sign it in front of one witness, then send certified copies
              to the DVLA, HMRC, your bank, and the Passport Office. You can use your
              new name straight away.
            </p>
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
                title: "Ready in Seconds",
                desc: "We deliver your deed poll PDF instantly — 24 hours a day, 7 days a week. No waiting around."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
                title: "Just £14.99 — No Extras",
                desc: "One flat fee. No subscriptions, no hidden charges. Solicitors charge £100–£200+ for the same result."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: "No Solicitor Needed",
                desc: "UK law lets any adult change their name by deed poll without legal help. Our document handles everything."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
                title: "256-Bit SSL Encrypted",
                desc: "We protect your personal details with bank-grade encryption throughout the entire payment and form process."
              },
              {
                icon: <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />,
                title: "Re-Download Anytime",
                desc: "We save your deed poll to your account. Need extra copies later? Download them at any time, for free."
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
        <p className="mb-4">
          A <strong>deed poll</strong> is the legal document that proves you have abandoned your old
          name and adopted a new one. In England, Wales, and Scotland, it is the standard method
          for changing your name — recognised by every government body, bank, and employer in the UK.
        </p>
        <p className="mb-6 sm:mb-8">
          You do not need to attend court or hire a solicitor. Simply create a deed poll, sign it
          in front of one witness, and send certified copies to the organisations you need to notify.
          Our service produces a professionally formatted, legally correct document — all you do is
          print, sign, and post.
        </p>

        <div className="bg-[#f3f2f1] border-l-[8px] border-[#1d70b8] p-4 sm:p-6 mb-6 sm:mb-8">
          <p className="m-0 text-sm sm:text-base">
            <strong>Good to know:</strong> You do not need to register a deed poll anywhere. It
            becomes legally valid the moment you sign it in front of a witness — no approval required.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Who Can Change Their Name by Deed Poll?</h2>
        <p className="mb-4">
          Any British citizen aged 16 or over can change their name by deed poll. If you want to
          change the name of a child under 16, a parent or legal guardian must complete the deed
          poll on the child's behalf, and everyone with parental responsibility must give their
          consent.
        </p>
        <p className="mb-6 sm:mb-8">
          There are very few restrictions on your new name. It cannot include numbers, symbols, or
          punctuation other than hyphens, and it must not be obscene or an impersonation of another
          person. Beyond those limits, you can choose almost any name you like — a new first name,
          a different middle name, a new surname, or all three at once.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Common Reasons People Change Their Name</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
          <li><strong>Marriage or civil partnership</strong> — take a spouse's surname, double-barrel both names, or create a new shared name.</li>
          <li><strong>Divorce or separation</strong> — revert to a previous surname or adopt a completely fresh name.</li>
          <li><strong>Gender transition</strong> — align your name with your gender identity. A deed poll is the most widely accepted document for this purpose across all UK institutions.</li>
          <li><strong>Personal preference</strong> — you need no special reason. Simply disliking your name is perfectly valid grounds.</li>
          <li><strong>Religious or cultural identity</strong> — adopt a name that reflects your faith, heritage, or background.</li>
          <li><strong>Simplifying a difficult name</strong> — anglicise or shorten a name that is routinely misspelled or mispronounced.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Is a Deed Poll Legally Binding?</h2>
        <p className="mb-4">
          Yes. Both an <strong>enrolled</strong> deed poll (registered with the Royal Courts of
          Justice) and an <strong>unenrolled</strong> deed poll are fully legally valid in the UK.
          We produce an unenrolled deed poll — the type used by the vast majority of people,
          including those renewing passports and updating driving licences.
        </p>
        <p className="mb-6 sm:mb-8">
          Enrolment is an optional, rarely necessary step that adds cost and weeks of delay without
          any practical advantage for most people. Our deed polls use the correct legal wording
          accepted by the UK Passport Office, DVLA, HMRC, all major banks, the NHS, and thousands
          of other organisations every year.
        </p>

      </section>

      {/* WHERE TO USE */}
      <section className="bg-[#1d70b8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider text-blue-200">Where to use it</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Update Your Records Everywhere</h2>
          <p className="text-base sm:text-xl mb-8 sm:mb-12 max-w-3xl">
            Once signed, your deed poll works with all of these organisations. Every order includes
            our full{" "}
            <Link href="/checklist" className="underline underline-offset-4 decoration-2 hover:text-blue-200">
              name change checklist
            </Link>{" "}
            so you do not miss a single one.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              'HM Passport Office',
              'DVLA',
              'HMRC',
              'Your Bank',
              'NHS & GP Surgery',
              'Your Employer',
              'Electoral Roll',
              'Insurance Providers',
            ].map(org => (
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
            {
              initials: "ST",
              name: "Sarah T.",
              location: "London",
              quote: "Incredibly simple. I had my deed poll downloaded, printed, and signed within 15 minutes. My passport was updated within three weeks."
            },
            {
              initials: "JR",
              name: "James R.",
              location: "Manchester",
              quote: "So much cheaper than a solicitor. The document looks completely professional and my bank accepted it straight away — no questions asked."
            },
            {
              initials: "EW",
              name: "Emma W.",
              location: "Birmingham",
              quote: "Made the whole process stress-free. The included checklist is brilliant — I didn't miss a single organisation."
            },
          ].map(({ initials, name, location, quote }) => (
            <div key={initials} className="bg-gray-50 p-6 sm:p-8 border-t-4 border-[#1d70b8]">
              <div className="text-[#1d70b8] text-xl sm:text-2xl tracking-widest mb-3 sm:mb-4">★★★★★</div>
              <p className="text-base sm:text-lg italic mb-4 sm:mb-6">"{quote}"</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 flex items-center justify-center font-bold text-gray-700 text-sm sm:text-base flex-shrink-0">{initials}</div>
                <div>
                  <strong className="text-sm sm:text-base">{name}</strong><br />
                  <span className="text-gray-600 text-xs sm:text-sm">{location}</span>
                </div>
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
              <h3 className="text-lg sm:text-xl font-bold mb-2">Do I need a solicitor?</h3>
              <p>No. In England, Wales, and Scotland you can change your name without a solicitor or any legal professional. Our service produces a fully valid document you use yourself.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">How long does it take?</h3>
              <p>We generate your deed poll instantly once you complete the form. You can have a signed, valid deed poll ready to use the same day — usually within 15 minutes of starting.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Will the Passport Office accept it?</h3>
              <p>Yes. The UK Passport Office accepts unenrolled deed polls as proof of name change. Thousands of our customers have successfully renewed their passports using ours.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Can I change my name for free?</h3>
              <p>You can write your own deed poll by hand, but our professionally worded document at £14.99 guarantees correct legal wording and eliminates the risk of rejection by official bodies.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Can I change a child's name?</h3>
              <p>Yes, but everyone with parental responsibility must consent and sign. See our <Link href="/faq" className="text-[#1d70b8] underline underline-offset-4 hover:text-[#003078]">full FAQ</Link> for a step-by-step guide to changing a child's name.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Do I need to register it anywhere?</h3>
              <p>No. Your deed poll becomes legally valid the moment you sign it in front of a witness. Simply notify the relevant organisations directly — no registration required.</p>
            </div>
          </div>
          <p className="text-center">
            <Link href="/faq" className="text-base sm:text-xl font-bold text-[#1d70b8] underline underline-offset-4 decoration-2 hover:text-[#003078]">
              View all frequently asked questions →
            </Link>
          </p>
        </div>
      </section>

      {/* BLOG / GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-gray-300">
        <span className="text-[#1d70b8] font-bold text-base sm:text-lg mb-2 block uppercase tracking-wider">Helpful Guides</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Name Change Guides & Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { href: "/how-to-change-your-name-uk", label: "How to Change Your Name in the UK" },
            { href: "/how-to-legally-change-your-name-uk", label: "How to Legally Change Your Name" },
            { href: "/how-to-change-name-after-marriage-uk", label: "How to Change Your Name After Marriage" },
            { href: "/how-to-change-surname-uk", label: "How to Change Your Surname" },
            { href: "/how-much-does-it-cost-to-change-your-name-uk", label: "How Much Does It Cost to Change Your Name?" },
            { href: "/how-to-change-childs-surname-uk", label: "How to Change a Child's Surname" },
            { href: "/how-to-change-name-on-passport-uk", label: "How to Change Your Name on a Passport" },
            { href: "/how-to-change-name-on-birth-certificate-uk", label: "Can You Change a Name on a Birth Certificate?" },
            { href: "/how-to-change-company-name-uk", label: "How to Change a Company Name" },
            { href: "/how-to-change-first-name-uk", label: "How to Change Your First Name" },
            { href: "/how-to-change-last-name-uk", label: "How to Change Your Last Name" },
            { href: "/how-to-change-name-by-deed-poll-uk", label: "How to Change Your Name by Deed Poll" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-base sm:text-xl font-bold text-[#1d70b8] hover:underline underline-offset-4 decoration-2">
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center mt-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Change Your Name?</h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-10">
          Join over 50,000 people across the UK who have changed their name quickly,
          easily, and affordably — all from home.
        </p>
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
            <Link
              href="/change-name-in-uk-by-deedpoll"
              className="inline-flex flex-col sm:flex-row w-full sm:w-auto rounded-lg active:translate-y-1 transition-all overflow-hidden group border border-[#d8d8d8] sm:border-0 hover:opacity-95"
            >
              <div className="bg-[#00703c] group-hover:bg-[#005a30] transition-colors text-white font-bold py-4 px-8 text-xl sm:text-2xl flex items-center justify-center">
                Get Your Deed Poll
              </div>
              <div className="bg-[#efeee9] sm:border-y sm:border-r border-[#d8d8d8] py-3 px-8 flex flex-col justify-center items-center text-[#0b0c0c] min-w-[160px]">
                <span className="font-bold text-3xl leading-none tracking-tight text-[#0b0c0c]">£14.99</span>
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
              "@id": "https://deedpolluk.uk/#organization",
              "name": "Deed Poll UK",
              "url": "https://deedpolluk.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://deedpolluk.uk/logo.png"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://deedpolluk.uk/#website",
              "url": "https://deedpolluk.uk",
              "name": "Deed Poll UK",
              "publisher": {
                "@id": "https://deedpolluk.uk/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://deedpolluk.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Service",
              "@id": "https://deedpolluk.uk/#service",
              "name": "UK Deed Poll Service",
              "provider": { "@id": "https://deedpolluk.uk/#organization" },
              "areaServed": "GB",
              "description": "Legally valid UK deed poll documents delivered as instant PDF. Accepted by the Passport Office, DVLA, HMRC, and all major banks.",
              "offers": {
                "@type": "Offer",
                "price": "14.99",
                "priceCurrency": "GBP"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do I need a solicitor to change my name by deed poll?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. In England, Wales, and Scotland you can change your name without a solicitor or any legal professional."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will the UK Passport Office accept an unenrolled deed poll?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The UK Passport Office accepts unenrolled deed polls as proof of name change."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to register a deed poll anywhere?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Your deed poll becomes legally valid the moment you sign it in front of a witness."
                  }
                }
              ]
            }
          ]
        }}
      />
    </div>
  );
}