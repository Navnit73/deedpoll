import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'how-to-change-middle-name-uk';
const description =
  'Can you change your middle or second name in the UK? Yes. Learn how to add, remove, swap or reorder middle names with a deed poll, and which records to update.';

export const metadata = guideMetadata(slug, "Change Your Middle Name UK: Add, Remove or Swap", description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Can I change my middle name without changing my first name or surname?',
    a: 'Yes. A deed poll records your whole old name and your whole new name, so you simply keep your first name and surname the same and change only the middle part. The process is identical to any other name change.',
  },
  {
    q: 'Can I add a second middle name?',
    a: 'Yes. There is no legal limit on the number of middle names in the UK. Bear in mind that very long names can be awkward on forms and travel bookings, which often have character limits.',
  },
  {
    q: 'Can I just stop using my middle name instead?',
    a: 'You can choose not to use it day to day, but it remains part of your legal name and will still appear on your passport and other records. To remove it officially you need a deed poll.',
  },
  {
    q: 'Will my birth certificate show my new middle name?',
    a: 'No. A birth certificate is a historical record of the name you were registered with, so it is not reissued when an adult changes their name. Your deed poll plus your updated passport prove your current name.',
  },
  {
    q: 'Can I use my middle name as my first name?',
    a: 'Yes, informally you can be known by your middle name at any time. To make it your official first name, reorder your names on a deed poll and tick the box confirming you have changed your first name.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Change Your Middle Name"
      h1="How to Change Your Middle Name in the UK"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          Yes, you can change your middle (or <strong>second</strong>) name in the UK. Adding, removing, swapping or reordering middle names all use the same document: a <strong>deed poll</strong>. You can make one today, sign it in front of two witnesses, and then update your passport, driving licence and bank. No solicitor or court is needed for adults.
        </p>
      }
      toc={[
        ['second-name', '“Second name”: middle name or surname?'],
        ['what-you-can-do', 'What changes you can make'],
        ['steps', 'Step by step: changing your middle name'],
        ['maiden-name', 'Keeping your maiden name as a middle name'],
        ['records', 'Which records to update'],
        ['mistakes', 'Common mistakes to avoid'],
      ]}
      faqs={faqs}
      related={[
        { href: '/how-to-change-first-name-uk', title: 'How to Change Your First Name', note: 'Changing your forename instead?' },
        { href: '/how-to-change-surname-uk', title: 'How to Change Your Surname', note: 'If by “second name” you mean surname.' },
        { href: '/how-to-change-name-after-marriage-uk', title: 'Changing Your Name After Marriage', note: 'Using your marriage certificate.' },
      ]}
      formHeading="Create your middle name deed poll"
      formIntro={
        <>Enter your <strong>full</strong> old and new names, including every middle name. If you are only changing a middle name, leave the “first name” box unticked.</>
      }
    >
      <GuideSection id="second-name" title="“Second name”: middle name or surname?">
        <p>
          In the UK, “second name” is used in two different ways. Some people mean their <strong>middle name</strong> (the name between first name and surname). Others, especially on older forms, mean their <strong>surname</strong> or family name.
        </p>
        <p>
          This guide covers middle names. If you want to change your family name, see our guide on{' '}
          <Link href="/how-to-change-surname-uk" className={link}>how to change your surname</Link>. Either way, the legal document is the same: a deed poll that lists your full old name and your full new name.
        </p>
      </GuideSection>

      <GuideSection id="what-you-can-do" title="What changes you can make">
        <p>Adults (16 and over) can make any of these changes with one deed poll:</p>
        <GuideTable
          head={['Change', 'Example (old → new)', 'Tick “first name changed”?']}
          rows={[
            ['Add a middle name', 'Sarah Jones → Sarah Elizabeth Jones', 'No'],
            ['Remove a middle name', 'Sarah Elizabeth Jones → Sarah Jones', 'No'],
            ['Replace a middle name', 'Sarah Elizabeth Jones → Sarah Rose Jones', 'No'],
            ['Reorder middle names', 'Sarah Rose Ann Jones → Sarah Ann Rose Jones', 'No'],
            ['Promote middle name to first name', 'Sarah Elizabeth Jones → Elizabeth Sarah Jones', 'Yes'],
            ['Turn surname into a middle name', 'Sarah Jones → Sarah Jones Patel', 'No'],
          ]}
        />
        <p>
          Under-16s can change a middle name too, but everyone with parental responsibility must agree. See the{' '}
          <Link href="/child-deed-poll-uk" className={link}>child deed poll guide</Link>.
        </p>
      </GuideSection>

      <GuideSection id="steps" title="Step by step: changing your middle name">
        <ol className="space-y-5">
          {[
            ['Decide on your full new name', 'Write it out in full: first name, every middle name, then surname. This exact spelling will appear on your passport, so check it carefully.'],
            ['Create your deed poll', 'Use the form on this page. Put your complete old name in the first box and your complete new name in the second. Do not use initials or titles.'],
            ['Sign in front of two witnesses', 'Sign in both your old and new names. Your witnesses should be adults who are not relatives, and they sign with their own names and addresses.'],
            ['Print more than one original', 'Sign a few identical copies in the same sitting. Each one is an original, so you can send them to several organisations at once.'],
            ['Update your passport and driving licence', 'These two are the most useful proof of your new name. After that, other organisations usually accept them as evidence.'],
            ['Tell everyone else', 'Banks, HMRC, your employer, GP and so on. Our name change letters generator writes these letters for you.'],
          ].map(([step, body], idx) => (
            <li key={step} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1d70b8] text-white flex items-center justify-center font-bold text-sm">{idx + 1}</span>
              <div>
                <p className="font-bold text-gray-900">{step}</p>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <Callout tone="tip">
          <strong>Tip:</strong> moving your middle name to the front counts as changing your first name. Tick that box on the form, because some organisations check for it (<Link href="/faq#vaisey" className={link}>why?</Link>).
        </Callout>
      </GuideSection>

      <GuideSection id="maiden-name" title="Keeping your maiden name as a middle name">
        <p>
          A popular choice after marriage is to keep your birth surname as a middle name, for example <em>Emma Clarke</em> becoming <em>Emma Clarke Hughes</em>.
        </p>
        <p>
          Your marriage certificate shows that you are entitled to take your spouse’s surname. It does <strong>not</strong> show that you have added a new middle name. Most organisations, including HM Passport Office, will therefore ask for a deed poll for this kind of change. Making one up front saves your application from being sent back.
        </p>
        <p>
          For simply taking your spouse’s surname, see{' '}
          <Link href="/how-to-change-name-after-marriage-uk" className={link}>changing your name after marriage</Link>.
        </p>
      </GuideSection>

      <GuideSection id="records" title="Which records to update">
        <p>Your middle name is part of your legal name, so it needs to match everywhere that records your full name:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Passport</strong>: see our <Link href="/how-to-change-name-on-passport-uk" className={link}>passport name change guide</Link>.</li>
          <li><strong>Driving licence</strong>: free by post with a D1 form (<Link href="/change-name-on-driving-licence-dvla-uk" className={link}>DVLA guide</Link>).</li>
          <li><strong>Bank and credit cards</strong>, <strong>HMRC</strong>, your <strong>employer</strong> and <strong>pension</strong> providers.</li>
          <li><strong>GP/NHS</strong>, the <strong>electoral register</strong> and your <strong>university or professional body</strong>.</li>
        </ul>
        <p>
          Some services only store your first name and surname (many shops and utilities, for example). You do not need to contact them about a middle name change.
        </p>
      </GuideSection>

      <GuideSection id="mistakes" title="Common mistakes to avoid">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Leaving out middle names from the old name.</strong> Your old name must match your current passport exactly, including every middle name.</li>
          <li><strong>Using initials.</strong> “Sarah E. Jones” is not a full name. Write each name out in full.</li>
          <li><strong>Only listing the middle name.</strong> A deed poll for “Elizabeth → Rose” is not enough. Write out the whole name.</li>
          <li><strong>Ticking the first name box when you haven’t changed it</strong>, or not ticking it when you have.</li>
        </ul>
        <p>
          If an organisation has already turned down your document, our guide to{' '}
          <Link href="/my-deed-poll-was-rejected" className={link}>rejected deed polls</Link> explains how to fix it.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
