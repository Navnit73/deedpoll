import Link from 'next/link';

export const metadata = {
  title: "About Us | Deed Poll UK",
  description:
    "Who runs Deed Poll UK, what the site offers, and how we research and keep our UK name change and tax guides up to date.",
  alternates: {
    canonical: "/about-us",
    languages: {
      "en-GB": "/about-us",
      "x-default": "/about-us",
    },
  },
};

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Deed Poll UK</h1>

      <div className="prose prose-lg text-gray-800 space-y-6">
        <p>
          Deed Poll UK is an independent, free resource for people in the United Kingdom who want to change their name or
          get to grips with everyday tax and money admin. We are not a law firm and we are not connected to HM Passport
          Office, DVLA, HMRC or any other government body.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What we offer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A <Link href="/change-name-in-uk-by-deedpoll" className="text-[#1d70b8] underline underline-offset-2">free deed poll generator</Link>{" "}
            that creates a printable unenrolled deed poll in your browser.
          </li>
          <li>
            A <Link href="/name-change-letters-generator" className="text-[#1d70b8] underline underline-offset-2">letter generator</Link>{" "}
            and an <Link href="/checklist" className="text-[#1d70b8] underline underline-offset-2">interactive checklist</Link>{" "}
            for telling banks, employers and other organisations about your new name.
          </li>
          <li>
            UK calculators for take-home pay, National Insurance, Stamp Duty, mortgage affordability and working days.
          </li>
          <li>
            Plain-English guides on{" "}
            <Link href="/name-change" className="text-[#1d70b8] underline underline-offset-2">changing your name</Link>{" "}
            and on <Link href="/tax-money" className="text-[#1d70b8] underline underline-offset-2">UK tax and money</Link>.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">How we write and check our guides</h2>
        <p>
          Our guides are based on official sources, chiefly GOV.UK, HMRC, HM Passport Office, DVLA, National Records of
          Scotland and the Valuation Office Agency. Where rules differ between England, Wales, Scotland and Northern
          Ireland, we say so. Each guide shows when it was published and when it was last updated, and we review tax
          guides at the start of each new tax year on 6 April.
        </p>
        <p>
          Fees and thresholds change regularly, so we link to or name the official source where you can confirm the
          current figure. If you spot something that is out of date or wrong, please{" "}
          <Link href="/contact-us" className="text-[#1d70b8] underline underline-offset-2">tell us</Link> and we will
          correct it.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Not legal or financial advice</h2>
        <p>
          Our content is general information to help you understand the process. It is not legal or financial advice. For
          complex situations, such as disputed name changes for children or complicated tax affairs, speak to a
          solicitor, an accountant, or a free service such as Citizens Advice.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How the site is funded</h2>
        <p>
          The tools and guides are free to use. The site is supported by optional payments and by advertising. Adverts
          never affect what we write. See our{" "}
          <Link href="/privacy-policy" className="text-[#1d70b8] underline underline-offset-2">privacy policy</Link> for
          how cookies and ads work on this site.
        </p>
      </div>
    </div>
  );
}
