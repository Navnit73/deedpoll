import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'name-change-solicitor-uk';
const description =
  'Most UK adults do not need a solicitor or court order to change their name. Find out when a name change solicitor is worth paying for, what they cost, and how to find one.';

export const metadata = guideMetadata(slug, 'Name Change Solicitor UK: Do You Need One?', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Is a deed poll from a solicitor more legal than one I make myself?',
    a: 'No. A deed poll is valid because of its wording, your signature and your witnesses, not because of who typed it. A correctly worded DIY or online deed poll has exactly the same legal effect as one prepared by a solicitor.',
  },
  {
    q: 'What is the difference between a name change lawyer, attorney and solicitor?',
    a: '“Attorney” and “lawyer” are terms used mainly in the US. In England and Wales the person you would instruct for a name change is a solicitor. Scotland and Northern Ireland also use solicitors, regulated by their own Law Societies.',
  },
  {
    q: 'Do I need a court order to change my name as an adult?',
    a: 'No. Adults in the UK never need a court order to change their own name. Court orders are only relevant when there is a dispute about changing a child’s name.',
  },
  {
    q: 'Can a solicitor witness my deed poll?',
    a: 'Yes, but they do not have to. Any independent adult who is not a relative can witness a deed poll. A solicitor or Commissioner for Oaths is only required for a statutory declaration.',
  },
  {
    q: 'Can I get legal aid for a child name change dispute?',
    a: 'Legal aid for private family disputes is limited, but it may be available in some cases, for example where there is evidence of domestic abuse. Check your eligibility on GOV.UK or with a legal aid solicitor.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Name Change Solicitors"
      h1="Do You Need a Solicitor to Change Your Name in the UK?"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          <strong>Usually not.</strong> Adults in the UK can change their name with a deed poll they create and sign themselves, and banks, the DVLA and HM Passport Office accept it. A name change solicitor is mainly worth paying for if <strong>parents disagree about a child’s name</strong> (which may need a court order), if you need a <strong>statutory declaration</strong>, or if your situation involves immigration or safeguarding issues.
        </p>
      }
      toc={[
        ['no-solicitor', 'Why most people don’t need a solicitor'],
        ['when', 'When a solicitor is worth it'],
        ['court-order', 'Court order name changes'],
        ['costs', 'Solicitor vs DIY: what it costs'],
        ['find', 'How to find a name change solicitor'],
      ]}
      faqs={faqs}
      related={[
        { href: '/deed-poll-vs-statutory-declaration-uk', title: 'Deed Poll vs Statutory Declaration', note: 'Which document do you need?' },
        { href: '/how-to-change-childs-surname-uk', title: 'Changing a Child’s Surname', note: 'Consent rules for parents.' },
        { href: '/name-change/enrolled-vs-unenrolled-deed-poll-uk', title: 'Enrolled vs Unenrolled Deed Poll', note: 'Is enrolment worth it?' },
      ]}
      formHeading="Make your deed poll yourself, no solicitor needed"
      formIntro={<>For most adults this is all you need. Fill in your details, preview the document, then sign it in front of two witnesses.</>}
    >
      <GuideSection id="no-solicitor" title="Why most people don’t need a solicitor">
        <p>
          In England and Wales you can use any name you like, provided it isn’t for a fraudulent purpose. A deed poll is simply your written evidence that you have dropped your old name and adopted a new one. The law does not require a solicitor to draft it, witness it or approve it.
        </p>
        <p>To be accepted, a deed poll needs to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>state your full old name and full new name,</li>
          <li>include a declaration that you give up your old name and will use your new one for all purposes,</li>
          <li>be dated and signed by you in both names, and</li>
          <li>be signed by two independent adult witnesses with their names and addresses.</li>
        </ul>
        <p>
          The form on this page produces wording that meets HM Passport Office requirements. If you would rather write it yourself, our{' '}
          <Link href="/free-deed-poll-template-uk" className={link}>free deed poll template</Link> gives you the standard text.
        </p>
      </GuideSection>

      <GuideSection id="when" title="When a solicitor is worth it">
        <GuideTable
          head={['Situation', 'Do you need a solicitor?']}
          rows={[
            ['Adult changing their own name', 'No. Use a deed poll.'],
            ['Changing name after marriage or divorce', 'No. Use your certificate or final order.'],
            ['Child’s name, all parents agree', 'No. Use a child deed poll signed by everyone with parental responsibility.'],
            ['Child’s name, a parent objects or can’t be found', 'Strongly advised. You may need a court order.'],
            ['You need a statutory declaration', 'It must be sworn before a solicitor, Commissioner for Oaths or similar.'],
            ['Enrolling a deed poll at the Royal Courts of Justice', 'Optional. Some people use one for the supporting paperwork.'],
            ['Immigration, visa or nationality paperwork', 'Advisable if the Home Office is involved.'],
            ['Changing name to escape an abusive relationship', 'Advisable. A solicitor can help keep your new details confidential.'],
          ]}
        />
      </GuideSection>

      <GuideSection id="court-order" title="Court order name changes">
        <p>
          A court order is <strong>only</strong> needed to change a child’s name when the people with parental responsibility cannot agree. In England and Wales the usual route is:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Try mediation first.</strong> In most cases you must attend a Mediation Information and Assessment Meeting (MIAM) before applying to court.</li>
          <li><strong>Apply to the family court</strong> for a <em>Specific Issue Order</em> using form C100. A court fee applies, though help with fees may be available.</li>
          <li><strong>The court decides</strong> based on the child’s welfare, including their age, their wishes and their links to each parent.</li>
        </ol>
        <p>
          A parent can also apply for a <em>Prohibited Steps Order</em> to stop a change they disagree with. Courts treat a child’s surname as an important matter, so legal advice is worth getting at this stage.
        </p>
        <Callout tone="info">
          Adults never need a court order to change their own name. If someone tells you otherwise, they are probably thinking of the US, where many states require one.
        </Callout>
      </GuideSection>

      <GuideSection id="costs" title="Solicitor vs DIY: what it costs">
        <GuideTable
          head={['Route', 'Typical cost', 'Time']}
          rows={[
            ['DIY deed poll', 'Free', 'Minutes'],
            ['Online deed poll service (like ours)', 'Small one-off fee', 'Minutes'],
            ['Statutory declaration sworn before a solicitor', 'Small fixed swearing fee per declaration', 'One appointment'],
            ['Solicitor-drafted deed poll', 'Usually £100+ depending on firm and location', 'Days'],
            ['Contested child name change (court)', 'Often thousands if solicitors represent you throughout', 'Months'],
          ]}
        />
        <p className="text-sm text-gray-500">
          Solicitor fees vary widely. Always ask for a fixed-fee quote in writing. For document update costs such as passports, see{' '}
          <Link href="/how-much-does-it-cost-to-change-your-name-uk" className={link}>how much it costs to change your name</Link>.
        </p>
      </GuideSection>

      <GuideSection id="find" title="How to find a name change solicitor near you">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>England &amp; Wales:</strong> use the Law Society’s{' '}
            <a href="https://solicitors.lawsociety.org.uk/" target="_blank" rel="noopener noreferrer" className={link}>Find a Solicitor</a>{' '}
            and filter by “family” or “children” law for child disputes.
          </li>
          <li><strong>Scotland:</strong> the Law Society of Scotland’s directory.</li>
          <li><strong>Northern Ireland:</strong> the Law Society of Northern Ireland’s directory.</li>
        </ul>
        <p>Questions to ask before you instruct anyone:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Is this a fixed fee, and what exactly does it include?</li>
          <li>Are you regulated by the Solicitors Regulation Authority (or equivalent)?</li>
          <li>Do I actually need you, or could I do this myself with a deed poll?</li>
        </ul>
        <p>A good solicitor will tell you honestly if a simple deed poll is enough.</p>
      </GuideSection>
    </GuideArticle>
  );
}
