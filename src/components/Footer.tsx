import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f3f2f1] text-[#0b0c0c] border-t-2 border-[#b1b4b6] mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Free Tools */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-700 mb-4">
              Free Legal Tools
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/change-name-in-uk-by-deedpoll" className="text-[#00703c] font-bold hover:underline">
                  ⚡ Free Deed Poll Generator (PDF)
                </Link>
              </li>
              <li>
                <Link href="/name-change-letters-generator" className="text-[#1d70b8] font-bold hover:underline">
                  ✉️ Name Change Letter Generator
                </Link>
              </li>
              <li>
                <Link href="/checklist" className="hover:underline font-medium">
                  📋 Interactive Name Change Checklist
                </Link>
              </li>
              <li>
                <Link href="/free-deed-poll-template-uk" className="hover:underline font-medium">
                  📄 Deed Poll Template (Word & PDF)
                </Link>
              </li>
              <li>
                <Link href="/calculate-stamp-duty-england" className="hover:underline text-gray-700">
                  Stamp Duty Calculator England
                </Link>
              </li>
              <li>
                <Link href="/after-tax-pay-calculator-uk" className="hover:underline text-gray-700">
                  After-Tax Pay Calculator UK
                </Link>
              </li>
              <li>
                <Link href="/national-insurance-and-tax-calculator-uk" className="hover:underline text-gray-700">
                  National Insurance Calculator
                </Link>
              </li>
              <li>
                <Link href="/uk-working-days-calculator" className="hover:underline text-gray-700">
                  Working Days Calculator UK
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Legal Guides */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-700 mb-4">
              Official Name Change Guides
            </h2>
            <ul className="space-y-2.5 text-sm text-gray-700">
              <li>
                <Link href="/how-to-change-your-name-uk" className="hover:underline">
                  How to Change Your Name in the UK
                </Link>
              </li>
              <li>
                <Link href="/change-name-on-driving-licence-dvla-uk" className="hover:underline">
                  Change Name on Driving Licence (DVLA)
                </Link>
              </li>
              <li>
                <Link href="/how-to-change-name-on-passport-uk" className="hover:underline">
                  How to Change Name on UK Passport
                </Link>
              </li>
              <li>
                <Link href="/how-to-change-name-after-marriage-uk" className="hover:underline">
                  Change Name After Marriage
                </Link>
              </li>
              <li>
                <Link href="/child-deed-poll-uk" className="hover:underline">
                  Child Deed Poll & Consent Guide
                </Link>
              </li>
              <li>
                <Link href="/how-to-change-surname-uk" className="hover:underline">
                  How to Change Your Surname
                </Link>
              </li>
              <li>
                <Link href="/deed-poll-vs-statutory-declaration-uk" className="hover:underline">
                  Deed Poll vs Statutory Declaration
                </Link>
              </li>
              <li>
                <Link href="/how-much-does-it-cost-to-change-your-name-uk" className="hover:underline">
                  How Much Does It Cost to Change Name?
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Help & Support */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-700 mb-4">
              Help & Information
            </h2>
            <ul className="space-y-2.5 text-sm text-gray-700">
              <li>
                <Link href="/faq" className="hover:underline">
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/before-you-start" className="hover:underline">
                  Before You Start
                </Link>
              </li>
              <li>
                <Link href="/my-deed-poll-was-rejected" className="hover:underline">
                  What to Do If Deed Poll is Rejected
                </Link>
              </li>
              <li>
                <Link href="/how-to-change-company-name-uk" className="hover:underline">
                  How to Change Company Name UK
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal Guarantee */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-700 mb-4">
              Legal Recognition
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Deed Poll UK generates legally compliant unenrolled Deed of Change of Name documents recognised throughout England, Wales, and Scotland under UK common law.
            </p>
            <div className="bg-white p-3.5 border border-gray-300 rounded text-xs space-y-1.5 font-medium">
              <div className="flex items-center gap-1.5 text-[#00703c] font-bold">
                <span>✓</span> Accepted by HM Passport Office
              </div>
              <div className="flex items-center gap-1.5 text-[#00703c] font-bold">
                <span>✓</span> Accepted by DVLA & HMRC
              </div>
              <div className="flex items-center gap-1.5 text-[#00703c] font-bold">
                <span>✓</span> Accepted by NHS & UK Banks
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-[#b1b4b6] pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>
            © {new Date().getFullYear()} Deed Poll UK (deedpolluk.uk). 100% Free Legal Resource for British Citizens.
          </p>
          <div className="flex gap-4">
            <Link href="/terms-and-conditions" className="hover:underline">Terms of Service</Link>
            <Link href="/faq#security" className="hover:underline">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:underline">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
