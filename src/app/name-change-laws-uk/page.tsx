import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'name-change-laws-uk';
const description =
  'The UK has no single name change law. See what common law allows, the age limits for deed polls, which names get refused, what a deed poll cannot do, and how Scotland differs.';

export const metadata = guideMetadata(slug, 'UK Name Change Laws: What You Can & Can’t Do (2026)', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'Is there a law that controls changing your name in the UK?', a: 'There is no single Act of Parliament. In England and Wales you can adopt a new name under common law by simply using it, as long as you are not doing so for a dishonest purpose. A deed poll is the usual way to prove it.' },
  { q: 'Do I need anyone’s permission?', a: 'Adults do not. For a child under 16, everyone with parental responsibility must agree, or you must get a court order.' },
  { q: 'What age can I make a deed poll?', a: 'You can make an unenrolled deed poll from 16. An enrolled one, which goes on public record through the High Court, is for people aged 18 or over.' },
  { q: 'What names are not allowed?', a: 'GOV.UK says the name must be pronounceable, must not be offensive or against the public interest, and cannot include symbols, numbers or punctuation other than hyphens and established apostrophes such as O’Hara. You also cannot add things like “Ltd”.' },
  { q: 'Can I use a deed poll to change my title?', a: 'No. A deed poll cannot change titles such as Mr, Mrs, Sir or Doctor, or alter which letters are capitalised.' },
  { q: 'Can I change my name to dodge debts?', a: 'No. Changing your name to avoid debts, deceive someone or commit fraud is unlawful. Your obligations, court orders and criminal record stay with you.' },
  { q: 'Do these rules apply in Scotland and Northern Ireland?', a: 'The principle is similar, but procedures and records differ. GOV.UK notes that people born in Scotland follow different rules. See our regional guide.' },
  { q: 'I live abroad. Can I use a UK deed poll?', a: 'GOV.UK says permanent residents overseas cannot change their name by deed poll, so check the rules of the country where you live.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Name Change Laws"
      h1="UK Name Change Laws: What the Rules Actually Are"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          There is <strong>no dedicated name change statute</strong> in the UK. In England and Wales, <strong>common law</strong> lets you take any name you wish, provided it is not for fraud or to dodge legal duties. In practice, the rules that matter are set by <strong>GOV.UK and the organisations</strong> you need to convince, such as the Passport Office.
        </p>
      }
      toc={[
        ['law', 'Where the law actually comes from'],
        ['ages', 'Age limits'],
        ['names', 'Names that get refused'],
        ['cannot', 'What a deed poll cannot do'],
        ['misuse', 'Unlawful reasons'],
        ['regions', 'Scotland, Northern Ireland and abroad'],
        ['children', 'Children'],
      ]}
      faqs={faqs}
      related={[
        { href: '/can-i-change-my-name-to-anything-uk', title: 'Can I Change My Name to Anything?', note: 'Examples of names refused.' },
        { href: '/child-deed-poll-uk', title: 'Child Deed Poll', note: 'Consent rules in detail.' },
        { href: '/deed-poll-scotland-northern-ireland', title: 'Scotland & Northern Ireland', note: 'Where the rules differ.' },
      ]}
      formHeading="Put your name change in writing"
      formIntro={<>A deed poll is the evidence organisations expect. Create yours below.</>}
    >
      <GuideSection id="law" title="Where the law actually comes from">
        <p>
          Unlike many countries, the UK does not run a register that approves names. Instead, the common law rule is that you may call yourself what you like and you become known by it through consistent use. That is why a name change is not “granted” by anyone.
        </p>
        <p>
          The catch is proof. Banks, the Passport Office and the DVLA will not simply take your word, so they ask for a marriage certificate, divorce order or a deed poll. Their requirements are, in effect, the working rules most people meet.
        </p>
      </GuideSection>

      <GuideSection id="ages" title="Age limits">
        <GuideTable
          head={['Who', 'What they can do']}
          rows={[
            ['Aged 18 or over', 'Make an unenrolled deed poll, or enrol one through the High Court'],
            ['Aged 16 or 17', 'Make an unenrolled deed poll'],
            ['Under 16', 'A parent or guardian acts, with the agreement of everyone with parental responsibility'],
          ]}
        />
      </GuideSection>

      <GuideSection id="names" title="Names that get refused">
        <ul className="list-disc pl-6 space-y-2">
          <li>Names that cannot be pronounced.</li>
          <li>Anything offensive or against the public interest.</li>
          <li>Numbers, symbols and most punctuation. Hyphens and established apostrophes (O’Hara) are fine.</li>
          <li>Company-style endings such as “Ltd”.</li>
          <li>Names that look like a rank or title you do not hold.</li>
        </ul>
        <p>
          Even when the law allows a name, an organisation can still say no. The Passport Office, for example, applies its own rules, including character limits for forenames and surnames.
        </p>
      </GuideSection>

      <GuideSection id="cannot" title="What a deed poll cannot do">
        <Callout tone="warn">A deed poll cannot change a title (Mr, Mrs, Dr, Sir), alter capitalisation, or wipe out debts, court orders or a criminal record.</Callout>
      </GuideSection>

      <GuideSection id="misuse" title="Unlawful reasons">
        <p>
          Using a new name to avoid creditors, deceive a partner or employer, or hide from the police is unlawful. A name change will also not stop credit reference agencies or the police linking your old and new identities.
        </p>
      </GuideSection>

      <GuideSection id="regions" title="Scotland, Northern Ireland and abroad">
        <p>
          The principle is similar across the UK, but procedures differ, especially for people born in Scotland. Read our{' '}
          <Link href="/deed-poll-scotland-northern-ireland" className={link}>Scotland and Northern Ireland guide</Link>. If you are a permanent resident overseas, GOV.UK says you cannot change your name by deed poll.
        </p>
      </GuideSection>

      <GuideSection id="children" title="Children">
        <p>
          A child’s name can only be changed with the agreement of everyone who holds parental responsibility, or by court order. Our{' '}
          <Link href="/child-deed-poll-uk" className={link}>child deed poll guide</Link> and{' '}
          <Link href="/how-to-change-childs-surname-uk" className={link}>child’s surname guide</Link> cover the steps.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
