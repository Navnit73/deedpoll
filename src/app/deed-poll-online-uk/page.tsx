import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'deed-poll-online-uk';
const description =
  'Make a UK deed poll online without a solicitor. Compare free templates, a £7.99 ready-to-sign PDF and the £53.05 enrolled route, and see which one banks, DVLA and the Passport Office accept.';

export const metadata = guideMetadata(slug, 'Deed Poll Online UK: Free, £7.99 or Enrolled (2026 Compared)', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'Is an online deed poll legally valid in the UK?', a: 'Yes. An unenrolled deed poll is a private legal document and the law does not require a particular provider. It must clearly state your old and new names, declare that you will use the new name, and be signed and witnessed.' },
  { q: 'How old do I need to be?', a: 'You can make an unenrolled deed poll yourself from the age of 16. An enrolled deed poll is available to people aged 18 or over. Younger children need a parent or guardian to act for them.' },
  { q: 'What does an enrolled deed poll cost?', a: 'At the time of writing the court fee is £53.05, according to GOV.UK, on top of whatever you pay to prepare the document. Enrolment makes the change a public record and the details are published in The Gazette.' },
  { q: 'Do banks and other organisations accept an unenrolled deed poll?', a: 'Most do, including HM Passport Office and the DVLA. GOV.UK warns that some organisations, such as certain banks, mobile phone providers and energy suppliers, may only accept an enrolled one, so check before you start.' },
  { q: 'Is there an official certificate?', a: 'Not for an unenrolled deed poll. The signed document is your evidence. If you enrol it, you can ask for an official copy from the court.' },
  { q: 'Can I get it the same day?', a: 'You can generate and print a deed poll in minutes. The slowest part is finding an independent adult witness who is not a relative, which can often be done the same day.' },
  { q: 'Do I need a solicitor?', a: 'Not for a straightforward change. You may want one for an apostille, a complicated family situation or when an organisation insists on professional involvement.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Deed Poll Online"
      h1="Deed Poll Online UK: Which Option Is Right for You?"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          You can make a valid UK deed poll online in minutes. Most people use an <strong>unenrolled</strong> one: either a <Link href="/free-deed-poll-template-uk" className={link}>free template</Link> or a <strong>£7.99 ready-to-sign PDF</strong>. Choose <strong>enrolment (£53.05)</strong> only if an organisation specifically asks for it.
        </p>
      }
      toc={[
        ['compare', 'The three routes compared'],
        ['how', 'How to make one'],
        ['witness', 'Who can witness it'],
        ['accepted', 'Who accepts it'],
        ['enrolled', 'When to enrol'],
        ['mistakes', 'Common mistakes'],
      ]}
      faqs={faqs}
      related={[
        { href: '/free-deed-poll-template-uk', title: 'Free Deed Poll Template', note: 'Wording you can copy.' },
        { href: '/how-much-does-it-cost-to-change-your-name-uk', title: 'Cost of a Name Change', note: 'All the fees in one place.' },
        { href: '/deed-poll-apostille-uk', title: 'Deed Poll Apostille', note: 'If you need it abroad.' },
      ]}
      formHeading="Create your deed poll now"
      formIntro={<>Enter your old and new names exactly as you want them recorded. You will get a PDF to print, sign and have witnessed.</>}
    >
      <GuideSection id="compare" title="The three routes compared">
        <GuideTable
          head={['Route', 'Cost', 'Privacy', 'Best for']}
          rows={[
            ['Free template', 'Free', 'Private', 'Confident writers with a simple change'],
            ['Ready-made PDF (this site)', '£7.99', 'Private', 'A correctly worded document without the guesswork'],
            ['Enrolled deed poll', '£53.05 court fee plus preparation', 'Public, published in The Gazette', 'Organisations that insist on it'],
          ]}
        />
        <p>
          Prices from solicitors and commercial deed poll services vary, and most charge more than a self-made document. A paid service is mostly buying convenience, not extra legal power.
        </p>
      </GuideSection>

      <GuideSection id="how" title="How to make one">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Enter your current full name and the full new name you want.</li>
          <li>Download and print the deed poll.</li>
          <li>Sign it with your <strong>new</strong> name in front of an independent witness.</li>
          <li>Have the witness sign, print their name and add their address.</li>
          <li>Make photocopies if needed, but keep the signed original safe.</li>
          <li>Send it, with the forms for each organisation, using our <Link href="/checklist" className={link}>name change checklist</Link>.</li>
        </ol>
      </GuideSection>

      <GuideSection id="witness" title="Who can witness it">
        <p>
          Choose an adult who knows you, is not a relative and is not named in the document. A neighbour, colleague or friend is fine. They are confirming that they saw you sign, not that your name change is justified.
        </p>
      </GuideSection>

      <GuideSection id="accepted" title="Who accepts it">
        <p>
          The Passport Office, DVLA, HMRC, the Land Registry and most banks accept an unenrolled deed poll. A small number of banks, phone and energy companies prefer an enrolled one. Phone or message them first so you do not pay twice.
        </p>
      </GuideSection>

      <GuideSection id="enrolled" title="When to enrol">
        <p>
          Enrolment is optional, you must be 18 or over, and it publishes your name change and address in The Gazette. Think about privacy first. Read our guide to{' '}
          <Link href="/name-change/enrolled-vs-unenrolled-deed-poll-uk" className={link}>enrolled and unenrolled deed polls</Link>, or see{' '}
          <Link href="/deed-poll-apostille-uk" className={link}>deed poll apostille</Link> if you need to use it overseas.
        </p>
      </GuideSection>

      <GuideSection id="mistakes" title="Common mistakes">
        <ul className="list-disc pl-6 space-y-2">
          <li>Signing in the old name, or without a witness.</li>
          <li>Choosing a name with numbers, symbols or unusual punctuation, which official bodies may refuse.</li>
          <li>Trying to change a title (such as Mr or Dr). A deed poll cannot do that.</li>
          <li>Posting your only original and getting it lost.</li>
        </ul>
        <Callout tone="info">If something goes wrong, see <Link href="/my-deed-poll-was-rejected" className={link}>my deed poll was rejected</Link>.</Callout>
      </GuideSection>
    </GuideArticle>
  );
}
