import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'change-name-without-deed-poll-uk';
const description =
  'Can you change your name in the UK without a deed poll? Yes, in some cases. See when a marriage or divorce certificate is enough, when you do need one, and how to do it for free.';

export const metadata = guideMetadata(slug, 'Change Your Name Without a Deed Poll UK: When It Works', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Can I change my name with just my birth certificate?',
    a: 'No. Your birth certificate shows the name you were given at birth. It does not show that you have changed it, so it cannot prove a new name on its own.',
  },
  {
    q: 'Is a deed poll the thing that changes my name?',
    a: 'No. You change your name by using the new name. A deed poll is simply a written record of that decision, and it is the document most organisations find easiest to accept.',
  },
  {
    q: 'Can I change my name for free?',
    a: 'Yes. You can write your own unenrolled deed poll at no cost, or in some situations use a marriage or divorce certificate. Fees only arise if you pay a service, enrol the deed poll at the High Court or use a solicitor.',
  },
  {
    q: 'Do I need a deed poll to take my husband’s or wife’s surname?',
    a: 'No. A copy of your marriage or civil partnership certificate is enough to update your records, and you can use your spouse’s surname straight away.',
  },
  {
    q: 'Can I change my first name without a deed poll?',
    a: 'Only for small adjustments, such as changing the spelling or dropping a middle name. For these, the passport office asks for two documents showing you already use the new form. A completely different first name is best covered by a deed poll.',
  },
  {
    q: 'What if an organisation refuses my certificate?',
    a: 'Ask them exactly what they will accept. Many are content with a marriage certificate, but a few insist on a deed poll. Making one is quick and removes the argument.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Without a Deed Poll"
      h1="Can You Change Your Name Without a Deed Poll in the UK?"
      description={description}
      readMinutes={6}
      quickAnswer={
        <p>
          <strong>Sometimes.</strong> After <strong>marriage, civil partnership or divorce</strong>, your certificate is normally all you need. For almost any other change, such as a new surname by choice, a different first name or reverting to a birth name without divorce, a <strong>deed poll</strong> is the standard proof. You can write one <strong>for free</strong>.
        </p>
      }
      toc={[
        ['how-names-change', 'How a name really changes'],
        ['enough', 'When a certificate is enough'],
        ['need', 'When you do need a deed poll'],
        ['other-routes', 'Other ways to prove a name change'],
        ['free', 'How to do it for free'],
      ]}
      faqs={faqs}
      related={[
        { href: '/free-deed-poll-template-uk', title: 'Free Deed Poll Template', note: 'Copy the wording and sign it.' },
        { href: '/deed-poll-vs-statutory-declaration-uk', title: 'Deed Poll vs Statutory Declaration', note: 'Which proof suits you.' },
        { href: '/can-i-change-my-name-to-anything-uk', title: 'Can I Change My Name to Anything?', note: 'The rules on new names.' },
      ]}
      formHeading="Not sure you can skip it? Make one in minutes"
      formIntro={<>If your situation is not covered by a marriage or divorce certificate, create a deed poll below. It takes about two minutes and you can preview it for free.</>}
    >
      <GuideSection id="how-names-change" title="How a name really changes">
        <p>
          English law has never required a form or an application for a change of name. You take on a new name by using it consistently. What organisations want is <em>evidence</em> that the change is genuine, and that is where documents such as certificates and deed polls come in.
        </p>
        <p>
          So the question is not whether the law allows it. It does. The question is which document persuades your bank, the DVLA or the passport office quickest.
        </p>
      </GuideSection>

      <GuideSection id="enough" title="When a certificate is enough">
        <GuideTable
          head={['Situation', 'Document that usually works']}
          rows={[
            ['Taking a spouse’s or civil partner’s surname', 'Marriage or civil partnership certificate'],
            ['Going back to a previous surname after divorce', 'Marriage certificate plus final order or decree absolute'],
            ['Going back after a dissolved civil partnership', 'Civil partnership certificate plus final order'],
            ['Small spelling or middle-name changes (passport)', 'Two documents showing you already use the new form'],
            ['Adding a professional title such as Dr', 'Evidence of the title; no deed poll needed'],
          ]}
        />
        <Callout tone="warn">
          <strong>Not every organisation agrees.</strong> GOV.UK notes that some organisations will not change your name back without a deed poll. Always check before you post originals.
        </Callout>
      </GuideSection>

      <GuideSection id="need" title="When you do need a deed poll">
        <ul className="list-disc pl-6 space-y-2">
          <li>You want a new surname by choice, such as a family name or a combined name.</li>
          <li>You want a completely different first name.</li>
          <li>You want to go back to your birth name but have never married.</li>
          <li>You are separated, not divorced, and want to stop using your married name.</li>
          <li>You want a double-barrelled name that your marriage certificate does not cover.</li>
          <li>You are changing a child&rsquo;s name. Read our <Link href="/child-deed-poll-uk" className={link}>child deed poll guide</Link>.</li>
        </ul>
        <p>
          Note that a deed poll cannot change capital letters or titles such as Mr or Sir, and permanent residents overseas cannot use one. The new name must be pronounceable, and it cannot be offensive or include numbers or symbols, except for hyphens and established names such as O&rsquo;Hara.
        </p>
      </GuideSection>

      <GuideSection id="other-routes" title="Other ways to prove a name change">
        <GuideTable
          head={['Route', 'What it is', 'Notes']}
          rows={[
            ['Unenrolled deed poll', 'A signed record of your change, witnessed by two adults', 'Free to make yourself; accepted by most organisations'],
            ['Enrolled deed poll', 'The same document, filed with the High Court', 'Costs £53.05 and is placed on public record; some bodies prefer it'],
            ['Statutory declaration', 'A sworn statement before a solicitor or other authorised person', 'Usually carries a fee; see our comparison'],
            ['Birth certificate change', 'Only available in limited cases', 'Not a general alternative'],
          ]}
        />
        <p>
          Our guide to <Link href="/deed-poll-vs-statutory-declaration-uk" className={link}>deed polls versus statutory declarations</Link> explains which is stronger for your purpose.
        </p>
      </GuideSection>

      <GuideSection id="free" title="How to do it for free">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Copy the wording from our <Link href="/free-deed-poll-template-uk" className={link}>free deed poll template</Link> and replace the bracketed details.</li>
          <li>Print it. Sign it in your old name and your new name, in front of two witnesses aged 18 or over.</li>
          <li>Choose witnesses who do not live at your address and are not close relatives, because some organisations reject a deed poll otherwise.</li>
          <li>Both witnesses sign, add their names and give their addresses.</li>
          <li>Use the signed original as proof of your new name straight away.</li>
        </ol>
        <p>
          If you would like a neatly formatted PDF with correct wording, the generator below previews it for free and charges only when you download.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
