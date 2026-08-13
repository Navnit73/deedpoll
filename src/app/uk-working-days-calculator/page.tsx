import type { Metadata } from 'next';
import Link from 'next/link';
import WorkingDaysCalculator from '@/components/WorkingDaysCalculator';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'UK Working Days Calculator — Business Days & Bank Holidays 2025/2026',
  description:
    'Calculate working days (business days) between two dates in the UK or add/subtract business days. Includes official bank holiday schedules for England, Scotland & Northern Ireland.',
  alternates: {
    canonical: '/uk-working-days-calculator',
    languages: {
      'en-GB': '/uk-working-days-calculator',
      'x-default': '/uk-working-days-calculator',
    },
  },
  openGraph: {
    title: 'UK Working Days Calculator — Business Days & Bank Holidays 2025/2026',
    description:
      'Free UK working days (business days) calculator. Calculate business days between dates or target completion dates accounting for weekends and UK Bank Holidays.',
    url: 'https://deedpolluk.uk/uk-working-days-calculator',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Working Days Calculator — Calculate Business Days & Bank Holidays',
    description:
      'Free real-time UK business days calculator. Calculate notice periods, invoice payment terms, and government turnaround times taking into account regional bank holidays.',
  },
};

export default function UkWorkingDaysCalculatorPage() {
  return (
    <div className="bg-white">
      {/* BREADCRUMB & HERO */}
      <section className="bg-gray-50 border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs sm:text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline text-[#1d70b8]">
                  Home
                </Link>
              </li>
              <li><span>/</span></li>
              <li className="text-gray-800 font-medium">UK Working Days Calculator</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-gray-200 text-[#0b0c0c] text-xs sm:text-sm font-bold px-3 py-1 mb-3 rounded">
              UK Business & Legal Tools
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0c0c] tracking-tight mb-4">
              UK Working Days Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Calculate the exact number of working days between two dates or add business days to a starting date. Automatically accounts for weekends and official Bank Holidays across England, Wales, Scotland, and Northern Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WorkingDaysCalculator />
      </section>

      {/* EDUCATIONAL & SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-base sm:text-lg">
        {/* WHAT IS A UK WORKING DAY */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4">
          What is Defined as a Working Day in the UK?
        </h2>
        <p className="mb-4 text-gray-800">
          In the United Kingdom, a <strong>working day</strong> (also referred to as a <em>business day</em>) is defined as any day from <strong>Monday to Friday</strong>, excluding Saturdays, Sundays, and official public Bank Holidays.
        </p>
        <p className="mb-6 text-gray-800">
          Working day calculations are essential when managing employment notice periods, statutory contract cooling-off periods, BACS bank transfer clearing times, HMRC tax filing deadlines, and government document processing times.
        </p>

        {/* BANK HOLIDAYS SCHEDULE TABLE 2025/2026 */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Official UK Bank Holidays Schedule 2025 / 2026
        </h2>
        <p className="mb-4 text-gray-800">
          Bank holidays vary across the UK's home nations. Below is the official schedule of public holidays observed across England & Wales, Scotland, and Northern Ireland.
        </p>

        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1d70b8] text-white">
              <tr>
                <th className="p-3 font-bold">Bank Holiday</th>
                <th className="p-3 font-bold">2025 Date</th>
                <th className="p-3 font-bold">2026 Date</th>
                <th className="p-3 font-bold">Regions Applicable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">New Year's Day</td>
                <td className="p-3">Wed 1 Jan 2025</td>
                <td className="p-3">Thu 1 Jan 2026</td>
                <td className="p-3 font-bold text-[#1d70b8]">All UK Regions</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">2nd January</td>
                <td className="p-3">Thu 2 Jan 2025</td>
                <td className="p-3">Fri 2 Jan 2026</td>
                <td className="p-3 font-bold text-[#00703c]">Scotland Only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">St Patrick's Day</td>
                <td className="p-3">Mon 17 Mar 2025</td>
                <td className="p-3">Tue 17 Mar 2026</td>
                <td className="p-3 font-bold text-amber-700">Northern Ireland Only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Good Friday</td>
                <td className="p-3">Fri 18 Apr 2025</td>
                <td className="p-3">Fri 3 Apr 2026</td>
                <td className="p-3 font-bold text-[#1d70b8]">All UK Regions</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Easter Monday</td>
                <td className="p-3">Mon 21 Apr 2025</td>
                <td className="p-3">Mon 6 Apr 2026</td>
                <td className="p-3">England, Wales, NI</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Early May Bank Holiday</td>
                <td className="p-3">Mon 5 May 2025</td>
                <td className="p-3">Mon 4 May 2026</td>
                <td className="p-3 font-bold text-[#1d70b8]">All UK Regions</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Spring Bank Holiday</td>
                <td className="p-3">Mon 26 May 2025</td>
                <td className="p-3">Mon 25 May 2026</td>
                <td className="p-3 font-bold text-[#1d70b8]">All UK Regions</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Battle of the Boyne / Orangemen's Day</td>
                <td className="p-3">Mon 14 Jul 2025 (sub)</td>
                <td className="p-3">Mon 13 Jul 2026 (sub)</td>
                <td className="p-3 font-bold text-amber-700">Northern Ireland Only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Summer Bank Holiday (Scotland)</td>
                <td className="p-3">Mon 4 Aug 2025</td>
                <td className="p-3">Mon 3 Aug 2026</td>
                <td className="p-3 font-bold text-[#00703c]">Scotland Only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Summer Bank Holiday</td>
                <td className="p-3">Mon 25 Aug 2025</td>
                <td className="p-3">Mon 31 Aug 2026</td>
                <td className="p-3">England, Wales, NI</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">St Andrew's Day</td>
                <td className="p-3">Mon 1 Dec 2025 (sub)</td>
                <td className="p-3">Mon 30 Nov 2026</td>
                <td className="p-3 font-bold text-[#00703c]">Scotland Only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Christmas Day</td>
                <td className="p-3">Thu 25 Dec 2025</td>
                <td className="p-3">Fri 25 Dec 2026</td>
                <td className="p-3 font-bold text-[#1d70b8]">All UK Regions</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Boxing Day</td>
                <td className="p-3">Fri 26 Dec 2025</td>
                <td className="p-3">Mon 28 Dec 2026 (sub)</td>
                <td className="p-3 font-bold text-[#1d70b8]">All UK Regions</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SUBSTITUTE DAYS RULE */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-5 my-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-2">
            Substitute Bank Holidays Rule
          </h3>
          <p className="text-gray-800 text-base">
            When a fixed public holiday (such as Christmas Day, Boxing Day, or New Year's Day) falls on a weekend (Saturday or Sunday), a <strong>substitute weekday</strong>—usually the following Monday—is officially designated as a bank holiday in lieu.
          </p>
        </div>

        {/* COMMON UK TURNAROUND TIMES */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-4 mt-10">
          Typical UK Turnaround & Notice Period Benchmarks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-[#1d70b8] mb-1">UK Passport Renewal</h3>
            <p className="text-sm text-gray-700">Standard online service takes approximately <strong>15 to 20 working days</strong> (3 to 4 weeks).</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-[#1d70b8] mb-1">DVLA Driving Licence Update</h3>
            <p className="text-sm text-gray-700">Updating address or name online takes around <strong>5 to 10 working days</strong>.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-[#1d70b8] mb-1">HM Land Registry Title Updates</h3>
            <p className="text-sm text-gray-700">Property register updates usually take <strong>20 to 30 working days</strong>.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-[#1d70b8] mb-1">Deed Poll Processing</h3>
            <p className="text-sm text-gray-700">Official Deed Poll documents are dispatched within <strong>1 to 2 working days</strong>.</p>
          </div>
        </div>

        {/* CROSS-LINKING TO DEED POLL */}
        <div className="bg-[#f3f2f1] border-2 border-[#1d70b8] p-6 rounded-xl my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#0b0c0c] mb-1">
              Need to Change Your Name in the UK?
            </h3>
            <p className="text-sm text-gray-700">
              Create an official adult or child Deed Poll document accepted by HM Passport Office, DVLA, banks, and HMRC.
            </p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Create Deed Poll Free →
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c] mb-6">
            Frequently Asked Questions — UK Working Days
          </h2>
          <div className="space-y-6 text-sm sm:text-base">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                Is Good Friday a working day in the UK?
              </h3>
              <p className="text-gray-700">
                No, Good Friday is an official public bank holiday across all nations of the United Kingdom (England, Wales, Scotland, and Northern Ireland) and is excluded from working day counts.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                How many working days are in a month in the UK?
              </h3>
              <p className="text-gray-700">
                On average, a standard calendar month in the UK contains <strong>20 to 22 working days</strong>, depending on weekends and public bank holidays in that specific month.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg text-[#0b0c0c] mb-1">
                Does a 20 working day notice period include weekends?
              </h3>
              <p className="text-gray-700">
                No, a 20 working day notice period only counts business days (Monday to Friday, excluding bank holidays). In calendar time, 20 working days typically spans <strong>4 full weeks (28 calendar days)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://deedpolluk.uk/uk-working-days-calculator/#webpage',
              url: 'https://deedpolluk.uk/uk-working-days-calculator',
              name: 'UK Working Days Calculator — Business Days & Bank Holidays 2025/2026',
              description:
                'Free UK working days calculator. Calculate business days between dates or target completion dates considering bank holidays in England, Scotland, and Northern Ireland.',
              inLanguage: 'en-GB',
            },
            {
              '@type': 'WebApplication',
              '@id': 'https://deedpolluk.uk/uk-working-days-calculator/#calculator',
              name: 'UK Working Days Calculator',
              url: 'https://deedpolluk.uk/uk-working-days-calculator',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0.00',
                priceCurrency: 'GBP',
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is Good Friday a working day in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No, Good Friday is an official bank holiday across all UK nations and is not counted as a working day.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How many working days are in a standard month in the UK?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'There are typically 20 to 22 working days in a month in the UK.',
                  },
                },
              ],
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://deedpolluk.uk',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'UK Working Days Calculator',
                  item: 'https://deedpolluk.uk/uk-working-days-calculator',
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
