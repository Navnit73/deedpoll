import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'what-is-account-name-on-bank-card-uk';
const description =
  'The account name is the name your bank holds for the account, and it can differ from the name printed on your card. See where to find it, how Confirmation of Payee uses it, and joint-account rules.';

export const metadata = guideMetadata(slug, 'What Is an Account Name? Bank Account vs Card Name (UK)', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  { q: 'What is the account name on my bank account?', a: 'It is the name the bank has registered against the account. Payments are checked against it, and it appears on your statements.' },
  { q: 'Why is the name on my card different?', a: 'Card names are often shortened or shown as initials, so they can differ from the registered account name. UK Finance notes that the name used in payment checks may not match how it appears on your card.' },
  { q: 'Where can I find my account name?', a: 'In your banking app’s account details, on a paper or PDF statement, or on a cheque book.' },
  { q: 'What is Confirmation of Payee?', a: 'A check run by UK banks when you set up a payment. You enter the name, sort code and account number, and the bank tells you if the name is a match, a close match or not a match.' },
  { q: 'Do I need both names on a joint account?', a: 'Normally just one of the names registered on the account, typed as it appears on the statement. Some banks say the order of names does not affect the result.' },
  { q: 'Can I pay if I get a “close match” or “no match” warning?', a: 'You can usually still go ahead, but you should double-check the details with the person you are paying, because a wrong account number is the usual cause.' },
  { q: 'How do I change my account name?', a: 'Tell your bank and show evidence of your name change, such as a marriage certificate or deed poll. See our bank account guide for the steps.' },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Account Name"
      h1="What Is an Account Name on a UK Bank Account?"
      description={description}
      readMinutes={4}
      quickAnswer={
        <p>
          The <strong>account name</strong> is the name your bank has registered for the account. It is what <strong>Confirmation of Payee</strong> checks. The name on your <strong>debit card</strong> may be shorter or just initials, so the two can legitimately differ. You will find the account name in your banking app or on a statement.
        </p>
      }
      toc={[
        ['meaning', 'What it means'],
        ['find', 'Where to find it'],
        ['card', 'Account name vs card name'],
        ['cop', 'How Confirmation of Payee uses it'],
        ['joint', 'Joint and business accounts'],
        ['change', 'If your name has changed'],
      ]}
      faqs={faqs}
      related={[
        { href: '/name-change/change-name-on-bank-account-uk', title: 'Change Name on a Bank Account', note: 'Documents and steps.' },
        { href: '/what-is-a-legal-name-uk', title: 'What Is a Legal Name?', note: 'What banks match against.' },
        { href: '/name-change/who-to-notify-after-changing-your-name-uk', title: 'Who to Notify', note: 'Complete list.' },
      ]}
      formHeading="Proof of your new name for the bank"
      formIntro={<>Banks accept a deed poll as evidence of a change of name. Create yours below.</>}
    >
      <GuideSection id="meaning" title="What it means">
        <p>
          Think of the account name as the label the bank uses to identify the holder. For a personal account it normally reflects your legal name. When you give someone your bank details, the name should match what the bank holds, otherwise the payer may see a warning.
        </p>
      </GuideSection>

      <GuideSection id="find" title="Where to find it">
        <ul className="list-disc pl-6 space-y-2">
          <li>The account details screen in your banking app.</li>
          <li>The top of a paper or PDF statement.</li>
          <li>Your cheque book, if you have one.</li>
        </ul>
      </GuideSection>

      <GuideSection id="card" title="Account name vs card name">
        <GuideTable
          head={['', 'Account name', 'Name on card']}
          rows={[
            ['Purpose', 'Identifies the account holder', 'Identifies the card in shops and online'],
            ['Format', 'Registered name', 'Often shortened, or initials and a title'],
            ['Example', 'Elizabeth Anne Smith', 'MRS E A SMITH'],
          ]}
        />
      </GuideSection>

      <GuideSection id="cop" title="How Confirmation of Payee uses it">
        <p>
          When you set up a new payee, your bank asks the other bank whether the name you typed matches. You will get a match, a close match or no match. A close match is often a typo or a nickname. No match is more serious, so check with the recipient before sending.
        </p>
        <Callout tone="info">If you have recently changed name, tell your bank. Otherwise people paying you could see a mismatch warning.</Callout>
      </GuideSection>

      <GuideSection id="joint" title="Joint and business accounts">
        <p>
          On a joint account, payers usually only need one account holder’s name exactly as it appears on the statement. Business accounts use the registered or trading name. For a company change, see{' '}
          <Link href="/how-to-change-company-name-uk" className={link}>how to change a company name</Link>.
        </p>
      </GuideSection>

      <GuideSection id="change" title="If your name has changed">
        <p>
          Show your bank a marriage certificate or deed poll along with photo ID. Our{' '}
          <Link href="/name-change/change-name-on-bank-account-uk" className={link}>bank account guide</Link> explains the process.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
