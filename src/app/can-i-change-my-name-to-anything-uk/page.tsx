import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'can-i-change-my-name-to-anything-uk';
const description =
  'UK name change law explained. You can change your first name or last name to almost anything, but there are limits on fraud, offensive words, numbers, symbols and titles.';

export const metadata = guideMetadata(slug, "Can I Change My Name to Anything? UK Rules", description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Can I change my last name to anything, even if I have no family connection to it?',
    a: 'Yes. You do not need any family, cultural or historical link to a surname. You can pick a completely new surname, combine two, or take a stepparent’s or partner’s name without marrying them.',
  },
  {
    q: 'Can I have just one name, with no surname?',
    a: 'It is legal to be known by one name, but HM Passport Office and many computer systems need a forename and a surname. In practice a single name causes problems, so most people keep at least two names.',
  },
  {
    q: 'Can I change my name to a celebrity’s name?',
    a: 'Yes, as long as you are not using it to pretend to be that person or to mislead people. Sharing a name with someone famous is not illegal.',
  },
  {
    q: 'Can I make “Lord” or “Sir” my first name?',
    a: 'You can use them in a deed poll, but HM Passport Office may refuse names that look like titles, and it will not print titles you are not entitled to. Expect difficulties with official records.',
  },
  {
    q: 'Can I change my name to avoid debts or a criminal record?',
    a: 'No. Changing your name does not erase debts, convictions or legal obligations, and changing it to deceive people or avoid checks can itself be a criminal offence. Credit and criminal records stay linked to you.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Can I Change My Name to Anything?"
      h1="Can I Change My Name to Anything in the UK?"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          <strong>Almost.</strong> UK law lets you change your first name, middle names or last name to nearly anything you like, without permission. The main limits: the name can’t be used for <strong>fraud or to deceive</strong>, and HM Passport Office won’t accept names that are <strong>offensive</strong>, contain <strong>numbers or symbols</strong>, are <strong>unpronounceable</strong>, or include <strong>titles</strong> you aren’t entitled to.
        </p>
      }
      toc={[
        ['law', 'What UK name change law says'],
        ['not-allowed', 'Names that will be refused'],
        ['examples', 'Allowed vs likely refused: examples'],
        ['surnames', 'Changing your last name to anything'],
        ['stricter', 'When the rules are stricter'],
      ]}
      faqs={faqs}
      related={[
        { href: '/how-to-legally-change-your-name-uk', title: 'How to Legally Change Your Name', note: 'The full step-by-step process.' },
        { href: '/how-to-change-last-name-uk', title: 'How to Change Your Last Name', note: 'Surname-only changes.' },
        { href: '/what-is-a-legal-name-uk', title: 'What Is Your Legal Name?', note: 'What counts as your official name.' },
      ]}
      formHeading="Chosen your new name? Create your deed poll"
      formIntro={<>The form checks your new name against the most common passport problems as you type, such as single names and unusual characters.</>}
    >
      <GuideSection id="law" title="What UK name change law says">
        <p>
          In England and Wales, your name is whatever you are commonly known by. No Act of Parliament lists approved names, and no government body has to sign off your choice. A <strong>deed poll</strong> is evidence of a change you have already decided to make, not an application for permission.
        </p>
        <p>
          The limits come from two places: the <strong>criminal law</strong> (you can’t use a name to commit fraud or deceive people) and the <strong>practical rules</strong> of organisations like HM Passport Office, which decide what they will print on official documents. If the Passport Office won’t accept a name, it becomes very hard to use day to day.
        </p>
      </GuideSection>

      <GuideSection id="not-allowed" title="Names that will be refused">
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Names used to deceive.</strong> Pretending to be another person, avoiding debts, or hiding from the police or immigration checks.</li>
          <li><strong>Offensive names.</strong> Swear words, slurs and names likely to cause serious offence.</li>
          <li><strong>Numbers and symbols.</strong> “R2D2”, “Jo$h” or emoji can’t be printed on a passport. Hyphens and apostrophes are fine.</li>
          <li><strong>Unpronounceable names.</strong> Random letter strings with no vowels, for example.</li>
          <li><strong>Titles and ranks.</strong> “Dr”, “Lord”, “Sir”, “Dame” and military ranks are not part of your name (<Link href="/faq#change-of-title" className={link}>why?</Link>).</li>
          <li><strong>Names implying a link you don’t have.</strong> For example to a trademark or the royal family, if used to mislead.</li>
        </ul>
      </GuideSection>

      <GuideSection id="examples" title="Allowed vs likely refused: examples">
        <GuideTable
          head={['Name', 'Outcome', 'Why']}
          rows={[
            ['Jane Mary O’Brien-Smith', '✅ Allowed', 'Apostrophes and hyphens are fine'],
            ['Ashley Storm Rivers', '✅ Allowed', 'Unusual but ordinary words'],
            ['Zoë Ångström', '✅ Allowed', 'Accents accepted; may be simplified in some systems'],
            ['A famous person’s name', '✅ Allowed', 'Fine unless used to impersonate them'],
            ['Lord Michael Hughes', '⚠️ Problematic', 'Looks like a title; passport may refuse'],
            ['Madonna', '⚠️ Problematic', 'Single names don’t fit most systems'],
            ['John 3000 Smith', '❌ Refused', 'Contains numbers'],
            ['Xqzt Prkk', '❌ Refused', 'Unpronounceable'],
          ]}
        />
      </GuideSection>

      <GuideSection id="surnames" title="Changing your last name to anything">
        <p>Your surname gets the same freedom as your first name. Popular choices include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>taking a partner’s surname <strong>without marrying</strong> (a deed poll is needed),</li>
          <li>combining two surnames into a new one, e.g. <em>Hall</em> + <em>Ward</em> → <em>Halward</em>,</li>
          <li>going back to a grandparent’s or ancestral surname,</li>
          <li>choosing a completely new surname with no family link at all.</li>
        </ul>
        <p>
          The process is covered in our guide on{' '}
          <Link href="/how-to-change-last-name-uk" className={link}>how to change your last name</Link>.
        </p>
      </GuideSection>

      <GuideSection id="stricter" title="When the rules are stricter">
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Children.</strong> Everyone with parental responsibility must agree, and if it goes to court, the judge decides based on the child’s welfare, not the parents’ preference.</li>
          <li><strong>Enrolled deed polls.</strong> If you enrol at the Royal Courts of Justice, the court can refuse to enrol names it considers inappropriate.</li>
          <li><strong>Scotland.</strong> Similar principles apply, but people born in Scotland can also record a change with National Records of Scotland, which has its own rules.</li>
          <li><strong>Professional registers.</strong> Doctors, nurses, solicitors and other regulated professionals must update their regulator, which may ask for evidence.</li>
        </ul>
        <Callout tone="tip">
          <strong>Not sure your name will be accepted?</strong> Type it into the form below. It flags single names and characters outside the Latin alphabet before you commit.
        </Callout>
      </GuideSection>
    </GuideArticle>
  );
}
