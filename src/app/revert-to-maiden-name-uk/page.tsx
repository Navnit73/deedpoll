import Link from 'next/link';
import GuideArticle, { Callout, GuideSection, GuideTable, guideMetadata } from '@/components/GuideArticle';

const slug = 'revert-to-maiden-name-uk';
const description =
  'How to go back to your maiden or birth name in the UK, with or without a divorce. Which documents you need, how to update your passport and when a deed poll is the easier route.';

export const metadata = guideMetadata(slug, 'Revert to Your Maiden or Birth Name UK: Documents & Steps', description);

const link = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

const faqs = [
  {
    q: 'Can I go back to my maiden name without a deed poll?',
    a: 'Often, yes. After a divorce or dissolution, a marriage certificate together with the final order (or decree absolute) is usually enough for many organisations. Some banks and other bodies insist on a deed poll, so check first.',
  },
  {
    q: 'Do I need to be divorced to use my maiden name again?',
    a: 'No. You are free to use any name you like provided it is not for fraud. If you are still married, there is no certificate that records the change, so a deed poll is the simplest way to prove it.',
  },
  {
    q: 'I never married. Can I go back to my birth name?',
    a: 'Yes, but your birth certificate alone does not prove you have changed back. A deed poll gives organisations a document that shows both the name you were using and the name you are returning to.',
  },
  {
    q: 'What does the passport office ask for?',
    a: 'GOV.UK lists your birth certificate, a signed statement that you have returned to your previous surname for all purposes, proof you are using it (such as a payslip or council letter) and your marriage or civil partnership certificate showing both names.',
  },
  {
    q: 'How long do I have after my divorce to change back?',
    a: 'There is no deadline. Many people wait until their passport is due for renewal. You can change back at any point, but you should tell DVLA when your name changes.',
  },
  {
    q: 'Is it different in Scotland?',
    a: 'Slightly. You do not need to record the change anywhere to use your previous surname, and the extract decree is normally accepted as proof. You only need the NRS recording process if your married name was added to your birth certificate.',
  },
];

