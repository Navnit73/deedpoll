import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'what-is-a-legal-name-uk';
const description =
  'What counts as your legal name in the UK? Learn whether it includes middle names, which document proves it, what to write on forms, and how to officially change it.';

export const metadata = guideMetadata(slug, "What Is a Legal Name in the UK? Meaning & Examples", description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Is my legal name the one on my birth certificate?',
    a: 'Not necessarily. A birth certificate records the name you were registered with at birth. If you have since changed your name by marriage or deed poll, your legal name is your new name, even though your birth certificate stays the same.',
  },
  {
    q: 'Does my legal name include my middle name?',
    a: 'Yes. Your full legal name is your first name, every middle name and your surname, exactly as they appear on your passport. When a form asks for your full legal name, include all of them.',
  },
  {
    q: 'Is a nickname or “known as” name a legal name?',
    a: 'No. You can use a nickname or shortened name socially and at work, but it is not your legal name unless you formally adopt it, usually with a deed poll.',
  },
  {
    q: 'What name should I use when booking flights?',
    a: 'Use your name exactly as it appears on the passport you will travel with, including middle names if the airline asks for them. A mismatch can stop you boarding.',
  },
  {
    q: 'Can I have two legal names?',
    a: 'No. You can only have one legal name at a time. A deed poll includes a declaration that you have given up your old name, which is why using both names afterwards can cause problems.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="What Is a Legal Name?"
      h1="What Is Your Legal Name in the UK?"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          Your <strong>legal name</strong> is the full name you use for all official purposes: your <strong>first name, any middle names and your surname</strong>. In practice it is the name printed on your <strong>passport</strong>. The UK has no central register of names, so your legal name is whatever you use consistently. You can officially change it with a deed poll, marriage certificate or divorce order.
        </p>
      }
      toc={[
        ['meaning', 'What “legal name” means in the UK'],
        ['includes', 'What is and isn’t part of your legal name'],
        ['proof', 'Which document proves your legal name'],
        ['forms', 'What to write on forms'],
        ['mismatch', 'When your names don’t match'],
        ['change', 'Can you change your legal name?'],
      ]}
      faqs={faqs}
      related={[
        { href: '/how-to-legally-change-your-name-uk', title: 'How to Legally Change Your Name', note: 'Step-by-step process.' },
        { href: '/can-i-change-my-name-to-anything-uk', title: 'Can I Change My Name to Anything?', note: 'The rules on new names.' },
        { href: '/how-to-change-name-on-birth-certificate-uk', title: 'Change a Name on a Birth Certificate', note: 'When it’s possible.' },
      ]}
      formHeading="Make your new name your legal name"
      formIntro={<>Your deed poll becomes the official link between your old and new legal names. Enter both in full below.</>}
    >
      <GuideSection id="meaning" title="What “legal name” means in the UK">
        <p>
          Unlike many countries, the UK (especially England and Wales) has no official list of citizens’ names and no state approval for a name. Under common law your name is simply the one you are known by. Your <strong>legal name</strong> is the version you use consistently on official records: passport, driving licence, HMRC, bank and electoral register.
        </p>
        <p>
          That is why organisations ask for <em>evidence</em> when you change it. A deed poll or marriage certificate shows the link between your old records and your new ones.
        </p>
      </GuideSection>

      <GuideSection id="includes" title="What is and isn’t part of your legal name">
        <GuideTable
          head={['Name element', 'Part of your legal name?']}
          rows={[
            ['First name (forename)', '✅ Yes'],
            ['All middle names', '✅ Yes'],
            ['Surname, including hyphenated or double-barrelled parts', '✅ Yes'],
            ['Nickname or shortened name (“Liz” for Elizabeth)', '❌ No, unless adopted by deed poll'],
            ['Titles (Mr, Mrs, Ms, Mx, Dr)', '❌ No'],
            ['Suffixes and letters (Jr, PhD, MBE)', '❌ No'],
            ['Maiden name (after taking spouse’s surname)', '❌ No, unless kept as a middle name'],
            ['Religious or confirmation names', '❌ Not unless they are on your official records'],
          ]}
        />
        <p>
          Want to add or drop a middle name? See{' '}
          <Link href="/how-to-change-middle-name-uk" className={link}>how to change your middle name</Link>.
        </p>
      </GuideSection>

      <GuideSection id="proof" title="Which document proves your legal name">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Passport</strong>: the strongest proof, accepted almost everywhere.</li>
          <li><strong>Photocard driving licence</strong>: widely accepted for ID within the UK.</li>
          <li><strong>Birth certificate plus change-of-name evidence</strong>: if your name has changed since birth, you need both to show the link.</li>
          <li><strong>eVisa</strong>: for many non-UK nationals, alongside their national passport.</li>
        </ol>
        <Callout tone="info">
          Your birth certificate shows your <em>birth</em> name. Adults can’t have it reissued in a new name, so keep your deed poll or marriage certificate safe. You will need it to connect the two names for the rest of your life.
        </Callout>
      </GuideSection>

      <GuideSection id="forms" title="What to write on forms">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>“Full legal name”:</strong> every name, in order, spelled exactly as on your passport.</li>
          <li><strong>“First name / given name”:</strong> your first name only. Use a separate “middle name” box if there is one.</li>
          <li><strong>“Preferred name” or “known as”:</strong> the name you like to be called, which can be different.</li>
          <li><strong>“Previous names”:</strong> any earlier legal names, such as a maiden name. Credit checks and background checks use these.</li>
        </ul>
      </GuideSection>

      <GuideSection id="mismatch" title="When your names don’t match">
        <p>Different names on different records is one of the most common causes of:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>being refused boarding when a ticket doesn’t match your passport,</li>
          <li>failed right-to-work or DBS checks,</li>
          <li>delays to mortgage, pension and benefit applications, and</li>
          <li>failed online identity verification.</li>
        </ul>
        <p>
          The fix is to choose one name, make it official, and update every record. Our{' '}
          <Link href="/name-change-letters-generator" className={link}>name change letters generator</Link> makes it quick to tell everyone.
        </p>
      </GuideSection>

      <GuideSection id="change" title="Can you change your legal name?">
        <p>Yes. Anyone in the UK can change their legal name, and adults don’t need anyone’s permission. The evidence you use depends on why:</p>
        <GuideTable
          head={['Reason', 'Evidence']}
          rows={[
            ['Marriage or civil partnership', 'Marriage / civil partnership certificate'],
            ['Divorce or dissolution', 'Final order or decree absolute'],
            ['Any other reason', 'Deed poll (or statutory declaration)'],
          ]}
        />
        <p>
          For the full process, read{' '}
          <Link href="/how-to-legally-change-your-name-uk" className={link}>how to legally change your name</Link>, or create your deed poll below.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
