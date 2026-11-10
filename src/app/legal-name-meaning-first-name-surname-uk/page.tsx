import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'legal-name-meaning-first-name-surname-uk';
const description =
  'What to write when a form asks for your legal first name, forename, surname or full legal name. Clear UK examples, passport character limits and what to do with long or hyphenated names.';

export const metadata = guideMetadata(slug, 'Legal First Name, Forename & Surname: What to Write on UK Forms', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'What is my legal first name?', a: 'It is the first given name on your passport, which in turn should match your birth certificate or the document that changed your name. It is not a nickname or a shortened form.' },
  { q: 'What does “forename” mean on a form?', a: 'It means your given names, the ones that come before your surname. A single “forename” box usually expects your first name and any middle names, unless a separate middle name box is provided.' },
  { q: 'What is a legal surname or family name?', a: 'It is your last name exactly as it appears on your passport, including hyphens and apostrophes. Double-barrelled surnames count as one surname.' },
  { q: 'What is my full legal name?', a: 'Your first name, every middle name and your surname, in the order and spelling on your passport.' },
  { q: 'What if my name is too long for the passport form?', a: 'The UK passport application allows 30 characters for forenames and 30 for the surname. If yours is longer, you shorten it on the form and give the full name in the space provided, and it can be shown on the observation page of your passport.' },
  { q: 'Can I use an apostrophe or accent?', a: 'Apostrophes are accepted inside a name, as in O’Reilly, but not at the start or end. Accents are usually converted to a plain-letter equivalent on UK passport systems.' },
  { q: 'Is my nickname my legal first name?', a: 'No. “Bob” is not the legal first name of someone registered as Robert unless they formally changed it, for example by deed poll.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Legal Name Meaning"
      h1="Legal First Name, Forename and Surname: What to Write on UK Forms"
      description={description}
      readMinutes={5}
      quickAnswer={
        <p>
          Your <strong>legal first name</strong> (or <strong>forename</strong>) is the first given name on your passport. Your <strong>legal surname</strong> (family name) is the last name there. <strong>Full legal name</strong> means all of them in order. When unsure, copy straight from the photo page of your passport.
        </p>
      }
      toc={[
        ['table', 'Form wording decoded'],
        ['forename', 'Forename vs first name'],
        ['surname', 'Surname and family name'],
        ['long', 'Long names and punctuation'],
        ['examples', 'Worked examples'],
        ['changed', 'If your name has changed'],
      ]}
      faqs={faqs}
      related={[
        { href: '/what-is-a-legal-name-uk', title: 'What Is a Legal Name in the UK?', note: 'Which document proves it.' },
        { href: '/how-to-change-first-name-uk', title: 'Change Your First Name', note: 'Using a deed poll.' },
        { href: '/how-to-change-surname-uk', title: 'Change Your Surname', note: 'Marriage, divorce or choice.' },
      ]}
      formHeading="Want your legal name to change?"
      formIntro={<>A deed poll lets you formally adopt a new first name or surname. Create yours below.</>}
    >
      <GuideSection id="table" title="Form wording decoded">
        <GuideTable
          head={['The form says…', 'Write…']}
          rows={[
            ['Legal first name, given name', 'Your first name only, as on your passport'],
            ['Forename(s)', 'First name plus all middle names'],
            ['Middle name(s)', 'Every name between your first name and surname'],
            ['Legal surname, last name, family name', 'Your surname in full, with hyphens'],
            ['Full legal name', 'First, middle(s), then surname'],
            ['Preferred or known-as name', 'What you like to be called, which may differ'],
            ['Previous name, maiden name', 'Any earlier legal surname or forename'],
          ]}
        />
      </GuideSection>

      <GuideSection id="forename" title="Forename vs first name">
        <p>
          “Forename” is simply the formal word for a given name. In everyday use, forms treat “first name” and “forename” as the same thing, though a plural “forenames” usually includes your middle names too.
        </p>
      </GuideSection>

      <GuideSection id="surname" title="Surname and family name">
        <p>
          Surname, last name and family name all mean the same on a form. Include prefixes such as <em>van</em> or <em>de</em> if they are part of the name on your passport, and keep hyphens in double-barrelled surnames.
        </p>
      </GuideSection>

      <GuideSection id="long" title="Long names and punctuation">
        <p>
          UK passport applications give you 30 characters (including spaces) for forenames and 30 for your surname. If yours is longer, shorten it the way you would like it to appear, then write the full version where the form asks. Apostrophes are fine inside a name, but not at the start or end.
        </p>
        <Callout tone="tip">Always match the spelling on your supporting documents. Mismatches are a common reason applications are delayed.</Callout>
      </GuideSection>

      <GuideSection id="examples" title="Worked examples">
        <GuideTable
          head={['Passport name', 'First name', 'Middle name(s)', 'Surname']}
          rows={[
            ['Elizabeth Anne Smith', 'Elizabeth', 'Anne', 'Smith'],
            ['Mohammed Ali Khan', 'Mohammed', 'Ali', 'Khan'],
            ['Sarah Louise Jones-Taylor', 'Sarah', 'Louise', 'Jones-Taylor'],
            ['James Patrick Ryan O’Neill', 'James', 'Patrick Ryan', 'O’Neill'],
          ]}
        />
      </GuideSection>

      <GuideSection id="changed" title="If your name has changed">
        <p>
          Your new name becomes your legal name once your records are updated, and the old one becomes a “previous name”. Our{' '}
          <Link href="/what-is-a-legal-name-uk" className={link}>legal name guide</Link> explains what counts as proof, and the{' '}
          <Link href="/checklist" className={link}>name change checklist</Link> covers who to tell.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
