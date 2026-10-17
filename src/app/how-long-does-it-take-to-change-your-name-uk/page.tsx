import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'how-long-does-it-take-to-change-your-name-uk';
const description =
  'Your name changes legally the day you sign your deed poll. See how long the passport, DVLA, bank and HMRC updates take, and the order that gets you finished fastest.';

export const metadata = guideMetadata(slug, "How Long Does a Name Change Take? UK Timeline", description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Is my name changed as soon as I sign the deed poll?',
    a: 'Yes. Once you have signed and dated your deed poll in front of your witnesses, your new name is your legal name. The rest of the process is about updating records so they match.',
  },
  {
    q: 'Can I travel abroad while my name change is in progress?',
    a: 'Yes, but book your tickets in the name shown on the passport you will travel with. If you send your passport off to be updated, you cannot travel until the new one arrives, so avoid applying shortly before a trip.',
  },
  {
    q: 'How long does it take to change your name after marriage?',
    a: 'You can start straight away using your marriage certificate. You don’t need a deed poll, so the timeline is the same as updating your records: usually a few weeks in total, mostly waiting for the passport and driving licence.',
  },
  {
    q: 'Does enrolling a deed poll make the process quicker?',
    a: 'No, it makes it slower. Enrolment is optional and you have to wait for the court to process it before you get the enrolled copy back. Most people use an unenrolled deed poll, which they can use the same day.',
  },
  {
    q: 'How long do I have to update my records after changing my name?',
    a: 'There is no legal deadline for most records, but you must tell the DVLA when your name changes, and you should update your passport before you next travel. Updating everything promptly avoids identity checks failing.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="How Long a Name Change Takes"
      h1="How Long Does It Take to Change Your Name in the UK?"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          The legal change is <strong>instant</strong>: your name changes the day you sign your deed poll. Updating your records takes longer, and most people are fully finished in <strong>4–8 weeks</strong>. The slowest steps are usually your <strong>passport</strong> and <strong>driving licence</strong>. Most other organisations update within days.
        </p>
      }
      toc={[
        ['legal-change', 'The legal change: same day'],
        ['timeline', 'How long each update takes'],
        ['order', 'The fastest order to do things'],
        ['speed-up', '5 ways to speed it up'],
        ['delays', 'What causes delays'],
      ]}
      faqs={faqs}
      related={[
        { href: '/name-change/who-to-notify-after-changing-your-name-uk', title: 'Who to Notify After a Name Change', note: 'The complete list.' },
        { href: '/how-to-change-name-on-passport-uk', title: 'Change Your Name on a Passport', note: 'Fees and service options.' },
        { href: '/documents-needed-for-name-change-uk', title: 'Documents Needed for a Name Change', note: 'Get your paperwork right first time.' },
      ]}
      formHeading="Start your name change today"
      formIntro={<>The clock starts when you sign. Create your deed poll now, print it, and sign it with your witnesses today.</>}
    >
      <GuideSection id="legal-change" title="The legal change: same day">
        <p>
          In the UK there is no application to approve and no waiting period. You can create a deed poll in a few minutes, and once you have signed it in front of two witnesses it takes effect immediately.
        </p>
        <GuideTable
          head={['How you change your name', 'Time until you can use it']}
          rows={[
            ['Unenrolled deed poll', 'Same day'],
            ['Marriage or civil partnership certificate', 'From the day of the ceremony'],
            ['Divorce: final order / decree absolute', 'From the date on the order'],
            ['Statutory declaration', 'Same day as your appointment'],
            ['Enrolled deed poll (Royal Courts of Justice)', 'Several weeks while the court processes it'],
            ['Child deed poll', 'Same day, once everyone with parental responsibility has signed'],
          ]}
        />
      </GuideSection>

      <GuideSection id="timeline" title="How long each update takes">
        <p>Each organisation works to its own timescale. These are typical waits once they have received everything they need:</p>
        <GuideTable
          head={['Record', 'Typical time', 'Notes']}
          rows={[
            ['Passport (HM Passport Office)', 'Around 3 weeks; longer by post or if extra checks are needed', 'Fast Track is available for an extra fee'],
            ['Driving licence (DVLA)', 'Around 3 weeks', 'By post with a D1 form; free'],
            ['Vehicle log book (V5C)', 'A few weeks', 'Free'],
            ['Bank accounts and cards', 'Same day to 2 weeks', 'New cards follow in the post'],
            ['HMRC and National Insurance', 'Days to update, a few weeks for letters', 'Also tell your employer'],
            ['Employer and payroll', 'Next pay run', 'Payslips should match HMRC'],
            ['GP / NHS', '1–4 weeks', 'Through your GP surgery'],
            ['Electoral register', 'At the next monthly update', 'Through your local council'],
            ['Utilities, mobile, subscriptions', 'Minutes to days', 'Often online'],
          ]}
        />
        <p className="text-sm text-gray-500">Timings are typical, not guaranteed. Check GOV.UK for current passport and DVLA processing times before you travel.</p>
      </GuideSection>

      <GuideSection id="order" title="The fastest order to do things">
        <p>Many organisations ask for photo ID in your new name, so doing things in the right order saves weeks:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Day 1:</strong> sign your deed poll (or gather your marriage certificate or final order).</li>
          <li><strong>Week 1:</strong> apply for your <Link href="/how-to-change-name-on-passport-uk" className={link}>passport</Link> and <Link href="/change-name-on-driving-licence-dvla-uk" className={link}>driving licence</Link> at the same time. This needs two original documents (see below).</li>
          <li><strong>Week 1:</strong> update your bank, HMRC and employer using your deed poll. Most don’t need new photo ID.</li>
          <li><strong>Weeks 2–4:</strong> work through everything else: GP, council, pensions, insurance, utilities.</li>
          <li><strong>When ID arrives:</strong> update anyone who insisted on photo ID in your new name.</li>
        </ol>
      </GuideSection>

      <GuideSection id="speed-up" title="5 ways to speed it up">
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Sign several originals in one sitting.</strong> Identical copies signed together with the same witnesses are all originals, so you can post to the Passport Office and DVLA at the same time.</li>
          <li><strong>Get the wording right first time.</strong> A rejected deed poll can add weeks. Ours follows HM Passport Office guidance.</li>
          <li><strong>Send letters in one batch.</strong> Our <Link href="/name-change-letters-generator" className={link}>name change letters generator</Link> writes them for every organisation in one go.</li>
          <li><strong>Use online account settings</strong> wherever they’re offered. Utilities, phone companies and retailers often change your name instantly.</li>
          <li><strong>Keep a checklist</strong> of who you’ve told. See <Link href="/name-change/who-to-notify-after-changing-your-name-uk" className={link}>who to notify</Link>.</li>
        </ul>
      </GuideSection>

      <GuideSection id="delays" title="What causes delays">
        <ul className="list-disc pl-6 space-y-2">
          <li>Your old name on the deed poll doesn’t exactly match your current passport.</li>
          <li>Witness names or addresses are missing or illegible.</li>
          <li>You sent a photocopy where an original or certified copy was required.</li>
          <li>You changed your first name without the extra declaration some organisations look for.</li>
          <li>You chose to enrol the deed poll, and are waiting for the court.</li>
        </ul>
        <Callout tone="warn">
          <strong>Travelling soon?</strong> Don’t send your passport off within a few weeks of a trip. Book flights in the name on the passport you will actually travel with.
        </Callout>
      </GuideSection>
    </GuideArticle>
  );
}
