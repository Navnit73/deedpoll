import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'documents-needed-for-name-change-uk';
const description =
  'The exact paperwork you need to change your name in the UK: what a change of name deed must contain, which proof to use for your situation, and what each organisation asks for.';

export const metadata = guideMetadata(slug, "Documents Needed for a Name Change UK (Checklist)", description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Is a “change of name deed” the same as a deed poll?',
    a: 'Yes. “Change of name deed”, “deed of change of name” and “deed poll” all describe the same document: a signed, witnessed declaration that you have given up your old name and adopted a new one.',
  },
  {
    q: 'Will organisations accept a photocopy of my deed poll?',
    a: 'Some will, especially for low-risk records like utilities or your GP. HM Passport Office, the DVLA and most banks want an original or a certified copy. Signing several identical originals at once avoids the problem.',
  },
  {
    q: 'Do I need my birth certificate to change my name?',
    a: 'Not usually. Most organisations need your name change document plus your existing ID. A birth certificate may be asked for if you have no passport or driving licence, or for your first adult passport.',
  },
  {
    q: 'Who can certify a copy of my deed poll?',
    a: 'A solicitor or notary can certify copies. Some organisations also accept copies certified by other professionals. Check what each organisation will accept before you pay for certification.',
  },
  {
    q: 'Will I get my original documents back?',
    a: 'HM Passport Office and the DVLA return original documents, usually separately from your new passport or licence. Banks normally copy them in branch and hand them back.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Name Change Documents"
      h1="Documents Needed for a Name Change in the UK"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          You need <strong>one document that proves the change</strong> and <strong>one that proves who you are</strong>. For most people the proof is a <strong>deed poll</strong> (also called a change of name deed). After marriage it is your marriage certificate; after divorce, your final order. Your ID is normally your current passport or driving licence in your old name.
        </p>
      }
      toc={[
        ['change-of-name-deed', 'What a change of name deed must include'],
        ['by-situation', 'Which document proves your change'],
        ['by-organisation', 'What each organisation asks for'],
        ['originals', 'Originals, copies and certified copies'],
        ['checklist', 'Your printable paperwork checklist'],
      ]}
      faqs={faqs}
      related={[
        { href: '/name-change/who-to-notify-after-changing-your-name-uk', title: 'Who to Notify After a Name Change', note: 'Every organisation to tell.' },
        { href: '/deed-poll-vs-statutory-declaration-uk', title: 'Deed Poll vs Statutory Declaration', note: 'Choosing your proof document.' },
        { href: '/my-deed-poll-was-rejected', title: 'My Deed Poll Was Rejected', note: 'How to fix a refused document.' },
      ]}
      formHeading="Create your change of name deed"
      formIntro={<>Our deed poll includes every element HM Passport Office expects. Preview it free before you download.</>}
    >
      <GuideSection id="change-of-name-deed" title="What a change of name deed must include">
        <p>
          A deed poll is the official name change paperwork for most UK adults. HM Passport Office will only accept one that contains all of the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your <strong>full old name</strong>, exactly as it appears on your current ID.</li>
          <li>Your <strong>full new name</strong>, with no titles or initials.</li>
          <li>A declaration that you <strong>give up your old name</strong> and will <strong>use the new name for all purposes</strong>.</li>
          <li>A statement that you will ask everyone to call you by your new name.</li>
          <li>The <strong>date</strong>, and your <strong>signature in both names</strong>.</li>
          <li>Signatures, full names and addresses of <strong>two independent adult witnesses</strong>.</li>
        </ul>
        <p>
          The form on this page fills in this wording for you. If you would rather type it yourself, use our{' '}
          <Link href="/free-deed-poll-template-uk" className={link}>free deed poll template</Link>.
        </p>
      </GuideSection>

      <GuideSection id="by-situation" title="Which document proves your change">
        <GuideTable
          head={['Your situation', 'Document you need']}
          rows={[
            ['Taking spouse’s or partner’s surname', 'Marriage or civil partnership certificate'],
            ['Double-barrelling after marriage', 'Marriage certificate (some organisations may ask for a deed poll)'],
            ['Keeping maiden name as a middle name', 'Deed poll'],
            ['Going back to your old name after divorce', 'Final order / decree absolute, plus marriage certificate'],
            ['Any other change (first, middle or surname)', 'Deed poll or statutory declaration'],
            ['Changing a child’s name (under 16)', 'Child deed poll with consent from everyone with parental responsibility'],
          ]}
        />
        <p>
          For detail on each route see{' '}
          <Link href="/how-to-change-name-after-marriage-uk" className={link}>changing your name after marriage</Link>,{' '}
          <Link href="/name-change/change-name-after-divorce-uk" className={link}>after divorce</Link> and the{' '}
          <Link href="/child-deed-poll-uk" className={link}>child deed poll guide</Link>.
        </p>
      </GuideSection>

      <GuideSection id="by-organisation" title="What each organisation asks for">
        <GuideTable
          head={['Organisation', 'What to send or show']}
          rows={[
            ['HM Passport Office', 'Original name change document, current passport, new photo, application'],
            ['DVLA (driving licence)', 'Form D1, current licence, original name change document'],
            ['DVLA (V5C log book)', 'Completed section of the V5C; no extra proof normally needed'],
            ['Bank or building society', 'Original or certified name change document plus ID, usually in branch'],
            ['HMRC', 'Usually just tell them online or by phone; no document needed'],
            ['Employer', 'A copy of your name change document for HR and payroll'],
            ['GP / NHS', 'Tell your surgery; some ask to see the document'],
            ['Utilities and subscriptions', 'Often nothing, or a scanned copy'],
          ]}
        />
        <p className="text-sm text-gray-500">Requirements change from time to time. Check each organisation’s current guidance before you post original documents.</p>
      </GuideSection>

      <GuideSection id="originals" title="Originals, copies and certified copies">
        <p>
          A deed poll is unusual: if you and your witnesses sign several identical copies at the same sitting, <strong>every copy is an original</strong>. Printing and signing 4–6 copies lets you deal with the Passport Office, DVLA and banks at the same time instead of waiting for documents to come back.
        </p>
        <p>
          Marriage certificates and divorce orders are different. You can order extra certified copies from the register office or court that issued them.
        </p>
        <Callout tone="tip">
          <strong>Tip:</strong> keep at least one original deed poll at home permanently. You may need it years later, for example when applying for a mortgage or pension.
        </Callout>
      </GuideSection>

      <GuideSection id="checklist" title="Your printable paperwork checklist">
        <ul className="space-y-2">
          {[
            'Name change document (deed poll, marriage certificate or final order)',
            'Several signed originals or certified copies',
            'Current passport in your old name',
            'Current driving licence in your old name',
            'Recent passport photo (for your passport application)',
            'Form D1 from the Post Office or DVLA',
            'Proof of address, in case your bank asks',
            'A list of organisations to notify',
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="mt-1 w-4 h-4 border-2 border-gray-700 rounded-sm flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GuideSection>
    </GuideArticle>
  );
}