export default function Page() {
  return (
    <GuideArticle
      slug={slug}
      breadcrumb="Revert to Maiden Name"
      h1="How to Revert to Your Maiden or Birth Name in the UK"
      description={description}
      readMinutes={7}
      quickAnswer={
        <p>
          You can go back to your maiden name at any time. <strong>After a divorce</strong>, your marriage certificate and final order (or decree absolute) are often enough. <strong>If you are separated or never married</strong>, a <strong>deed poll</strong> is the cleanest proof. For a passport you will also need a signed statement that you are returning to your previous surname for all purposes.
        </p>
      }
      toc={[
        ['which-route', 'Which route fits you?'],
        ['divorce', 'After a divorce or dissolution'],
        ['no-divorce', 'Without a divorce'],
        ['birth-name', 'Going back to a birth name'],
        ['passport', 'Passport steps'],
        ['everything-else', 'Updating everything else'],
        ['scotland-ni', 'Scotland and Northern Ireland'],
      ]}
      faqs={faqs}
      related={[
        { href: '/change-name-on-passport-after-divorce-uk', title: 'Passport Name Change After Divorce', note: 'Fees, evidence and timing.' },
        { href: '/change-name-without-deed-poll-uk', title: 'Change Name Without a Deed Poll', note: 'When a certificate is enough.' },
        { href: '/how-to-change-name-after-marriage-uk', title: 'Change Name After Marriage', note: 'The other direction.' },
      ]}
      formHeading="Prefer one document that works everywhere?"
      formIntro={<>A deed poll records your return to your maiden or birth name in a single document that every organisation understands. Create yours below.</>}
    >
      <GuideSection id="which-route" title="Which route fits you?">
        <p>
          Your name belongs to you. Under UK law you can use the name you choose as long as you are not trying to deceive anyone. What changes between situations is the <em>proof</em> that organisations accept.
        </p>
        <GuideTable
          head={['Your situation', 'Usual proof', 'Deed poll needed?']}
          rows={[
            ['Divorced or civil partnership dissolved', 'Marriage or civil partnership certificate, plus final order or decree absolute', 'Usually not, though some organisations insist'],
            ['Separated but not yet divorced', 'No certificate records the change', 'Yes, this is the simplest proof'],
            ['Widowed', 'Marriage certificate, plus a signed statement', 'Not always, but it avoids queries'],
            ['Never married, reverting to a birth name', 'Birth certificate alone is not enough', 'Yes'],
            ['Married, but want a different name from your spouse', 'No certificate covers this', 'Yes'],
          ]}
        />
      </GuideSection>

      <GuideSection id="divorce" title="After a divorce or dissolution">
        <p>
          GOV.UK explains that after a divorce you can usually return to your original name by showing your marriage certificate with the decree absolute (or, for a civil partnership, the certificate with the final order). Since April 2022 in England and Wales, the court paperwork is called a <strong>final order</strong>.
        </p>
        <p>
          In practice, banks, employers and the DVLA are generally content with those documents. A few organisations, including some banks, mobile networks and energy suppliers, take a stricter view and will only accept a deed poll. If you want to avoid being turned away, it is quicker to make a deed poll once than to argue the point with several companies.
        </p>
        <Callout tone="tip">
          <strong>Ask before you post.</strong> Before you send any original documents, ask the organisation what exactly it accepts. It takes a couple of minutes and can save weeks.
        </Callout>
      </GuideSection>

      <GuideSection id="no-divorce" title="Without a divorce">
        <p>
          You do not have to wait for a divorce to change your name. If you are separated, there is no court order to rely on, and a marriage certificate only proves that you <em>acquired</em> your married name, not that you have stopped using it. A <Link href="/how-to-change-name-by-deed-poll-uk" className={link}>deed poll</Link> fills that gap by stating your old name, your new name and the date of the change.
        </p>
      </GuideSection>

      <GuideSection id="birth-name" title="Going back to a birth name">
        <p>
          If you have never married but want to return to the name on your birth certificate, a deed poll is the dependable route. Your birth certificate shows what you were called at birth, but organisations also want a document showing that <strong>you</strong> have decided to go back to it. The deed poll provides it.
        </p>
        <p>
          The same applies if you changed your name by deed poll in the past and now want to undo it. You make a fresh deed poll that moves from your current name to your earlier one. Our guide on <Link href="/my-deed-poll-was-rejected" className={link}>rejected deed polls</Link> explains how to avoid wording mistakes.
        </p>
      </GuideSection>

      <GuideSection id="passport" title="Passport steps">
        <p>A name change needs a new passport, so you cannot simply amend the one you hold. GOV.UK asks for these documents when you return to a previous surname:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Your <strong>birth certificate</strong>.</li>
          <li>A <strong>signed statement</strong> saying you have returned to your previous surname &ldquo;for all purposes&rdquo;, meaning you will not use the married name at all.</li>
          <li><strong>Proof you are already using it</strong>, such as a recent payslip or a letter from your local council.</li>
          <li>Your <strong>marriage or civil partnership certificate</strong>, which shows both names. If you have lost it, you can order a copy.</li>
        </ol>
        <p>
          The adult fee is currently £102 online or £115.50 on paper, and you receive a new 10-year passport with a new number. Time remaining on the old one is not added. Read our full <Link href="/change-name-on-passport-after-divorce-uk" className={link}>passport after divorce guide</Link> before applying.
        </p>
      </GuideSection>

      <GuideSection id="everything-else" title="Updating everything else">
        <p>
          Start with the documents that other organisations rely on, then work outwards:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/change-name-on-driving-licence-dvla-uk" className={link}>Driving licence</Link> and vehicle log book: free to update.</li>
          <li>Bank, building society, credit cards and mortgage provider.</li>
          <li>HMRC, your employer and pension providers.</li>
          <li>Doctor, dentist and the NHS.</li>
          <li>Insurance, utilities, mobile phone and electoral register.</li>
        </ul>
        <p>
          Our <Link href="/name-change-letters-generator" className={link}>letters generator</Link> prepares the request letters for you in one go.
        </p>
      </GuideSection>

      <GuideSection id="scotland-ni" title="Scotland and Northern Ireland">
        <p>
          In Scotland, you can revert to a previous surname without recording the change, and the extract decree is normally accepted as proof. If your married name was entered on your birth certificate, you must use the National Records of Scotland recording process to reverse it. Northern Ireland has its own recording route through the General Register Office. Read our <Link href="/deed-poll-scotland-northern-ireland" className={link}>Scotland and Northern Ireland guide</Link> for the details.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
