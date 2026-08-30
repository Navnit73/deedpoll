import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';

export const metadata: Metadata = {
  title: "Child Deed Poll UK — Complete Legal Guide & Consent Form Template",
  description:
    "Learn how to legally change a child's name in the UK. Rules on parental responsibility, consent of both parents, absent fathers, and free child deed poll wording.",
  alternates: {
    canonical: "/child-deed-poll-uk",
    languages: {
      "en-GB": "/child-deed-poll-uk",
      "x-default": "/child-deed-poll-uk",
    },
  },
  openGraph: {
    title: "Child Deed Poll UK — Complete Legal Guide & Consent Form Template",
    description:
      "Learn how to legally change a child's name in the UK. Rules on parental responsibility, consent of both parents, absent fathers, and free child deed poll wording.",
    url: "https://deedpolluk.uk/child-deed-poll-uk",
    type: "article",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Child Deed Poll UK — Complete Legal Guide & Consent Form Template",
    description: "Learn how to legally change a child's name in the UK. Rules on parental responsibility, consent of both parents, and child deed poll template.",
  }
};

export default function ChildDeedPollPage() {
  const childDeedPollWording = `BY THIS DEED OF CHANGE OF NAME made by myself the undersigned [PARENT 1 FULL NAME] [and PARENT 2 FULL NAME] of [RESIDENTIAL ADDRESS] as parent(s) and person(s) having parental responsibility for [CHILD OLD FULL NAME] born on [CHILD DATE OF BIRTH] a British Citizen:

1. On behalf of the said [CHILD OLD FULL NAME] we ABSOLUTELY and entirely renounce, relinquish and abandon the use of his/her former name of [CHILD OLD FULL NAME] and assume, adopt and determine that he/she shall take and use from the date hereof the name of [CHILD NEW FULL NAME] in substitution for his/her former name.

2. We DECLARE that the said child shall at all times hereafter in all records, deeds, documents and proceedings use and be known by the name of [CHILD NEW FULL NAME].

3. We AUTHORISE and require all persons to describe and address the said child by such adopted name of [CHILD NEW FULL NAME] accordingly.

IN WITNESS WHEREOF we have signed this Deed this [DAY] day of [MONTH], [YEAR].

SIGNED AS A DEED by the said Parent(s):

Parent 1 Signature: ___________________________________
Parent 1 Full Name: [PARENT 1 FULL NAME]

Parent 2 Signature: ___________________________________ (if applicable)
Parent 2 Full Name: [PARENT 2 FULL NAME]

In the presence of:

WITNESS:
Signature: ____________________________________________
Full Name: [WITNESS FULL NAME]
Address: [WITNESS RESIDENTIAL ADDRESS]
Occupation: [WITNESS OCCUPATION]`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HowTo",
              "name": "How to Legally Change a Child's Name in the UK",
              "description": "Step-by-step instructions for changing a child's first name or surname by deed poll in the UK.",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Identify everyone with Parental Responsibility",
                  "text": "Determine who holds parental responsibility under UK law (mother, father on birth certificate, legal guardians)."
                },
                {
                  "@type": "HowToStep",
                  "name": "Obtain written consent",
                  "text": "Ensure all parties with parental responsibility sign the child deed poll or consent agreement."
                },
                {
                  "@type": "HowToStep",
                  "name": "Execute and witness the Deed Poll",
                  "text": "Print and sign the deed poll in front of an independent adult witness."
                },
                {
                  "@type": "HowToStep",
                  "name": "Update official records",
                  "text": "Submit the deed poll to the child's school, NHS GP, and HM Passport Office."
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can I change my child's surname without the father's consent in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If the father has Parental Responsibility (e.g. married to the mother, or named on a birth certificate registered after 1 December 2003 in England/Wales), his written consent is legally required. If consent cannot be obtained, you must apply to court for a Specific Issue Order."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can a 16-year-old change their name without parents?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. In the UK, anyone aged 16 or 17 can legally execute an adult deed poll to change their own name without requiring parental consent."
                  }
                }
              ]
            }
          ]
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#1d70b8] underline">Home</Link></li>
            <li>›</li>
            <li className="text-gray-900 font-semibold">Child Deed Poll UK</li>
          </ol>
        </nav>

        {/* H1 Header */}
        <div className="border-b-2 border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-indigo-100 text-indigo-800 font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
            UK Family Law Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b0c0c]">
            Child Deed Poll UK: How to Change a Child's Name Legally
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Everything you need to know about changing the first name, middle name, or surname of a child under 16 in England, Wales, Scotland, and Northern Ireland.
          </p>
        </div>

        {/* Key Rules Callout */}
        <div className="bg-blue-50 border-l-4 border-[#1d70b8] p-6 rounded-r-xl mb-10 text-gray-800">
          <h2 className="text-xl font-bold text-[#0b0c0c] mb-2">
            Essential Rules for Changing a Child's Name
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li><strong>Ages 0 to 15:</strong> The deed poll must be executed by the child's parents or legal guardians on their behalf.</li>
            <li><strong>Ages 16 and 17:</strong> The teenager can change their own name using a standard adult deed poll without parental consent.</li>
            <li><strong>Parental Responsibility (PR):</strong> Everyone who holds legal Parental Responsibility must agree and give their consent.</li>
          </ul>
        </div>

        {/* Who Has Parental Responsibility Section */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
            Who Has Legal Parental Responsibility in the UK?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Under UK law, Parental Responsibility determines who has the legal authority to consent to a child's name change:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h3 className="font-bold text-base text-[#0b0c0c] mb-2">👩 Mothers</h3>
              <p className="text-gray-600">
                A child's biological mother automatically acquires Parental Responsibility from birth and retains it unless removed by a court order.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h3 className="font-bold text-base text-[#0b0c0c] mb-2">👨 Fathers</h3>
              <p className="text-gray-600">
                A father has Parental Responsibility if:
              </p>
              <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-600">
                <li>He was married to the mother at the time of birth, OR</li>
                <li>He is named on the UK birth certificate (registered after 1 Dec 2003 in England/Wales, 15 April 2002 in NI, or 4 May 2006 in Scotland), OR</li>
                <li>He has a formal PR agreement or court order.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What if One Parent Disagrees or is Absent? */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0c0c]">
            What If the Other Parent Disagrees or is Absent?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            If the father (or second parent) has Parental Responsibility and does not give consent, or cannot be traced after reasonable efforts:
          </p>
          <div className="bg-amber-50 border border-amber-300 p-5 rounded-lg text-sm text-gray-800 space-y-2">
            <p><strong>Applying to Family Court (Specific Issue Order):</strong></p>
            <p>You can apply to the Family Court for a <em>Specific Issue Order</em> under Section 8 of the Children Act 1989 (Form C100). The court's paramount consideration will always be the best interests and welfare of the child.</p>
          </div>
        </section>

        {/* Child Deed Poll Legal Wording Template */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0b0c0c]">
            Child Deed Poll Legal Wording Template
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            You can copy and adapt this standard legal deed poll wording for a child under 16 in the UK:
          </p>

          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 font-mono text-xs sm:text-sm text-gray-900 whitespace-pre-wrap leading-relaxed shadow-inner select-all">
            {childDeedPollWording}
          </div>
        </section>

        {/* Share Widget */}
        <ShareWidget
          title="Child Deed Poll UK — Legal Guide & Parental Consent Rules"
          description="Everything you need to know about changing a child's name legally in the UK."
        />

        {/* Related Guides */}
        <section className="bg-gray-100 rounded-xl p-6 sm:p-8 mt-10 border border-gray-300">
          <h3 className="text-xl font-bold text-[#0b0c0c] mb-4">
            Related Name Change Guides
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-[#1d70b8]">
            <li>
              <Link href="/how-to-change-childs-surname-uk" className="hover:underline flex items-center gap-2">
                👶 How to Change a Child's Surname UK →
              </Link>
            </li>
            <li>
              <Link href="/how-to-change-name-on-birth-certificate-uk" className="hover:underline flex items-center gap-2">
                📜 Can You Change a Name on a Birth Certificate? →
              </Link>
            </li>
            <li>
              <Link href="/name-change-letters-generator" className="hover:underline flex items-center gap-2">
                ✉️ Free Name Change Letters Generator →
              </Link>
            </li>
            <li>
              <Link href="/change-name-in-uk-by-deedpoll" className="hover:underline flex items-center gap-2">
                ⚡ Adult Deed Poll Generator (16+) →
              </Link>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
