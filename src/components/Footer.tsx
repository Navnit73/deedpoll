import Link from 'next/link';

type FooterLink = { href: string; label: string };
type FooterGroup = { heading: string; links: FooterLink[] };

const tools: FooterLink[] = [
  { href: '/change-name-in-uk-by-deedpoll', label: 'Deed Poll Generator' },
  { href: '/name-change-letters-generator', label: 'Name Change Letter Generator' },
  { href: '/checklist', label: 'Name Change Checklist' },
  { href: '/free-deed-poll-template-uk', label: 'Free Deed Poll Template' },
];

const groups: FooterGroup[] = [
  {
    heading: 'Start Here',
    links: [
      { href: '/how-to-change-your-name-uk', label: 'How to Change Your Name' },
      { href: '/how-to-change-name-by-deed-poll-uk', label: 'Change Name by Deed Poll' },
      { href: '/deed-poll-online-uk', label: 'Deed Poll Online' },
      { href: '/how-much-does-it-cost-to-change-your-name-uk', label: 'How Much Does It Cost?' },
      { href: '/how-long-does-it-take-to-change-your-name-uk', label: 'How Long Does It Take?' },
      { href: '/documents-needed-for-name-change-uk', label: 'Documents Needed' },
      { href: '/before-you-start', label: 'Before You Start' },
    ],
  },
  {
    heading: 'Update Your Records',
    links: [
      { href: '/how-to-change-name-on-passport-uk', label: 'Passport' },
      { href: '/change-name-on-driving-licence-dvla-uk', label: 'Driving Licence (DVLA)' },
      { href: '/what-is-account-name-on-bank-card-uk', label: 'Bank Account Name' },
      { href: '/change-name-on-mortgage-after-marriage-uk', label: 'Mortgage' },
      { href: '/change-name-on-property-deeds-land-registry-uk', label: 'Property Deeds' },
      { href: '/how-to-change-name-on-birth-certificate-uk', label: 'Birth Certificate' },
      { href: '/how-to-change-company-name-uk', label: 'Company Name' },
    ],
  },
  {
    heading: 'Your Situation',
    links: [
      { href: '/how-to-change-name-after-marriage-uk', label: 'After Marriage' },
      { href: '/revert-to-maiden-name-uk', label: 'Revert to Maiden Name' },
      { href: '/change-name-on-passport-after-divorce-uk', label: 'Passport After Divorce' },
      { href: '/child-deed-poll-uk', label: 'Child Deed Poll' },
      { href: '/how-to-change-surname-uk', label: 'Change Surname' },
      { href: '/how-to-change-first-name-uk', label: 'Change First Name' },
      { href: '/how-to-change-middle-name-uk', label: 'Change Middle Name' },
    ],
  },
  {
    heading: 'Rules & Law',
    links: [
      { href: '/name-change-laws-uk', label: 'UK Name Change Laws' },
      { href: '/what-is-a-legal-name-uk', label: 'What Is a Legal Name?' },
      { href: '/legal-name-meaning-first-name-surname-uk', label: 'Forename & Surname Meaning' },
      { href: '/can-i-change-my-name-to-anything-uk', label: 'Can I Change It to Anything?' },
      { href: '/deed-poll-vs-statutory-declaration-uk', label: 'Deed Poll vs Statutory Declaration' },
      { href: '/change-name-without-deed-poll-uk', label: 'Without a Deed Poll' },
      { href: '/deed-poll-apostille-uk', label: 'Deed Poll Apostille' },
      { href: '/deed-poll-scotland-northern-ireland', label: 'Scotland & Northern Ireland' },
    ],
  },
  {
    heading: 'Help & Company',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/my-deed-poll-was-rejected', label: 'Deed Poll Rejected?' },
      { href: '/name-change-solicitor-uk', label: 'Do You Need a Solicitor?' },
      { href: '/how-to-fill-in-d1-form-change-name', label: 'How to Fill In Form D1' },
      { href: '/name-change', label: 'All Name Change Guides' },
      { href: '/tax-money', label: 'UK Tax & Money Guides' },
      { href: '/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
    ],
  },
];

const calculators: FooterLink[] = [
  { href: '/calculate-stamp-duty-england', label: 'Stamp Duty Calculator' },
  { href: '/uk-mortgage-affordability-calculator', label: 'Mortgage Affordability' },
  { href: '/after-tax-pay-calculator-uk', label: 'After-Tax Pay' },
  { href: '/national-insurance-and-tax-calculator-uk', label: 'National Insurance' },
  { href: '/uk-working-days-calculator', label: 'Working Days' },
];

const linkClass =
  'inline-block py-1 text-[#0b0c0c] underline-offset-2 hover:text-[#1d70b8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffdd00]';

export default function Footer() {
  return (
    <footer className="bg-[#f3f2f1] text-[#0b0c0c] border-t-4 border-[#1d70b8] mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Top: brand + primary tools */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr] pb-10 mb-10 border-b border-[#b1b4b6]">
          <div>
            <p className="text-xl font-extrabold tracking-tight">Deed Poll UK</p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-md">
              Free guides and simple tools to help you change your name in the UK, from your deed poll to every record that needs updating.
            </p>
            <ul className="mt-5 space-y-1.5 text-sm font-medium" aria-label="Accepted by">
              {['HM Passport Office', 'DVLA and HMRC', 'NHS and most UK banks'].map((org) => (
                <li key={org} className="flex items-center gap-2 text-[#00703c]">
                  <span aria-hidden="true">✓</span>
                  <span>Accepted by {org}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-4">Tools</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((t, i) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className={`block rounded-md px-4 py-3 text-sm font-bold border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffdd00] ${
                      i === 0
                        ? 'bg-[#00703c] border-[#00703c] text-white hover:bg-[#005a30]'
                        : 'bg-white border-gray-300 text-[#1d70b8] hover:border-[#1d70b8]'
                    }`}
                  >
                    {t.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Link groups */}
        <nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {groups.map((g) => (
            <div key={g.heading}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 pb-2 border-b border-[#b1b4b6]">
                {g.heading}
              </h2>
              <ul className="text-sm">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Calculators strip */}
        <div className="mt-10 pt-6 border-t border-[#b1b4b6] flex flex-col md:flex-row md:items-center gap-x-6 gap-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 shrink-0">UK Calculators</h2>
          <ul className="flex flex-wrap gap-x-5 text-sm">
            {calculators.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={linkClass}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer + legal bar */}
        <div className="mt-10 pt-6 border-t border-[#b1b4b6] space-y-4 text-xs text-gray-600">
          <p className="leading-relaxed max-w-4xl">
            Deed Poll UK is an independent information service. We are not a law firm and are not affiliated with HM Government. Our guides are general information, not legal advice. Always check requirements on GOV.UK or with the organisation concerned.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Deed Poll UK (deedpolluk.uk). All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li><Link href="/terms-and-conditions" className="underline underline-offset-2 hover:text-[#1d70b8]">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#1d70b8]">Privacy Policy</Link></li>
              <li><Link href="/contact-us" className="underline underline-offset-2 hover:text-[#1d70b8]">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
